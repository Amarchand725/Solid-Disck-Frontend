import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoggedIn: !!localStorage.getItem('auth_token'),
    token: localStorage.getItem('auth_token') || null,
    customer: JSON.parse(localStorage.getItem('customer_data')) || null,
  },
  mutations: {
    setLogin(state, token) {
      state.isLoggedIn = true;
      state.token = token;
      localStorage.setItem('auth_token', token);
    },
    setLogout(state) {
      state.isLoggedIn = false;
      state.token = null;
      localStorage.removeItem('auth_token');
    },
    setCustomerData(state, customer) {
      state.customer = customer;
      localStorage.setItem('customer_data', JSON.stringify(customer));
    },
  },
  getters: {
    token: (state) => state.token,
    isLoggedIn: (state) => state.isLoggedIn,
    customer: (state) => state.customer,
  },
  actions: {
    login({ commit }, token) {
      commit('setLogin', token);  // Call the mutation to set the login status
    },
    logout({ commit }) {
      commit('setLogout');  // Call the mutation to log the user out
    },
  },
});
