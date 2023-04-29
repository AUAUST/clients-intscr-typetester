import { defineStore } from "pinia";
import { computed, reactive, readonly, ref } from "vue";

import * as FontKit from "fontkit";

// ref()s become state properties
// computed()s become getters
// function()s become actions

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
    type: FontType;
  }
}

type Font = {
  id: string;
};

type FontType = "TTF" | "OTF" | "WOFF" | "WOFF2" | "TTC" | "DFONT";

type FontParsingResult =
  | {
      success: true;
      raw: FontKit.Font;
      buffer: ArrayBuffer;
      familyName: string;
      isVariable: boolean;
      fontType: FontType;
    }
  | {
      success: false;
      message: string;
      additionalInfo?: any;
    };

type FallbackPosition = "first" | "last";

export const useFonts = defineStore("fonts", () => {
  // ================================================
  // States
  const _storage = reactive<{
    [key: string]: Font;
  }>({});

  // ================================================
  // Getters
  const _listedIds = computed(() => {
    return Object.keys(_storage);
  });

  const length = computed(() => {
    return _listedIds.value.length;
  });

  // ================================================
  // Actions
  function add() {
    _storage[`${Math.random()}`] = Math.random() as any;
  }

  function getByIndex(index: number): Font | undefined;
  function getByIndex(index: number, fallback: FallbackPosition): Font;
  function getByIndex(index: number, fallback?: undefined): Font | undefined;
  function getByIndex(index: number, fallback?: FallbackPosition) {
    const font = _storage[_listedIds.value[index]];
    if (font) return font;
    else if (fallback) return getFallback(fallback);
    return undefined;
  }

  function getFirst() {
    return getByIndex(0)!;
  }

  function getLast() {
    return getByIndex(length.value - 1)!;
  }

  function getComputedLast() {
    return computed(() => getByIndex(length.value - 1)!);
  }

  function getFallback(fallback: FallbackPosition): Font;
  function getFallback(fallback?: undefined): undefined;
  function getFallback(fallback?: FallbackPosition): Font | undefined {
    if (fallback === "last") return getLast();
    else if (fallback === "first") return getFirst();
    return undefined;
  }

  // ================================================
  return {
    // Getters
    get listed() {
      return readonly(_storage);
    },
    get listedIds() {
      return readonly(_listedIds);
    },
    length,

    // Actions
    add,
    getByIndex,
    getFirst,
    getLast,
    getComputedLast,
  };
});

// async handleNewFontFile(input: File | File[] | FileList | null) {
//     if (!input) {
//       notifications.sendNotification({
//         type: "error",
//         message: `No file selected.`,
//         expires: true,
//       });
//       return;
//     }

//     const loadingFont = notifications.startLoading();

//     let files: File[] = [];

//     if (Array.isArray(input)) {
//       files = input;
//     } else if (input instanceof FileList) {
//       files = Array.from(input);
//     } else {
//       files = [input];
//     }

//     for (const file of files) {
//       // Eliminate files with wrong extensions and MIME types
//       if (
//         !file.name.match(/\.(ttf|otf|woff|woff2|ttc|dfont)$/) &&
//         !file.type.match(/^font\/\w+/)
//       ) {
//         notifications.sendNotification({
//           type: "error",
//           message: `The file you selected appears not to be a font.`,
//           forConsole: file,
//           expires: true,
//         });
//         continue;
//       }

//       let font: Font;

//       const buffer = await file.arrayBuffer();

//       // Parse the font file
//       try {
//         font = fontkit.create(new Uint8Array(buffer) as Buffer);
//       } catch (error) {
//         notifications.sendNotification({
//           type: "error",
//           message: `Could not load the file. Is it a valid font ?`,
//           forConsole: [error, file],
//           expires: true,
//         });
//         continue;
//       }

//       const id = this.setFont(font);
//       await this.fontToDOM(buffer, id);

//       notifications.sendNotification({
//         type: "success",
//         message: `Font loaded: ${font.familyName}`,
//         forConsole: font,
//         expires: true,
//       });
//     }

//     notifications.stopLoading(loadingFont);
//   }

async function parseFont(file?: File): Promise<FontParsingResult> {
  // Check if a file was passed
  if (!file) {
    return {
      success: false,
      message: `No file selected.`,
      additionalInfo: file,
    };
  }

  // Eliminate files with wrong extensions and MIME types
  if (
    !file.name.match(/\.(ttf|otf|woff|woff2|ttc|dfont)$/) &&
    !file.type.match(/^font\/\w+/)
  ) {
    return {
      success: false,
      message: `The file you selected appears not to be a font.`,
      additionalInfo: file,
    };
  }

  let font: FontKit.Font;
  const buffer = await file.arrayBuffer();

  // Parse the font file
  try {
    font = FontKit.create(new Uint8Array(buffer) as Buffer);
  } catch (error) {
    return {
      success: false,
      message: `Could not load the file. Is it a valid font ?`,
      additionalInfo: [error, file],
    };
  }

  return {
    success: true,
    raw: font,
    buffer: buffer,
    familyName: font.familyName,
    isVariable: Object.keys(font.variationAxes).length > 0,
    fontType: font.type,
  };
}
