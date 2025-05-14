import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoggedIn: !!localStorage.getItem('auth_token'),  // Check if there's an auth token stored in localStorage
  },
  mutations: {
    setLogin(state, token) {
      state.isLoggedIn = true;
      localStorage.setItem('auth_token', token);  // Save the token to localStorage
    },
    setLogout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem('auth_token');  // Remove the token from localStorage
    },
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,  // Get the login status
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
