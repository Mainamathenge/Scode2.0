import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "../views/LoginView.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import ForgotEmail from "../views/ForgotView.vue";
import ResetPassword from "../views/ResetPassword.vue";
import Dashboard from "../views/DashboardView.vue";
import DashboardUsers from "../views/DashboardUsers.vue";
import DashboardBusiness from "../views/DashboardBusiness.vue";
import DashboardMessage from "../views/DashboardMessage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/forgotPassword",
    name: "forgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/forgotEmail",
    name: "forgotEmail",
    component: ForgotEmail,
  },
  {
    path: "/resetPassword/:token",
    name: "resetPassword",
    component: ResetPassword,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      // Define the child routes

      {
        path: "businesses",
        component: DashboardBusiness,
      },
      {
        path: "users",
        component: DashboardUsers,
      },
      {
        path: "messages",
        component: DashboardMessage,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next("/");
  }
  next();
});

export default router;
