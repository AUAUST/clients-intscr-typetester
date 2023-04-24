<template>
  <ButtonsGroup title="Theme">
    <Button
      @click="_console.log('Light')"
      size="fit-width"
      title="Hello"
      :active="false"
      >Light</Button
    >
  </ButtonsGroup>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import ButtonsGroup from "@/components/ui/ButtonsGroup.vue";

const _console = console;
</script>
