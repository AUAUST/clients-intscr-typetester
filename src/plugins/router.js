import { createRouter, createWebHistory } from "vue-router";

// const routes = [
//   {
//     path: "",
//     name: "home",
//     component: () => {
//       import("@/views/Home.vue");
//     },
//   },
//   {
//     path: "/about",
//     name: "about",
//     component: () => {
//       import("@/views/About.vue");
//     },
//   },
// ];

const routes = [
  {
    path: "",
    name: "home",
    component: {
      template: "<div>I'm the home div</div>",
    },
  },
  {
    path: "/about",
    name: "about",
    component: {
      template: "<div>I'm a div</div>",
    },
  },
];

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

export default router;
