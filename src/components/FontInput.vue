<template>
  <font-input-container>
    <input
      id="font-input"
      type="file"
      accept="*.ttf, *.otf, *.woff, *.woff2"
      multiple="true"
      ref="fontInput"
      @change="(event) => fonts.handleNewFontFile((event.target as HTMLInputElement).files)"
      hidden
    />
    <font-input-overlay :visible="viewport.dropZoneVisible.value">
      <div
        @dragover="(event) => onDragOver(event)"
        @dragleave="
          (event) => {
            onDragLeave(event);
          }
        "
        @drop="(event) => onDrop(event)"
      ></div>
    </font-input-overlay>
  </font-input-container>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import { fonts } from "~/composables/useFont";
import { viewport } from "~/composables/useViewport";
import { notifications } from "~/composables/useNotifications";

const fontInput = ref<HTMLInputElement>();

function onDragLeave(event: DragEvent) {
  if (viewport.isDropZoneEventRelevant(event)) {
    viewport.dropZoneVisible.value = false;
  }
}
function onDragOver(event: DragEvent) {
  // this function returns true if the event is relevent,
  // but also handles the event by preventing the default if it is required
  // so we still need to call it here
  viewport.isDropZoneEventRelevant(event);
}
function onDrop(event: DragEvent) {
  if (viewport.isDropZoneEventRelevant(event)) {
    viewport.dropZoneVisible.value = false;
    fonts.handleNewFontFile(event.dataTransfer!.files);
  }
}

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
    pointer-events: all;
  }

  div {
    width: 100%;
    height: 100%;
  }
}
</style>
