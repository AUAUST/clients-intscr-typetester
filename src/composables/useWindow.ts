import { reactive, shallowReactive } from "vue";

function getWindowSize() {
  type configTypes = {
    scales: {
      [i: string]: {
        order: number;
        maxWidth?: number;
        sideBarHideable?: boolean;
      };
    };
  };
  const config: configTypes = {
    scales: {
      "view-x-narrow": {
        order: 0,
        maxWidth: 320,
        sideBarHideable: true,
      },
      "view-narrow": {
        order: 1,
        maxWidth: 600,
        sideBarHideable: true,
      },
      "view-normal": {
        order: 2,
        sideBarHideable: false,
      },
    },
  };
  const windowSize = {
    width:
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth,
    height:
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight,
  };
  const currentScale = Object.keys(config.scales)
    .sort((a, b) => {
      return config.scales[a].order - config.scales[b].order;
    })
    .find((scaleName) => {
      const maxWidth = config.scales[scaleName].maxWidth;
      if (maxWidth === undefined) return true;
      return maxWidth > windowSize.width;
    });
  const currentScaleData =
    config.scales[currentScale as keyof typeof config.scales];
  return {
    width: windowSize.width,
    height: windowSize.height,
    currentScale: currentScale,
    currentScaleIndex: currentScaleData.order,
    sideBarHideable: currentScaleData.sideBarHideable,
  };
}

class WindowDataClass {
  brightness: string;
  listeningToBrightness: boolean;
  userSelectedBrightness: string | null;

  constructor() {
    this.listeningToBrightness = false;
    this.userSelectedBrightness = null;
    this.brightness = this.getWindowBrightness();
  }
  getWindowBrightness() {
    if (window.matchMedia) {
      if (!this.listeningToBrightness) {
        this.listeningToBrightness = true;
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .addEventListener("change", () => this.updateBrightness());
      }
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "theme-dark";
      }
    }
    return "theme-light";
  }
  updateBrightness() {
    if (this.userSelectedBrightness) {
      this.brightness = this.userSelectedBrightness;
    } else {
      this.brightness = this.getWindowBrightness();
    }
    return this;
  }
  setBrightness(brightness: string | null) {
    if (brightness) {
      switch (brightness.toLowerCase()) {
        case "theme-dark":
        case "dark":
          this.userSelectedBrightness = "theme-dark";
          break;
        case "theme-light":
        case "light":
          this.userSelectedBrightness = "theme-light";
          break;
        default:
          this.userSelectedBrightness = null;
          break;
      }
    } else {
      this.userSelectedBrightness = null;
    }
    this.updateBrightness();
    console.log("----------------");
    console.log(brightness);
    console.log(this.userSelectedBrightness);
    console.log(this.brightness);
    console.log(this.listeningToBrightness);
    console.log(this.getWindowBrightness());
    return this;
  }
}
export const windowData = reactive(new WindowDataClass());

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
