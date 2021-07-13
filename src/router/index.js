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
    beforeEnter: (to, from, next) => {
      if (CheckLogin()) {
        next({ path: '/Login' });
      } else {
        next();
      }
    },
  },
  {
    path: '/Acts',
    name: 'Acts',
    component: () => import('../views/Acts.vue'),
    beforeEnter: (to, from, next) => {
      if (CheckLogin()) {
        next({ path: '/Login' });
      } else {
        next();
      }
    },
  },
  {
    path: '/Fines',
    name: 'Fines',
    component: () => import('../views/Fines.vue'),
    beforeEnter: (to, from, next) => {
      if (CheckLogin()) {
        next({ path: '/Login' });
      } else {
        next();
      }
    },
  },
  {
    path: '/pass-cards',
    name: 'pass-cards',
    component: () => import('../views/PassCards.vue'),
    beforeEnter: (to, from, next) => {
      if (CheckLogin()) {
        next({ path: '/Login' });
      } else {
        next();
      }
    },
  },
  {
    path: '/Personnel',
    name: 'Personnel',
    component: () => import('../views/Personnel.vue'),
    beforeEnter: (to, from, next) => {
      if (CheckLogin()) {
        next({ path: '/Login' });
      } else {
        next();
      }
    },
  },
  {
    path: '/Reports',
    name: 'Reports',
    component: () => import('../views/Reports.vue'),
    beforeEnter: (to, from, next) => {
      if (CheckLogin()) {
        next({ path: '/Login' });
      } else {
        next();
      }
    },
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue'),
    beforeEnter: (to, from, next) => {
      if (CheckLogin()) {
        next({ path: '/Login' });
      } else {
        next();
      }
    },
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
});

function CheckLogin() {
  const login = localStorage.getItem("login")
  if (login != undefined || login != null) {
    return false;
  } else {
    return true;
  }
}


export default router
