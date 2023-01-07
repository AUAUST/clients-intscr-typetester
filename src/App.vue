<template>
  <div id="app">
    <SideBar></SideBar>
    <Content></Content>
  </div>
  <ul>
    <li v-for="index in indexes" class="bgcolor-auaust-1">{{ index }}</li>
  </ul>
  <div id="text">{{ text }}</div>
</template>

<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import Content from "@/components/Content.vue";
import { ref } from "vue";

const indexes = ref([1, 2, 3, 4, 5, 6, 7, 8, 9]);

let text = "l\%+§$1203¨—≈©";

const element = document.getElementById("text");

setTimeout(() => console.log(element?.innerText), 1000);
</script>

<style scoped lang="scss">
#app {
  display: grid;
  grid-template-columns: 1fr, auto;
  grid-auto-flow: column;
  gap: 1px;

  height: 200px;
  padding: 100px;
}
</style>
