<template>
  <main>
    <div>
      <button @click="content.current('PARAGRAPH')">
        {{ content.types.PARAGRAPH.title }}
      </button>
      <button @click="content.current('GLYPHS')">
        {{ content.types.GLYPHS.title }}
      </button>
      <article>
        <component v-bind:is="content.current()"></component>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
import { shallowReactive } from "vue";
import ParagraphContent from "@/components/content/Paragraph.vue";
import GlyphsContent from "@/components/content/Glyphs.vue";

const content = shallowReactive({
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
  currentId: "PARAGRAPH",
  allTypes: function () {
    return Object.keys(this.types);
  },
  current: function (id?: string) {
    if (id) {
      if (this.allTypes().includes(id)) {
        this.currentId = id;
      }
    }
    return this.types[this.currentId as keyof typeof this.types].component;
  },
});

// const currentComponent = reactive(contentTypes["GLYPHS"].component);

// function showComponent(component: string) {
//   currentComponent.value =
//     contentTypes[component as keyof typeof contentTypes].component;
//   console.log(currentComponent);
// }
</script>

<style scoped lang="scss">
@use "@/assets/style/variables" as v;

main {
  width: 100%;
  background-color: orange;
  grid-column: 2;

  @media screen and (max-width: v.$breakpoint-menu-hideable) {
    width: 100vw;
    height: 100vh;
  }
}
</style>
