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
import { ChangeEvent } from "rollup";
import { onMounted, onUnmounted, ref } from "vue";

const fontInput = ref();

onMounted(() => {
  fontInput.value.onchange = (event: InputEvent) => {
    if (event.target && event.type === "change") {
      console.log((event.target as HTMLInputElement).files![0]);
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
