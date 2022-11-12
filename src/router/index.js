import { createRouter, createWebHistory } from "vue-router";
import Login from "/src/views/login.vue";
import Register from "/src/views/register.vue";
import Odd from "/src/views/odd.vue";


const routes = [{
        path: "/",
        name: "login",
        component: Login,
    },
    { path: "/register", name: "register", component: Register },
    { path: "/odd", name: "odd", component: Odd },
];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});
export default router;