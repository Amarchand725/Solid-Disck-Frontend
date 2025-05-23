import { ref } from 'vue';
import axios from '@/plugins/axios';

const categories = ref([]);
const categories2 = ref([]);
const loading = ref(false);
const error = ref(null);

const getCategories = async () => {
  loading.value = true;
  try {
    const res = await axios.get('/categories');
    categories.value = res.data.data;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

const getCategories2 = async () => {
  loading.value = true;
  try {
    const res = await axios.get('/get-categories');
    categories2.value = res.data.data;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

const getCategoryBySlug = async (slug) => {
  if (!slug) {
    throw new Error('Invalid route parameters');
  }
  try {
    const res = await axios.get(`/categories/show/${slug}`);
    return res.data.data;
  } catch (err) {
    throw err;
  }
};

export function useCategories() {
  return {
    categories,
    categories2,
    loading,
    error,
    getCategories,
    getCategories2,
    getCategoryBySlug,
  };
}