import { defineStore } from "pinia";
import { FallbackPosition, useFonts } from "./useFonts";
import {
  Component,
  ComputedRef,
  computed,
  markRaw,
  reactive,
  readonly,
  ref,
} from "vue";
import { createId } from "~/modules/utils";

import { viewport } from "./useViewport";

import PlaintextTab from "@/components/content/Plaintext.vue";

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

  const _activeViewId = ref<string>();

  const _activeView = computed(() => {
    return _activeViewId.value ? _storage[_activeViewId.value] : undefined;
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
  function addView(fontId: string, becomesActive?: boolean) {
    if (!fonts.getById(fontId)) return false;

    const view = createView({
      fontId,
    });

    _storage[view.id] = view;

    if (becomesActive) setActiveView(view);

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

  function getNextView(view: View | string) {
    let index = 0;
    if (typeof view === "string") index = _listedIds.value.indexOf(view);
    else index = _listedViews.value.indexOf(view);
    return getByIndex(index + 1, "last");
  }

  function _getFallback(fallback: FallbackPosition): View;
  function _getFallback(fallback?: undefined): undefined;
  function _getFallback(fallback?: FallbackPosition): View | undefined {
    if (fallback === "last") return getLast();
    else if (fallback === "first") return getFirst();
    return undefined;
  }

  function updateViewsWidth() {
    // const lastView = getLast();
    for (const view of _listedViews.value) {
      // if (view.id === lastView.id) {
      // view.setWidth(null);
      // } else {
      view.setWidth();
      // }
    }
  }

  function setActiveView(view: View | string) {
    let id = "";
    if (typeof view === "string") {
      if (!_storage[view]) return false;
      id = view;
    } else {
      id = view.id;
    }
    _activeViewId.value = id;
    return true;
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

    get activeView() {
      return readonly(_activeView);
    },
    setActiveView,

    addView,
    getByIndex,
    getById,
    getNextView,
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
    const type = args.tabType ?? "plainText";
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
    if (!type) type = "plainText";
    const tab = TabTypes[type].constructor({
      fontId: font.id,
    });
    _tabs[tab.id] = tab;

    if (becomesActive) setActiveTab(tab);

    return tab;
  }

  function resize(relative: number) {
    const nextView = getNextView();

    width.value = (width.value ?? 0) + relative;
    nextView.setWidth(((nextView.width as unknown as number) ?? 0) - relative);
  }

  function setWidth(newWidth?: number | null) {
    if (!DOMNode.value) return false;
    if (newWidth === null) width.value = undefined;
    if (newWidth) width.value = newWidth;
    else width.value = DOMNode.value.offsetWidth;
    return width.value;
  }

  function setDOMNode(node: HTMLElement | null) {
    DOMNode.value = node;
  }

  function getNextView() {
    return useViews().getNextView(id);
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

    getNextView,
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

  const component = markRaw(TabTypes.plainText.component as Component);

  function setName(name?: string | undefined) {
    _name.value = name;
  }

  function setFont(fontId: string) {
    _fontId.value = fontId;
  }

  const _currentFontSize = ref<number>(16);
  function setFontSize(size?: number | undefined) {
    _currentFontSize.value = size ?? 16;
  }

  const _currentLineHeight = ref<number>(1.5);
  function setLineHeight(height?: number | undefined) {
    _currentLineHeight.value = height ?? 1.5;
  }

  const _currentEnabledFontFeatures = reactive(new Set<string>());
  function enableFontFeature(feature: string) {
    _currentEnabledFontFeatures.add(feature);
  }
  function disableFontFeature(feature: string) {
    _currentEnabledFontFeatures.delete(feature);
  }
  function toggleFontFeature(feature: string) {
    if (_currentEnabledFontFeatures.has(feature))
      _currentEnabledFontFeatures.delete(feature);
    else _currentEnabledFontFeatures.add(feature);
  }

  return {
    id,

    setName,
    setFont,

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

    get fontSize() {
      return readonly(_currentFontSize) as unknown as Readonly<number>;
    },
    setFontSize,

    get lineHeight() {
      return readonly(_currentLineHeight) as unknown as Readonly<number>;
    },
    setLineHeight,

    get enabledFontFeatures() {
      return readonly(_currentEnabledFontFeatures);
    },
    enableFontFeature,
    disableFontFeature,
    toggleFontFeature,
  };
}

export type Tab = ReturnType<typeof createTab>;

function createPlaintextTab(args: TabArgs) {
  const tab = createTab(args);

  const _currentText = ref<string>(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n1234567890"
  );
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

export type PlaintextTab = ReturnType<typeof createPlaintextTab>;

const TabTypes = {
  plainText: {
    displayName: "Plain text",
    constructor: createPlaintextTab,
    component: PlaintextTab as Component,
  },
};
