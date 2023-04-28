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
        <Button @click="increment()">Increment</Button>
      </div>
      <div>Fonts count: {{ count }}</div>
    </no-font-container>
  </view-item>
</template>

<script setup lang="ts">
// import { fonts } from "~/composables/useFont";
import Button from "@/components/ui/Button.vue";

import { storeToRefs } from "pinia";
import { useFonts } from "~/composables/useFonts";

const fontsStore = useFonts();

const { fonts, fontsCount, count } = storeToRefs(fontsStore);
const { increment } = fontsStore;
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
