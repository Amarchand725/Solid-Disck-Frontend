import { ref } from 'vue';
import axios from '@/plugins/axios';

const brands = ref([]);
const loading = ref(false);
const error = ref(null);

const getBrands = async () => {
  loading.value = true;
  try {
    const res = await axios.get('/brands');
    brands.value = res.data.data;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

const getProductBySlug = async (slug) => {
  try {
    const res = await axios.get(`/brands/${slug}`);
    return res.data.data;
  } catch (err) {
    throw err;
  }
};

export function useBrands() {
  return {
    brands,
    loading,
    error,
    getBrands,
    getProductBySlug,
  };
}