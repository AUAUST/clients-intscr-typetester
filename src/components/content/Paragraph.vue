<template>
  <div v-if="font">
    {{ CHAR }}:
    <hr />
  </div>
</template>

<script setup lang="ts">
import { fonts } from "~/composables/useFont";

const font = fonts.currentFont.value;

// CHAR = fi ligature
const CHAR = "ﬁ";
// const CHAR = "a";
const UNI = CHAR.charCodeAt(0);

console.log(CHAR, UNI);
console.log(font?.glyphForCodePoint(UNI));
console.log(font?.hasGlyphForCodePoint(UNI));
console.log(font?.glyphsForString(CHAR));
console.log(font?.layout(CHAR));
</script>
