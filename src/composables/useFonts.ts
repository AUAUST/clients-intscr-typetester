import { defineStore } from "pinia";
import { computed, reactive, readonly, ref } from "vue";

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
  const _listedIds = computed(() => {
    return Object.keys(_storage);
  });
  const length = computed(() => {
    return _listedIds.value.length;
  });

  // ================================================
  // Actions
  function add() {
    _storage[`${Math.random()}`] = Math.random();
  }

  // ================================================
  return {
    // Getters
    get listed() {
      return readonly(_storage);
    },
    get listedIds() {
      return readonly(_listedIds);
    },
    length,

    // Actions
    add,
  };
});
