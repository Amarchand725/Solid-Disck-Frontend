import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue';
import { initAllPlugins } from '@/initPlugins';
import Home from '../views/Home.vue' // make sure path is correct
import Wishlist from '../views/Wishlist.vue' // make sure path is correct
import CompareProduct from '../views/CompareProduct.vue' // make sure path is correct
import Cart from '../views/Cart.vue' // make sure path is correct
import Checkout from '../views/Checkout.vue' // make sure path is correct
import TrackOrder from '../views/TrackOrder.vue' // make sure path is correct
import Shop from '../views/Shop.vue' // make sure path is correct
import SingleProduct from '../views/SingleProduct.vue' // make sure path is correct

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist,
    meta: { title: 'Wishlist' }
  },
  {
    path: '/products/compare',
    name: 'CompareProduct',
    component: CompareProduct,
    meta: { title: 'Compare Product' }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: { title: 'Cart' }
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    meta: { title: 'Checkout' }
  },
  {
    path: '/track-order',
    name: 'TrackOrder',
    component: TrackOrder,
    meta: { title: 'Track Your Order' }
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    meta: { title: 'Shop' }
  },
  {
    path: '/shop/single-product/:slug', 
    name: 'SingleProduct',
    component: SingleProduct,
    meta: { title: 'Single Product' }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to, from) => {
  nextTick(() => {
    initAllPlugins();
  });
});

export default router
