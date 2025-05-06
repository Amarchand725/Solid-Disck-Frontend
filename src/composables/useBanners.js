import { ref } from 'vue';
import axios from '@/plugins/axios';

const banners = ref([]);
const loading = ref(false);
const error = ref(null);

const getBanners = async () => {
  loading.value = true;
  try {
    const res = await axios.get('/banners');
    banners.value = res.data.data;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

const getProductBySlug = async (slug) => {
  try {
    const res = await axios.get(`/banners/${slug}`);
    return res.data.data;
  } catch (err) {
    throw err;
  }
};

export function useBanners() {
  return {
    banners,
    loading,
    error,
    getBanners,
    getProductBySlug,
  };
}