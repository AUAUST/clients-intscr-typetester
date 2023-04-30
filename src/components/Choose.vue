<template>
  <view-item style="--width: 100%">
    <no-font-container>
      <div>
        Drop or
        <!-- <Button @click="fonts.openFileDialog()"> Choose </Button> -->
        a file to start testing your font.
      </div>
      <div>You may also try an Interscript font</div>
      <div>
        <Button @click="fonts.add()">Increment</Button>
      </div>
      <div>Fonts count: {{ Object.keys(fonts.listed).length }}</div>
      <Button @click="testObj.decrement()">-</Button>
      {{ testObj.state }} ref
      <Button @click="testObj.increment()">+</Button>

      <Button @click="testObj.internalState--">-</Button>
      {{ testObj.internalState }} reactive
      <Button @click="testObj.internalState++">+</Button>

      {{ testObj.comp }}
    </no-font-container>
  </view-item>
</template>

<script setup lang="ts">
// import { fonts } from "~/composables/useFont";
import Button from "@/components/ui/Button.vue";
import { computed, reactive, ref } from "vue";

import { useFonts } from "~/composables/useFonts";

const fonts = useFonts();

// const { fonts, fontsCount, count } = storeToRefs(fontsStore);

function testObject() {
  let internalState = ref(0);
  const refInternalState = ref(0);

  function increment() {
    refInternalState.value++;
  }
  function decrement() {
    refInternalState.value--;
  }

  const comp = computed(() => {
    return internalState.value + refInternalState.value;
  });

  return {
    get state() {
      return refInternalState;
    },
    internalState,
    increment,
    decrement,
    comp,
  };
}

const testObj = reactive(testObject());

testObj.internalState += 10;
</script>

<style lang="scss">
no-font-container {
  display: block;
  margin-block: auto;
  justify-self: center;
  align-self: center;

  text-align: center;
}
</style>
