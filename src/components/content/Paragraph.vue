<template>
  height: {{ windowData.size.height }}<br />
  width: {{ windowData.size.width }}<br />
  sidebar hideable: {{ windowData.size.sideBarHideable }}<br />
  scale: {{ windowData.size.currentScale }}<br />
  brightness: {{ windowData.brightness }}<br />
  vue localStorage: {{ localStorageData.storage }}<br />
  clicking: {{ windowData.clicking }}<br />
</template>

<script setup lang="ts">
import { windowData } from "~/composables/useWindow";
import { localStorageData } from "~/composables/useLocalStorage";
</script>
