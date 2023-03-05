import { computed, reactive, ref } from "vue";
import type { ComputedRef, Ref } from "vue";

// `ntf-${Math.random().toString(36).substring(2, 9)}`

class Notification {
  id: string;
  type: "info" | "success" | "error" | "warning";
  message: string;
  expires: boolean;
  fading: { value: boolean };

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
    this.fading = reactive({
      value: false,
    });
  }
}

class NotificationsData {
  loading: ComputedRef<boolean>;
  listed: Notification[];
  loadingSources: string[];
  titles: Record<"info" | "success" | "error" | "warning", string>;

  constructor() {
    this.loading = computed(() => this.loadingSources.length > 0);
    this.listed = reactive([]);
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
    forConsole = undefined,
  }: {
    type?: "info" | "success" | "error" | "warning";
    message?: string;
    expires?: boolean;
    forConsole?: any;
  }) {
    if (expires === undefined) {
      if (["warning", "error"].includes(type)) expires = false;
      else expires = true;
    }
    const notification = new Notification({ type, message, expires });
    this.listed.push(notification);
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
    if (forConsole !== undefined) {
      console.log("Additional information:", forConsole);
    }
    console.groupEnd();
    return notification.id;
  }
  deleteNotification(id: string) {
    const notification = this.listed.find(
      (notification) => notification.id === id
    );
    if (notification) notification.fading.value = true;

    setTimeout(() => {
      const index = this.listed.findIndex(
        (notification) => notification.id === id
      );
      if (index > -1) this.listed.splice(index, 1);
    }, 600);
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

export const notifications = new NotificationsData();
