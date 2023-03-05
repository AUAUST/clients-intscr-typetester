<template>
  <section
    :id="props.id"
    :style="{
      transform: height ? `translateY(${height}px)` : 'unset',
    }"
    ref="section"
  >
    <h4
      class="text-x-small"
      :class="{
        resize: props.resizable,
      }"
      ref="h4"
    >
      {{ props.title }}
    </h4>
    <div>
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  title: String,
  id: String,
  resizable: Boolean,
  fillHeight: Boolean,
});

const height = ref(0);

const h4 = ref();
const section = ref();

onMounted(() => {});
onUnmounted(() => {});
</script>

<style lang="scss">
@use "@/assets/style/variables" as v;

section {
  overflow-y: auto;
  height: auto;
  min-height: 50px;

  display: grid;
  grid-template-rows: auto 1fr;

  background-color: inherit;
  > h4 {
    &.resize {
      cursor: ns-resize;
    }
    position: sticky;
    top: 0;

    padding: v.$gap-small-half v.$gap-small-normal;
    border-top: 1px solid v.$c-gray-4;
    border-bottom: 1px solid v.$c-gray-4;

    background-color: inherit;
  }
  > div {
    color: v.$c-gray-6;
    h5 {
      padding: v.$gap-small-half v.$gap-small-normal 0 v.$gap-small-normal;
      margin-bottom: -2px;
    }
  }
}
</style>
