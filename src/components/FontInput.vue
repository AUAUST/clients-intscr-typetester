<template>
  <input
    id="font-input"
    type="file"
    accept="*.ttf, *.otf, *.woff, *.woff2"
    ref="fontInput"
    hidden
  />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const fontInput = ref();

onMounted(() => {
  fontInput.value.onchange = (event: InputEvent) => {
    if (event.target && event.type === "change") {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (
        ["font/ttf", "font/otf", "font/woff", "font/woff2"].includes(
          file?.type!
        )
      ) {
        const fileData = {
          name: file?.name,
          size: file?.size,
          type: file?.type,
        };
      } else {
        console.error("Invalid file type");
      }
    }
  };
});
onUnmounted(() => {
  fontInput.value.onchange = null;
});
</script>

<style lang="scss">
@use "@/assets/style/variables" as v;
</style>
