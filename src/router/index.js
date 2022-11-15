import { createRouter, createWebHistory } from "vue-router";
import Login from "/src/views/login.vue";
import Register from "/src/views/register.vue";
import Odd from "/src/views/odd.vue";
import ForgotPassword from "/src/views/forgot_password.vue";
import Navigation from "/src/views/navigation.vue";
import Addproduct from "/src/views/addproduct.vue";
import Addbranch from "/src/views/addbranch.vue";





const routes = [{
        path: "/",
        name: "login",
        component: Login,
    },
    { path: "/register", name: "register", component: Register },
    { path: "/odd", name: "odd", component: Odd },
    {
        path: "/forgot_password",
        name: "forgot_password",
        component: ForgotPassword,
    },
    {
        path: "/navigation",
        name: "navigation",
        component: Navigation,
    },
    {
        path: "/addproduct",
        name: "addproduct",
        component: Addproduct,
    },
    {
        path: "/addbranch",
        name: "addbranch",
        component: Addbranch,
    },
];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});
export default router;