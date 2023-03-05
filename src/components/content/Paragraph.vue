<template>
  height: {{ windowData.size.height }}<br />
  width: {{ windowData.size.width }}<br />
  clicking: {{ windowData.clicking }}<br />
  <br />
  sidebar hideable: {{ windowData.size.sideBarHideable }}<br />
  scale: {{ windowData.size.currentScale }}<br />
  <br />
  brightness: {{ windowData.brightness }}<br />
  <br />
  vue localStorage: {{ localStorageData.storage }}<br />
  <br />
  loading: {{ notifications.loading }}<br />
  loading sources: {{ notifications.loadingSources }}<br />
  <br />
  notifications:
  <p v-for="notification of notifications.listed" :key="notification.id">
    {{ notification }}
  </p>
</template>

<script setup lang="ts">
import { windowData } from "~/composables/useWindow";
import { localStorageData } from "~/composables/useLocalStorage";
import { notifications } from "~/composables/useNotifications";
</script>
