<template>
  <div
    v-if="font"
    class="container"
    :style="{
      '--unitsPerEm': font.unitsPerEm,
      '--descent': font.descent,
    }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="viewBox"
      style="transform: scale(1, -1)"
    >
      <path :d="glyph?.path.toSVG()" />
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

<style lang="scss"></style>
