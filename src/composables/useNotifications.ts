import { computed, reactive, ref } from "vue";
import type { ComputedRef, Ref } from "vue";
import { createId } from "~/modules/utils";

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
    this.id = createId("ntf");
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
    const notificationTypes = {
      success: {
        title: "Success",
        function: console.log,
        style: {
          color: "black",
          backgroundColor: "#7fff7f",
        },
      },
      info: {
        title: "Info",
        function: console.info,
        style: {
          color: "black",
          backgroundColor: "#696cfc",
        },
      },
      warning: {
        title: "Warning",
        function: console.warn,
        style: {
          color: "black",
          backgroundColor: "#f79f57",
        },
      },
      error: {
        title: "Error",
        function: console.error,
        style: {
          color: "black",
          backgroundColor: "#f47d78",
        },
      },
    };
    const notification = new Notification({ type, message, expires });
    this.listed.push(notification);
    if (expires) {
      setTimeout(() => {
        this.deleteNotification(notification.id);
      }, 5000);
    }
    const data = notificationTypes[type];
    console.groupCollapsed(
      `%c${data.title}%c Notification %c${new Date().toLocaleTimeString()}`,
      `color: ${data.style.color}; background-color: ${data.style.backgroundColor}; font-weight: normal; padding: 1px 5px; border-radius: 3px`,
      // data.style,
      "color: unset; font-weight: normal; padding: 0px 5px;",
      "color: gray; font-weight: normal; font-size: smaller"
    );
    console.log(`Notification ID: "${notification.id}"`);

    data.function(message);
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
    if (!source) source = createId("src");
    this.loadingSources.push(source);
    return source;
  }
  stopLoading(source: string) {
    this.loadingSources.splice(this.loadingSources.indexOf(source), 1);
    return this;
  }
}

export const notifications = new NotificationsData();
