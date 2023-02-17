import { computed, reactive } from "vue";
import type { ComputedRef } from "vue";

// `ntf-${Math.random().toString(36).substring(2, 9)}`

class Notification {
  id: string;
  type: "info" | "success" | "error" | "warning";
  message: string;
  expires: boolean;

  constructor({
    type = "info",
    message = "No message provided.",
    expires = true,
  }: {
    type?: "info" | "success" | "error" | "warning";
    message?: string;
    expires?: boolean;
  }) {
    this.id = `ntf-${Math.random().toString(36).substring(2, 9)}`;
    this.type = type;
    this.message = message;
    this.expires = expires;
  }
}

class NotificationsData {
  loading: ComputedRef<boolean>;
  notifications: Notification[];
  loadingSources: string[];
  titles: Record<"info" | "success" | "error" | "warning", string>;

  constructor() {
    this.loading = computed(() => this.loadingSources.length > 0);
    this.notifications = reactive([]);
    this.titles = {
      info: "Info",
      success: "Success",
      error: "Error",
      warning: "Warning",
    };
    this.loadingSources = reactive([]);
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
    if (expires === undefined) {
      if (["warning", "error"].includes(type)) expires = false;
      else expires = true;
    }
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
  startLoading(source?: string) {
    if (!source) source = `src-${Math.random().toString(36).substring(2, 9)}`;
    this.loadingSources.push(source);
    return source;
  }
  stopLoading(source: string) {
    this.loadingSources.splice(this.loadingSources.indexOf(source), 1);
    return this;
  }
}

export const notificationsData = new NotificationsData();
