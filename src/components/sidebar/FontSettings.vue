<template>
  <template v-if="currentFont">
    <Button
      @click="currentTab?.setFontSize(currentTab.fontSize + 1)"
      size="fit-width"
    >
      Size +
    </Button>
    <Button
      @click="currentTab?.setFontSize(currentTab.fontSize - 1)"
      size="fit-width"
    >
      Size -
    </Button>

    <Button
      @click="currentTab?.setLineHeight(currentTab.lineHeight + 0.1)"
      size="fit-width"
    >
      Line height +
    </Button>
    <Button
      @click="currentTab?.setLineHeight(currentTab.lineHeight - 0.1)"
      size="fit-width"
    >
      Line height -
    </Button>

    <Button
      v-for="feature in currentFont.raw.availableFeatures"
      :key="feature"
      :active="currentTab?.enabledFontFeatures.has(feature)"
      @click="currentTab?.toggleFontFeature(feature)"
    >
      {{ feature }}
    </Button>
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
