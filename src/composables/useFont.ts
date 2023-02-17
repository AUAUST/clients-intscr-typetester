// import vue's reaction function
import { reactive } from "vue";

import { createId } from "~/modules/utils";

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
        this.handleFontFile(file);
      }
    } else {
      notificationsData.sendNotification({
        type: "error",
        message:
          "Could not find the font input element. Try reloading the page.",
      });
    }
  }
  handleFontFile(file: File) {
    const reader = new FileReader();
    reader.onload = (event) => {
      // Imported Font File
      const fontName = createId("iff");

      const fontFace = new FontFace(fontName, `url(${reader.result})`);
      fontFace
        .load()
        .then((loadedFont) => {
          (document as any).fonts.add(loadedFont);
          document.body.style.setProperty("--f-user-loaded", fontName);
        })
        .catch((error) => {
          notificationsData.sendNotification({
            type: "error",
            message: `Could not load the file. Is it a valid font ?`,
            forConsole: [error, file],
          });
        });
      // const fontName = file.name;
      // // this.fonts[Date.now()] = {
      // //   name: fontName,
      // //   fileName: file.name,
      // //   type: fontType,
      // //   file: file,
      // // };

      // console.log(file, reader);
    };
    reader.readAsDataURL(file);
  }
}

export const fonts = new FontsData();
