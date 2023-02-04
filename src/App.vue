<template>
  <div
    id="app-container"
    :class="[windowData.size.currentScale, windowData.brightness.className]"
  >
    <SideBar></SideBar>
    <Content></Content>
  </div>
  <FontInput />
</template>

<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import Content from "@/components/Content.vue";
import { windowData } from "~/composables/useWindow";
</script>

<style scoped lang="scss">
@use "@/assets/style/variables" as v;

#app-container {
  width: 100vw;
  height: 100vh;
  &.view-normal {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-auto-flow: column;
  }
  &.view-narrow {
    display: flex;
  }
}
</style>
