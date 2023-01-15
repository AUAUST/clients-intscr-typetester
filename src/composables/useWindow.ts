import { localStorageData } from "./useLocalStorage";
import { reactive } from "vue";

type scaleObjectType = {
  sideBarHideable: boolean;
  sideBarHidden: boolean;
  currentScale: string;
  height: number;
  width: number;
};
type brightessObjectType = {
  className: string;
  userSelected: null | string;
  browserDefault: string;
};
class WindowDataClass {
  size: scaleObjectType;
  brightness: brightessObjectType;

  constructor() {
    const browserDefault = this.getBrowserDefault();
    this.brightness = reactive({
      get userSelected() {
        const key = localStorageData.get("userSelectedBrightness");
        if (key.exists && typeof key.value === "string") {
          return key.value;
        }
        return null;
      },
      set userSelected(value) {
        localStorageData.set("userSelectedBrightness", value);
      },
      get className() {
        const userSelected = this.userSelected;
        if (userSelected) {
          return userSelected;
        }
        return this.browserDefault;
      },
      browserDefault: browserDefault,
    });
    this.size = reactive({
      height: this.getViewportHeight(),
      width: this.getViewportWidth(),
      currentScale: this.getScaleClassName(),
      sideBarHideable: this.isSideBarHideable(),
      sideBarHidden: false,
    });
  }
  initialize() {
    window.onresize = () => {
      this.size.height = this.getViewportHeight();
      this.size.width = this.getViewportWidth();
      this.size.currentScale = this.getScaleClassName();
      this.size.sideBarHideable = this.isSideBarHideable();
    };
    window.matchMedia("(prefers-color-scheme: dark)").onchange = () => {
      this.brightness.browserDefault = this.getBrowserDefault();
    };
    return this;
  }
  toggleSideBar(force?: "open" | "close") {
    if (force) {
      switch (force) {
        case "open":
          this.size.sideBarHidden = false;
          break;
        case "close":
          this.size.sideBarHidden = true;
          break;
      }
    } else {
      this.size.sideBarHidden = !this.size.sideBarHidden;
    }
    return this.size.sideBarHidden;
  }
  getScaleObject() {
    const sizes = {
      order: ["view-x-narrow", "view-narrow", "view-normal"],
      data: {
        "view-x-narrow": {
          maxWidth: 340,
          sideBarHideable: true,
        },
        "view-narrow": {
          maxWidth: 800,
          sideBarHideable: true,
        },
        "view-normal": {
          maxWidth: -1,
          sideBarHideable: false,
        },
      },
    };
    const width = this.getViewportWidth();
    for (const sizeId of sizes.order) {
      if (width <= sizes.data[sizeId as keyof typeof sizes.data].maxWidth) {
        return {
          className: sizeId,
          sideBarHideable:
            sizes.data[sizeId as keyof typeof sizes.data].sideBarHideable,
        };
      }
    }
    return {
      className: "view-normal",
      sideBarHideable: false,
    };
  }
  getViewportHeight() {
    return (
      window.innerHeight ??
      document.documentElement.clientHeight ??
      document.body.clientHeight
    );
  }
  getViewportWidth() {
    return (
      window.innerWidth ??
      document.documentElement.clientWidth ??
      document.body.clientWidth
    );
  }
  getScaleClassName() {
    return this.getScaleObject().className;
  }
  isSideBarHideable() {
    return this.getScaleObject().sideBarHideable;
  }
  getBrowserDefault() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "theme-dark";
    }
    return "theme-light";
  }
  setBrightness(brightness: string | null) {
    if (brightness) {
      if (this.brightness.userSelected !== brightness) {
        switch (brightness.toLowerCase()) {
          case "theme-dark":
          case "dark":
            this.brightness.userSelected = "theme-dark";
            break;
          case "theme-light":
          case "light":
            this.brightness.userSelected = "theme-light";
            break;
          default:
            this.brightness.userSelected = null;
            break;
        }
      }
    } else {
      this.brightness.userSelected = null;
    }
    return this;
  }
}
export const windowData = new WindowDataClass().initialize();
