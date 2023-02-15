<template>
  <aside id="notifications-container">
    <notif-loader>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </notif-loader>
    <notif-list>
      <notif-item
        v-for="notification of notificationsData.notifications"
        :key="notification.id"
        :class="`type-${notification.type}`"
      >
        <notif-content>
          <h6>
            {{ notificationsData.titles[notification.type] }}
          </h6>
          <p>{{ notification.message }}</p>
        </notif-content>
        <notif-close>
          <Button
            @click="notificationsData.deleteNotification(notification.id)"
          >
            X
          </Button>
        </notif-close>
      </notif-item>
    </notif-list>
  </aside>
  <Button
    @click="
      notificationsData.sendNotification({
        type: ['success', 'error', 'warning', 'info'][
          Math.floor(Math.random() * 4)
        ] as 'success' | 'error' | 'warning' | 'info',
        message: `${Math.random().toString(36)}`,
      })
    "
  >
    Click
  </Button>
</template>

<script setup lang="ts">
import { notificationsData } from "~/composables/useNotifications";
</script>

<style scoped lang="scss">
@use "@/assets/style/variables" as v;
aside {
  position: fixed;
  top: 0;
  right: 100px;
  width: 300px;
  height: fit-content;
  max-height: 100vh;
  z-index: 100;
  overflow-y: auto;

  notif-list {
    display: flex;
    flex-direction: column-reverse;
    notif-item {
      display: flex;
      justify-content: space-between;

      border-bottom: 1px solid red;
      &.type-success {
        background: v.$c-green-9;
      }
      &.type-error {
        background: v.$c-red-9;
      }
      &.type-warning {
        background: v.$c-orange-9;
      }
      &.type-info {
        background: v.$c-blue-9;
      }
      notic-content {
      }
    }
  }
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
