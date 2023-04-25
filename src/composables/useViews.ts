import { ref, computed, ShallowRef, shallowRef, reactive } from "vue";
import type { Ref, ComputedRef } from "vue";

import { fonts } from "./useFont";

import { Tab, TabType, tabs } from "./useTabs";

import { createId } from "~/modules/utils";
import type { Font } from "fontkit";
import { notifications } from "./useNotifications";

const MINIMUM_WIDTH = 50;

export class View {
  id: string;
  width: Ref<number | undefined> = ref(undefined);
  DOMElement: Ref<HTMLElement | undefined> = ref(undefined);

  constructor(args: {
    id?: string;
    font: {
      id: string;
      enabledFontFeatures?: string[];
      axes?: {
        [key: string]: {
          value: number;
        };
      };
    };
    tab: {
      id?: string;
      type: TabType;
    };
    activeTabId?: string;
  }) {
    const font = fonts.getFont(args.font.id);

    if (!font) {
      notifications.sendNotification({
        type: "error",
        message:
          "There was an error while applying the font to a new view.\nThis is most likely a bug. Please report it.",
        forConsole: [font, args.font.id, args],
      });
    }

    this.id = args.id ?? createId("viw");
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
  listed: View[] = [];
  activeViewId: Ref<string>;
  activeView: ComputedRef<View | undefined> = computed(() => undefined);
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
    // this.activeView = computed(() => {
    //   this.activeViewId.value;
    // });
  }

  initFirstView(fontId: string) {
    const view = new View({
      font: { id: fontId, enabledFontFeatures: [], axes: {} },
      tab: {
        type: tabs.defaultType,
      },
    });
    this.listed.push(view);
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
        .reduce((a, b) => (a ?? defaultWidth) + (b ?? defaultWidth), 0);
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
