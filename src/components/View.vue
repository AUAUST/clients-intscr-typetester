<template>
  <view-item
    ref="viewElement"
    :class="{
      active: props.view.id === views.activeView?.id,
    }"
    :style="{
      '--width': width,
    }"
    @click="views.setActiveView(props.view)"
    @input="views.setActiveView(props.view)"
  >
    <nav>
      <Button
        v-for="tab in viewTabs"
        :key="tab.id"
        size="fit-width"
        :active="tab.id === activeTab.id"
        @click="props.view.setActiveTab(tab)"
      >
        {{ tab.name }}
      </Button>
      <Button @click="props.view.addTab('plainText', true)">+</Button>
    </nav>
    <view-overflow>
      <view-component
        :style="{
          // TS apparently doesn't handle ref unwrapping correctly so we cast the actual type
          '--font': (view.activeTab as unknown as Tab).fontId
        }"
      >
        <component
          v-bind:is="activeTab.component"
          :view="view"
          :tab="activeTab"
          :tabId="activeTab.id"
        ></component>
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
import { computed, onMounted, onUnmounted, ref } from "vue";
import Button from "./ui/Button.vue";
import { Tab, View, useViews } from "~/composables/useViews";

const props = defineProps<{
  view: View;
}>();

const viewElement = ref<HTMLElement | null>(null);

const views = useViews();

const viewTabs = computed(() => {
  // Warning: this is a hack. The type of listedTabs is not correct. It's actually still a ref.
  // It's the only way so that typescript in VSCode doesn't complain.
  return props.view.listedTabs as unknown as Tab[];
});
const activeTab = computed(() => {
  // Warning: same hack as above.
  return props.view.activeTab as unknown as Tab;
});

const width = computed(() => {
  const width = props.view.width;
  if (width === undefined) return undefined;
  return `${Math.max(width as unknown as number, 0)}px`;
});

onMounted(() => {
  props.view.setDOMNode(viewElement.value);
});
onUnmounted(() => {
  props.view.setDOMNode(null);
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
    views.updateViewsWidth();
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
    views.updateViewsWidth();
  },
};
</script>

<!-- <template>
  <view-item
    :style="{
      '--width': view.width.value + 'px',
    }"
    ref="viewElement"
  >
    <nav>
      <Button
        v-for="tab in view.tabs"
        :key="tab.id"
        size="fit-width"
        @click="props.view.activeTab = tab"
      >
        {{ tab.id }}
      </Button>
    </nav>
    <view-overflow>
      <view-component>
        <component
          v-bind:is="view.activeTab.component"
          :view="view"
          :tab="view.activeTab"
        ></component>
      </view-component>
    </view-overflow>
    <view-resize-container>
      <view-resize-handle
        @mousedown="resizer.mouseDown($event)"
        @touchstart="resizer.touchStart($event)"
      ></view-resize-handle>
    </view-resize-container>
  </view-item>
</template> -->

<!-- <script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import Button from "@/components/ui/Button.vue";

// import { View, views } from "~/composables/useViews";

// const viewElement = ref();

// onMounted(() => {
//   props.view.DOMElement.value = viewElement.value;
// });
// onUnmounted(() => {
//   props.view.DOMElement.value = undefined;
// });

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
</script> -->
