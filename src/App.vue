<template>
  <div id="app-container">
    <SideBar></SideBar>
    <Content></Content>
  </div>
  <div @ref="fontInputContainer" @dragstart="log">
    <FontInputOverlay v-show="dragging"></FontInputOverlay>
  </div>
</template>

<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import Content from "@/components/Content.vue";
import FontInputOverlay from "@/components/FontInputOverlay.vue";
import { ref } from "vue";

const fontInputContainer = ref(null);
const dragging = ref(false);

function log() {
  console.log("foll");
}

// function drop() {
//   console.log("files-dropped");
// }
// function startDragOver() {
//   if (app.value) {
//     app.value.classList.add("test");
//   }
// }
// function endDragOver() {
//   if (app.value) {
//     app.value.classList.remove("test");
//   }
// }
</script>

<style scoped lang="scss">
@use "@/assets/style/variables" as v;

#app-container {
  width: 100vw;
  height: 100vh;
}
body.view-normal {
  #app-container {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-auto-flow: column;
  }
}
body.view-narrow {
  #app-container {
    display: flex;
  }
}

// body.view-x-narrow {
//   #app-container {
//     display: block;
//   }
// }
</style>
