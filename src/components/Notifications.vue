<template>
  <aside id="notifications-container">
    <div>
      <div></div>
    </div>
    <div>
      <h5>Notifications</h5>
      <div
        v-for="notification of notificationsData.notifications"
        :key="notification.id"
        :class="`type-${notification.type}`"
      >
        <h6>
          {{ notificationsData.titles[notification.type] }}
        </h6>
        <p>{{ notification.message }}</p>
      </div>
    </div>
  </aside>
  <Button
    @click="
      notificationsData.sendNotification({
        type: 'success',
        message: 'It worked!',
        expires: false,
      })
    "
  >
    Click
  </Button>
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
