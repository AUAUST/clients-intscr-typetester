<template>
  height: {{ windowData.size.height }} width: {{ windowData.size.width }} scale:
  {{ windowData.size.currentScale }} {{ windowData.brightness.className }}
  I am a paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Placeat, labore. Explicabo eaque est expedita ut voluptas at dignissimos
  dolorem molestias unde omnis, assumenda commodi et minus officia sed tempora!
  Quaerat.
</template>

<script setup lang="ts">
import { windowData } from "~/composables/useWindow";
</script>
