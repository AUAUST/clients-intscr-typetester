<template>
  <div
    ref="sandboxElement"
    contenteditable="true"
    @blur="onBlur"
    v-html="props.tab.currentText.replace(/\n/g, '<br>')"
  ></div>
  <div class="activate" @click="() => props.tab.setCurrentText('hello')">
    Activate
  </div>
  <div class="deactivate" @click="() => props.tab.setCurrentText('world')">
    Deactivate
  </div>
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
  props.tab.setCurrentText(sandboxElement.value!.innerText!);
  sandboxElement.value!.blur();
}
</script>
