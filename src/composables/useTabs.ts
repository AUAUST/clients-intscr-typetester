import { reactive, ref, computed, markRaw } from "vue";
import type { Ref } from "vue";

import { storage } from "./useStorage";

import { createId } from "~/modules/utils";

import TabComponentParagraph from "@/components/content/Paragraph.vue";
import TabComponentGlyphs from "@/components/content/Glyphs.vue";
import TabComponentDebug from "@/components/content/Debug.vue";

export class Tab {
  id: string;
  title: string;
  typeId: string;
  type: TabType;

  constructor({
    id = createId("tab"),
    title,
    typeId,
    type,
  }: {
    id?: string;
    title: string;
    typeId?: string;
    type?: TabType;
  }) {
    this.id = id;
    if (type) {
      this.type = type;
      this, (this.typeId = type.id);
    } else if (typeId) {
      const typeFromId = tabTypes.getTypeById(typeId);
      if (typeFromId) {
        this.type = typeFromId;
        this.typeId = typeId;
      } else {
        const defaultType = tabs.defaultType;
        this.type = defaultType;
        this.typeId = defaultType.id;
        console.warn(
          `Tab type with id "${typeId}" not found. Using default type "${defaultType.id}".`,
          this,
          defaultType
        );
      }
    } else {
      const defaultType = tabs.defaultType;
      this.type = defaultType;
      this.typeId = defaultType.id;
      console.warn(
        `No type or typeId provided. Using default type "${defaultType.id}".`,
        this,
        defaultType
      );
    }

    this.title = title;
  }

  get component() {
    return this.type.component;
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
    this.component = markRaw(component);
  }
}

export const tabTypes = {
  getTypeById: function (id: string) {
    return this.listed.find((type) => type.id === id) ?? this.getDefaultType();
  },
  getDefaultType: function () {
    return this.listed[0];
  },
  listed: [
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
  ],
};

class TabsData {
  listed: Tab[];
  activeTabId: Ref<string>;
  tabTypes = tabTypes.listed;
  getTypeById = tabTypes.getTypeById;
  defaultType = tabTypes.getDefaultType();

  constructor() {
    const cachedTabs = storage.get("previouslyOpenedTabs");
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
        defaultTabs.push(new Tab({ title: tabType.title, typeId: tabType.id }));
      }
    });
    return defaultTabs;
  }

  createTab(tabType: TabType) {
    const tab = new Tab({
      title: tabType.title,
      typeId: tabType.id,
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
