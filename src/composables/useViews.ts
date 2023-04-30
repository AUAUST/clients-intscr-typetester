import { defineStore } from "pinia";
import { FallbackPosition, useFonts } from "./useFonts";
import { computed, markRaw, reactive, readonly, ref } from "vue";
import { createId } from "~/modules/utils";

import type { ComputedRef, Ref } from "vue";

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

    const view = createView({
      fontId,
    });

    _storage[view.id] = view;

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

type CreateViewArgs = {
  id?: string;
  fontId: string;
  tabType?: keyof typeof TabTypes;
};

function createView(args: CreateViewArgs) {
  const id = args.id ?? createId("viw");
  const font = useFonts().getById(args.fontId, "last");

  const _tabs = reactive<{
    [key: string]: Tab;
  }>({});

  const _activeTabId = ref<string>("");

  const _activeTab = computed(() => {
    return _tabs[_activeTabId.value];
  });

  const _listedTabs = computed(() => {
    return Object.values(_tabs);
  });

  function setActiveTab(tab: Tab | string) {
    if (typeof tab === "string") {
      if (!_tabs[tab]) return false;

      _activeTabId.value = tab;
      return true;
    } else {
      _activeTabId.value = tab.id;
      return true;
    }
  }

  function getTabByIndex(index: number): Tab | undefined;
  function getTabByIndex(index: number, fallback: FallbackPosition): Tab;
  function getTabByIndex(index: number, fallback?: undefined): Tab | undefined;
  function getTabByIndex(index: number, fallback?: FallbackPosition) {
    const tab = _listedTabs.value[index];
    if (tab) return tab;
    else if (fallback) return _getFallback(fallback);
    return undefined;
  }

  function getTabById(id: string): Tab | undefined;
  function getTabById(id: string, fallback: FallbackPosition): Tab;
  function getTabById(id: string, fallback?: undefined): Tab | undefined;
  function getTabById(id: string, fallback?: FallbackPosition) {
    const tab = _tabs[id];
    if (tab) return tab;
    else if (fallback) return _getFallback(fallback);
    return undefined;
  }

  function _getFallback(fallback: FallbackPosition): Tab;
  function _getFallback(fallback?: undefined): undefined;
  function _getFallback(fallback?: FallbackPosition): Tab | undefined {
    if (fallback === "last") return getLastTab();
    else if (fallback === "first") return getFirstTab();
    return undefined;
  }

  function getFirstTab() {
    return getTabByIndex(0)!;
  }

  function getLastTab() {
    return getTabByIndex(_listedTabs.value.length - 1)!;
  }

  function addTab(type?: keyof typeof TabTypes, becomesActive?: boolean) {
    if (!type) type = "sandbox";
    const tab = new TabTypes[type].class({
      fontId: font.id,
    });
    _tabs[tab.id] = tab;

    if (becomesActive) setActiveTab(tab);

    return tab;
  }

  return {
    id,

    addTab,
    setActiveTab,
    get activeTab() {
      return readonly(_activeTab);
    },
    get activeTabId() {
      return readonly(_activeTabId);
    },
    get listedTabs() {
      return readonly(_listedTabs);
    },
    getTabByIndex,
    getTabById,
    getFirstTab,
    getLastTab,
  };
}

export type View = ReturnType<typeof createView>;

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
