<template>
  <font-input-container>
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
    <font-input-overlay :visible="viewport.dropZoneVisible.value">
    </font-input-overlay>
  </font-input-container>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import { fonts } from "~/composables/useFont";
import { viewport } from "~/composables/useViewport";

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

font-input-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.5;
  z-index: 1;

  &[visible="true"] {
    background-color: red;
  }
}
</style>
