import { reactive } from "vue";

class Notification {
  id: string;
  message: string;
  type: "error" | "warning" | "info" | "success";
  expires: number | false;

  constructor({
    message = "No message to show.",
    type = "info",
    id = `ntf-${Math.random().toString(36).substring(2, 9)}`,
    expires = false,
  }: {
    message: string;
    type: "error" | "warning" | "info" | "success";
    id?: string;
    expires?: number | false;
  }) {
    this.id = id;
    this.message = message;
    this.type = type;
    if (typeof expires === "number") {
      if (expires < 0) {
        expires = 0;
        console.warn(
          "Inputed a negative number for `Notification.expires`. Using 0 instead."
        );
      }
      this.expires = expires;
    } else {
      this.expires = false;
    }
  }
}

export const notificationsData = reactive({
  loading: false,
  list: [] as Notification[],
  new: function ({
    message,
    type,
    id,
  }: {
    message: string;
    type: "error" | "warning" | "info" | "success";
    id?: string;
  }) {
    try {
      const notification = new Notification({
        message: message,
        type: type,
        id: id ?? undefined,
      });
      this.list.push(notification);
      return notification.id;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
});
