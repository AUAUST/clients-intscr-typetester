<template>
  <menu>
    <p>SideBar</p>
  </menu>
</template>

<style scoped lang="scss">
@use "@/assets/style/variables" as v;

// body.view-normal {
menu {
  width: 300px;
  height: 100%;
  grid-column: 1;
  background-color: v.$c-gray-0;
}
// }
body.view-narrow,
body.view-x-narrow {
  menu {
    z-index: 1;
    position: absolute;
    opacity: 0.5;
    pointer-events: none;
    background-color: red;
  }
}

body.view-x-narrow {
  menu {
    width: 100vw;
  }
}
</style>
