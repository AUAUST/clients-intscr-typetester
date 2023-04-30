<template>
  <view-item style="--width: 100%">
    <no-font-container>
      <div>
        Drop or
        <!-- <Button @click="fonts.openFileDialog()"> Choose </Button> -->
        a file to start testing your font.
      </div>
      <div>You may also try an Interscript font</div>
      <div>
        <Button @click="fonts.add()">Increment</Button>
      </div>
      <div>Fonts count: {{ Object.keys(fonts.listed).length }}</div>
    </no-font-container>
  </view-item>
</template>

<script setup lang="ts">
// import { fonts } from "~/composables/useFont";
import Button from "@/components/ui/Button.vue";

import { useFonts } from "~/composables/useFonts";

const fonts = useFonts();

// const { fonts, fontsCount, count } = storeToRefs(fontsStore);
</script>

<style lang="scss">
no-font-container {
  display: block;
  margin-block: auto;
  justify-self: center;
  align-self: center;

  text-align: center;
}
</style>
