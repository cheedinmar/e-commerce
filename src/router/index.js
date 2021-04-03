import {
    createRouter, 
    createWebHistory
 } from 'vue-router'
import home from "../components/home/manage.vue"
import product from "../components/product/manage.vue"
import product_details from "../components/product/product_details.vue"
import cart from '../components/cart/cart_modal.vue'

import checkout from "../components/checkout/manage.vue"

const routes = [
    {
        path:'/',
        component: home,
        name:'home'
    },
    {
        path: '/product',
        component: product,
        name:'product'
    },
    {
      path:'/product/:id',
      component:product_details,
      name:'product_details',
    },
    {
      path: '/cart',
      component:cart,
      name: 'cart',
      children:[
        {
          path:'/checkout',
          component:checkout,
          name:'checkout'

        }
      ]
    },
    {
      path: '/checkout',
      component:checkout,
      name:'checkout'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes:routes,
  })

//   const router = new VueRouter({
//     Routes // short for `routes: routes`
//   })

export default router