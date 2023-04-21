<template>
  <ButtonsGroup title="Theme">
    <Button
      @click="viewport.setBrightness('theme-light')"
      size="fit-width"
      title="A lighter interface."
      :active="
        !!brightness.userSelected && brightness.className === 'theme-light'
      "
      >Light</Button
    >
    <Button
      @click="viewport.setBrightness(null)"
      size="fit-width"
      title="Use the user's settings to determine wether to use dark or light mode."
      :active="brightness.userSelected === null"
      >Auto</Button
    >
    <Button
      @click="viewport.setBrightness('theme-dark')"
      size="fit-width"
      title="A darker interface."
      :active="
        !!brightness.userSelected && brightness.className === 'theme-dark'
      "
      >Dark</Button
    >
  </ButtonsGroup>
  <ButtonsGroup title="Colors">
    <ColorInput />
  </ButtonsGroup>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { viewport } from "~/composables/useViewport";

import ButtonsGroup from "@/components/ui/ButtonsGroup.vue";
import Button from "@/components/ui/Button.vue";

const brightness = viewport.brightness;
</script>
