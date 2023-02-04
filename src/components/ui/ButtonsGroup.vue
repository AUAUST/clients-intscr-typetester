<template>
  <div class="button-container">
    <h5>
      {{ props.title }}
    </h5>
    <div class="buttons">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<style lang="scss">
.button-container {
  height: fit-content;
  width: 100%;
  display: block;
  h5 {
    padding: 0.2rem 0.4rem 0 0.4rem;
    margin-bottom: -0.2rem;
  }
  .buttons {
    display: flex;
  }
}
</style>
