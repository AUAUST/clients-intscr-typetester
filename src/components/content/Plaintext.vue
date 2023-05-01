<template>
  <tab-plaintext
    ref="plaintextElement"
    contenteditable="true"
    @blur="onBlur"
    @paste="onTextMagicallyPopsIn"
    @drop="onTextMagicallyPopsIn"
    @input="updateName"
    v-html="props.tab.currentText.replace(/\n/g, '<br>')"
    :style="{
      '--ffs': Array.from(props.tab.enabledFontFeatures)
        .map((feature) => `'${feature}' 1`)
        .join(', '),
    }"
  ></tab-plaintext>
</template>

<script setup lang="ts">
import { View, PlaintextTab, useViews } from "~/composables/useViews";
import { ref } from "vue";

const props = defineProps<{
  view: View;
  tab: PlaintextTab;
  tabId: string;
}>();

const plaintextElement = ref<HTMLElement | null>(null);

function updateName() {
  props.tab.setName(
    (function () {
      let text = plaintextElement.value?.innerText;
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
  const element = plaintextElement.value;

  if (!element) return;

  props.tab.setCurrentText(element.innerText!);
  element.blur();
}
function onTextMagicallyPopsIn(event: Event) {
  const element = plaintextElement.value;

  if (!element) return;

  // This is a hack to make sure the text is updated after the paste event.
  setTimeout(() => {
    props.tab.setCurrentText(element.innerText!);
  }, 0);
}
</script>

<style lang="scss">
tab-plaintext {
  display: block;
  width: 100%;
  height: 100%;

  font-feature-settings: var(--ffs, normal);

  font-family: var(--font);

  &:focus {
    outline: none;
  }
}
</style>
