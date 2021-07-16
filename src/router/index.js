import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/Login'
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      layout: 'auth-layout'
    }
  },
  {
    path: '/Main',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    meta: {
      layout: 'worker-layout'
    }
  },
  {
    path: '/Acts',
    name: 'Acts',
    component: () => import('../views/Acts.vue'),
    meta: {
      layout: 'worker-layout'
    }
  },
  {
    path: '/pass-cards',
    name: 'PassCards',
    component: () => import('../views/PassCards.vue'),
  },
  {
    path: '/Personnel',
    name: 'Personnel',
    component: () => import('../views/Personnel.vue'),
  },
  {
    path: '/Reports',
    name: 'Reports',
    component: () => import('../views/Reports.vue'),
    meta: {
      layout: 'worker-layout'
    }
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue'),

  }
]

const router = new VueRouter({
  routes,
  mode: "history"
});

// router.beforeEach((to, from, next) => {
//   if (to.name === "Login" && ) {
//     next();
//   }
// });

export default router
