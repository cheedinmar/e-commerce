import {
    createRouter, 
    createWebHistory
 } from 'vue-router'
import home from "../components/home/manage.vue"

const routes = [
    {
        path:'/',
        component: home,
        name:'home'
    },
    {
        path: '/product',
        component: () => import(/*webpackChunkName: 'product'*/ "../components/product/manage.vue"),
        name:'product'
    },
    {
      path:'/product/:id',
      component: () => import(/*webpackChunkName: 'product_details'*/ "../components/product/product_details.vue"),
      name:'product_details'
    },
    {
      path: '/cart',
      component: () => import(/*webpackChunkName: 'cart'*/ "../components/cart/cart_modal.vue"),
      name: 'cart'
    },
    {
      path: '/checkout',
      component: () => import(/*webpackChunkName: 'checkout'*/ "../components/checkout/manage.vue"),
      name:'checkout'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes:routes,
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    }
  })

//   const router = new VueRouter({
//     Routes // short for `routes: routes`
//   })

export default router