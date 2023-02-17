// import vue's reaction function
import { reactive } from "vue";

import { notificationsData } from "./useNotifications";

class FontsData {
  fonts: {
    [i: number]: {
      name: string;
      fileName: string;
      type: string;
      file: File;
    };
  };
  fontInput: HTMLInputElement | undefined = undefined;
  constructor() {
    this.fonts = reactive({});
  }
  openFileDialog() {
    if (this.fontInput) {
      this.fontInput.click();
    } else {
      notificationsData.sendNotification({
        type: "error",
        message:
          "Could not find the font input element. Try reloading the page.",
      });
    }
  }
  fontInputChanged({ file }: { file: File }) {
    if (this.fontInput) {
      const files = this.fontInput.files;
      if (files) {
        const file = files[0];
        this.parseFontFile(file);
      }
    } else {
      notificationsData.sendNotification({
        type: "error",
        message:
          "Could not find the font input element. Try reloading the page.",
      });
    }
  }
  parseFontFile(file: File) {
    try
    const reader = new FileReader();
    reader.onload = (event) => {
      const fontName = file.name.split(".")[0];
      const fontType = file.name.split(".")[1];
      this.fonts[Date.now()] = {
        name: fontName,
        fileName: file.name,
        type: fontType,
        file: file,
      };
      const font = new FontFace(fontName, `url(${reader.result})`);
      font.load().then((loadedFont) => {
        (document as any).fonts.add(loadedFont);
        document.body.style.setProperty("--loadedFont", fontName);
      });
      console.log(this.fonts);
      console.log(file);
    };
    reader.readAsDataURL(file);
  }
}

export const fonts = new FontsData();
