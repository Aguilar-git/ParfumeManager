import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/Login",
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/login/login.vue"),
    meta: {
      layout: "auth-layout",
    },
  },
  {
    path: "/Registration",
    name: "Registration",
    component: () => import("../views/registration/registration.vue"),
    meta: {
      layout: "auth-layout",
    },
  },
  {
    path: "/Procurement",
    name: "Procurement",
    component: () => import("../views/Procurement.vue"),
  },
  {
    path: "/Settings",
    name: "Settings",
    component: () => import("../views/Settings.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

// router.beforeEach((to, from, next) => {
//   if (to.name === "Login" && ) {
//     next();
//   }
// });

export default router;
