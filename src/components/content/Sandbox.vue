<template>
  {{ useViews().DOMNodeHeight }}
  {{ useViews().DOMNodeWidth }}
  <tab-sandbox
    ref="sandboxElement"
    contenteditable="true"
    @blur="onBlur"
    @input="updateName"
    v-html="props.tab.currentText.replace(/\n/g, '<br>')"
    :style="{
      '--font': props.tab.fontId,
    }"
  ></tab-sandbox>
</template>

<script setup lang="ts">
import { View, SandboxTab, useViews } from "~/composables/useViews";
import { ref } from "vue";

const props = defineProps<{
  view: View;
  tab: SandboxTab;
  tabId: string;
}>();

const sandboxElement = ref<HTMLElement | null>(null);

function updateName() {
  props.tab.setName(
    (function () {
      let text = sandboxElement.value?.innerText;

      if (!text) return undefined;

      text = text.trim().slice(0, 30);

      if (text.match(/^[\s]*$/)) return undefined;

      return text;
    })()
  );
}
function onBlur() {
  const element = sandboxElement.value;

  if (!element) return;

  props.tab.setCurrentText(element.innerText!);
  element.blur();
}
</script>

<style lang="scss">
tab-sandbox {
  display: block;
  width: 100%;
  height: 100%;

  font-family: var(--font);

  &:focus {
    outline: none;
  }
}
</style>
