<template>
  <div
    id="sidebar-container"
    :class="{
      closed: windowData.size.sideBarHidden,
      hideable: windowData.size.sideBarHideable,
    }"
  >
    <menu id="sidebar">
      <SideBarSection title="Font in use" id="font-selected" :resizable="false">
        <ButtonsGroup>
          <Button @click="uploadFont()"> Select a file </Button>
        </ButtonsGroup>
      </SideBarSection>
      <SideBarSection
        title="Font settings"
        id="font-settings"
        :resizable="true"
      ></SideBarSection>
      <SideBarSection
        title="Interface settings"
        id="interface-settings"
        :resizable="true"
        :fillHeight="true"
      >
        <UiSettingsBrightness />
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
        v-show="windowData.size.sideBarHideable"
        @click="windowData.toggleSideBar()"
        >{{ windowData.size.sideBarHidden ? "→" : "←" }}</Button
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { windowData } from "~/composables/useWindow";

import { uploadFont } from "~/composables/useFont";

import Button from "@/components/ui/Button.vue";
import UiSettingsBrightness from "@/components/sidebar/Brightness.vue";
import SideBarSection from "@/components/sidebar/Section.vue";
</script>

<style scoped lang="scss">
@use "@/assets/style/variables" as v;

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

// }
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
