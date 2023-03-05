<template>
  <button
    class="button"
    :class="[size, active ? 'active' : '']"
    :title="title ?? 'A clickable button.'"
  >
    <span class="text-small">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps(["size", "title", "active"]);
</script>

<style lang="scss">
@use "@/assets/style/variables" as v;

.button {
  all: unset;
  user-select: none;

  display: inline-block;

  padding-block: v.$gap-small-normal;
  padding-inline: v.$gap-small-half;

  &.fit-width {
    width: 100%;
  }
  &:first-of-type {
    padding-left: v.$gap-small-normal;
  }
  &:last-of-type {
    padding-right: v.$gap-small-normal;
  }
  &:focus {
    span {
      outline: v.$gap-small-half solid red;
    }
  }
  span {
    display: block;

    text-align: center;
    text-overflow: ellipsis;

    padding-top: v.$gap-small-normal;
    padding-inline: v.$gap-small-double;
    padding-bottom: v.$gap-small-half;

    color: v.$c-gray-1;
    background-color: v.$c-auaust-7;
    cursor: pointer;

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
