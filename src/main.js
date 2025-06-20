import { createApp } from 'vue';
import App from './App.vue';
import store from './vuexstore/store';
import router from './router';
import { createPinia } from 'pinia';
import Toast from 'vue-toastification';
import Antd from 'ant-design-vue';
import { initAllPlugins } from './initPlugins.js';
import blockDevTools from './utils/blockDevTools';

import 'vue-toastification/dist/index.css';
import 'bootstrap';

// Set the API health check URL (adjust as needed)
// const API_HEALTH_CHECK_URL = `${import.meta.env.VITE_API_BASE_URL}/health-check`;

// // Check if backend API is alive
// fetch(API_HEALTH_CHECK_URL, { method: 'GET' })
//   .then(response => {
//     if (!response.ok) throw new Error('API not healthy');
//     return response.json();
//   })
//   .then(() => {
//     // Backend is alive — proceed with app initialization
//     document.addEventListener('DOMContentLoaded', () => {
//       initAllPlugins();
//     });

//     router.beforeEach((to, from, next) => {
//       document.title = to.meta.title || '';
//       next();
//     });

//     const app = createApp(App);
//     app.use(createPinia());
//     app.use(store);
//     app.use(router);
//     app.use(Toast);
//     app.use(Antd);
//     app.mount('#app');
//   })
//   .catch(() => {
//     document.getElementById('error-message').style.display = 'block';
//   });

// import { createApp } from 'vue';
// import App from './App.vue';
// import store from './vuexstore/store';
// import router from './router';
// import { createPinia } from 'pinia';
// import Toast from 'vue-toastification';
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

// document.addEventListener('DOMContentLoaded', () => {
//   initAllPlugins();
// });

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

