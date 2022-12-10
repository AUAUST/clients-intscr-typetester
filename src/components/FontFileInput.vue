<template>
  <div>
    <label>Font file:</label>
    <input
      type="file"
      @change="handleFontFileChange"
      :accept="allowedFormats"
    />
  </div>
  <li v-for="font in fonts" @click="updateCurrentFont(font.id)">
    {{ font.name }}
  </li>
</template>

<script setup>
import { reactive, ref } from "vue";
import { Font } from "lib-font";

const emit = defineEmits(["new-font-added"]);

const fonts = reactive([]);
const allowedFormats = ref("font/*, .ttf, .otf, .woff, .woff2");

const handleFontFileChange = function (event) {
  const listAllowedFormats = allowedFormats.value
    .split(",")
    .map((format) => format.trim());

  const file = event.target.files[0];
  const fileFormat = "." + file.name.split(".").pop();

  if (listAllowedFormats.includes(fileFormat)) {
    // emit("new-font-added");

    // Create a font object
    const reader = new FileReader();

    reader.readAsDataURL(file);

    // console.log(file);
    reader.addEventListener("load", function () {
      const dataUrl = reader.result;
      // String formatted as F_ + current millisecond
      const id = "F_" + new Date(Date.now()).getTime();
      const font = new Font(id, { skipStyleSheet: true });

      font.onerror = (evt) => console.error(evt);
      font.onload = (evt) => doSomeFontThings(evt);

      font.src = new URL(dataUrl);
      // console.log(atob(dataUrl));
      //
      //
      //
      //
      //
      //
      // fonts.push({
      //   dataUrl: dataUrl,
      //   id: id,
      //   name: file.name,
      // });
    });

    // Assign event handling (.addEventListener version supported too, of course)

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    // // ;
    // const myFont = new Font("NEWFONTFACE");
    // reader.readAsArrayBuffer(file);

    // reader.onload = function () {
    //   console.log("foo");
    //   // Pass the buffer, and the original filename
    //   myFont.fromDataBuffer(reader.result, file.name);
    //   myFont.onload = (e) => {
    //     console.log(myFont.opentype, "foo");
    //   };
    // };
    // reader.addEventListener("load", function () {
    //   const dataUrl = reader.result;
    //   const date = new Date(Date.now());
    //   const id = "F_" + date.getTime();
    //   fonts.push({
    //     dataUrl: dataUrl,
    //     id: id,
    //     name: file.name,
    //   });

    //   for (const font of fonts) {
    //     const fontFace = new FontFace(font.id, `url(${font.dataUrl})`);
    //     document.fonts.add(fontFace);
    //     console.log(fontFace);
    //     updateCurrentFont(font.id);
    //   }
    // });
  } else {
    alert(`Please select a valid font file. (${allowedFormats})`);
    event.target.value = "";
    return;
  }

  function doSomeFontThings(evt) {
    const font = evt.detail.font;
    console.log(font);

    [`a`, `→`, `嬉`].forEach((char) =>
      console.log(`Font supports '${char}': ${font.supports(char)}`)
    );

    // Then, let's check some OpenType things
    const GSUB = font.opentype.tables.GSUB;

    // Let's figure out which writing scripts this font supports:
    console.log(
      `This font supports the following scripts: ${`"${GSUB.getSupportedScripts().join(
        `", "`
      )}"`}`
    );

    // DFLT is a given, but let's see if `latn` has any special language/system rules...
    const latn = GSUB.getScriptTable("latn");
    console.log(
      `Special langsys for "latn": ${`"${GSUB.getSupportedLangSys(latn).join(
        `", "`
      )}"`}`
    );

    // Oh wait, this is a variable font, isn't it.
    console.log(`This is a variable font: ${!!font.opentype.tables.fvar}`);

    // Which axes does it support?
    console.log(
      `This variable font supposed the following axes: ${`"${font.opentype.tables.fvar
        .getSupportedAxes()
        .join(`", "`)}"`}`
    );
    // Wow, "Northern Sami" support? Really? Which OpenType features does that use?
    // const nsm = GSUB.getLangSysTable(latn, "NSM ");
    // console.log(
    //   `OpenType features for the Northern Sami version of latin script:`,
    //   `"${GSUB.getFeatures(nsm)
    //     .map((f) => f.featureTag)
    //     .join(`", "`)}"`
    // );
  }
};

function updateCurrentFont(font) {
  document.body.style.setProperty("--F-NOW", `'${font}'`);
}
</script>
