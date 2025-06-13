import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue';
import { initAllPlugins } from '@/initPlugins';
import store from '@/vuexstore/store';

const Home = () => import('@/views/Home.vue')
const CompareProduct = () => import('@/views/CompareProduct.vue')
const Configurator = () => import('@/views/Configurator.vue')
const Cart = () => import('@/views/Cart.vue')
const Checkout = () => import('@/views/Checkout.vue')
const Shop = () => import('@/views/Shop.vue')
const FilteredShop = () => import('@/views/FilteredShop.vue')
const BrandProducts = () => import('@/views/BrandProducts.vue')
const Login = () => import('@/views/Login.vue')
const Register = () => import('@/views/Register.vue')
const SingleProduct = () => import('@/views/SingleProduct.vue')
const PolicyPage = () => import('@/views/PolicyPage.vue')
const RequestQuote = () => import('@/views/RequestQuote.vue')
const Faq = () => import('@/views/faq.vue')
const Blogs = () => import('@/views/Blogs.vue')
const BlogDetails = () => import('@/views/BlogDetails.vue')
const ContactUs = () => import('@/views/ContactUs.vue')
const MyAccount = () => import('@/views/MyAccount.vue')
const OrderSuccess = () => import('@/views/OrderSuccess.vue')
const TrackOrder = () => import('@/views/TrackOrder.vue')

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('auth_token') || store.state.auth.token;

      if (isAuthenticated) {
        next({ name: 'MyAccount' });
      } else {
        next(); // allow to continue to login
      }
    }
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: 'Login' }
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccount,
    meta: { title: 'MyAccount', requiresAuth: true }
  },
  {
    path: '/track-order',
    name: 'TrackOrder',
    component: TrackOrder,
    meta: { title: 'TrackOrder' }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/products/compare',
    name: 'CompareProduct',
    component: CompareProduct,
    meta: { title: 'Compare Product' }
  },
  {
    path: '/products/configurator',
    name: 'Configurator',
    component: Configurator,
    meta: { title: 'Configurator' }
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
  },
  {
    path: '/order-success/:orderNumber',
    name: 'OrderSuccess',
    component: OrderSuccess,
    props: true,  // important to enable passing params as props
  },
  {
    path: '/products/:slug?',
    name: 'Search',
    component: Shop,
    meta: { title: 'Shop' }
  },
  {
    path: '/categories/:categoryPath(.*)',
    name: 'Shop',
    component: Shop,
    meta: { title: 'Shop' }
  },
  {
    path: '/attributes/:slugMatch(.*)',
    name: 'FilteredShop',
    component: FilteredShop,
    meta: { title: 'Filtered Shop' }
  },
  {
    path: '/brands/:slug',
    name: 'BrandProducts',
    component: BrandProducts,
    meta: { title: 'Brand Products' }
  },
  {
    path: '/products/:categoryPath(.*)/:slug',
    name: 'SingleProduct',
    component: SingleProduct,
    meta: { title: 'Single Product' }
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
    name: 'Faq',
    component: Faq,
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
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }; // Scroll to top on every route
  }
});

// Add a navigation guard to protect certain routes
router.beforeEach((to, from, next) => {
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
