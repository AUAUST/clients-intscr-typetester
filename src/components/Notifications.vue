<template>
  <aside id="notifications-container">
    <notif-loader :class="{ loading: notificationsData.loading.value }">
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
        :class="[
          `type-${notification.type}`,
          `${notification.expires ? 'expires' : ''}`,
        ]"
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
  right: 0;
  width: 300px;
  height: fit-content;
  max-height: 100vh;
  z-index: 100;
  overflow-y: auto;
  display: flex;
  align-items: end;
  flex-direction: column;
  padding: v.$gap-small-normal;
  notif-loader {
    display: none;
    &.loading {
      display: block;
    }

    --background-color: #{v.$c-gray-4};
    --spinner-color: #{v.$c-gray-9};
    $spinner-size: 50px;

    width: $spinner-size;
    height: $spinner-size;
    padding: v.$gap-small-normal;

    border-radius: v.$radius-small;
    background-color: var(--background-color);
    div {
      position: relative;
      width: 100%;
      height: 100%;

      animation: notif-loader-rotate-full 1s ease infinite -0.5s;

      @keyframes notif-loader-rotate-full {
        0% {
          transform: rotate(0turn);
        }
        100% {
          transform: rotate(1turn);
        }
      }
      @keyframes notif-loader-comeAndGo-full {
        0% {
          transform: rotate(0turn);
        }
        50% {
          transform: rotate(0.6turn);
        }
        100% {
          transform: rotate(0turn);
        }
      }
      @keyframes notif-loader-comeAndGo-half {
        0% {
          transform: rotate(0turn);
        }
        50% {
          transform: rotate(0.3turn);
        }
        100% {
          transform: rotate(0turn);
        }
      }

      div {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 50%;
        background: conic-gradient(
          var(--spinner-color) 0 33%,
          transparent 33% 100%
        );
      }
      div:nth-child(1) {
        animation: notif-loader-comeAndGo-half 3s ease infinite;
      }
      div:nth-child(2) {
        animation: notif-loader-comeAndGo-full 3s ease infinite;
      }
      div:nth-child(3) {
        animation: notif-loader-comeAndGo-half 0s ease infinite;
        $spinner-weight: calc($spinner-size / 2 - v.$gap-small-normal * 2);
        background: radial-gradient(
            var(--background-color) 0%,
            var(--background-color) $spinner-weight,
            transparent $spinner-weight,
            transparent 100%
          ),
          conic-gradient(var(--spinner-color) 0 33%, transparent 33% 100%);
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
