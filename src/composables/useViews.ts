import { defineStore } from "pinia";
import { FallbackPosition, Font, useFonts } from "./useFonts";
import { Ref, computed, reactive, readonly, ref } from "vue";
import { createId } from "~/modules/utils";

export const useViews = defineStore("views", () => {
  const fonts = useFonts();

  // ================================================
  // States
  const _storage = reactive<{
    [key: string]: View;
  }>({});

  const _genericTab = {};

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
  function addView(fontId: string) {
    if (!fonts.getById(fontId)) return;

    const view = new View({
      fontId,
    });

    _storage[view.id] = view;
  }

  function getByIndex(index: number): View | undefined;
  function getByIndex(index: number, fallback: FallbackPosition): View;
  function getByIndex(index: number, fallback?: undefined): View | undefined;
  function getByIndex(index: number, fallback?: FallbackPosition) {
    const view = _storage[_listedIds.value[index]];
    if (view) return view;
    else if (fallback) return _getFallback(fallback);
    return undefined;
  }

  function getFirst() {
    return getByIndex(0)!;
  }

  function getLast() {
    return getByIndex(length.value - 1)!;
  }

  function getById(id: string): View | undefined;
  function getById(id: string, fallback: FallbackPosition): View;
  function getById(id: string, fallback?: undefined): View | undefined;
  function getById(id: string, fallback?: FallbackPosition) {
    const view = _storage[id];
    if (view) return view;
    else if (fallback) return _getFallback(fallback);
    return undefined;
  }

  function _getFallback(fallback: FallbackPosition): View;
  function _getFallback(fallback?: undefined): undefined;
  function _getFallback(fallback?: FallbackPosition): View | undefined {
    if (fallback === "last") return getLast();
    else if (fallback === "first") return getFirst();
    return undefined;
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
    addView,
    getByIndex,
    getById,
  };
});

class View {
  id: string;

  #activeTabId: Ref<string>;

  _activeTab = computed(() => {
    return this.#tabs[this.#activeTabId.value];
  });

  #tabs: {
    [key: string]: Tab;
  };

  constructor(args: {
    id?: string;
    fontId: string;
    tabType?: keyof typeof TabTypes;
  }) {
    this.id = args?.id ?? createId("viw");

    const initialTab = new TabTypes[args?.tabType ?? "sandbox"].class({
      fontId: args.fontId,
    });
    this.#tabs = reactive({
      [initialTab.id]: initialTab,
    });
    this.#activeTabId = ref(initialTab.id);
  }
  getTabById(id: string) {
    return this.#tabs[id];
  }
  setActiveTab(id: string) {
    if (!this.getTabById(id)) return;
    this.#activeTabId.value = id;
  }

  get activeTab() {
    return this._activeTab;
  }
}

type TabArgs = {
  id?: string;
  name?: string;
  fontId: string;
};
class Tab {
  #name: string | undefined;

  id: string;
  font: {
    id: Ref<string>;
    activeFeatures: string[];
  };

  constructor(args: TabArgs) {
    this.id = args?.id ?? createId("tab");
    this.#name = args?.name;
    this.font = {
      id: ref(args.fontId),
      activeFeatures: reactive([]),
    };
  }

  name = computed(() => {
    return this.#name ?? this.id;
  });
}

class SandboxTab extends Tab {
  #type = TabTypes.sandbox;

  constructor(args: TabArgs) {
    super(args);
  }

  name = computed(() => {
    return this.#type.displayName;
  });
}

const TabTypes = {
  sandbox: {
    displayName: "Sandbox",
    class: SandboxTab,
  },
};
