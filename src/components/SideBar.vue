<template>
  <div id="sidebar-container">
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
            <h5>Brightness</h5>
            <UiSettingsBrightness />
          </section>
        </div>
      </section>
    </menu>
    <!-- <Button v-if="windowData.size.sideBarHideable">Yo</Button> -->
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
  background-color: v.$c-auaust-2;
  border-right: 1px solid v.$c-auaust-4;

  section {
    div {
      color: v.$c-gray-6;
      h4 {
        padding: v.$gap-small-half v.$gap-small-normal;
        border-bottom: 1px solid v.$c-auaust-4;
      }
      h5 {
        padding: v.$gap-small-half v.$gap-small-normal 0 v.$gap-small-normal;
      }
    }
  }
}

#sidebar-container {
  width: 300px;
  position: relative;
  > .button {
    position: absolute;
    left: 100%;
  }
}

#interface-settings {
  background-color: v.$c-auaust-3;
  border-top: 1px solid v.$c-auaust-4;
}

// }
.view-narrow,
.view-x-narrow {
  #sidebar {
    z-index: 1;
    position: absolute;
  }
}

.view-x-narrow {
  #sidebar {
    width: 100vw;
  }
}
</style>
