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
    // beforeEnter: beforeEnter()
  },
  {
    path: '/Acts',
    name: 'Acts',
    component: () => import('../views/Acts.vue'),
    // beforeEnter: beforeEnter()
  },
  {
    path: '/Fines',
    name: 'Fines',
    component: () => import('../views/Fines.vue'),
    // beforeEnter: beforeEnter()
  },
  {
    path: '/pass-cards',
    name: 'pass-cards',
    component: () => import('../views/PassCards.vue'),
    // beforeEnter: beforeEnter()
  },
  {
    path: '/Personnel',
    name: 'Personnel',
    component: () => import('../views/Personnel.vue'),
    // beforeEnter: beforeEnter()
  },
  {
    path: '/Reports',
    name: 'Reports',
    component: () => import('../views/Reports.vue'),
    // beforeEnter: beforeEnter()
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue'),
    // beforeEnter: beforeEnter()
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
});

// function beforeEnter(to, from, next) {
//   if (CheckLogin()) {
//     next();
//   } else {
//     next({ name: 'Login' });
//     console.log("redirect");
//   }
// }

// function CheckLogin() {
//   const login = localStorage.getItem("login")
//   console.log(login)
//   if (login != null) {
//     return true;
//   }
//   return false;
// }


export default router
