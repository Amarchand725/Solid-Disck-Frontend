import { ref, onMounted } from 'vue';
import axios from '@/plugins/axios';

export default function useConfigurator() {
  const brands = ref([]);
  const categories = ref([]);
  const productLines = ref([]);
  const products = ref([]);

  const selectedBrand = ref(null);
  const selectedCategory = ref(null);
  const selectedProductLine = ref(null);
  const selectedProduct = ref(null);

  const fetchBrands = async () => {
    const res = await axios.get('/config/brands');
    brands.value = res.data;
};

  const fetchCategories = async () => {
    const res = await axios.get('/config/categories');
    categories.value = res.data;
  };

  const fetchProductLines = async (categoryId) => {
    const res = await axios.get(`/config/product-lines?category_id=${categoryId}`);
    productLines.value = res.data;
  };

  const fetchProducts = async (filters) => {
    const res = await axios.get('/config/products', { params: filters });
    products.value = res.data.data;
  };

  onMounted(() => {
    fetchBrands();
    fetchCategories();
  });

  return {
    brands,
    categories,
    productLines,
    products,
    selectedBrand,
    selectedCategory,
    selectedProductLine,
    selectedProduct,
    fetchBrands,
    fetchCategories,
    fetchProductLines,
    fetchProducts
  };
}
