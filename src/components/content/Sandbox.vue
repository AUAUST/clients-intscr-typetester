<template>
  <tab-sandbox
    ref="sandboxElement"
    contenteditable="true"
    @blur="onBlur"
    @paste="onTextMagicallyPopsIn"
    @drop="onTextMagicallyPopsIn"
    @input="updateName"
    v-html="props.tab.currentText.replace(/\n/g, '<br>')"
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
      let ellipsis = false;

      if (!text) return undefined;

      if (text.length > 50) ellipsis = true;

      text = text.trim().slice(0, 50);

      if (ellipsis) text += "...";

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
function onTextMagicallyPopsIn(event: Event) {
  const element = sandboxElement.value;

  if (!element) return;

  // This is a hack to make sure the text is updated after the paste event.
  setTimeout(() => {
    props.tab.setCurrentText(element.innerText!);
  }, 0);
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
