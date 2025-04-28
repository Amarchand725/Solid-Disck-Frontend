import { ref } from 'vue';
import axios from '@/plugins/axios';

const products = ref([]);
const loading = ref(false);
const error = ref(null);

const getProducts = async () => {
  loading.value = true;
  try {
    const res = await axios.get('/products');
    products.value = res.data.data;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

const getProductBySlug = async (slug) => {
  try {
    const res = await axios.get(`/products/${slug}`);
    return res.data.data;
  } catch (err) {
    throw err;
  }
};

export function useProducts() {
  return {
    products,
    loading,
    error,
    getProducts,
    getProductBySlug,
  };
}