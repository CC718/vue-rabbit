import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import '@/styles/common.scss'
//测试接口函数

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
