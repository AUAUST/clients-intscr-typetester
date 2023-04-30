import { defineStore } from "pinia";
import { FallbackPosition, useFonts } from "./useFonts";
import { Component, computed, markRaw, reactive, readonly, ref } from "vue";
import { createId } from "~/modules/utils";

import { viewport } from "./useViewport";

import SandboxTab from "@/components/content/Sandbox.vue";

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

  const DOMNode = ref<HTMLElement | null>(null);

  const _DOMNodeWidth = computed(() => {
    // Include viewport.size.width because it's a reactive property that gets updated when the window is resized.
    // It causes the computed property to recompute.
    viewport.size.width;
    return DOMNode.value?.clientWidth ?? 0;
  });

  const _DOMNodeHeight = computed(() => {
    viewport.size.height;
    return DOMNode.value?.clientHeight ?? 0;
  });

  // ================================================
  // Actions
  function addView(fontId: string) {
    if (!fonts.getById(fontId)) return false;

    const view = createView({
      fontId,
    });

    _storage[view.id] = view;

    setTimeout(updateViewsWidth, 0);

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

  function updateViewsWidth() {
    const lastView = getLast();
    let sumOfWidth = 0;

    for (const view of _listedViews.value) {
      if (view.id === lastView.id) {
        // The last view should take the remaining width.
        // view.setWidth(_DOMNodeWidth.value - sumOfWidth);
      } else {
        const newWidth = view.setWidth();

        sumOfWidth += newWidth || 0;
      }
    }
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
    DOMNode,
    get DOMNodeWidth() {
      return _DOMNodeWidth;
    },
    get DOMNodeHeight() {
      return _DOMNodeHeight;
    },
    updateViewsWidth,

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

  const initialTab = (function () {
    const type = args.tabType ?? "sandbox";
    return TabTypes[type].constructor({
      fontId: font.id,
    });
  })();

  const _tabs = reactive<{
    [key: string]: Tab;
  }>({
    [initialTab.id]: initialTab,
  });

  const _activeTabId = ref<string>(initialTab.id);

  const _activeTab = computed(() => {
    return _tabs[_activeTabId.value];
  });

  const _listedTabs = computed(() => {
    return Object.values(_tabs);
  });

  const width = ref<number | undefined>(undefined);

  const DOMNode = ref<HTMLElement | null>(null);

  function setActiveTab(tab: Tab | string) {
    let id = "";
    if (typeof tab === "string") {
      if (!_tabs[tab]) return false;
      id = tab;
    } else {
      id = tab.id;
    }
    _activeTabId.value = id;
    return true;
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
    const tab = TabTypes[type].constructor({
      fontId: font.id,
    });
    _tabs[tab.id] = tab;

    if (becomesActive) setActiveTab(tab);

    return tab;
  }

  function resize(relative: number) {
    width.value = (width.value ?? 0) + relative;
  }

  function setWidth(newWidth?: number) {
    if (!DOMNode.value) return false;
    if (newWidth) width.value = newWidth;
    else width.value = DOMNode.value.clientWidth;
    return width.value;
  }

  function setDOMNode(node: HTMLElement | null) {
    DOMNode.value = node;
    console.log("setDOMNode", DOMNode.value);
  }

  return {
    get id() {
      return id;
    },

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

    setDOMNode,
    get DOMNode() {
      return readonly(DOMNode);
    },
    width,

    getTabByIndex,
    getTabById,
    getFirstTab,
    getLastTab,
    resize,
    setWidth,
  };
}

export type View = ReturnType<typeof createView>;

type TabArgs = {
  id?: string;
  name?: string;
  fontId: string;
};

function createTab(args: TabArgs) {
  const id = args.id ?? createId("tab");

  const _name = ref<string | undefined>(args.name);

  const _computedName = computed(() => {
    if (_name.value) return _name.value;
    return useFonts().getById(args.fontId, "last").familyName;
  });

  const _fontId = ref<string>(args.fontId);

  const _activeFeatures = ref<string[]>([]);

  const component = markRaw(TabTypes.sandbox.component as Component);

  function setName(name?: string | undefined) {
    _name.value = name;
  }

  function setFont(fontId: string) {
    _fontId.value = fontId;
  }

  function addActiveFeature(featureId: string) {
    _activeFeatures.value.push(featureId);
  }

  function removeActiveFeature(featureId: string) {
    const index = _activeFeatures.value.indexOf(featureId);
    if (index > -1) _activeFeatures.value.splice(index, 1);
  }

  return {
    id,

    setName,
    setFont,
    addActiveFeature,
    removeActiveFeature,

    get name() {
      return readonly(_computedName) as unknown as Readonly<string | undefined>;
    },
    get fontId() {
      return readonly(_fontId) as unknown as Readonly<string>;
    },
    get activeFeatures() {
      return readonly(_activeFeatures) as unknown as Readonly<string[]>;
    },
    component,
  };
}

export type Tab = ReturnType<typeof createTab>;

function createSandBoxTab(args: TabArgs) {
  const tab = createTab(args);

  const _currentText = ref<string>("Welcome");
  function setCurrentText(text: string) {
    _currentText.value = text;
  }

  return {
    ...tab,
    get currentText() {
      return readonly(_currentText) as unknown as Readonly<string>;
    },
    setCurrentText,
  };
}

export type SandboxTab = ReturnType<typeof createSandBoxTab>;

const TabTypes = {
  sandbox: {
    displayName: "Sandbox",
    constructor: createSandBoxTab,
    component: SandboxTab as Component,
  },
};

console.log(SandboxTab);
