<template>
  <div
    id="sidebar-container"
    :class="{
      closed: windowData.size.sideBarHidden,
      hideable: windowData.size.sideBarHideable,
    }"
  >
    <menu id="sidebar">
      <section id="font-settings">
        <div>
          <h4 class="text-x-small">Font settings</h4>
        </div>
      </section>
      <section id="interface-settings">
        <div>
          <h4 class="text-x-small">Interface settings</h4>
          <section>
            <h5>Theme</h5>
            <UiSettingsBrightness />
          </section>
        </div>
      </section>
    </menu>
    <Button
      v-show="windowData.size.sideBarHideable"
      @click="windowData.toggleSideBar()"
      >{{ windowData.size.sideBarHidden ? "→" : "←" }}</Button
    >
  </div>
</template>
<script setup lang="ts">
import { windowData } from "~/composables/useWindow";
import Button from "@/components/ui/Button.vue";
import UiSettingsBrightness from "@/components/sidebar/Brightness.vue";
</script>
<style scoped lang="scss">
@use "@/assets/style/variables" as v;

// body.view-normal {
#sidebar {
  display: grid;
  grid-template-rows: auto auto;
  width: 100%;
  height: 100%;
  grid-column: 1;
  background-color: v.$c-gray-2;
  border-right: 1px solid v.$c-gray-4;

  section {
    div {
      color: v.$c-gray-6;
      h4 {
        padding: v.$gap-small-half v.$gap-small-normal;
        border-bottom: 1px solid v.$c-gray-4;
      }
      h5 {
        padding: v.$gap-small-half v.$gap-small-normal 0 v.$gap-small-normal;
        margin-bottom: -2px;
      }
    }
  }
}

#sidebar-container {
  &.hideable {
    transition: transform 0.3s steps(3, end);
    &.closed {
      transform: translateX(-100%);
    }
  }
  width: 300px;
  position: relative;
}

#interface-settings {
  background-color: v.$c-gray-3;
  border-top: 1px solid v.$c-gray-4;
}

// }
.view-narrow,
.view-x-narrow {
  #sidebar-container {
    z-index: 1;
    position: absolute;
    height: 100%;

    > .button {
      position: absolute;
      left: 100%;
      bottom: 0px;
    }
  }
}

.view-x-narrow {
  #sidebar-container {
    width: 100vw;
    > .button {
      position: fixed;
      right: 0;
      bottom: 0;
    }
    &.closed > .button {
      transform: translate(100%);
    }
  }
}
</style>
