<template>
  <Button
    v-for="feature in fontFeatures"
    @click="
      if (enabledFeatures.has(feature)) {
        enabledFeatures.delete(feature);
      } else {
        enabledFeatures.add(feature);
      }
    "
    size="fit-width"
    :title="feature"
    :active="enabledFeatures.has(feature)"
  >
    {{ feature }}
  </Button>
  <div>
    {{ enabledFeatures }}
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import ButtonsGroup from "@/components/ui/ButtonsGroup.vue";
import { computed, reactive } from "vue";

import { fonts } from "~/composables/useFont";

const font = computed(() => fonts.currentFont.value);
const fontFeatures = computed(() =>
  font.value ? font.value.availableFeatures : []
);

const enabledFeatures = reactive(new Set<string>());
</script>
