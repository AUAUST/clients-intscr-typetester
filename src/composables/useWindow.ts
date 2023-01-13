import { reactive } from "vue";

function getBrightness() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "theme-dark";
  }
  return "theme-light";
}
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
  const currentScaleObject =
    config.scales[currentScale as keyof typeof config.scales];
  return {
    width: windowSize.width,
    height: windowSize.height,
    currentScale: currentScale,
    currentScaleIndex: currentScaleObject.order,
    sideBarHideable: currentScaleObject.sideBarHideable,
    brightness: getBrightness(),
  };
}

function update() {
  // const scaleBefore = windowData.currentScale;
  const windowSize = getWindowSize();

  windowData.width = windowSize.width;
  windowData.height = windowSize.height;
  windowData.currentScale = windowSize.currentScale;
  windowData.currentScaleIndex = windowSize.currentScaleIndex;
}

const initialState = getWindowSize();
// const documentBody = document.body;

window.addEventListener("resize", update);
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    windowData.brightness = event.matches ? "theme-dark" : "theme-light";
  });

export const windowData = reactive({
  width: initialState.width,
  height: initialState.height,
  currentScale: initialState.currentScale,
  currentScaleIndex: initialState.currentScaleIndex,
  sideBarHideable: initialState.sideBarHideable,
  brightness: initialState.brightness,
});

update();
