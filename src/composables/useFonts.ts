import { defineStore } from "pinia";
import { computed, markRaw, reactive, readonly, ref } from "vue";

import { notifications } from "./useNotifications";

import * as FontKit from "fontkit";
import { createId } from "~/modules/utils";

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
  familyName: string;
  subfamilyName: string;
  isVariable: boolean;
  fontType: FontType;
  raw: FontKit.Font;
};

type FontType = "TTF" | "OTF" | "WOFF" | "WOFF2" | "TTC" | "DFONT";

type PositiveFontParsingResult = {
  success: true;
  raw: FontKit.Font;
  buffer: ArrayBuffer;
  familyName: string;
  isVariable: boolean;
  fontType: FontType;
};
type NegativeFontParsingResult = {
  success: false;
  message: string;
  file?: File;
  additionalInfo?: any;
};

type FontParsingResult = PositiveFontParsingResult | NegativeFontParsingResult;

type FallbackPosition = "first" | "last";

export const useFonts = defineStore("fonts", () => {
  // ================================================
  // States
  const _storage = reactive<{
    [key: string]: Font;
  }>({});

  let _fontInput: HTMLInputElement | undefined = undefined;

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
  async function add(input?: File | File[] | FileList | null) {
    if (!input) {
      notifications.sendNotification({
        type: "error",
        message: `No font file selected.`,
        expires: true,
      });
      return false;
    }

    const loadingKey = notifications.startLoading();

    const fontFiles = (function () {
      if (input instanceof File) return [input];
      else if (input instanceof FileList) return Array.from(input);
      else if (Array.isArray(input)) return input;
      else return [];
    })();

    const promises = fontFiles.map(async (file) => {
      return await parseFont(file);
    });

    // Wait for all promises to resolve
    const results = await Promise.all(promises);

    const triage = (function () {
      const success: PositiveFontParsingResult[] = [];
      const error: NegativeFontParsingResult[] = [];

      for (const result of results) {
        if (result.success) success.push(result);
        else error.push(result);
      }

      return { success, error };
    })();

    // Display results notifications to user
    for (const type of Object.keys(triage) as (keyof typeof triage)[]) {
      if (triage[type].length === 0) continue;

      notifications.sendNotification({
        type: type,
        message: parsingResultMessage(type, triage[type]),
        forConsole: triage[type],
        expires: true,
      });
    }

    const ids: string[] = [];

    for (const result of triage.success) {
      const id = createId("fnt");

      const font = markRaw({
        id,
        familyName: result.familyName,
        subfamilyName: result.raw.subfamilyName,
        isVariable: result.isVariable,
        fontType: result.fontType,
        raw: result.raw,
      });

      _storage[id] = font;

      fontToDOM(result.buffer, id);

      ids.push(id);
    }

    notifications.stopLoading(loadingKey);

    return ids;
  }

  function getByIndex(index: number): Font | undefined;
  function getByIndex(index: number, fallback: FallbackPosition): Font;
  function getByIndex(index: number, fallback?: undefined): Font | undefined;
  function getByIndex(index: number, fallback?: FallbackPosition) {
    const font = _storage[_listedIds.value[index]];
    if (font) return font;
    else if (fallback) return _getFallback(fallback);
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

  function _getFallback(fallback: FallbackPosition): Font;
  function _getFallback(fallback?: undefined): undefined;
  function _getFallback(fallback?: FallbackPosition): Font | undefined {
    if (fallback === "last") return getLast();
    else if (fallback === "first") return getFirst();
    return undefined;
  }

  function setFontInput(input: HTMLInputElement | undefined) {
    _fontInput = input;
  }

  function openFontInput() {
    if (_fontInput) _fontInput.click();
    else
      notifications.sendNotification({
        type: "error",
        message:
          "There's an issue with the font input element. Try reloading the page.",
      });
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

    setFontInput,
    openFontInput,
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
      file: undefined,
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
      file: file,
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
      file: file,
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

async function fontToDOM(buffer: ArrayBuffer, id: string) {
  try {
    const fontData = new DataView(buffer);
    const fontFace = new FontFace(id, fontData);

    await fontFace.load();

    document.fonts.add(fontFace);

    return true;
  } catch (e) {
    return false;
  }
  // document.body.style.fontFamily = `${id}, system-ui`;
}

function parsingResultMessage(
  type: "success" | "error",
  results: FontParsingResult[]
) {
  const success = type === "success";
  const baseMessage = success ? "Successfully loaded " : "Could not load ";

  if (results.length === 1) {
    return (
      baseMessage +
      (success
        ? (results[0] as PositiveFontParsingResult).familyName
        : `"${(results[0] as NegativeFontParsingResult).file?.name}"`)
    );
  }
  if (results.length < 4) {
    return (
      baseMessage +
      results
        .map((result) =>
          success
            ? (result as PositiveFontParsingResult).familyName
            : `"${(result as NegativeFontParsingResult).file?.name}"`
        )
        .join(", ")
    );
  }
  if (results.length >= 4) {
    return (
      baseMessage +
      results
        .slice(0, 3)
        .map((result) =>
          success
            ? (result as PositiveFontParsingResult).familyName
            : `"${(result as NegativeFontParsingResult).file?.name}"`
        )
        .join(", ") +
      ` and ${results.length - 3} more.`
    );
  }
}
