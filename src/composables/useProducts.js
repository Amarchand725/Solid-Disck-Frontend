import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from '@/plugins/axios';

const router = useRouter();
const searchedKeyWord = ref([]);
const categoryData = ref({});
const products = ref([]);
const totalResults = ref(0)
const pagination = ref({
  total: 0,
  current_page: 1,
  per_page: 10,
  last_page: 1,
});
const loading = ref(true);
const error = ref(null);
const searchResults = ref([]); 

const getProducts = async () => {
  loading.value = true;
  try {
    const res = await axios.get('/products');
    products.value = res.data.data;
    searchResults.value = [];
    searchedKeyWord.value = [];
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
    const data = res?.data.data;

    if (!data) {
      console.warn(`Product not found for slug: "${slug}", category: "${categoryPath}"`);
      router.push('/')
      return; // stop here so it doesn't continue
    }

    searchResults.value = [];
    searchedKeyWord.value = [];
    return data;
  } catch (err) {
    console.error("API error:", error);
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
  },
  append = false 
) => {
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
    if (append) {
      products.value.push(...res.data.data);
    } else {
      products.value = res.data.data;
    }

    searchResults.value = [];
    searchedKeyWord.value = [];
    pagination.value = res.data.pagination;
    totalResults.value = res.data?.pagination?.total || 0;
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
    searchResults.value = [];
    searchedKeyWord.value = [];
    pagination.value = res.data.pagination;
    totalResults.value = res.data?.pagination?.total || 0;
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

const searchProductsByButton = async (keyword) => {
  if (!keyword) {
    searchResults.value = []
    return
  }

  loading.value = true
  try {
    const res = await axios.get('/products/search2', {
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

const searchProductsForPage = async ({ search, perPage = 10, page = 1, sortField, sortDirection }) => {
  if (!search) {
    searchResults.value = []
    return
  }

  loading.value = true
  try {
    const res = await axios.get('/products/search2', {
      params: {
        search,
        perPage,
        page,
        sortField,
        sortDirection
      }
    });
    products.value = res.data.data;
    searchedKeyWord.value = res.data.keyword;
    pagination.value = res.data.pagination;
    totalResults.value = res.data?.pagination?.total || 0;
  } catch (err) {
    error.value = err
    searchResults.value = []
    console.error('Search API Error:', err.response?.data || err.message);
  } finally {
    loading.value = false;
  }
};

const fetchProductsByAttributeValue = async (attributeSlug, page = 1, filters = {}) => {
  try {
    const response = await axios.get('/attribute/products/' + attributeSlug, {
      params: {
        page,
        perPage: filters.perPage || 10,
        brand: filters.brand || null,
        category: filters.category || null,
        sortField: 'created_at',
        sortDirection: 'desc'
      }
    });

    // Assign data to state
    if (page === 1) {
      products.value = response.data.data.products;
    } else {
      products.value.push(...response.data.data.products);
    }
    categoryData.value = response.data.data.category;
    searchedKeyWord.value = response.data.data.keyword || [];
    pagination.value = response.data.data.pagination;
    totalResults.value = response.data.data?.pagination?.total || 0;
  } catch (error) {
    console.error('Failed to fetch products by attribute value:', error);
    throw error;
  }
};

export function useProducts() {
  return {
    searchedKeyWord,
    categoryData,
    products,
    pagination,
    totalResults,
    loading,
    error,
    getProducts,
    getProductBySlug,
    getProductsByCategory,
    getProductsByBrand,
    searchProducts,
    searchProductsByButton,
    searchResults,
    searchProductsForPage,
    fetchProductsByAttributeValue
  };
}
