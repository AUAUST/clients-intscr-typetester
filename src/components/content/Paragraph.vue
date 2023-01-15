<template>
  height: {{ windowData.size.height }}<br />
  width: {{ windowData.size.width }}<br />
  scale: {{ windowData.size.currentScale }}<br />
  brightness: {{ windowData.brightness.className }}
</template>

<script setup lang="ts">
import { windowData } from "~/composables/useWindow";
</script>
