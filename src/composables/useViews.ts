import { defineStore } from "pinia";
import { FallbackPosition, Font, useFonts } from "./useFonts";
import { ComputedRef, computed, markRaw, reactive, readonly, ref } from "vue";
import { createId } from "~/modules/utils";

export const useViews = defineStore("views", () => {
  const fonts = useFonts();

  // ================================================
  // States
  const _storage = reactive<{
    [key: string]: View;
  }>({});

  // ================================================
  // Getters
  const _listedIds = computed(() => {
    return Object.keys(_storage);
  });
  const _listedViews = computed(() => {
    return Object.values(_storage);
  });

  const length = computed(() => {
    return _listedIds.value.length;
  });

  // ================================================
  // Actions
  function addView(fontId: string) {
    if (!fonts.getById(fontId)) return false;

    const view = reactive<View>(
      new View({
        fontId,
      })
    );

    _storage[view.id] = view as unknown as View;

    return view;
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
    get all() {
      return readonly(_storage);
    },
    get listed() {
      return readonly(_listedViews);
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

function createView(args: {
  id?: string;
  fontId: string;
  tabType?: keyof typeof TabTypes;
}) {
  let _activeTabId: string;

  return reactive({
    id: args.id ?? createId("viw"),
  });
}

export class View {
  id: string;

  _activeTabId: string;

  _activeTab = computed(() => {
    return this._tabs[this._activeTabId];
  });
  get activeTab() {
    return this._activeTab;
  }

  _tabs: {
    [key: string]: Tab;
  };
  _listedTabs = computed(() => {
    return Object.values(this._tabs);
  });
  get listedTabs() {
    return this._listedTabs;
  }

  constructor(args: {
    id?: string;
    fontId: string;
    tabType?: keyof typeof TabTypes;
  }) {
    this.id = args?.id ?? createId("viw");

    const initialTab = new TabTypes[args?.tabType ?? "sandbox"].class({
      fontId: args.fontId,
    });
    this._tabs = {
      [initialTab.id]: initialTab,
    };
    this._activeTabId = initialTab.id;
  }

  getTabById(id: string) {
    return this._tabs[id];
  }

  setActiveTab(id: string) {
    if (!this.getTabById(id)) return;
    this._activeTabId = id;
  }
}

type TabArgs = {
  id?: string;
  name?: string;
  fontId: string;
};

export class Tab {
  _name: string | undefined;

  id: string;
  font: {
    id: string;
    activeFeatures: string[];
  };

  constructor(args: TabArgs) {
    this.id = args?.id ?? createId("tab");
    this._name = args?.name;
    this.font = {
      id: args.fontId,
      activeFeatures: [],
    };
  }

  name = markRaw(
    computed(() => {
      return this._name ?? this.id;
    })
  );

  getFont() {
    return useFonts().getById(this.font.id)!;
  }
}

class SandboxTab extends Tab {
  _type = TabTypes.sandbox;

  constructor(args: TabArgs) {
    super(args);
  }

  name = computed(() => {
    return this._type.displayName;
  });
}

const TabTypes = {
  sandbox: {
    displayName: "Sandbox",
    class: SandboxTab,
  },
};
