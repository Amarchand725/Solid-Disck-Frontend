// composables/useCompareProducts.js
import { ref, computed } from 'vue'
import axios from '@/plugins/axios';

export default function useCompareProducts() {
  const selectedProducts = ref([null, null, null])
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchProducts = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await axios.get('/products')
      products.value = response.data.data || response.data || []
    } catch (err) {
      error.value = err.message || 'Failed to fetch products'
    } finally {
      loading.value = false
    }
  }

    const addProduct = (product, index) => {
        if (!selectedCategory.value && product.category) {
            selectedCategory.value = product.category
        }
        selectedProducts.value[index] = product
    }

  const removeProduct = (index) => {
    selectedProducts.value[index] = null
  }

  const resetComparison = () => {
    selectedProducts.value = [null, null, null]
  }

    const canAddProduct = (product) => {
        if (!selectedCategory.value) return true
        return product.category?.id === selectedCategory.value?.id
    }

  const selectedCategory = computed(() => {
    const nonNullProducts = selectedProducts.value.filter(p => p)
    return nonNullProducts.length > 0 ? nonNullProducts[0].category : null
  })

  return {
    selectedProducts,
    products,
    loading,
    error,
    fetchProducts,
    addProduct,
    removeProduct,
    resetComparison,
    canAddProduct,
    selectedCategory
  }
}