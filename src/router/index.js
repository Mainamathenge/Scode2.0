import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "../views/LoginView.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import ForgotEmail from "../views/ForgotView.vue";
import ResetPassword from "../views/ResetPassword.vue";
import Dashboard from "../views/DashboardView.vue";
import DashboardStats from "../views/DashboardStats.vue";
import DashboardUsers from "../views/DashboardUsers.vue";
import DashboardActivity from "../views/DashboardActivity.vue";
import DashboardBusiness from "../views/DashboardBusiness.vue";
import DashboardCommunity from "../views/DashboardCommunity.vue";
import DashboardMessage from "../views/DashboardMessage.vue";
import DashboardRsvp from "../views/DashboardRsvp.vue";

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
        path: "",
        name: "dashboard",
        component: DashboardStats,
      },
      {
        path: "businesses",
        component: DashboardBusiness,
      },
      {
        path: "users",
        component: DashboardUsers,
      },
      {
        path: "activities",
        component: DashboardActivity,
      },
      {
        path: "communities",
        component: DashboardCommunity,
      },
      {
        path: "messages",
        component: DashboardMessage,
      },
      {
        path: "rsvp",
        component: DashboardRsvp,
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
