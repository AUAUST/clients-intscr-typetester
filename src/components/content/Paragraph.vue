<template>
  <div v-if="font" class="container">
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
      <path :d="glyph?.path.toSVG()" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { fonts } from "~/composables/useFont";

const font = fonts.currentFont.value;

const char = "k";
const glyph = font?.layout(char).glyphs[0];
const gBbox = glyph?.bbox;
const fBbox = font?.bbox;
const viewBox = `${fBbox?.minX} ${fBbox?.minY} ${fBbox?.maxX} ${fBbox?.maxY}`;
</script>

<style lang="scss">
.container {
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
