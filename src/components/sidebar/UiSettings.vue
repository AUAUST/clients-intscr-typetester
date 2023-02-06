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
    <TextInput
      size="fit-width"
      placeholder="000000"
      before="#"
      title="Background's color."
      v-model="backgroundColor"
      @input="
        localStorageData.set('userSelectedBackgroundColor', backgroundColor)
      "
    >
      Text
    </TextInput>
    <Button
      @click="
        backgroundColor = null;
        textColor = null;
        localStorageData.set('userSelectedBackgroundColor', null);
        localStorageData.set('userSelectedTextColor', null);
      "
    >
      Reset
    </Button>
    <TextInput
      size="fit-width"
      placeholder="000000"
      before="#"
      title="Text's color."
      v-model="textColor"
      @input="localStorageData.set('userSelectedTextColor', textColor)"
    >
      Text
    </TextInput>
  </ButtonsGroup>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { windowData } from "~/composables/useWindow";
import { localStorageData } from "~/composables/useLocalStorage";

const brightness = windowData.brightness;

const backgroundColor = ref(
  localStorageData.get("userSelectedBackgroundColor").value
);
const textColor = ref(localStorageData.get("userSelectedTextColor").value);
</script>
