<template>
  <div
    v-if="font"
    class="container"
    :style="{
      '--unitsPerEm': font.unitsPerEm,
      '--descent': font.descent,
    }"
  >
    <div class="char">xpdL</div>
    <div class="ascent" :style="{ '--height': font.ascent }">
      ascent: {{ font.ascent }}
    </div>
    <div class="capHeight" :style="{ '--height': font.capHeight }">
      capHeight: {{ font.capHeight }}
    </div>
    <div class="xHeight" :style="{ '--height': font.xHeight }">
      xHeight: {{ font.xHeight }}
    </div>
    <div class="lineGap" :style="{ '--height': font.lineGap }">
      lineGap: {{ font.lineGap }}
    </div>
    <div class="descent" :style="{ '--height': font.descent }">
      descent: {{ font.descent }}
    </div>
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
  margin-top: 300px;

  --font-size: 300px;
  font-size: var(--font-size);
  line-height: 1em;
  position: relative;
  --unit: var(--font-size) / var(--unitsPerEm);

  .char {
    font-size: 1em;
  }
  *:not(.char) {
    font-size: 10px;
    line-height: 1em;
    position: absolute;
    bottom: calc(var(--height) * var(--unit));
    border-bottom: 1px solid currentColor;
    width: 100%;
    transform: translateY(calc(var(--descent) * var(--unit)));
  }
  .ascent {
    color: red;
  }
  .descent {
    color: blue;
  }
  .lineGap {
    color: yellow;
  }
  .xHeight {
    color: green;
  }
  .capHeight {
    color: purple;
  }
}
</style>
