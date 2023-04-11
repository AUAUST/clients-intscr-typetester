// import vue's reaction function
import { reactive, ref } from "vue";
import type { Ref } from "vue";

import { createId } from "~/modules/utils";

import { notifications } from "./useNotifications";

// import { decompress } from "wawoff2";
import * as fontkit from "fontkit";
import type { Font } from "fontkit";

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
  currentFont: Ref<Font | undefined>;

  constructor() {
    this.list = reactive([]);
    this.currentFont = ref(undefined);
  }

  openFileDialog() {
    if (this.fontInput) {
      this.fontInput.click();
    } else {
      notifications.sendNotification({
        type: "error",
        message:
          "Could not find the font input element. Try reloading the page.",
      });
    }
  }

  async handleNewFontFile(input: File | File[] | FileList | null) {
    if (input) {
      let files: File[] = [];
      if (Array.isArray(input)) {
        files = input;
      } else if (input instanceof FileList) {
        files = Array.from(input);
      } else {
        files = [input];
      }
      for (const file of files) {
        if (
          !file.name.match(/\.(ttf|otf|woff|woff2|ttc|dfont)$/) &&
          !file.type.match(/^font\/\w+/)
        ) {
          notifications.sendNotification({
            type: "error",
            message: `The file you selected appears not to be a font.`,
            forConsole: file,
            expires: true,
          });
          return;
        }

        const buffer = await file.arrayBuffer();
        const font = fontkit.create(new Uint8Array(buffer) as Buffer);

        notifications.sendNotification({
          type: "success",
          message: `Font loaded: ${font.familyName}`,
          expires: true,
        });
      }
    } else {
      notifications.sendNotification({
        type: "error",
        message: `No file selected.`,
        expires: true,
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
    notifications.sendNotification({
      type: "warning",
      message: `Database is to be implemented.`,
      expires: true,
    });
  }

  async handleFontFile(file: File) {
    console.log("handleFontFile", file);
    // const loadingId = notifications.startLoading();
    // const reader = new FileReader();
    // reader.onload = (event) => {
    //   const fontFace = this.loadFontFace({
    //     dataUrl: event.target?.result as string,
    //   });
    //   fontFace.then((result) => {
    //     if (result.valid) {
    //       notifications.sendNotification({
    //         type: "success",
    //         message: `Font loaded successfully. Starting to process it...`,
    //         forConsole: result,
    //       });
    //       this.storeFontToVue({
    //         id: result.id,
    //         file: file,
    //       });
    //       this.storeFontToDatabase({
    //         id: result.id,
    //         file: file,
    //       });
    //     }
    //     notifications.stopLoading(loadingId);
    //   });
    // };
    // reader.readAsDataURL(file);
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
        notifications.sendNotification({
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
  characterData(id: string | number) {
    function getStringChar(char: string) {
      const id = char.charCodeAt(0);
      return {
        unicode: id,
        lowerCase: char.toLowerCase(),
        upperCase: char.toUpperCase(),
        isAscii: id < 128,
      };
    }
    function getNumberChar(id: number) {
      const char = String.fromCharCode(id);
      return {
        unicode: id,
        lowerCase: char.toLowerCase(),
        upperCase: char.toUpperCase(),
        isAscii: id < 128,
      };
    }
    if (typeof id === "string") {
      if (id !== " ") {
        id = id.trim();
      }
      if (id.length === 1) {
        return getStringChar(id);
      } else {
        const chars = [];
        for (const char of Array.from(id.trim())) {
          chars.push(getStringChar(char));
        }
        return chars;
      }
    }
    if (typeof id === "number") {
      id = Math.floor(id);
      return getNumberChar(id);
    }
    return false;
  }
  static characterSets: {
    [key: string]: {
      title: string;
      description: string;
      extends?: keyof typeof FontsData.characterSets;
      value: number[];
    };
  } = {
    get currentFont() {
      if (fonts.currentFont.value) {
        return {
          title: fonts.currentFont.value.familyName,
          description: `The current font.`,
          value: fonts.currentFont.value.characterSet,
        };
      }
      return {
        title: "No font",
        description: "No font selected.",
        value: [],
      };
    },
    alphanum: {
      title: "Alphanumeric",
      description:
        "Simple letters and numbers, no special characters and no accents.",
      // convert string to array of char codes
      value: Array.from(
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      ).map((c) => c.charCodeAt(0)),
    },
    ASCII: {
      title: "ASCII",
      description: "All the ASCII characters.",
      value: Array.from(Array(127).keys()).map((i) => i + 1), // array of 1 to 127
    },
    coder: {
      title: "Programmer",
      description: "The most common characters used in programming languages.",
      extends: "alphanum",
      value: Array.from("()[]{}<>!@#$%^&*+=-|\\/?.,;:'\"`~").map((c) =>
        c.charCodeAt(0)
      ),
    },
  };
  // id: arg must be a key of characterSets
  getFinalCharSet(id: keyof typeof FontsData.characterSets) {
    const data = FontsData.characterSets[id];
    if (data.extends) {
      return {
        ...FontsData.characterSets[data.extends].value,
        ...data.value,
      };
    }
    return data.value;
  }
}

export const fonts = new FontsData();
