<template>
  height: {{ viewport.size.height }}<br />
  width: {{ viewport.size.width }}<br />
  content width: {{ views.fullWidth }}<br />
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
  <br /><br />
  tabs:
  {{ tabs }}<br />
  <br />
  max views: {{ views.maxViews }}<br />
  views:
  {{ views }}<br />
</template>

<script setup lang="ts">
import { viewport } from "~/composables/useViewport";
import { storage } from "~/composables/useStorage";
import { notifications } from "~/composables/useNotifications";
import { tabs } from "~/composables/useTabs";
import { views } from "~/composables/useViews";
</script>
