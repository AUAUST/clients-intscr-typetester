import { ref, computed } from "vue";
import type { Ref, ComputedRef } from "vue";

import { Tab, TabType, tabs } from "./useTabs";

import { createId } from "~/modules/utils";

const MINIMUM_WIDTH = 50;

export class View {
  id: string;
  active: boolean;
  activeTabId: ComputedRef<string | undefined>;
  activeTab: Ref<Tab | undefined>;
  listedTabs: Tab[];
  width: Ref<number | undefined> = ref(undefined);
  DOMElement: Ref<HTMLElement | undefined> = ref(undefined);

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

  resize(width: number) {
    if (this.width.value) {
      const nextView = views.listed[views.listed.indexOf(this) + 1];
      if (nextView.width.value) {
        this.width.value += width;
        nextView.width.value -= width;
      }
    } else console.warn("no width provided");
  }
}

class Views {
  listed: View[] = [new View(), new View()];
  activeViewId: Ref<string>;
  activeView: ComputedRef<View | undefined>;
  // this value is set by the Content.vue component automatically on mount
  fullWidth: Ref<number | undefined> = ref(undefined);

  get canCreate() {
    return (
      ((this.fullWidth.value ?? 0 / MINIMUM_WIDTH) || 1) > this.listed.length
    );
  }
  get maxViews() {
    return Math.floor((this.fullWidth.value ?? 0) / MINIMUM_WIDTH) || 1;
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

  viewById(id: string) {
    return this.listed.find((view) => view.id === id);
  }

  setWidthsFromState() {
    this.listed.forEach((view) => {
      const realWidth = view.DOMElement.value?.offsetWidth ?? 0;
      view.width.value = realWidth >= MINIMUM_WIDTH ? realWidth : MINIMUM_WIDTH;
    });
  }
  calculateWidths() {
    const fullWidth = this.fullWidth.value;
    if (fullWidth) {
      const defaultWidth = fullWidth / this.listed.length;
      const previousFullWidth = this.listed
        .map((view) => view.width.value)
        .reduce((a, b) => (a ?? defaultWidth) + (b ?? defaultWidth));
      this.listed.forEach((view) => {
        let newViewWidth: number | undefined;
        let currentViewWidth = view.width.value;

        if (!currentViewWidth) {
          newViewWidth = defaultWidth;
        } else {
          if (previousFullWidth) {
            let remainingWidth = fullWidth - defaultWidth;
            newViewWidth = (currentViewWidth / previousFullWidth) * fullWidth;
          } else {
            newViewWidth = defaultWidth;
          }
        }

        view.width.value =
          newViewWidth < MINIMUM_WIDTH ? MINIMUM_WIDTH : newViewWidth;
      });
    }
  }
}

export const views = new Views();
