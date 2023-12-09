import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "@/constants/routes.js";
import { filters, directives } from "@/constants";
import App from "./App.vue";
import "@/assets/styles/style.css";
import "@/assets/fonts/fontAwasome.css";

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

const root = createApp(App);

root.config.globalProperties.$filters = filters;
root.directive("bold", directives.bold);
root.directive("gradientText", directives.gradientText);
root.directive("style", directives.style);
root.directive("loopOn", directives.loopOn);

root.use(router);
root.mount("#app");
