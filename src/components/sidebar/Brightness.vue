<template>
  <div class="button-container">
    <Button
      @click="windowData.setBrightness('theme-light')"
      type="fit-width"
      title="A lighter interface."
      :active="
        !!windowData.brightness.userSelected &&
        windowData.brightness.className === 'theme-light'
      "
      >Light</Button
    >
    <Button
      @click="windowData.setBrightness(null)"
      type="fit-width"
      title="Use the user's settings to determine wether to use dark or light mode."
      :active="windowData.brightness.userSelected === null"
      >Default</Button
    >
    <Button
      @click="windowData.setBrightness('theme-dark')"
      type="fit-width"
      title="A darker interface."
      :active="
        !!windowData.brightness.userSelected &&
        windowData.brightness.className === 'theme-dark'
      "
      >Dark</Button
    >
  </div>
</template>

<style lang="scss">
.button-container {
  width: 100%;
  display: flex;
}
</style>

<script setup lang="ts">
import { windowData } from "~/composables/useWindow";
</script>
