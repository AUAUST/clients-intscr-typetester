<template>
  <ButtonsGroup title="Theme">
    <Button
      @click="windowData.setBrightness('theme-light')"
      size="fit-width"
      title="A lighter interface."
      :active="
        !!brightness.userSelected && brightness.className === 'theme-light'
      "
      >Light</Button
    >
    <Button
      @click="windowData.setBrightness(null)"
      size="fit-width"
      title="Use the user's settings to determine wether to use dark or light mode."
      :active="brightness.userSelected === null"
      >Auto</Button
    >
    <Button
      @click="windowData.setBrightness('theme-dark')"
      size="fit-width"
      title="A darker interface."
      :active="
        !!brightness.userSelected && brightness.className === 'theme-dark'
      "
      >Dark</Button
    >
  </ButtonsGroup>
  <ButtonsGroup title="Colors">
    <Input size="fit-width" type="text" placeholder="foo" title="Text's color.">
      Text
    </Input>
  </ButtonsGroup>
</template>

<script setup lang="ts">
import { windowData } from "~/composables/useWindow";
const brightness = windowData.brightness;
</script>
