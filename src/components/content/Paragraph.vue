<template>
  <glyph-grid v-if="font && glyph">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="viewBox"
      style="transform: scale(1, -1)"
    >
      <line
        :x1="fBbox?.minX"
        :y1="font.descent"
        :x2="fBbox?.maxX"
        :y2="font.descent"
        class="rule horizontal descent"
      />
      <line
        :x1="fBbox?.minX"
        :y1="font.ascent"
        :x2="fBbox?.maxX"
        :y2="font.ascent"
        class="rule horizontal ascent"
      />
      <line
        :x1="fBbox?.minX"
        :y1="font.xHeight"
        :x2="fBbox?.maxX"
        :y2="font.xHeight"
        class="rule horizontal xheight"
      />
      <line
        :x1="fBbox?.minX"
        :y1="font.capHeight"
        :x2="fBbox?.maxX"
        :y2="font.capHeight"
        class="rule horizontal capheight"
      />
      <line
        :x1="fBbox?.minX"
        :y1="0"
        :x2="fBbox?.maxX"
        :y2="0"
        class="rule horizontal baseline"
      />
      // vertical rules uses the glyph bbox
      <line
        :x1="gBbox?.minX"
        :y1="fBbox?.minY"
        :x2="gBbox?.minX"
        :y2="fBbox?.maxY"
        class="rule vertical left"
      />
      <line
        :x1="gBbox?.maxX"
        :y1="fBbox?.minY"
        :x2="gBbox?.maxX"
        :y2="fBbox?.maxY"
        class="rule vertical right"
      />

      <line
        :x1="width"
        :y1="fBbox?.minY"
        :x2="width"
        :y2="fBbox?.maxY"
        class="rule vertical advance"
      />
      <line
        :x1="0"
        :y1="fBbox?.minY"
        :x2="0"
        :y2="fBbox?.maxY"
        class="rule vertical start"
      />
      <path :d="glyph?.path.toSVG()" />
    </svg>
  </glyph-grid>
  <input v-model="char" />
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { fonts } from "~/composables/useFont";

const font = computed(() => fonts.currentFont.value!);

const char = ref("b");
const glyph = computed(() => font.value.layout(char.value).glyphs[0]);
const gBbox = computed(() => glyph.value.bbox);
const fBbox = computed(() => font.value.bbox);
const viewBox = computed(
  () =>
    `${fBbox.value.minX} ${fBbox.value.minY} ${fBbox.value.maxX} ${fBbox.value.maxY}`
);
const width = computed(
  () => font.value.layout(char.value).positions[0].xAdvance
);
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

    .rule {
      stroke: white;
      stroke-width: 2;
    }
  }
}
</style>
