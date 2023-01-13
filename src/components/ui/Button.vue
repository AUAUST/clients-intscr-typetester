<template>
  <div class="button">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<style lang="scss">
@use "@/assets/style/variables" as v;

.button {
  display: inline-block;
  padding: 7px 2px;
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
    padding: 6px 8px 4px 8px;
    cursor: pointer;
  }
}
.theme-light {
  .button {
    span {
      color: v.$c-gray-1;
      background-color: v.$c-auaust-7;
      &:hover {
        background-color: v.$c-auaust-8;
      }
    }
  }
}
.theme-dark {
  .button {
    span {
      color: v.$c-gray-9;
      background-color: v.$c-auaust-2;
      &:hover {
        background-color: v.$c-auaust-3;
      }
    }
  }
}
// background-color: v.$c-auaust-8;
// background-color: v.$c-auaust-7;
</style>
