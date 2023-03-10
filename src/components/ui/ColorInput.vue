<template>
  <div
    class="input-color text-small"
    :class="[size]"
    :title="title ?? 'An input field.'"
  >
    <div>
      <span v-if="before" class="before">{{ before }}</span>
      <input
        class="text-small"
        :placeholder="placeholder"
        :value="modelValue"
        @input="inputChange($event)"
        style="width: 100px"
      />
      <span v-if="after" class="after">{{ after }}</span>
    </div>
    <span class="after">{{ rgb }}</span>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

defineProps(["size", "placeholder", "title", "modelValue", "before", "after"]);
defineEmits(["update:modelValue"]);

const hsl = reactive([0, 0, 0]);
const hex = ref("000000");

function inputChange($event: Event) {
  const target = $event.target as HTMLInputElement;
  rgb.splice(0, 3, ...hexToRgb(target.value));
}

function rgbToHex(rgb: number[]) {
  return "#" + rgb.map((x) => x.toString(16).padStart(2, "0")).join("");
}
function hexToRgb(hex: string) {
  hex = hex.replace("#", "");
  // 0f0 -> 00ff00 or 0f0f -> 00ff00ff
  if (hex.length === 3 || hex.length === 4) {
    hex = hex
      .split("")
      .map((x) => x + x)
      .join("");
  }
  // always remove alpha
  if (hex.length === 8) {
    hex = hex.slice(0, 6);
  }
  // return black if not valid
  if (/[0-9a-fA-F]{6}/.test(hex)) {
    return [0, 0, 0];
  }
  return [
    parseInt(hex.slice(0, 2), 16),
    parseInt(hex.slice(2, 4), 16),
    parseInt(hex.slice(4, 6), 16),
  ];
}
</script>

<style lang="scss">
@use "@/assets/style/variables" as v;

.input-color {
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
    width: 1000%;
  }
}
</style>
