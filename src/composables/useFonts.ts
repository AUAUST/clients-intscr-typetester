import { defineStore } from "pinia";
import { computed, reactive, readonly, ref } from "vue";

// ref()s become state properties
// computed()s become getters
// function()s become actions

type Font = {
  id: string;
};
type FallbackPosition = "first" | "last";

export const useFonts = defineStore("fonts", () => {
  // ================================================
  // States
  const _storage = reactive<{
    [key: string]: Font;
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
    _storage[`${Math.random()}`] = Math.random() as any;
  }

  function getByIndex(index: number): Font | undefined;
  function getByIndex(index: number, fallback: FallbackPosition): Font;
  function getByIndex(index: number, fallback?: undefined): Font | undefined;
  function getByIndex(index: number, fallback?: FallbackPosition) {
    const font = _storage[_listedIds.value[index]];
    if (font) return font;
    else if (fallback) return getFallback(fallback);
    return undefined;
  }

  function getFirst() {
    return getByIndex(0)!;
  }

  function getLast() {
    return getByIndex(length.value - 1)!;
  }
  function getComputedLast() {
    return computed(() => getByIndex(length.value - 1)!);
  }

  function getFallback(fallback: FallbackPosition): Font;
  function getFallback(fallback?: undefined): undefined;
  function getFallback(fallback?: FallbackPosition): Font | undefined {
    if (fallback === "last") return getLast();
    else if (fallback === "first") return getFirst();
    return undefined;
  }

  const font = getByIndex(-1);

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
    getByIndex,
    getFirst,
    getLast,
    getComputedLast,
  };
});
