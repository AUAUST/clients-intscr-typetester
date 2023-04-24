<template>
  <Button
    v-for="feature in fontFeatures"
    @click="
      if (fonts.ui.enabledFontFeatures.has(feature)) {
        fonts.ui.enabledFontFeatures.delete(feature);
      } else {
        fonts.ui.enabledFontFeatures.add(feature);
      }
    "
    size="fit-width"
    :title="feature"
    :active="fonts.ui.enabledFontFeatures.has(feature)"
  >
    {{ feature }}
  </Button>
  <div>{{}}</div>
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
</script>
