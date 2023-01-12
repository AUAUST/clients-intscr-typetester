import { reactive } from "vue";

function getWindowData() {
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
    windowWidth: windowSize.width,
    windowHeight: windowSize.height,
    currentScale: currentScale,
    currentScaleIndex: currentScaleObject.order,
    sideBarHideable: currentScaleObject.sideBarHideable,
  };
}

function update() {
  const scaleBefore = responsive.currentScale;
  const windowData = getWindowData();

  responsive.windowWidth = windowData.windowWidth;
  responsive.windowHeight = windowData.windowHeight;
  responsive.currentScale = windowData.currentScale;
  responsive.currentScaleIndex = windowData.currentScaleIndex;

  if (
    scaleBefore &&
    responsive.currentScale &&
    responsive.currentScale !== scaleBefore
  ) {
    documentBody.classList.remove(scaleBefore);
    documentBody.classList.add(responsive.currentScale);
  } else if (responsive.currentScale) {
    documentBody.classList.add(responsive.currentScale);
  }
}

const initialState = getWindowData();
const documentBody = document.body;

window.addEventListener("resize", update);

export const responsive = reactive({
  windowWidth: initialState.windowWidth,
  windowHeight: initialState.windowHeight,
  currentScale: initialState.currentScale,
  currentScaleIndex: initialState.currentScaleIndex,
  sideBarHideable: initialState.sideBarHideable,
});

update();
