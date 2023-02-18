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
        <view-component>
          <component v-bind:is="tabs.tabTypes[2].component"></component>
        </view-component>
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

const content = shallowReactive({
  // config available contents
  types: {
    PARAGRAPH: {
      component: ParagraphContent,
      title: "Paragraph",
    },
    GLYPHS: {
      component: GlyphsContent,
      title: "Glyphs",
    },
  },
  tabs: reactive([
    {
      type: "PARAGRAPH",
    },
    {
      type: "GLYPHS",
    },
  ] as {
    type: string;
  }[]),
  // set the default component to show
  currentId: computed((): string => {
    const currentContentTab = localStorageData.get("currentContentTab");
    if (currentContentTab.exists) return currentContentTab.value as string;
    else return "PARAGRAPH";
  }),
  get: function (id: string) {
    // returns content.types.{{id}}
    return this.types[id as keyof typeof this.types];
  },
  get allTypes() {
    return Object.keys(this.types);
  },
  current: function (id?: string) {
    // if an ID is provided and exists, sets the new current to be the input
    if (id) {
      id = id.toUpperCase();
      if (this.allTypes.includes(id)) {
        localStorageData.set("currentContentTab", id);
      } else {
        console.warn(`The content type ${id} doesn't exist.`);
      }
    }
    // if the stored current doesn't exist, set it to the first existing type
    if (!this.allTypes.includes(this.currentId.value)) {
      return this.get(this.allTypes[0]).component;
    }

    return this.get(this.currentId.value).component;
  },
});
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
    view-item {
      position: relative;
      &:not(:last-of-type) {
        &:after {
          content: "";
          display: block;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 5px;
          height: 100%;
          background-color: v.$c-gray-4;
        }
        margin-right: -5px;
        border-right: 1px solid v.$c-gray-4;
      }
      nav {
      }
      view-component {
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
