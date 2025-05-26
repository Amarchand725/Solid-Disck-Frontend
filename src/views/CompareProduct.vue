<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <div class="compare-container">
        <div class="compare-header">
            <h1>Compare Products</h1>
            <p>*Once a product is selected only similar category product can be compared, click reset to compare new products</p>
        </div>

        <div class="reset-button">
            <button @click="resetComparison">Reset</button>
        </div>
        <div class="dropdown-row">
            <div v-for="(product, index) in selectedProducts" :key="index" class="dropdown-wrapper">
                <div class="custom-product-dropdown" ref="dropdownRefs[index]">
                    <input
                        v-model="searchTerms[index]"
                        @input="onSearchInput(index)"
                        placeholder="Search product"
                        class="product-search-input"
                    />
                    <div v-if="dropdownOptions[index]?.length" class="product-dropdown">
                        <ul>
                        <li
                            v-for="option in dropdownOptions[index]"
                            :key="option.id"
                            @click="selectProduct(option, index)"
                        >
                            {{ option.title }}
                        </li>
                        </ul>
                    </div>
                </div>
                <!-- Product Preview -->
                <div v-if="product" class="product-info">
                    <img 
                        :alt="product.title"
                        :title="product.title"
                        fetchpriority="high" width="270" height="280" decoding="async" data-nimg="1" 
                        :src="product.thumbnail || '/placeholders/270x280.svg'"
                        @error="onImageError"
                        style="color: transparent; max-width: 100%; height: auto;"
                    />
                </div>
            </div>
        </div>
    </div>

    <!-- Comparison Table -->
    <div class="comparison-wrapper">
        <table v-if="hasSelectedProducts" class="comparison-table">
            <thead>
            <tr>
                <th class="attribute-column">Attribute</th>
                <th v-for="(product, index) in selectedProducts" :key="index" class="product-header">
                <div v-if="product" class="product-info">
                    <div class="product-title">{{ product.title }}</div>
                    <button @click="removeProduct(index)" class="remove-button">Remove</button>
                </div>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(attr, i) in attributesToDisplay" :key="i">
                <td class="attribute-label">{{ attr.label }}</td>
                <td
                v-for="(product, idx) in selectedProducts"
                :key="idx"
                class="attribute-value"
                >
                <template v-if="product">
                    <template v-if="attr.isLink && product[attr.key]">
                    <router-link 
                        :to="`/products/${product.category_url}/${product.slug}`"
                        class="link"
                    >
                        {{ getDisplayValue(product, attr.key) }}
                    </router-link>
                    </template>
                    <template v-else>
                    {{ getDisplayValue(product, attr.key) || '-' }}
                    </template>
                </template>
                <template v-else>-</template>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import useCompareProducts from '@/composables/useCompareProducts'

const {
  selectedProducts,
  products,
  fetchProducts,
  addProduct,
  removeProduct,
  resetComparison,
  canAddProduct
} = useCompareProducts()

// Refs for dynamic dropdowns
const searchTerms = ref(['', '', ''])
const dropdownOptions = ref([[], [], []])
const dropdownRefs = ref([])

// Set initial refs
onMounted(() => {
  fetchProducts()
  dropdownRefs.value = Array(3).fill(null)
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscape)
})

const onSearchInput = (index) => {
  const term = searchTerms.value[index].toLowerCase()
  if (!term.trim()) {
    dropdownOptions.value[index] = []
    return
  }

  const selectedIds = selectedProducts.value.map(p => p?.id)
  dropdownOptions.value[index] = products.value.filter(p => {
    return (
      !selectedIds.includes(p.id) &&
      canAddProduct(p) &&
      p.title.toLowerCase().includes(term)
    )
  })
}

const selectProduct = (product, index) => {
  addProduct(product, index)
  searchTerms.value[index] = product.title
  dropdownOptions.value[index] = []
}

const handleClickOutside = (event) => {
  dropdownRefs.value.forEach((ref, index) => {
    if (ref && !ref.contains(event.target)) {
      dropdownOptions.value[index] = []
    }
  })
}

const handleEscape = (event) => {
  if (event.key === 'Escape') {
    dropdownOptions.value = [[], [], []]
  }
}

const hasSelectedProducts = computed(() =>
  selectedProducts.value.some(p => p !== null)
)

const getDisplayValue = (product, key) => {
  if (!product || !key) return ''
  if (key === 'category') return product.category?.name
  if (key === 'brand') return product.brand?.name
  if (key === 'condition') return product.condition?.name
  if (key === 'unit') return product.unit?.name
  if (key === 'attributeGroup') return product.attributeGroup?.name
  return product[key]
}

const attributesToDisplay = [
  { label: 'MPN', key: 'mpn', isLink: true },
  { label: 'SKU', key: 'sku' },
  { label: 'UNIT', key: 'unit' },
  { label: 'Condition', key: 'condition' },
  { label: 'Manufacturer', key: 'brand' },
  { label: 'Category', key: 'category' },
//   { label: 'Attribute Group', key: 'attributeGroup' },
  { label: 'Weight', key: 'product_weight' }
]

const onImageError = (event) => {
    event.target.src = '/placeholders/270x280.svg'
}
</script>

<style scoped>
.compare-container {
  padding: 24px;
  background-color: #f9f9f9;
  min-height: 100vh;
}

.compare-header {
  text-align: center;
  margin-bottom: 24px;
}

.compare-header h1 {
  font-size: 32px;
  font-weight: bold;
  color: #002a5c;
  margin-bottom: 8px;
}

.compare-header p {
  color: #cc0000;
  font-weight: 600;
}

.reset-button {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
}

.reset-button button {
  background-color: #002a5c;
  color: white;
  padding: 10px 24px;
  font-weight: 600;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: pointer;
  border: none;
}

.dropdown-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;
}

.dropdown-wrapper {
  flex: 1;
  min-width: 200px;
}

.compare-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.compare-table th,
.compare-table td {
  border: 1px solid #ccc;
  padding: 16px 12px;
  vertical-align: middle;
}

.compare-table thead th {
  background-color: #002a5c;
  color: white;
  font-weight: 700;
  font-size: 16px;
}

.product-title {
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 8px;
  color: #002a5c;
}

.product-image {
  width: 128px;
  height: 128px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto 12px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.remove-button {
  background-color: #e3342f;
  color: white;
  font-size: 14px;
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-button:hover {
  background-color: #b02a27;
}

.compare-table tbody tr:nth-child(even) {
  background-color: #f7f9fc;
}

.attribute-label {
  font-weight: 600;
  text-align: left;
  background-color: #f3f6fb;
  color: #2c3e50;
  padding-left: 16px;
  white-space: nowrap;
}

.attribute-value {
  padding: 12px 8px;
  color: #333;
  font-size: 14px;
}

.attribute-value a {
  color: #0073e6;
  text-decoration: none;
  font-weight: 600;
}

.attribute-value a:hover {
  text-decoration: underline;
}

.product-search-input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.product-dropdown {
  position: absolute;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-top: 2px;
}

.product-dropdown ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.product-dropdown li {
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.2s;
}

.product-dropdown li:hover {
  background-color: #f0f0f0;
}

.custom-product-dropdown {
  position: relative;
}

</style>