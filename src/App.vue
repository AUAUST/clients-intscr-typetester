<template>
  <div id="app">
    <SideBar></SideBar>
    <Content></Content>
  </div>
</template>

<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import Content from "@/components/Content.vue";
import { ref } from "vue";
</script>

<style scoped lang="scss">
@use "@/assets/style/variables" as v;

#app {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-auto-flow: column;

  width: 100vw;
  height: 100vh;

  @media screen and (max-width: v.$breakpoint-menu-hideable) {
    display: flex;
  }
}
</style>
