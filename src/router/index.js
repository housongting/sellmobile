import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
    redirect: "business",
    children: [{
        path: 'business',
        name: 'business',
        component: () => import('../views/business.vue')
      },
      {
        path: 'goods',
        name: 'goods',
        component: () => import('../views/goods.vue')
      },
      {
        path: 'ratings',
        name: 'ratings',
        component: () => import('../views/ratings.vue')
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router