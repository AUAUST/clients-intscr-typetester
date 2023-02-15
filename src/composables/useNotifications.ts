import { computed, reactive } from "vue";
import type { ComputedRef } from "vue";

// `ntf-${Math.random().toString(36).substring(2, 9)}`

class Notification {
  id: string;
  type: "info" | "success" | "error" | "warning";
  message: string;

  constructor({
    type = "info",
    message = "No message provided.",
  }: {
    type?: "info" | "success" | "error" | "warning";
    message?: string;
  }) {
    this.id = `ntf-${Math.random().toString(36).substring(2, 9)}`;
    this.type = type;
    this.message = message;
  }
}

class NotificationsData {
  loading: ComputedRef<boolean>;
  notifications: Notification[];
  titles: Record<"info" | "success" | "error" | "warning", string>;

  constructor() {
    this.loading = computed(() => this.notifications.length > 0);
    this.notifications = reactive([]);
    this.titles = {
      info: "Info",
      success: "Success",
      error: "Error",
      warning: "Warning",
    };
  }

  sendNotification({
    type = "info",
    message = "No message provided.",
    expires,
  }: {
    type?: "info" | "success" | "error" | "warning";
    message?: string;
    expires?: boolean;
  }) {
    const notification = new Notification({ type, message });
    this.notifications.push(notification);
    if (expires) {
      setTimeout(() => {
        this.deleteNotification(notification.id);
      }, 5000);
    }
    console.group(`Notification: ${notification.id}`);
    switch (type) {
      case "info":
        console.info(message);
        break;
      case "success":
        console.log(message);
        break;
      case "error":
        console.error(message);
        break;
      case "warning":
        console.warn(message);
        break;
    }
    console.groupEnd();
    return notification.id;
  }
  deleteNotification(id: string) {
    this.notifications.splice(
      this.notifications.findIndex((notification) => notification.id === id),
      1
    );
    return this;
  }
}

export const notificationsData = new NotificationsData();
