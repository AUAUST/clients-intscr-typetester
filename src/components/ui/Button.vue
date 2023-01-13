<template>
  <div class="button" :class="[type, active ? 'active' : '']">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  type: String,
  active: Boolean,
});

const type = ref(props.type);
</script>

<style lang="scss">
@use "@/assets/style/variables" as v;

.button {
  display: inline-block;
  padding: 4px 2px;
  &.fit-width {
    width: 100%;
  }
  user-select: none;
  -webkit-user-select: none;
  &:first-of-type {
    padding-left: 4px;
  }
  &:last-of-type {
    padding-right: 4px;
  }

  span {
    font-size: 1.3rem;
    text-align: center;
    display: block;
    padding: 4px 8px 2px 8px;
    cursor: pointer;
    color: v.$c-gray-1;
    background-color: v.$c-auaust-7;
    &:hover {
      background-color: v.$c-auaust-8;
    }
  }
  &.active span {
    background-color: v.$c-auaust-4;
    color: v.$c-gray-1;
    cursor: default;
  }
}

// background-color: v.$c-auaust-8;
// background-color: v.$c-auaust-7;
</style>
