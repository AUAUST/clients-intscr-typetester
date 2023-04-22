<template>
  <div v-if="font" class="container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="viewBox"
      style="transform: scale(1, -1)"
    >
      <path :d="glyph?.path.toSVG()" />
      <line
        :x1="bbox?.minX"
        :y1="font.descent"
        :x2="bbox?.maxX"
        :y2="font.descent"
        stroke="red"
        stroke-width="1"
      />
      <line
        :x1="bbox?.minX"
        :y1="font.ascent"
        :x2="bbox?.maxX"
        :y2="font.ascent"
        stroke="red"
        stroke-width="1"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { fonts } from "~/composables/useFont";

const font = fonts.currentFont.value;

const char = "k";
const glyph = font?.layout(char).glyphs[0];
const bbox = glyph?.bbox;
const viewBox = `${bbox?.minX} ${bbox?.minY} ${bbox?.maxX} ${bbox?.maxY}`;
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
  }
}
</style>
