<template>
  <div
    class="button"
    :class="[size, active ? 'active' : '']"
    :title="title ?? 'A clickable button.'"
  >
    <span class="text-small">
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps(["size", "title", "active"]);
</script>

<style lang="scss">
@use "@/assets/style/variables" as v;

.button {
  display: inline-block;
  padding: v.$gap-small-normal v.$gap-small-half;
  &.fit-width {
    width: 100%;
  }
  user-select: none;
  -webkit-user-select: none;
  &:first-of-type {
    padding-left: v.$gap-small-normal;
  }
  &:last-of-type {
    padding-right: v.$gap-small-normal;
  }

  span {
    text-align: center;
    display: block;
    padding: v.$gap-small-normal v.$gap-small-double v.$gap-small-half
      v.$gap-small-double;
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
</style>
