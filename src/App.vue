<template>
  <div
    id="app-container"
    @dragover="dragging = true"
    @drop.prevent="drop"
    @dragleave="dragging = false"
    ref="app"
  >
    <SideBar></SideBar>
    <Content></Content>
  </div>
  <div id="font-input" v-show="dragging">hello</div>
</template>

<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import Content from "@/components/Content.vue";
import { ref, reactive } from "vue";

const app = ref(null);
const dragging = ref(false);

function drop() {
  console.log("files-dropped");
}
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
#font-input {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: red;
  pointer-events: none;
}
</style>
