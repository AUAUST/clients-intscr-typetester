<template>
  <main id="content-container">
    <view-container ref="viewContainer">
      <view-item
        v-for="view in views.listed"
        :key="view.id"
        :style="{
          width: view.width.value + 'px',
        }"
        ref="viewDOMElements"
      >
        <nav>
          <!-- <Button
          v-for="contentType in content.allTypes"
          @click="content.current(contentType)"
          size="fit-width"
          :active="content.currentId.value === contentType"
        > -->
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
          ></view-resize-handle>
        </view-resize-container>
      </view-item>
    </view-container>
  </main>
</template>

<script setup lang="ts">
import {
  shallowReactive,
  computed,
  reactive,
  ref,
  onMounted,
  onUnmounted,
} from "vue";
import ParagraphContent from "@/components/content/Paragraph.vue";
import GlyphsContent from "@/components/content/Glyphs.vue";
import Button from "@/components/ui/Button.vue";

import { localStorageData } from "~/composables/useLocalStorage";
import { tabs } from "~/composables/useTabs";
import { views, View } from "~/composables/useViews";

const viewContainer = ref();
const viewDOMElements = ref([]);

const updateViewContainerWidth = () => {
  views.fullWidth.value = viewContainer.value.offsetWidth;
  views.calculateWidths();
};
onMounted(() => {
  updateViewContainerWidth();
  window.addEventListener("resize", updateViewContainerWidth);
  viewDOMElements.value.forEach((viewElement, index) => {
    views.listed[index].DOMElement.value = viewElement;
  });
});
onUnmounted(() => {
  views.fullWidth.value = undefined;
  window.removeEventListener("resize", updateViewContainerWidth);
  views.listed.forEach((view) => {
    view.DOMElement.value = undefined;
  });
});

const resizer: {
  lastX: number;
  currentView: View | undefined;
  mouseUp: () => void;
  mouseDown: (event: MouseEvent, viewId: string) => void;
  mouseMove: (event: MouseEvent) => void;
} = {
  lastX: 0,
  currentView: undefined,

  mouseUp: () => {
    window.removeEventListener("mousemove", resizer.mouseMove);
    views.setWidthsFromState();
  },
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
};
</script>

<style lang="scss">
@use "@/assets/style/variables" as v;

#content-container {
  background-color: var(--auaust-background-color);
  color: var(--auaust-text-color);
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr;

  view-container {
    display: flex;
    flex-direction: row;

    height: 100%;
    overflow: hidden;

    view-item {
      position: relative;

      display: grid;
      grid-template-rows: auto 1fr;

      min-width: 50px;

      view-resize-container {
        display: none;
        user-select: none;

        view-resize-handle {
          display: block;
          cursor: ew-resize;
          user-select: none;

          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%);

          width: 0;
          height: 0;
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

          border-radius: 50%;
          background-color: v.$c-gray-4;
        }
      }

      &:not(:last-of-type) {
        border-right: 1px solid v.$c-gray-4;

        view-resize-container {
          display: block;

          position: absolute;
          z-index: 1;

          top: 0;
          right: 0;
          bottom: 0;

          transform: translateX(calc(50% + 0.5px));

          width: 10px;

          &:hover {
            view-resize-handle {
              width: 1.5rem;
              height: 1.5rem;
            }
          }
        }
      }
      nav {
        width: 100%;
        overflow-x: scroll;
      }
      view-overflow {
        display: block;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;

        view-component {
          display: block;
          margin: v.$gap-small-normal;
        }
      }
    }
  }

  nav {
    display: flex;
    flex-direction: row;
  }
  div {
    height: auto;
    overflow-y: auto;
  }
}
.view-normal {
  #content-container {
    width: 100%;
    grid-column: 2;
  }
}
.view-narrow,
.view-x-narrow {
  #content-container {
    width: 100vw;
    height: 100vh;
  }
}
</style>
