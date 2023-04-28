import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

// ref()s become state properties
// computed()s become getters
// function()s become actions

export const useFonts = defineStore("fonts", () => {
  // ================================================
  // States
  const _storage = reactive<{
    [key: string]: number;
  }>({});

  // ================================================
  // Getters
  const length = computed(() => {
    return Object.keys(_storage).length;
  });

  // ================================================
  // Actions
  function add() {
    _storage[`${Math.random()}`] = Math.random();
  }

  // ================================================
  return {
    length,
    add,
  };
});
