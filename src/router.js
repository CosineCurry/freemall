import Vue from 'vue'
import Router from 'vue-router'
import Cart from './pages/cart.vue'
import Address from './pages/address'

Vue.use(Router);

//配置路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'cart',
      component:Cart
    },
    {
      path: '/address',
      name: 'address',
      component:Address
    }
  ]
})