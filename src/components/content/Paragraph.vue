<template>
  {{ windowData.size.height }} {{ windowData.brightness.className }}
  {{ windowData.size.currentScale }}
  I am a paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Placeat, labore. Explicabo eaque est expedita ut voluptas at dignissimos
  dolorem molestias unde omnis, assumenda commodi et minus officia sed tempora!
  Quaerat.
</template>

<script setup lang="ts">
import { windowData } from "~/composables/useWindow";
</script>
