import { createApp } from 'vue'
// import './style.css'
import './index.css'
import App from './App.vue'
import store from "./store";

import router from "./router";

import { RouterLink, RouterView } from "vue-router";


const app = createApp(App);
app.use(router);
app.use(store);
app.use(RouterLink);
app.mount('#app')