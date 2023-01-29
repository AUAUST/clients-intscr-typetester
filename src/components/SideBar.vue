<template>
  <div
    id="sidebar-container"
    :class="{
      closed: windowData.size.sideBarHidden,
      hideable: windowData.size.sideBarHideable,
    }"
  >
    <menu id="sidebar">
      <section id="font-select">
        <h4 class="text-x-small">Font in use</h4>

        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod saepe
            excepturi quos, earum magnam pariatur dolore suscipit sed
            reprehenderit atque, ut distinctio possimus exercitationem dicta
            eaque. Maiores veniam veritatis tempora?Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Quod saepe excepturi quos, earum
            magnam pariatur dolore suscipit sed reprehenderit atque, ut
            distinctio possimus exercitationem dicta eaque. Maiores veniam
            veritatis tempora?Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quod saepe excepturi quos, earum magnam pariatur
            dolore suscipit sed reprehenderit atque, ut distinctio possimus
            exercitationem dicta eaque. Maiores veniam veritatis tempora?Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Quod saepe
            excepturi quos, earum magnam pariatur dolore suscipit sed
            reprehenderit atque, ut distinctio possimus exercitationem dicta
            eaque. Maiores veniam veritatis tempora?Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Quod saepe excepturi quos, earum
            magnam pariatur dolore suscipit sed reprehenderit atque, ut
            distinctio possimus exercitationem dicta eaque. Maiores veniam
            veritatis tempora?Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quod saepe excepturi quos, earum magnam pariatur
            dolore suscipit sed reprehenderit atque, ut distinctio possimus
            exercitationem dicta eaque. Maiores veniam veritatis tempora?
          </p>
        </div>
      </section>
      <section id="font-settings">
        <h4 class="text-x-small">Font settings</h4>
        <div></div>
      </section>
      <section id="interface-settings">
        <h4 class="text-x-small">Interface settings</h4>
        <div>
          <section>
            <h5>Theme</h5>
            <UiSettingsBrightness />
          </section>
        </div>
      </section>
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
import Button from "@/components/ui/Button.vue";
import UiSettingsBrightness from "@/components/sidebar/Brightness.vue";
</script>
<style scoped lang="scss">
@use "@/assets/style/variables" as v;

#sidebar {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: v.$c-gray-2;
  border-right: 1px solid v.$c-gray-4;

  section {
    overflow-y: auto;
    height: 100%;

    display: grid;
    grid-template-rows: auto 1fr;

    background-color: inherit;
    > h4 {
      position: sticky;
      top: 0;

      padding: v.$gap-small-half v.$gap-small-normal;
      border-top: 1px solid v.$c-gray-4;
      border-bottom: 1px solid v.$c-gray-4;

      background-color: inherit;
    }
    > div {
      color: v.$c-gray-6;
      h5 {
        padding: v.$gap-small-half v.$gap-small-normal 0 v.$gap-small-normal;
        margin-bottom: -2px;
      }
    }
  }
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
