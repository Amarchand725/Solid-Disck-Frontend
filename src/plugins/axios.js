import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

axios.defaults.withCredentials = true

// Attach Bearer token automatically
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token'); // read token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // add Authorization header
  }
  return config;
});

export default instance;