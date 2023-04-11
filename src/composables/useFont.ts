// import vue's reaction function
import { reactive, ref } from "vue";
import type { Ref } from "vue";

import { createId } from "~/modules/utils";

import { notifications } from "./useNotifications";

import opentype from "opentype.js";

import { decompress } from "wawoff2";

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
  currentFont: Ref<opentype.Font | undefined>;

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
  // fontInputChanged(input: ) {
  //   if (this.fontInput) {
  //     const files = this.fontInput.files;
  //     if (files) {
  //       const file = files[0];
  //       this.handleFontFile(file);
  //     }
  //   } else {
  //     notifications.sendNotification({
  //       type: "error",
  //       message:
  //         "Could not find the font input element. Try reloading the page.",
  //     });
  //   }
  // }
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
          !file.name.match(/\.(ttf|otf|woff|woff2)$/) &&
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
        // else {
        // notifications.sendNotification({
        //   type: "error",
        //   message: "No file was selected.",
        // });
        // return;
        // }
        console.log("file", file);
        const buffer = await file.arrayBuffer();
        console.log("buffer", buffer);
        const font = await (async function () {
          let font: opentype.Font | undefined;
          console.log("font or undefined", font);
          try {
            console.log("try");
            font = opentype.parse(buffer);
            console.log("victory font", font);
          } catch {
            console.log("catch");
            try {
              console.log("re-try");
              const uint8array = await decompress(new Uint8Array(buffer)).catch(
                (e) => {
                  console.log("decompress error", e);
                  return undefined;
                }
              );
              console.log("uint8array", uint8array);
              font = opentype.parse(uint8array!.buffer);
              console.log("woff2 victory font", font);
            } catch (e) {
              notifications.sendNotification({
                type: "error",
                message: "Could not load the file. Is it a valid font ?",
                expires: true,
                forConsole: e,
              });
              return undefined;
            }
          }
          return font;
        })();
        console.log("font", font);

        if (!font) {
          notifications.sendNotification({
            type: "error",
            message: "Could not load the file. Is it a valid font ?",
            expires: true,
          });
          return;
        }

        console.log("font", font);
        console.log("glyphs", font.glyphs);
        console.log("tables", font.tables);
        console.log("ascender", font.ascender);
        console.log("descender", font.descender);
        console.log("unitsPerEm", font.unitsPerEm);
        console.log("encoding", font.encoding);

        notifications.sendNotification({
          type: "success",
          message: `Font loaded: ${font.names.fontFamily.en}`,
          expires: true,
        });
      }
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
}

export const fonts = new FontsData();
