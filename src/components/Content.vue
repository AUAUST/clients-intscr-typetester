<template>
  <main id="content-container">
    <nav>
      <Button
        v-for="contentType in content.allTypes()"
        @click="content.current(contentType)"
        size="fit-width"
        :active="content.currentId === contentType"
      >
        {{ content.get(contentType).title }}
      </Button>
    </nav>
    <div>
      <component v-bind:is="content.current()"></component>
    </div>
  </main>
</template>

<script setup lang="ts">
import { shallowReactive } from "vue";
import ParagraphContent from "@/components/content/Paragraph.vue";
import GlyphsContent from "@/components/content/Glyphs.vue";
import Button from "@/components/ui/Button.vue";

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
  // set the default component to show
  currentId: "PARAGRAPH",
  get: function (id: string) {
    // returns content.types.{{id}}
    return this.types[id as keyof typeof this.types];
  },
  allTypes: function () {
    // returns content.types.{{all keys here}}
    return Object.keys(this.types);
  },
  current: function (id?: string) {
    // if an ID is provided and exists, sets the new current to be the input
    if (id) {
      id = id.toUpperCase();
      if (this.allTypes().includes(id)) {
        this.currentId = id;
      } else {
        console.warn(`The content type ${id} doesn't exist.`);
      }
    }
    return this.get(this.currentId).component;
  },
});

// const currentComponent = reactive(contentTypes["GLYPHS"].component);

// function showComponent(component: string) {
//   currentComponent.value =
//     contentTypes[component as keyof typeof contentTypes].component;
//   console.log(currentComponent);
// }
</script>

<style lang="scss">
@use "@/assets/style/variables" as v;

#content-container {
  background-color: var(--auaust-background-color);
  color: var(--auaust-text-color);
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr;
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
