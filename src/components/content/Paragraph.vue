<template>
  height: {{ viewport.size.height }}<br />
  width: {{ viewport.size.width }}<br />
  clicking: {{ viewport.clicking }}<br />
  <br />
  sidebar hideable: {{ viewport.size.sideBarHideable }}<br />
  scale: {{ viewport.size.currentScale }}<br />
  <br />
  brightness: {{ viewport.brightness }}<br />
  <br />
  vue localStorage: {{ storage.storage }}<br />
  <br />
  loading: {{ notifications.loading }}<br />
  loading sources: {{ notifications.loadingSources }}<br />
  <br />
  notifications:
  <p v-for="notification of notifications.listed" :key="notification.id">
    {{ notification }}
  </p>

  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  test
</template>

<script setup lang="ts">
import { viewport } from "~/composables/useViewport";
import { storage } from "~/composables/useLocalStorage";
import { notifications } from "~/composables/useNotifications";
</script>
