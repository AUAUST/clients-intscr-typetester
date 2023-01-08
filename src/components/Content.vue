<template>
  <main>
    <div>
      <button @click="showComponent('PARAGRAPH')">
        {{ contentTypes.PARAGRAPH.title }}
      </button>
      <button @click="showComponent('GLYPHS')">
        {{ contentTypes.GLYPHS.title }}
      </button>
      <article>
        <component v-bind:is="currentComponent"></component>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import ParagraphContent from "@/components/content/Paragraph.vue";
import GlyphsContent from "@/components/content/Glyphs.vue";

const contentTypes = {
  PARAGRAPH: {
    component: ParagraphContent,
    title: "Paragraph",
  },
  GLYPHS: {
    component: GlyphsContent,
    title: "Glyphs",
  },
};
const currentComponent = reactive(contentTypes["GLYPHS"].component);

function showComponent(component: string) {
  currentComponent.value =
    contentTypes[component as keyof typeof contentTypes].component;
  console.log(currentComponent);
}
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
