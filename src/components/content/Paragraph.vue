<template>
  height: {{ windowData.size.height }}<br />
  width: {{ windowData.size.width }}<br />
  scale: {{ windowData.size.currentScale }}<br />
  brightness: {{ windowData.brightness }}<br />
  vue localStorage: {{ localStorageData.storage }}<br />

  <Button @click="windowData.brightness.userSelected = 'theme-dark'">
    dark</Button
  >
  <Button @click="localStorageData.set('foo', 'bar')">
    {{ localStorageData.get("foo").exists }}</Button
  >
</template>

<script setup lang="ts">
import { windowData } from "~/composables/useWindow";
import { localStorageData } from "~/composables/useLocalStorage";
</script>
