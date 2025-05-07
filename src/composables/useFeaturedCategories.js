import { ref } from 'vue';
import axios from '@/plugins/axios';

const categories = ref([]);
const loading = ref(false);
const error = ref(null);

const getCategories = async () => {
  loading.value = true;
  try {
    const res = await axios.get('/categories/featured');
    categories.value = res.data.data;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

const getCategoryBySlug = async (slug) => {
  try {
    const res = await axios.get(`/categories/featured/${slug}`);
    return res.data.data;
  } catch (err) {
    throw err;
  }
};

export function useCategories() {
  return {
    categories,
    loading,
    error,
    getCategories,
    getCategoryBySlug,
  };
}