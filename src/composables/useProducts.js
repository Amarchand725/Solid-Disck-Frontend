import { ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from '@/plugins/axios';

const products = ref([]);
const pagination = ref({});
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

const getProductBySlug = async (slug, categoryPath) => {
  if (!slug || !categoryPath) {
    throw new Error('Invalid route parameters');
  }

  try {
    const res = await axios.get(`/products/${categoryPath}/${slug}`);
    return res.data.data;
  } catch (err) {
    throw err;
  }
};

// ✅ NEW: Get products by category slug or ID, with optional filters
const getProductsByCategory = async ({
  categorySlug,
  perPage = 10,
  page = 1,
  sortField = 'created_at',
  sortDirection = 'desc',
  search = ''
}) => {
  loading.value = true;
  try {
    const res = await axios.get(`/categories/${categorySlug}/products`, {
      params: {
        per_page: perPage,
        page,
        sort_field: sortField,
        sort_direction: sortDirection,
        search,
      }
    });
    // products.value = res.data.data;
    products.value = res.data.data;
    pagination.value = res.data.meta; // Save pagination data
    pagination.value.links = res.data.links; // Optional: for page buttons
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

export function useProducts() {
  return {
    products,
    pagination,
    loading,
    error,
    getProducts,
    getProductBySlug,
    getProductsByCategory,
  };
}
