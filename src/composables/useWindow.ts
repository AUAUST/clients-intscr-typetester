import { localStorageData } from "./useLocalStorage";
import { reactive } from "vue";

type scaleObjectType = {
  sideBarHideable: boolean;
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
        if (this?.userSelected) {
          return this.userSelected;
        }
        return this.browserDefault;
      },
      browserDefault: browserDefault,
    });
    this.size = reactive({
      height: this.getViewportHeight(),
      width: this.getViewportWidth(),
      currentScale: this.getScaleClassName(),
      sideBarHideable: this.getScaleSideBarHideable(),
    });
  }
  initialize() {
    window.onresize = () => {
      this.size.height = this.getViewportHeight();
      this.size.width = this.getViewportWidth();
      this.size.currentScale = this.getScaleClassName();
      this.size.sideBarHideable = this.getScaleSideBarHideable();
    };
    window.matchMedia("(prefers-color-scheme: dark)").onchange = () => {
      this.brightness.browserDefault = this.getBrowserDefault();
    };
    return this;
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
  getScaleObject() {
    const sizes = {
      order: ["view-x-narrow", "view-narrow", "view-normal"],
      data: {
        "view-x-narrow": {
          maxWidth: 320,
          sideBarHideable: true,
        },
        "view-narrow": {
          maxWidth: 640,
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
  getScaleClassName() {
    return this.getScaleObject().className;
  }
  getScaleSideBarHideable() {
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
      switch (brightness.toLowerCase()) {
        case "theme-dark":
        case "dark":
          // localStorageData.set("userSelectedBrightness", "theme-dark");
          this.brightness.userSelected = "theme-dark";
          break;
        case "theme-light":
        case "light":
          // localStorageData.set("userSelectedBrightness", "theme-light");
          this.brightness.userSelected = "theme-light";
          break;
        default:
          // localStorageData.set("userSelectedBrightness", null);
          this.brightness.userSelected = null;
          break;
      }
    } else {
      this.brightness.userSelected = null;
      // localStorageData.set("userSelectedBrightness", null);
    }
    // this.brightness.className = this.getBrightnessClassName();
    return this;
  }
}
export const windowData = new WindowDataClass().initialize();

// const initialState = getWindowSize();
// // const documentBody = document.body;

// window.addEventListener("resize", update);
// window
//   .matchMedia("(prefers-color-scheme: dark)")
//   .addEventListener("change", (event) => {
//     windowData.brightness = brightness.getBrightness();
//   });

// function getPreferredBrightness() {
//   if (
//     window.matchMedia &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches
//   ) {
//     return "theme-dark";
//   } else {
//     return "theme-light";
//   }
// }
// type brightnessType = {
//   brightnessOverride: string | null;
//   getBrightness: Function;
// };
// // const brightness = shallowReactive({
// //   getBrightness: function (brightness?: string) {
// //     if (brightness) {
// //       switch (brightness) {
// //         case "theme-dark":
// //           this.brightnessOverride = "theme-dark";
// //           break;
// //         case "theme-light":
// //           this.brightnessOverride = "theme-light";
// //           break;
// //         default:
// //           this.brightnessOverride = null;
// //           break;
// //       }
// //     }
// //     let result: string;
// //     if (this.brightnessOverride) {
// //       result = this.brightnessOverride;
// //     } else {
// //       result = getPreferredBrightness();
// //     }
// //     return result;
// //   },
// // };)

// type windowDataTypes = {
//   width: number;
//   height: number;
//   currentScale: string | undefined;
//   currentScaleIndex: number;
//   brightness: string;
//   getBrightness: Function;
// };
// export const windowData: windowDataTypes = reactive({
//   width: initialState.width,
//   height: initialState.height,
//   currentScale: initialState.currentScale,
//   currentScaleIndex: initialState.currentScaleIndex,
//   sideBarHideable: initialState.sideBarHideable,
//   brightness: getPreferredBrightness(),
//   getBrightness: brightness.getBrightness,
// });

// update();
