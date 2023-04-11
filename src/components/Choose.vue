<template>
  <view-item style="--width: 100%">
    <Button @click="fonts.openFileDialog()"> Select a file </Button>
  </view-item>
</template>

<script setup lang="ts">
import { fonts } from "~/composables/useFont";
</script>
