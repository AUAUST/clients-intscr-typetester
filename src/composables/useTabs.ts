import { markRaw, reactive } from "vue";

import { createId } from "~/modules/utils";

import TabComponentParagraph from "@/components/content/Paragraph.vue";
import TabComponentGlyphs from "@/components/content/Glyphs.vue";
import TabComponentDebug from "@/components/content/Debug.vue";
import { FontOverview } from "./useFont";

export class Tab {
  id: string;
  title: string;
  type: TabType;
  font: FontOverview;

  state = {
    enabledFeatures: reactive(new Set<string>()),
  };

  constructor(args: {
    id?: string;
    title: string;
    type?: TabType | string;
    font: FontOverview;
  }) {
    this.id = args.id ?? createId("tab");
    this.title = args.title;

    this.type =
      (typeof args.type === "string"
        ? tabTypes.getTypeById(args.type)
        : args.type) ?? tabTypes.getDefaultType();

    this.font = args.font;
  }

  get component() {
    return this.type.component;
  }
  get typeId() {
    return this.type.id;
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

const tabTypes = {
  getTypeById: function (id: string) {
    return this.listed.find((type) => type.id === id);
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

export const tabs = {
  get defaultType() {
    return tabTypes.getDefaultType();
  },

  get types() {
    return tabTypes.listed;
  },

  getTypeById: tabTypes.getTypeById,

  createDefaultTab: function (args: { title: string; font: FontOverview }) {
    return new Tab({
      title: args.title,
      font: args.font,
      type: this.defaultType,
    });
  },
};
