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
  notif-loader {
    justify-content: center;
    align-items: center;
    height: 100%;
    div {
      display: inline-block;
      width: 80px;
      height: 80px;
      div {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 50%;
        background: conic-gradient(black 0 33%, transparent 33% 100%);

        animation: notif-loader-rotate 1.2s infinite;

        @keyframes notif-loader-rotate {
          0% {
            transform: rotate(0turn);
          }
          100% {
            transform: rotate(1turn);
          }
        }
      }
      div:nth-child(1) {
        animation-delay: 0s;
      }
      div:nth-child(2) {
        animation-delay: -0.4s;
      }
      div:nth-child(3) {
        animation-delay: -0.8s;
      }
    }
  }
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
