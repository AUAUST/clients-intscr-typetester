<template>
  <div
    id="app-container"
    :style="{
      '--auaust-background-color': backgroundColor,
      '--auaust-text-color': textColor,
    }"
    :class="[viewport.size.currentScale, viewport.brightness.className]"
    @dragenter="(event) => onDragEnter(event)"
    @dragover="(event) => onDragOver(event)"
    @dragleave="(event) => onDragLeave(event)"
    @drop="(event) => onDrop(event)"
  >
    <SideBar />
    <Content />
    <Notifications />
  </div>
  <FontInput />
</template>

<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import Content from "@/components/Content.vue";
import FontInput from "./components/FontInput.vue";

import { computed } from "vue";
import { storage } from "~/composables/useStorage";
import { viewport } from "~/composables/useViewport";

function eventIsRelevent(event: DragEvent) {
  if (
    event.dataTransfer?.types.some(
      (type) => !["Files", "application/x-moz-file"].includes(type)
    )
  ) {
    return false;
  }
  event.preventDefault();
  event.stopPropagation();
  return true;
}

function onDragEnter(event: DragEvent) {
  if (eventIsRelevent(event)) {
    console.log("dragEnter");
  }
}
function onDragLeave(event: DragEvent) {
  if (eventIsRelevent(event)) {
    console.log("dragLeave");
  }
}
function onDragOver(event: DragEvent) {
  // this function returns true if the event is relevent, but also handles the event
  // so we still need to call it here
  eventIsRelevent(event);
}
function onDrop(event: DragEvent) {
  if (eventIsRelevent(event)) {
    console.log("drop");
  }
}

function parseCSSColor(color: unknown) {
  if (!color) return undefined;
  color = String(color);
  if (!/^[0-9a-fA-F]+$/.test(color as string)) return undefined;
  return `#${color}`;
}

const backgroundColor = computed(() =>
  parseCSSColor(storage.get("userSelectedBackgroundColor").value)
);
const textColor = computed(() =>
  parseCSSColor(storage.get("userSelectedTextColor").value)
);
</script>

<style lang="scss">
@use "@/assets/style/variables" as v;

#app-container {
  --auaust-background-color: #{v.$c-auaust-3};
  --auaust-text-color: #{v.$c-auaust-8};
  width: 100vw;
  height: 100vh;
  &.view-normal {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-auto-flow: column;
  }
  &.view-narrow {
    display: flex;
  }
}
</style>
