// import vue's reaction function
import { reactive } from "vue";

import { createId } from "~/modules/utils";

import { notifications } from "./useNotifications";

import opentype from "opentype.js";

type FontOverview = {
  name: string;
  fileName: string;
  lastModified: number;
  type: string;
  id: string;
};

class FontsData {
  list: FontOverview[];
  fontInput: HTMLInputElement | undefined = undefined;
  constructor() {
    this.list = reactive([]);
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

  storeFontToVue({ id, file }: { id: string; file: File }) {
    this.list.push({
      name: file.name,
      fileName: file.name,
      type: file.type,
      lastModified: file.lastModified,
      id: id,
    });
  }

  storeFontToDatabase({ id, file }: { id: string; file: File }) {
    notificationsData.sendNotification({
      type: "warning",
      message: `Database is to be implemented.`,
      expires: true,
    });
  }

  handleFontFile(file: File) {
    const loadingId = notificationsData.startLoading();
    const reader = new FileReader();
    reader.onload = (event) => {
      const fontFace = this.loadFontFace({
        dataUrl: event.target?.result as string,
      });
      fontFace.then((result) => {
        if (result.valid) {
          notificationsData.sendNotification({
            type: "success",
            message: `Font loaded successfully. Starting to process it...`,
            forConsole: result,
          });
          this.storeFontToVue({
            id: result.id,
            file: file,
          });
          this.storeFontToDatabase({
            id: result.id,
            file: file,
          });
        }
        notificationsData.stopLoading(loadingId);
      });
    };
    reader.readAsDataURL(file);
  }

  async loadFontFace({
    id = createId("iff"),
    dataUrl,
  }: {
    id?: string;
    dataUrl: string;
  }) {
    let isValid = false;

    type FontUploadSuccess = {
      valid: true;
      id: string;
      dataUrl: string;
    };
    type FontUploadFailure = {
      valid: false;
    };

    const fontFace = new FontFace(id, `url(${dataUrl})`);

    await fontFace
      .load()
      .then((loadedFont) => {
        (document as any).fonts.add(loadedFont);
        isValid = true;
      })
      .catch((error) => {
        notificationsData.sendNotification({
          type: "error",
          message: `Could not load the file. Is it a valid font ?`,
          forConsole: [error, dataUrl],
        });
      });
    if (isValid) {
      return {
        valid: true,
        id,
        dataUrl,
      } as FontUploadSuccess;
    }
    return {
      valid: false,
    } as FontUploadFailure;
  }
}

export const fonts = new FontsData();
