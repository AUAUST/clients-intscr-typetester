<template>
  <!-- <Button
    v-for="feature in font?.availableFeatures"
    @click="
      if (views.activeTab.value?.state.enabledFeatures.has(feature)) {
        views.activeTab.value?.state.enabledFeatures.delete(feature);
      } else {
        views.activeTab.value?.state.enabledFeatures.add(feature);
      }
    "
    size="fit-width"
    :title="feature"
    :active="views.activeTab.value?.state.enabledFeatures.has(feature)"
  >
    {{ feature }}
  </Button> -->
  <!-- tab:<br />
  {{ tab }}
  views.activeView.value?.activeTab.value:<br />
  {{ views.activeView.value?.activeTab.value }}
  views.activeView.value?.activeTab:<br />
  {{ views.activeView.value?.activeTab }} -->

  {{ font ? font : "no font" }}
  <Button
    v-if="font"
    @click="() => views.createView('')"
    title="Create new tab"
    :deactivated="!views.canCreate"
    size="fit-width"
  >
    Create new tab
  </Button>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";

import { views } from "~/composables/useViews";

import { computed } from "vue";
import { fonts } from "~/composables/useFont";
const font = computed(() => {
  if (!fonts.hasAnyFont.value) {
    return undefined;
  }
  return views.activeView.value?.activeTab.font.familyName;
});
</script>
