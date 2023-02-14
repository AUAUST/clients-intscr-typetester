<template>
  <aside id="notifications-container">
    <div
      v-for="notification of notificationsData.list"
      :class="`type-${notification.type}`"
    ></div>
  </aside>
</template>

<script setup lang="ts">
import { notificationsData } from "~/composables/useNotifications";
</script>

<style lang="scss">
@use "@/assets/style/variables" as v;
aside {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: fit-content;
  max-height: 100vh;
  border: 1px solid red;
  z-index: 100;
  overflow-y: auto;
}

.view-narrow {
  #notifications-container:has(*) {
    background: linear-gradient(180deg, v.$c-auaust-8 0%, transparent 300px);
  }
}

.view-x-narrow {
  #notifications-container {
    width: 100vw;
  }
}
</style>
