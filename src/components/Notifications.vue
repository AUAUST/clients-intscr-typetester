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
          `${notification.fading.value ? '' : 'visible'}`,
        ]"
      >
        <notif-content>
          <h6>
            {{ notificationsData.titles[notification.type] }}
          </h6>
          <p class="text-small">{{ notification.message }}</p>
        </notif-content>
        <notif-close>
          <Button
            title="Close notification."
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

    width: calc(100% + 10px);
    padding-left: 10px;

    overflow-x: hidden;
    notif-item {
      display: flex;
      justify-content: space-between;

      width: 100%;

      margin-bottom: v.$gap-small-normal;
      border-radius: v.$radius-small;

      transition: all 0.6s cubic-bezier(0.36, 0, 0.66, -0.225);

      &:not(.visible) {
        transform: translateX(105%);
        pointer-events: none;
      }
      &.visible {
        transform: translateX(0);

        animation: notif-item-appear 0.3s ease-out;
        @keyframes notif-item-appear {
          0% {
            transform: scale(0) translateY(-100%);
          }
          100% {
            transform: scale(1) translateY(0);
          }
        }
      }

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

      notif-content {
        h6 {
          padding: v.$gap-small-half v.$gap-small-normal 0 v.$gap-small-normal;
        }
        p {
          padding: 0 v.$gap-small-normal v.$gap-small-half v.$gap-small-normal;
        }
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
