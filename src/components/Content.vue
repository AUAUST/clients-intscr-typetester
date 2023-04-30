<template>
  <main id="content-container">
    <view-container ref="viewContainerRef">
      <ChooseComponent v-if="fonts.length < 1 && views.length < 1" />

      <ViewComponent
        v-else
        v-for="view in views.listed"
        :key="view.id"
        :view="(view as unknown as View)"
      />
    </view-container>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import ViewComponent from "~/components/View.vue";
import ChooseComponent from "~/components/Choose.vue";

import { useFonts } from "~/composables/useFonts";
import { useViews, Tab, View } from "~/composables/useViews";
import { watch } from "vue";

const fonts = useFonts();
const views = useViews();

const viewContainerRef = ref<HTMLElement | null>(null);
watch(viewContainerRef, (newNode) => {
  views.DOMNode = newNode;
});

const updateViewContainerWidth = () => {
  if (viewContainerRef.value) {
    // views.fullWidth.value = viewContainerRef.value.offsetWidth;
    // views.calculateWidths();
  }
};
onMounted(() => {
  updateViewContainerWidth();
  window.addEventListener("resize", updateViewContainerWidth);
});
onUnmounted(() => {
  // views.fullWidth.value = undefined;
  window.removeEventListener("resize", updateViewContainerWidth);
});
</script>

<style lang="scss">
@use "@/assets/style/variables" as v;

#content-container {
  background-color: var(--auaust-background-color);
  color: var(--auaust-text-color);
  isolation: isolate;
  overflow: hidden;

  view-container {
    display: flex;
    flex-direction: row;

    height: 100%;
    overflow: hidden;

    view-item {
      position: relative;

      display: grid;
      grid-template-rows: auto 1fr;

      &:only-child {
        width: 100%;
      }
      &:not(:only-child) {
        width: clamp(50px, var(--width, unset) * 1px, 100%);
      }

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

          @media (hover: none) {
            top: 0;
            bottom: 0;

            width: 4px;
            height: 100%;
            border-radius: 0;
          }
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

          @media (hover: hover) {
            &:hover {
              view-resize-handle {
                width: 1.5rem;
                height: 1.5rem;
              }
            }
          }
        }
      }
      nav {
        width: 100%;
        overflow-x: auto;
      }
      view-overflow {
        display: block;
        height: 100%;
        overflow: hidden;
        user-select: none;

        position: relative;

        view-component {
          display: block;
          margin: v.$gap-small-normal;

          overflow-y: auto;
          position: absolute;
          inset: 0;

          user-select: auto;
        }
      }
    }
  }

  nav {
    display: flex;
    flex-direction: row;
  }
  > div {
    height: auto;
    overflow-y: auto;
    font-family: var(--f-user-loaded, inherit);
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
