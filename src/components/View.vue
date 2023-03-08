<template>
  <view-item
    :style="{
      // '--width': view.width.value + 'px',
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
        @mousedown="resizer.mouseDown($event, view.id)"
        @touchstart="resizer.touchStart($event, view.id)"
      ></view-resize-handle>
    </view-resize-container>
  </view-item>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";

import { tabs } from "~/composables/useTabs";
import { View, views } from "~/composables/useViews";

const props = defineProps<{
  view: View;
}>();

const resizer: {
  lastX: number;
  currentView: View | undefined;
  mouseUp: () => void;
  mouseMove: (event: MouseEvent) => void;
  mouseDown: (event: MouseEvent, viewId: string) => void;

  touchStart: (event: TouchEvent, viewId: string) => void;
  touchMove: (event: TouchEvent) => void;
  touchEnd: () => void;
} = {
  lastX: 0,
  currentView: undefined,

  mouseDown: (event: MouseEvent, viewId: string) => {
    resizer.lastX = event.clientX;
    resizer.currentView = views.viewById(viewId);
    window.addEventListener("mousemove", resizer.mouseMove);
    window.addEventListener("mouseup", resizer.mouseUp, { once: true });
  },
  mouseMove: (event) => {
    if (resizer.currentView) {
      resizer.currentView.resize(event.clientX - resizer.lastX);
    }
    resizer.lastX = event.clientX;
  },
  mouseUp: () => {
    window.removeEventListener("mousemove", resizer.mouseMove);
    views.setWidthsFromState();
  },

  touchStart: (event: TouchEvent, viewId: string) => {
    resizer.lastX = event.touches[0].clientX;
    resizer.currentView = views.viewById(viewId);
    window.addEventListener("touchmove", resizer.touchMove);
    window.addEventListener("touchend", resizer.touchEnd, { once: true });
  },
  touchMove: (event: TouchEvent) => {
    if (resizer.currentView) {
      resizer.currentView.resize(event.touches[0].clientX - resizer.lastX);
    }
    resizer.lastX = event.touches[0].clientX;
  },
  touchEnd: () => {
    window.removeEventListener("touchmove", resizer.touchMove);
    views.setWidthsFromState();
  },
};
</script>
