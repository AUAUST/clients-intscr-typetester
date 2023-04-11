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
      value: { [key: number]: string };
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
        value: {},
      };
    },
    alphanum: {
      title: "Alphanumeric",
      description:
        "Simple letters and numbers, no special characters and no accents.",
      value: {
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        65: "A",
        66: "B",
        // todo complete this
      },
    },
    ASCII: {
      title: "ASCII",
      description: "All the ASCII characters.",
      value: { 0: "NUL", 1: "SOH", 2: "STX", 3: "ETX", 4: "EOT", 5: "ENQ", 6: "ACK", 7: "BEL", 8: "BS", 9: "HT", 10: "LF", 11: "VT", 12: "FF", 13: "CR", 14: "SO", 15: "SI", 16: "DLE", 17: "DC1", 18: "DC2", 19: "DC3", 20: "DC4", 21: "NAK", 22: "SYN", 23: "ETB", 24: "CAN", 25: "EM", 26: "SUB", 27: "ESC", 28: "FS", 29: "GS", 30: "RS", 31: "US", 32: "space", 33: "!", 34: '"', 35: "#", 36: "$", 37: "% ", 38: " & ", 39: "'", 40: "(", 41: ")", 42: "*", 43: "+", 44: ",", 45: "-", 46: ".", 47: "/", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 58: ":", 59: ";", 60: "<", 61: "=", 62: ">", 63: "?", 64: "@", 65: "A", 66: "B", 67: "C", 68: "D", 69: "E", 70: "F", 71: "G", 72: "H", 73: "I", 74: "J", 75: "K", 76: "L", 77: "M", 78: "N", 79: "O", 80: "P", 81: "Q", 82: "R", 83: "S", 84: "T", 85: "U", 86: "V", 87: "W", 88: "X", 89: "Y", 90: "Z", 91: "[", 92: "", 93: "]", 94: "^", 95: "_", 96: "`", 97: "a", 98: "b", 99: "c", 100: "d", 101: "e", 102: "f", 103: "g", 104: "h", 105: "i", 106: "j", 107: "k", 108: "l", 109: "m", 110: "n", 111: "o", 112: "p", 113: "q", 114: "r", 115: "s", 116: "t", 117: "u", 118: "v", 119: "w", 120: "x", 121: "y", 122: "z", 123: "{", 124: "|", 125: "}", 126: "~", 127: "DEL" }
    }, // prettier-ignore
    coder: {
      title: "Coder's Characters Set",
      description: "The most common characters used in programming languages.",
      extends: "alphanum",
      value: {},
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
