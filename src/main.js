import { createApp } from 'vue'
import App from './App.vue'
import store from './vuexstore/store';
import router from './router'
import { createPinia } from 'pinia';
import Toast from 'vue-toastification'

import 'vue-toastification/dist/index.css'

import 'bootstrap';


router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '';
  next();
});

const app = createApp(App)
      app.use(createPinia())
      app.use(store)
      app.use(router)
      app.use(Toast)
      app.mount('#app')