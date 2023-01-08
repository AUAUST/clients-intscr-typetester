<template>
  <menu>
    <p>SideBar</p>
  </menu>
</template>

<style scoped lang="scss">
@use "@/assets/style/variables" as v;

menu {
  width: 300px;
  height: 100%;
  grid-column: 1;
  background-color: v.$c-gray-0;

  @media screen and (max-width: v.$breakpoint-menu-hideable) {
    z-index: 1;
    position: absolute;
  }
  @media screen and (max-width: v.$breakpoint-menu-fullwidth) {
    width: 100vw;
  }
}
</style>
