<template>
  <div
    class="input text-small"
    :class="[size]"
    :title="title ?? 'An input field.'"
  >
    <div>
      <span v-if="before" class="before">{{ before }}</span>
      <input
        class="text-small"
        :placeholder="placeholderValue"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />
      <span v-if="after" class="after">{{ after }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps([
  "size",
  "placeholderValue",
  "title",
  "modelValue",
  "before",
  "after",
]);
defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
@use "@/assets/style/variables" as v;

.input {
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

  > div {
    display: grid;
    grid-template-columns: auto 1fr auto;

    padding: v.$gap-small-normal v.$gap-small-normal v.$gap-small-half
      v.$gap-small-normal;

    background-color: v.$c-auaust-3;
    border-radius: v.$radius-small;
  }
  .before,
  .after {
    text-align: center;
    display: block;
    color: v.$c-gray-5;
    font-size: inherit;
    font-weight: inherit;
    padding: 0;
  }
  .before {
    padding-right: v.$gap-small-half;
  }
  .after {
    padding-left: v.$gap-small-half;
  }

  input {
    border: none;
    background-color: transparent;
    font-size: inherit;
    color: v.$c-gray-9;
    outline: none;
    width: 100%;
  }
}
</style>
