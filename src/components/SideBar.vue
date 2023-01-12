<template>
  <menu id="sidebar">
    <p>SideBar</p>
    <Button v-show="responsive.currentScale === 'view-x-narrow'"> </Button>
  </menu>
</template>
<script setup lang="ts">
import { responsive } from "~/composables/useResponsive";
import Button from "@/components/ui/Button.vue";
</script>
<style scoped lang="scss">
@use "@/assets/style/variables" as v;

// body.view-normal {
#sidebar {
  width: 300px;
  height: 100%;
  grid-column: 1;
  background-color: v.$c-gray-0;
  border-right: 1px solid v.$c-auaust-2;
}
// }
body.view-narrow,
body.view-x-narrow {
  #sidebar {
    z-index: 1;
    position: absolute;
    opacity: 0.5;
    pointer-events: none;
  }
}

body.view-x-narrow {
  #sidebar {
    width: 100vw;
  }
}
</style>
