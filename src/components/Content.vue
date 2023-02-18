<template>
  <main id="content-container">
    <view-container>
      <view-item v-for="view in views.listed" :key="view.id">
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
          <view-resize-handle></view-resize-handle>
        </view-resize-container>
      </view-item>
    </view-container>
  </main>
</template>

<script setup lang="ts">
import { shallowReactive, computed, reactive } from "vue";
import ParagraphContent from "@/components/content/Paragraph.vue";
import GlyphsContent from "@/components/content/Glyphs.vue";
import Button from "@/components/ui/Button.vue";

import { localStorageData } from "~/composables/useLocalStorage";
import { tabs } from "~/composables/useTabs";
import { views } from "~/composables/useViews";
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

      view-resize-container {
        display: none;
        view-resize-handle {
          display: none;
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
              display: block;
              cursor: ew-resize;

              position: absolute;
              top: 50%;
              left: 50%;
              transform: translateX(-50%);

              $size: 1.2rem;
              width: $size;
              height: $size;

              border-radius: 50%;
              background-color: v.$c-gray-4;
            }
          }
        }
      }
      nav {
      }
      view-overflow {
        display: block;
        height: 100%;
        overflow-y: auto;

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
