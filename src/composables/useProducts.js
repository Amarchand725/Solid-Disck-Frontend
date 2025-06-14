import { ref } from 'vue';
import axios from '@/plugins/axios';

const searchedKeyWord = ref([]);
const categoryData = ref({});
const products = ref([]);
const pagination = ref({
  total: 0,
  current_page: 1,
  per_page: 10,
  last_page: 1,
});
const loading = ref(false);
const error = ref(null);
const searchResults = ref([]); 

const getProducts = async () => {
  loading.value = true;
  try {
    const res = await axios.get('/products');
    products.value = res.data.data;
    searchResults.value = []
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
    const data = res?.data?.data;

    if (!data) {
      console.warn(`Product not found for slug: "${slug}", category: "${categoryPath}"`);
      throw new Error('Product not found');
    }

    searchResults.value = [];
    return data;
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

    products.value = res.data.data;
    searchResults.value = [];
    pagination.value = res.data.pagination;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

const getProductsByBrand = async ({
  brandSlug,
  perPage = 10,
  page = 1,
  sortField = 'created_at',
  sortDirection = 'desc',
  search = ''
}) => {
  loading.value = true;
  try {
    const res = await axios.get(`/brands/${brandSlug}/products`, {
      params: {
        per_page: perPage,
        page,
        sort_field: sortField,
        sort_direction: sortDirection,
        search,
      }
    });
    
    products.value = res.data.data;
    pagination.value = res.data.pagination;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

const searchProducts = async (keyword) => {
  if (!keyword) {
    searchResults.value = []
    return
  }

  loading.value = true
  try {
    const res = await axios.get('/products/search', {
      params: { keyword }
    })
    searchResults.value = res.data.data || []
  } catch (err) {
    error.value = err
    searchResults.value = []
  } finally {
    loading.value = false
  }
}

const searchProductsForPage = async (keyword) => {
  if (!keyword) {
    searchResults.value = []
    return
  }

  loading.value = true
  try {
    const res = await axios.get('/products/search2', {
      params: { keyword }
    })
    products.value = res.data.data;
    console.log(res.data)
    searchedKeyWord.value = res.data.keyword;
    pagination.value = res.data.pagination;
  } catch (err) {
    error.value = err
    searchResults.value = []
  } finally {
    loading.value = false
  }
}

const fetchProductsByAttributeValue = async (attributeSlug) => {
  loading.value = true;
  try {
    const response = await axios.get(`/attribute/products/${attributeSlug}`);
    products.value = response.data.data.products;
    categoryData.value = response.data.data.category;
    searchedKeyWord.value = response.data.data.keyword;
  } catch (error) {
    console.error('Failed to fetch products', error);
  }
  loading.value = false;  
};

export function useProducts() {
  return {
    searchedKeyWord,
    categoryData,
    products,
    pagination,
    loading,
    error,
    getProducts,
    getProductBySlug,
    getProductsByCategory,
    getProductsByBrand,
    searchProducts,
    searchResults,
    searchProductsForPage,
    fetchProductsByAttributeValue
  };
}
