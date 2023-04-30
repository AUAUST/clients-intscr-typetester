<template>
  <div
    contenteditable="true"
    v-html="props.tab.currentText"
    @input="updateContent"
  ></div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { SandboxTab } from "~/composables/useViews";
import { View, Tab } from "~/composables/useViews";

const props = defineProps<{
  view: View;
  tab: SandboxTab;
}>();

const updateContent = (event: Event) => {
  props.tab.setCurrentText((event.target as HTMLDivElement).innerHTML);
};
</script>
