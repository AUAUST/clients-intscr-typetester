<template>
  <template v-if="currentFont">
    <Button @click="">More font-size</Button>
  </template>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useFonts } from "~/composables/useFonts";
import { useViews } from "~/composables/useViews";
import Button from "../ui/Button.vue";

const fonts = useFonts();
const views = useViews();

const currentView = computed(() => views.activeView);
const currentTab = computed(() => currentView.value?.activeTab);
const currentFont = computed(() =>
  fonts.getById(currentTab.value?.fontId ?? "")
);
</script>
