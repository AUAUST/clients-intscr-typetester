<template>
  <input
    id="font-input"
    type="file"
    accept="*.ttf, *.otf, *.woff, *.woff2"
    ref="fontInput"
    @change="(event) => {
      fonts.fontInputChanged({
        file: (event.target as HTMLInputElement).files![0],
      })}
    "
    hidden
  />
  <p style="font-family: var(--loadedFont)">
    Fonts:<br />
    <span v-for="font of fonts.list">
      {{ font }}
      <br />
    </span>
  </p>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import { fonts } from "~/composables/useFont";

const fontInput = ref<HTMLInputElement>();

onMounted(() => {
  fonts.fontInput = fontInput.value;
});
onUnmounted(() => {
  fonts.fontInput = undefined;
});
</script>

<style lang="scss">
@use "@/assets/style/variables" as v;
</style>
