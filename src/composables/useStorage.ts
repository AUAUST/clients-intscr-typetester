import { reactive } from "vue";

class LocalStorage {
  storage: { [i: string]: any };
  constructor() {
    this.storage = reactive({});
  }
  get(key: string): { exists: boolean; value: unknown } {
    if (key) {
      // try to get from the cached/reactive storage
      let value: unknown = this.storage[key];
      // if it's undefined, try to get from the actual local storage
      if (value === undefined) {
        let JSONvalue = window.localStorage.getItem(key);
        // JSONvalue is either a JSON string or null
        if (typeof JSONvalue === "string") {
          value = JSON.parse(JSONvalue);
          this.storage[key] = value;
          return {
            exists: true,
            value: this.storage[key],
          };
        }
        // if it's null, the value doesn't exist
        return {
          exists: false,
          value: null,
        };
      }
      // if the value is defined, return it from cache
      return {
        exists: true,
        value: this.storage[key],
      };
    }
    // if the key is invalid
    return {
      exists: false,
      value: null,
    };
  }
  set(key: string, value: unknown) {
    if (key) {
      if (this.storage[key] !== value) {
        this.storage[key] = value;
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } else {
      console.error(
        `Tried to set a localStorage value with an invalid key: ${key}`
      );
    }
    return this;
  }
}

export const storage = new LocalStorage();
