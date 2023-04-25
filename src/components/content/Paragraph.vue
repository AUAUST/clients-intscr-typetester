<template>
  <glyph-grid v-if="font && glyph">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`${fBbox.minX} ${fBbox.minY} ${fBbox.maxX} ${fBbox.maxY}`"
      style="transform: scale(1, -1)"
    >
      <g class="rules bbox">
        <rect
          class="bbox"
          :x="fBbox?.minX"
          :y="fBbox?.minY"
          :width="fBbox?.width"
          :height="fBbox?.height"
        />
      </g>
      <g class="rules horizontal">
        <line
          :x1="fBbox?.minX - margin"
          :y1="font.descent"
          :x2="fBbox?.maxX + margin"
          :y2="font.descent"
          class="rule horizontal descent"
        />
        <line
          :x1="fBbox?.minX - margin"
          :y1="font.ascent"
          :x2="fBbox?.maxX + margin"
          :y2="font.ascent"
          class="rule horizontal ascent"
        />
        <line
          :x1="fBbox?.minX - margin"
          :y1="font.xHeight"
          :x2="fBbox?.maxX + margin"
          :y2="font.xHeight"
          class="rule horizontal xheight"
        />
        <line
          :x1="fBbox?.minX - margin"
          :y1="font.capHeight"
          :x2="fBbox?.maxX + margin"
          :y2="font.capHeight"
          class="rule horizontal capheight"
        />
        <line
          :x1="fBbox?.minX - margin"
          :y1="0"
          :x2="fBbox?.maxX + margin"
          :y2="0"
          class="rule horizontal baseline"
        />
      </g>
      <g
        class="offset"
        :transform="`translate(${fBbox?.width / 2 - width / 2}, 0)`"
      >
        <g class="rules vertical">
          <line
            :x1="gBbox?.minX"
            :y1="fBbox?.minY - margin"
            :x2="gBbox?.minX"
            :y2="fBbox?.maxY + margin"
            class="rule vertical left"
          />
          <line
            :x1="gBbox?.maxX"
            :y1="fBbox?.minY - margin"
            :x2="gBbox?.maxX"
            :y2="fBbox?.maxY + margin"
            class="rule vertical right"
          />
          <line
            :x1="width"
            :y1="fBbox?.minY - margin"
            :x2="width"
            :y2="fBbox?.maxY + margin"
            class="rule vertical advance"
          />
          <line
            :x1="0"
            :y1="fBbox?.minY - margin"
            :x2="0"
            :y2="fBbox?.maxY + margin"
            class="rule vertical start"
          />
        </g>
        <path class="glyph" :d="glyph?.path.toSVG()" />
        <!-- :d="font.getGlyph(font.layout(char).glyphs[0].id).path.toSVG()" -->
      </g>
    </svg>
  </glyph-grid>
  <input v-model="char" />
  <input
    type="range"
    v-model="weight"
    :min="font.variationAxes.wght.min"
    :max="font.variationAxes.wght.max"
  />
</template>

<script setup lang="ts">
declare module "fontkit" {
  interface Font {
    variationAxes: {
      [key: string]: {
        name: string;
        min: number;
        default: number;
        max: number;
      };
    };
    getVariation(variations: { [key: string]: number }): Font;
  }
}

import { computed, ref } from "vue";

import { fonts } from "~/composables/useFont";

const font = computed(() => fonts.currentFont.value!);
const margin = computed(() => font.value.unitsPerEm / 10);

const weight = ref(font.value.variationAxes.wght.default);

const inUseFont = computed(() => {
  return font.value.getVariation({
    wght: weight.value,
  });
});

const char = ref("b");
const fontFeatures = computed(() => Array.from(fonts.ui.enabledFontFeatures));
const layout = computed(() => {
  try {
    console.log(font.value.namedVariations);
  } catch (e) {
    console.log(e);
  }

  return inUseFont.value.layout(char.value, fontFeatures.value);
});
const glyph = computed(() => {
  return layout.value.glyphs[0];
});
const gBbox = computed(() => glyph.value.bbox);
const fBbox = computed(() => inUseFont.value.bbox);
const width = computed(() => layout.value.positions[0].xAdvance);
</script>

<style lang="scss">
glyph-grid {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  svg {
    display: block;
    overflow: visible;
    fill: none;

    .glyph {
      fill: black;
    }

    .rules {
      &.bbox {
        stroke: red;
        stroke-width: 1;
      }
    }
    .rule {
      stroke: white;
      stroke-width: 2;
    }
  }
}
</style>
