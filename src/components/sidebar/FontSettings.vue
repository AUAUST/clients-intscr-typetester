<template>
  <Button
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
  </Button>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";

import { views } from "~/composables/useViews";
import { computed } from "vue";

const font = computed(() => views.activeTab.value?.font.object);
console.log("font", font);
console.log("tab", views.activeTab.value);
console.log("views", views);
</script>
