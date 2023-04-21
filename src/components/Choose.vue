<template>
  <view-item style="--width: 100%">
    <div>
      <div>
        Drop or
        <Button @click="fonts.openFileDialog()"> Select </Button>
        a file to start testing your font.
      </div>
      <div>You may also try an Interscript font</div>
    </div>
  </view-item>
</template>

<script setup lang="ts">
import { fonts } from "~/composables/useFont";
</script>
