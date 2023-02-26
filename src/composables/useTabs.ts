import { reactive, ref, computed } from "vue";
import type { Ref } from "vue";

import { localStorageData } from "./useLocalStorage";

import { createId } from "~/modules/utils";

import TabComponentParagraph from "@/components/content/Paragraph.vue";
import TabComponentGlyphs from "@/components/content/Glyphs.vue";
import TabComponentDebug from "@/components/content/Debug.vue";

export class Tab {
  id: string;
  title: string;
  typeId: string;

  constructor({
    id = createId("tab"),
    title,
    type,
  }: {
    id?: string;
    title: string;
    type: string;
  }) {
    this.id = id;
    this.typeId = type;
    this.title = title;
  }
}

export class TabType {
  id: string;
  title: string;
  hidden: boolean;
  component: typeof import("*.vue");

  constructor({
    id,
    title,
    hidden = false,
    component,
  }: {
    id: string;
    title: string;
    hidden?: boolean;
    component: typeof import("*.vue");
  }) {
    this.id = id;
    this.title = title;
    this.hidden = hidden;
    this.component = component;
  }
}

class TabsData {
  listed: Tab[];
  activeTabId: Ref<string>;
  tabTypes: TabType[] = [
    new TabType({
      id: "tat-paragraph",
      title: "Paragraph",
      component: TabComponentParagraph,
    }),
    new TabType({
      id: "tat-glyphs",
      title: "Glyphs",
      component: TabComponentGlyphs,
    }),
    new TabType({
      id: "tat-debug",
      title: "Debug",
      component: TabComponentDebug,
      hidden: true,
    }),
  ];

  constructor() {
    const cachedTabs = localStorageData.get("previouslyOpenedTabs");
    if (cachedTabs.exists) {
      this.listed = reactive(cachedTabs.value as Tab[]);
    } else {
      this.listed = reactive(this.getDefaultTabs());
    }
    this.activeTabId = ref("");
  }

  getDefaultTabs() {
    const defaultTabs: Tab[] = [];
    this.tabTypes.forEach((tabType) => {
      if (!tabType.hidden) {
        defaultTabs.push(new Tab({ title: tabType.title, type: tabType.id }));
      }
    });
    return defaultTabs;
  }
  // computed(() => this.listed.filter((tab) => !tab.hidden));

  createTab(tabType: TabType) {
    const tab = new Tab({
      title: tabType.title,
      type: tabType.id,
    });

    this.listed.push(tab);
  }

  activeTab = computed(() =>
    this.listed.find((tab) => tab.id === this.activeTabId.value)
  );

  get canOpenMore() {
    return this.listed.length < 3;
  }
}

export const tabs = new TabsData();
