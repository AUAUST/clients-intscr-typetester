import { ref, computed } from "vue";
import type { Ref, ComputedRef } from "vue";

import { Tab, TabType, tabs } from "./useTabs";

import { createId } from "~/modules/utils";

class View {
  id: string;
  active: boolean;
  activeTabId: ComputedRef<string | undefined>;
  activeTab: Ref<Tab | undefined>;
  listedTabs: Tab[];
  width: Ref<number | undefined> = ref(undefined);

  constructor({
    active = false,
    activeTabId,
  }: {
    active?: boolean;
    activeTabId?: string;
  } = {}) {
    this.id = createId("viw");
    this.active = active;
    this.activeTabId = computed(() => {
      return this.activeTab.value?.id;
    });
    this.activeTab = ref();
    this.listedTabs = [];
  }

  close() {
    const index = views.listed.indexOf(this);
    if (index > -1) {
      views.listed.splice(index, 1);
    }
  }
}

class Views {
  listed: View[] = [new View(), new View(), new View(), new View()];
  activeViewId: Ref<string>;
  activeView: ComputedRef<View | undefined>;
  fullWidth: Ref<number | undefined> = ref(undefined);

  get canCreate() {
    return this.listed.length < 3;
  }
  get canClose() {
    return this.listed.length > 1;
  }

  constructor() {
    this.activeViewId = ref("");
    this.activeView = computed(() => {
      return this.listed.find((view) => view.id === this.activeViewId.value);
    });
  }
}

export const views = new Views();
