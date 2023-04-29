<template>
  {{ id }}
  <slot></slot>
  {{ id }}
</template>

<script setup lang="ts">
import { createId } from "~/modules/utils";

const id = createId();
console.log(id);
</script>
