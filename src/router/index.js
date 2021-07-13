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
  },
  {
    path: '/Acts',
    name: 'Acts',
    component: () => import('../views/Acts.vue'),
  },
  {
    path: '/Fines',
    name: 'Fines',
    component: () => import('../views/Fines.vue'),
  },
  {
    path: '/pass-cards',
    name: 'pass-cards',
    component: () => import('../views/PassCards.vue'),
  },
  {
    path: '/Personnel',
    name: 'Personnel',
    component: () => import('../views/Personnel.vue'),
  },
  {
    path: '/Scope-of-work',
    name: 'Scope-of-work',
    component: () => import('../views/ScopeOfWork.vue'),
  },
  {
    path: '/Staffing-reports',
    name: 'Staffing-reports',
    component: () => import('../views/StaffingReports.vue'),
  },
]

const router = new VueRouter({
  routes,
  mode: "history"
})
export default router
