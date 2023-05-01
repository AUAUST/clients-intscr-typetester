<template>
  <button
    class="button"
    :class="[
      props.size,
      props.active ? 'active' : '',
      props.disabled ? 'disabled' : '',
    ]"
    :title="title ?? 'A clickable button.'"
  >
    <span class="text-small">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  size?: string;
  title?: string;
  active?: boolean;
  disabled?: boolean;
}>();
</script>

<style lang="scss">
@use "@/assets/style/variables" as v;
@use "@/assets/style/colors" as color;

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

    background-color: color.$button-normal-background;
    color: color.$button-normal-text;
    cursor: pointer;

    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover {
      background-color: color.$button-hover-background;
      color: color.$button-hover-text;
    }
  }
  &.active span {
    background-color: color.$button-active-background;
    color: color.$button-active-text;
    cursor: default;
  }
  &.disabled span {
    background-color: color.$button-disabled-background;
    color: color.$button-disabled-text;
    cursor: default;
  }
}
</style>
