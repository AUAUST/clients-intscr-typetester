<template>
  <div
    id="sidebar-container"
    :class="{
      closed: viewport.size.sideBarHidden,
      hideable: viewport.size.sideBarHideable,
    }"
  >
    <menu id="sidebar">
      <SideBarSection title="Font files" id="font-selected" :resizable="false">
        <ButtonsGroup>
          <Button @click="fonts.openFontInput()" size="fit-width">
            Select a file
          </Button>
        </ButtonsGroup>
      </SideBarSection>
      <SideBarSection
        title="Font settings"
        id="font-settings"
        :resizable="true"
      >
        <FontSettings />
        {{ currentFont?.familyName }}
      </SideBarSection>
      <SideBarSection
        title="Interface settings"
        id="interface-settings"
        :resizable="true"
        :fillHeight="true"
      >
        <UiSettings />
      </SideBarSection>
      <!-- <section id="interface-settings" ref="interfaceSettings">
        <h4 class="text-x-small">Interface settings</h4>
        <div>
          <section>
            <h5>Theme</h5>

          </section>
        </div>
      </section> -->
    </menu>
    <div id="toggle-sidebar-button">
      <Button
        v-show="viewport.size.sideBarHideable"
        @click="viewport.toggleSideBar()"
        >{{ viewport.size.sideBarHidden ? "→" : "←" }}</Button
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { viewport } from "~/composables/useViewport";

import Button from "@/components/ui/Button.vue";
import ButtonsGroup from "@/components/ui/ButtonsGroup.vue";
import UiSettings from "@/components/sidebar/UiSettings.vue";
import FontSettings from "@/components/sidebar/FontSettings.vue";
import SideBarSection from "@/components/sidebar/Section.vue";

import { computed } from "vue";

import { useFonts } from "~/composables/useFonts";
import { useViews } from "~/composables/useViews";

const fonts = useFonts();
const views = useViews();

const currentFont = computed(() =>
  fonts.getById(views.activeView?.activeTab.fontId ?? "")
);
</script>

<style lang="scss">
@use "@/assets/style/variables" as v;

#sidebar-container {
  &.hideable {
    transition: transform 0.3s linear;
    &.closed {
      transform: translateX(-100%);
    }
  }
  width: 300px;
  overflow: hidden;
  position: relative;
}

#sidebar {
  display: grid;
  grid-template-rows: auto 1fr auto;

  width: 100%;
  height: 100%;
  background-color: v.$c-gray-2;
  border-right: 1px solid v.$c-gray-4;
  user-select: none;
  -webkit-user-select: none;
}

.view-narrow,
.view-x-narrow {
  #sidebar-container {
    z-index: 1;
    position: absolute;
    height: 100%;

    #toggle-sidebar-button {
      position: absolute;
      left: 100%;
      bottom: 0px;
    }
  }
}

.view-x-narrow {
  #sidebar-container {
    width: 100vw;
    #toggle-sidebar-button {
      .button {
        position: fixed;
        right: 0;
        bottom: 0;
      }
    }
    &.closed #toggle-sidebar-button .button {
      transform: translate(100%);
    }
  }
}
</style>
