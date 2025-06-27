import { createApp } from 'vue';
import App from './App.vue';
import store from './vuexstore/store';
import router from './router';
import { createPinia } from 'pinia';
import Toast from 'vue-toastification';
import Antd from 'ant-design-vue';
import blockDevTools from './utils/blockDevTools';

import 'vue-toastification/dist/index.css';
import 'bootstrap';

router.beforeEach((to, from, next) => {
  const dropdown = document.querySelector('#header-menu-dropdown');
  if (dropdown) {
    dropdown.style.display = 'none';
  }
  next();
});

const app = createApp(App)
      app.use(createPinia())
      app.use(store)
      app.use(router)
      app.use(Toast)
      app.use(Antd)
      app.mount('#app')

// 🔒 Call the function after mount
// blockDevTools();

