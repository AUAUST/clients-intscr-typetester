<template>
  <div
    v-if="font"
    class="container"
    :style="{
      '--unitsPerEm': font.unitsPerEm,
    }"
  >
    <div class="char">xpdL</div>
    <div class="ascent" :style="{ '--height': font.ascent }"></div>
    <div class="capHeight" :style="{ '--height': font.capHeight }"></div>
    <div class="xHeight" :style="{ '--height': font.xHeight }"></div>
    <div class="lineGap" :style="{ '--height': font.lineGap }"></div>
    <div class="descent" :style="{ '--height': font.descent }"></div>
  </div>
</template>

<script setup lang="ts">
import { fonts } from "~/composables/useFont";

const font = fonts.currentFont.value;

// CHAR = fi ligature
// const CHAR = "ﬁ";
const CHAR = "k";
const UNI = CHAR.charCodeAt(0);
const GLYPH = font?.layout(CHAR).glyphs[0];

console.log(CHAR, UNI);
console.log(font?.glyphForCodePoint(UNI));
console.log(font?.hasGlyphForCodePoint(UNI));
console.log(font?.glyphsForString(CHAR));
</script>

<style lang="scss">
.container {
  font-size: 300px;
  position: relative;
  --unit: 1em / var(--unitsPerEm);
  .char {
    font-size: 1em;
  }
  .ascent {
    position: absolute;
    bottom: calc(var(--height) * var(--unit));
    border-top: 1px solid red;
    width: 100%;
  }
  .descent {
    position: absolute;
    bottom: calc(var(--height) * var(--unit));
    border-bottom: 1px solid orange;
    width: 100%;
  }
  .lineGap {
    position: absolute;
    bottom: calc(var(--height) * var(--unit));
    border-bottom: 1px solid yellow;
    width: 100%;
  }
  .xHeight {
    position: absolute;
    bottom: calc(var(--height) * var(--unit));
    border-bottom: 1px solid green;
    width: 100%;
  }
  .capHeight {
    position: absolute;
    bottom: calc(var(--height) * var(--unit));
    border-bottom: 1px solid purple;
    width: 100%;
  }
}
</style>
