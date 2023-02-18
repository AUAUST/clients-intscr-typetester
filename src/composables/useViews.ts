import { ref, computed } from "vue";
import type { Ref, ComputedRef } from "vue";

import { Tab, TabType, tabs } from "./useTabs";

import { createId } from "~/modules/utils";

class View {
  id: string;
  active: boolean;
  activeTabId: Ref<string>;
  activeTab: Ref<Tab | undefined>;

  constructor() {
    this.id = createId("viw");
    this.active = false;
    this.activeTabId = ref("");
    this.activeTab = ref();
  }

  close() {
    const index = views.listed.indexOf(this);
    if (index > -1) {
      views.listed.splice(index, 1);
    }
  }
}

class ViewsData {
  listed: View[] = [new View(), new View(), new View()];
  activeViewId: Ref<string>;
  activeView: ComputedRef<View | undefined>;

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

export const views = new ViewsData();
