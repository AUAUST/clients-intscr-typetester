<template>
  <div
    ref="sandboxElement"
    contenteditable="true"
    @blur="onBlur"
    v-html="props.tab.currentText.replace(/\n/g, '<br>')"
  ></div>
</template>

<script setup lang="ts">
import { View, SandboxTab } from "~/composables/useViews";
import { ref } from "vue";

const props = defineProps<{
  view: View;
  tab: SandboxTab;
  tabId: string;
}>();

const sandboxElement = ref<HTMLElement | null>(null);

function onBlur() {
  const element = sandboxElement.value;

  if (!element) return;

  props.tab.setCurrentText(element.innerText!);
  element.blur();
}
</script>
