// import vue's reaction function
import { reactive } from "vue";

import { localStorageData } from "./useLocalStorage";

class FontsData {
  fonts: { [i: number]: { name: string } };
  constructor() {
    this.fonts = reactive({
      1: {
        fileName: "Roboto-Regular.ttf",
        name: "Roboto",
      },
    });
  }
}

export const fontsData = new FontsData();

export function uploadFont() {
  const fileInput = document.getElementById("font-input");
  if (fileInput) {
    fileInput.click();
  }
}
