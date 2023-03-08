<template>
  <view-item
    :style="{
      '--width': view.width.value + 'px',
    }"
    ref="viewElement"
  >
    <nav>
      <Button v-for="tab in tabs.listed" size="fit-width">
        {{ tab.title }}
      </Button>
    </nav>
    <view-overflow>
      <view-component>
        <component v-bind:is="tabs.tabTypes[2].component"></component>
      </view-component>
    </view-overflow>
    <view-resize-container>
      <view-resize-handle
        @mousedown="resizer.mouseDown($event)"
        @touchstart="resizer.touchStart($event)"
      ></view-resize-handle>
    </view-resize-container>
  </view-item>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import type { Ref } from "vue";

import Button from "@/components/ui/Button.vue";

import { tabs } from "~/composables/useTabs";
import { View, views } from "~/composables/useViews";

const props = defineProps<{
  view: View;
  container: Ref<HTMLElement | null>;
}>();

const viewElement = ref();

onMounted(() => {
  props.view.DOMElement.value = viewElement.value;
});
onUnmounted(() => {
  props.view.DOMElement.value = undefined;
});

const resizer: {
  lastX: number;

  mouseUp: () => void;
  mouseMove: (event: MouseEvent) => void;
  mouseDown: (event: MouseEvent) => void;

  touchStart: (event: TouchEvent) => void;
  touchMove: (event: TouchEvent) => void;
  touchEnd: () => void;
} = {
  lastX: 0,

  mouseDown: (event: MouseEvent) => {
    resizer.lastX = event.clientX;
    window.addEventListener("mousemove", resizer.mouseMove);
    window.addEventListener("mouseup", resizer.mouseUp, { once: true });
  },
  mouseMove: (event) => {
    props.view.resize(event.clientX - resizer.lastX);
    resizer.lastX = event.clientX;
  },
  mouseUp: () => {
    window.removeEventListener("mousemove", resizer.mouseMove);
    views.setWidthsFromState();
  },
  touchStart: (event: TouchEvent) => {
    resizer.lastX = event.touches[0].clientX;
    window.addEventListener("touchmove", resizer.touchMove);
    window.addEventListener("touchend", resizer.touchEnd, { once: true });
  },
  touchMove: (event: TouchEvent) => {
    props.view.resize(event.touches[0].clientX - resizer.lastX);
    resizer.lastX = event.touches[0].clientX;
  },
  touchEnd: () => {
    window.removeEventListener("touchmove", resizer.touchMove);
    views.setWidthsFromState();
  },
};
</script>
