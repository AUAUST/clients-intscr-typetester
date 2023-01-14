import { reactive, watch } from "vue";

type scaleObjectType = {
  currentScale: string;
  height: number;
  width: number;
};
type brightessObjectType = {
  className: string;
  userSelected: null | string;
};
class WindowDataClass {
  size: scaleObjectType;
  brightness: brightessObjectType;

  constructor() {
    this.brightness = reactive({
      userSelected: null,
      className: this.getBrightnessClassName(),
    });
    this.size = reactive({
      height: this.getViewportHeight(),
      width: this.getViewportWidth(),
      currentScale: this.getScaleClassName(),
    });
  }
  initialize() {
    window.onresize = () => {
      this.size.height = this.getViewportHeight();
      this.size.width = this.getViewportWidth();
      this.size.currentScale = this.getScaleClassName();
    };
    window.matchMedia("(prefers-color-scheme: dark)").onchange = () => {
      this.brightness.className = this.getBrightnessClassName();
    };
    return this;
  }
  getViewportHeight() {
    // this.listenToResize();
    return (
      window.innerHeight ??
      document.documentElement.clientHeight ??
      document.body.clientHeight
    );
  }
  getViewportWidth() {
    // this.listenToResize();
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
    let className = "view-normal";
    let sideBarHideable = false;
    for (const sizeId of sizes.order) {
      if (
        this.getViewportWidth() <=
        sizes.data[sizeId as keyof typeof sizes.data].maxWidth
      ) {
        className = sizeId;
        sideBarHideable =
          sizes.data[sizeId as keyof typeof sizes.data].sideBarHideable;
        break;
      }
    }
    return {
      className: className,
      sideBarHideable: sideBarHideable,
    };
  }
  getScaleClassName() {
    return this.getScaleObject().className;
  }
  getScaleSideBarHideable() {
    return this.getScaleObject().sideBarHideable;
  }
  getBrightnessClassName() {
    if (this?.brightness?.userSelected) {
      // console.log(this.brightness.userSelected);
      return this.brightness.userSelected;
    }
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
    } else {
      this.brightness.userSelected = null;
    }
    this.brightness.className = this.getBrightnessClassName();
    return this;
  }
}
export const windowData = new WindowDataClass().initialize();

// function update() {
//   // const scaleBefore = windowData.currentScale;
//   const windowSize = getWindowSize();

//   windowData.width = windowSize.width;
//   windowData.height = windowSize.height;
//   windowData.currentScale = windowSize.currentScale;
//   windowData.currentScaleIndex = windowSize.currentScaleIndex;
//   windowData.brightness = brightness.getBrightness();
// }

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
// //     // console.log(windowData.brightnessOverride);
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
