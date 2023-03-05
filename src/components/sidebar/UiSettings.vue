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

        notifications.sendNotification({
          message: 'Reset colors to default.',
          type: ['success', 'info', 'warning', 'error'][
            Math.floor(Math.random() * 4)
          ] as ['success', 'info', 'warning', 'error'][number],
        });
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
import { viewport } from "~/composables/useViewport";
import { localStorageData } from "~/composables/useLocalStorage";
import { notifications } from "~/composables/useNotifications";

const brightness = viewport.brightness;

const backgroundColor = ref(
  localStorageData.get("userSelectedBackgroundColor").value
);
const textColor = ref(localStorageData.get("userSelectedTextColor").value);
</script>
