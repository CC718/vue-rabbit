import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from "./App.vue";
import router from "./router";

import '@/styles/common.scss'

// 引入懒加载指令插件
import { lazyPlugin } from "@/directives/index.js";
const app = createApp(App);
//引入全局组件插件
import { componentPlugin } from "@/components/index.js";

//注册持久化插件
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia);
app.use(router);
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount("#app");



