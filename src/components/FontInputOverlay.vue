<template>
  <div id="font-input" v-show="dragging">hello</div>
</template>

<script setup lang="ts">
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
<style lang="scss">
@use "@/assets/style/variables" as v;

#font-input {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: v.$c-auaust-1;
  pointer-events: none;
}
</style>
