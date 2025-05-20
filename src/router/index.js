import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue';
import { useStore } from 'vuex';  // Use Vuex to access the global state
import { initAllPlugins } from '@/initPlugins';
import Home from '../views/Home.vue'
// import Wishlist from '../views/Wishlist.vue'
import CompareProduct from '../views/CompareProduct.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
// import TrackOrder from '../views/TrackOrder.vue'
import Shop from '../views/Shop.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import SingleProduct from '../views/SingleProduct.vue'
import PolicyPage from '../views/PolicyPage.vue'
import RequestQuote from '../views/RequestQuote.vue'
import faq from '../views/faq.vue'
import Blogs from '../views/Blogs.vue'
import BlogDetails from '../views/BlogDetails.vue'
import ContactUs from '../views/ContactUs.vue'
import MyAccount from '../views/MyAccount.vue'
import OrderSuccess from '../views/OrderSuccess.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      const store = useStore();
      const isAuthenticated = localStorage.getItem('auth_token') || store.state.auth.token;

      if (isAuthenticated) {
        next({ name: 'MyAccount' });
      } else {
        next(); // allow to continue to login
      }
    }
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccount,
    meta: { title: 'MyAccount' }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home' }
  },
  // {
  //   path: '/wishlist',
  //   name: 'Wishlist',
  //   component: Wishlist,
  //   meta: { title: 'Wishlist' }
  // },
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
    meta: { title: 'Checkout' },
    // beforeEnter: (to, from, next) => {
    //   const store = useStore();
    //   const isAuthenticated = store.getters.isLoggedIn || localStorage.getItem('auth_token');

    //   if (!isAuthenticated) {
    //     localStorage.setItem('redirect_to_checkout', 'true');
    //     next({ name: 'Login', query: { message: 'Please login or register to continue to checkout.' } });
    //   } else {
    //     next();
    //   }
    // }
  },
  {
    path: '/order-success/:orderNumber',
    name: 'OrderSuccess',
    component: OrderSuccess,
    props: true,  // important to enable passing params as props
  },

  // {
  //   path: '/track-order',
  //   name: 'TrackOrder',
  //   component: TrackOrder,
  //   meta: { title: 'Track Your Order' }
  // },
  {
    path: '/categories/:categoryPath(.*)/:slug',
    // path: '/products/:categoryPath(.*)/:slug',
    name: 'Shop',
    component: Shop,
    meta: { title: 'Shop' }
  },
  {
    path: '/products/:categoryPath(.*)/:slug',
    name: 'SingleProduct',
    component: SingleProduct,
    meta: { title: 'Single Product' }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: 'Login' }
  },  
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { title: 'Register' }
  },  
  {
    path: '/policies/:page',
    name: 'PolicyPage',
    component: PolicyPage,
    meta: { title: 'Policy Content' }
  },
  {
    path: '/quote-request',
    name: 'RequestQuote',
    component: RequestQuote,
    meta: { title: 'Request Quote Form' }
  },
  {
    path: '/faq',
    name: 'faq',
    component: faq,
    meta: { title: 'FAQ' }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
    meta: { title: 'Blogs' }
  },
  {
    path: '/blogs/:slug',
    name: 'BlogDetails',
    component: BlogDetails,
    meta: { title: 'Blog Details' }
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs,
    meta: { title: 'ContactUs' }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Add a navigation guard to protect certain routes
router.beforeEach((to, from, next) => {
  const store = useStore();  // Get access to the Vuex store
  const isLoggedIn = store.getters.isLoggedIn;  // Check if the user is logged in

  // If the route requires login but the user is not logged in
  if (to.meta.requiresAuth && !isLoggedIn) {
    // Redirect the user to the login page
    next({ name: 'login' });  // Assuming you have a route named 'login'
  } else {
    // Otherwise, allow access to the route
    next();
  }
});

router.afterEach((to, from) => {
  nextTick(() => {
    initAllPlugins();
  });
});

export default router
