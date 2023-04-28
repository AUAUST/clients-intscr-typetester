import { defineStore } from "pinia";
import { computed, ref } from "vue";

// ref()s become state properties
// computed()s become getters
// function()s become actions

export const useFonts = defineStore("fonts", () => {
  const fonts = {};
  const count = ref(0);

  function increment() {
    console.log("increment");
    console.log(count.value);
    count.value++;
  }

  const fontsCount = computed(() => {
    return Object.keys(fonts).length;
  });

  return {
    fonts,
    count,
    increment,
    fontsCount,
  };
});
