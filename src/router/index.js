import { createRouter, createWebHistory } from "vue-router";
import Login from "/src/views/login.vue";
import Register from "/src/views/register.vue";
import Odd from "/src/views/odd.vue";
import ForgotPassword from "/src/views/forgot_password.vue";
import Navigation from "/src/views/navigation.vue";
import Addproduct from "/src/views/addproduct.vue";
import Addbranch from "/src/views/addbranch.vue";
import Barchart from "/src/views/barchart.vue";
import Login_user from "/src/views/login_user.vue";
import Createuser from "/src/views/createuser.vue";

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
    {
        path: "/barchart",
        name: "barchart",
        component: Barchart,
    },
    {
        path: "/login_user",
        name: "login_user",
        component: Login_user,
    },
    {
        path: "/createuser",
        name: "createuser",
        component: Createuser,
    },
];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});
export default router;

router.beforeEach((to, from, next) => {
    //check page is protected or not
    if (to.meta.authRequired === "true") {
        //get contact's id
        const contactId = to.params.id;

        //access check
        if (
            //if user is admin or super admin
            user.role === "super_admin" ||
            user.role === "admin" ||
            //if user is the contact itself
            user.id === contactId ||
            //if user is manager and has necessary permissions
            (user.role === "manager" &&
                user.role.permissions.some((p) => p.key === "create-contact") &&
                user.role.permissions.some((p) => p.key === "update-contact"))
        ) {
            return next();
        } else {
            router.push({
                name: "Unauthorized",
            });
        }
    } else {
        return next();
    }
});