import { markRaw, reactive, ref, computed } from "vue";
import type { Ref, ComputedRef } from "vue";

import { createId } from "~/modules/utils";

import { notifications } from "./useNotifications";

import * as fontkit from "fontkit";
import type { Font } from "fontkit";

declare global {
  interface FontFaceSet {
    add(font: FontFace): void;
  }
}

declare module "fontkit" {
  interface Font {
    variationAxes: {
      [key: string]: {
        name: string;
        min: number;
        default: number;
        max: number;
      };
    };
    namedVariations: {
      [key: string]: {
        [key: string]: number;
      };
    };
    getVariation(variations: { [key: string]: number }): Font;
  }
}

class FontOverview {
  id: string;
  familyName: string;
  subfamilyName: string;
  isVariable: boolean;
  font: Font;

  constructor(font: Font, id: string) {
    this.id = id;
    this.familyName = font.familyName;
    this.subfamilyName = font.subfamilyName;
    this.isVariable = (function () {
      if (font.variationAxes) {
        return Object.keys(font.variationAxes).length > 0;
      }
      return false;
    })();
    this.font = font;
  }
}

class FontsData {
  fontInput: HTMLInputElement | undefined = undefined;
  currentFont: Ref<Font | undefined>;

  storage: {
    [key: string]: FontOverview;
  } = {};

  constructor() {
    this.list = reactive([]);
    this.currentFont = ref(undefined);
  }

  getFont(id: string): FontOverview | undefined {
    return this.storage[id];
  }

  setFont(font: Font) {
    const id = createId("fnt");
    this.storage[id] = new FontOverview(font, id);
    return id;
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
      const loadingFont = notifications.startLoading();

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
          continue;
        }

        let font: fontkit.Font;
        const buffer = await file.arrayBuffer();

        try {
          font = fontkit.create(new Uint8Array(buffer) as Buffer);
        } catch (error) {
          notifications.sendNotification({
            type: "error",
            message: `Could not load the file. Is it a valid font ?`,
            forConsole: [error, file],
            expires: true,
          });
          continue;
        }

        fonts.currentFont.value = markRaw(font);

        const fontData = new DataView(buffer);
        const fontFace = new FontFace(font.familyName, fontData);
        await fontFace.load();

        document.fonts.add(fontFace);
        document.body.style.fontFamily = `${font.familyName}, sans-serif`;

        notifications.sendNotification({
          type: "success",
          message: `Font loaded: ${font.familyName}`,
          forConsole: font,
          expires: true,
        });
      }

      notifications.stopLoading(loadingFont);
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
  characterUnicode(id: number) {
    const unicode = (function () {
      const char = fonts.characterData(id);
      if (char) {
        if (Array.isArray(char)) {
          return char[0].unicode;
        }
        return char.unicode;
      }
      return 0;
    })();
    return `U+${unicode.toString(16).padStart(4, "0").toUpperCase()}`;
  }
  static characterSets: {
    [key: string]: {
      title: string;
      description: string;
      extends?: keyof typeof FontsData.characterSets;
      hidden?: true;
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
      value: Array.from(
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      )
        .map((c) => c.charCodeAt(0))
        .sort(),
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
      value: Array.from("()[]{}<>!@#$%^&*+=-|\\/?.,;:'\"`~")
        .map((c) => c.charCodeAt(0))
        .sort(),
    },
    alphanumAndPunctuation: {
      title: "Alphanumeric and punctuation",
      description: "Alphanumeric characters and punctuation.",
      hidden: true,
      extends: "alphanum",
      value: Array.from("….,;:'\"`~¿?¡!%&‘’“”«»-–—")
        .map((c) => c.charCodeAt(0))
        .sort(),
    },
    numberSupport: {
      title: "Number support",
      description: "Improved number support.",
      extends: "alphanum",
      value: Array.from("⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿ⁄¼½¾")
        .map((c) => c.charCodeAt(0))
        .sort(),
    },
    french: {
      title: "Baguette",
      description: "French characters.",
      extends: "alphanumAndPunctuation",
      value: Array.from("àâçéèêëîïôùûüÿÀÂÇÉÈÊËÎÏÔÙÛÜŸ")
        .map((c) => c.charCodeAt(0))
        .sort(),
    },
    german: {
      title: "Bratwurst",
      description: "German characters.",
      extends: "alphanumAndPunctuation",
      value: Array.from("äöüÄÖÜß")
        .map((c) => c.charCodeAt(0))
        .sort(),
    },
  };
  getCharSet(id: keyof typeof FontsData.characterSets): number[] {
    const data = FontsData.characterSets[id];
    if (data.extends) {
      return [...this.getCharSet(data.extends), ...data.value].sort();
    }
    return data.value;
  }
}

export const fonts = new FontsData();
