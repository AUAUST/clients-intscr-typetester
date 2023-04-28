import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";

import "@/assets/style/index.scss";

console.log("%cAUAUST.CH DESIGN AUTOMATISÉ","color:white;background-color:#170049;font-family:monospace;font-size:13px;padding:0px 1.5ch 1px 1.5ch;"); // prettier-ignore

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount("#app");
