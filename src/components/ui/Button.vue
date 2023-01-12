<template>
  <div class="button">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<style lang="scss">
@use "@/assets/style/variables" as v;

div.button {
  display: inline-block;
  padding: 8px 2px;
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
    background-color: v.$c-auaust-8;
    color: v.$c-gray-1;
    padding: 6px 7px 4px 7px;
    cursor: pointer;
    &:hover {
      background-color: v.$c-auaust-7;
    }
  }
}
</style>
