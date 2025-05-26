<template>
  <div class="thank_you_page_main">
    <div class="about_content">
      <div class="aboutus-wrapper w-full configurator_page_wrapper">
        <div class="container-x mx-auto configuratorContainer">
          <div class="top_head">
            <h1>Customize and Optimize Your Ideal System</h1>
            <h4>
              Achieve the Perfect Setup In
              <span style="color: rgb(245, 173, 29)">4 Simple Steps !</span>
            </h4>
          </div>

          <div class="bottom_head">
            <!-- Select Manufacture -->
            <div class="bottom_head_fields Manufacture">
              <label class="label_main">Select Manufacture</label>
              <a-select
                v-model:value="selectedBrand"
                :options="filteredBrands"
                show-search
                placeholder="Search and select a brand"
                :filter-option="filterOption"
                @change="onBrandChange"
                style="width: 100%"
              />
            </div>

            <!-- Select Category -->
            <div class="bottom_head_fields Category">
              <label class="label_main">Select Category</label>
              <a-select
                v-model:value="selectedCategory"
                :options="filteredCategories"
                show-search
                placeholder="Search and select a category"
                :filter-option="filterOption"
                @change="onCategoryChange"
                style="width: 100%"
              />
            </div>

            <!-- Select Product Line -->
            <div class="bottom_head_fields ProductLine">
              <label class="label_main">Select Product Line</label>
              <a-select
                v-model:value="selectedProductLine"
                :options="filteredProductLines"
                show-search
                placeholder="Search and select a product line"
                :filter-option="filterOption"
                @change="onProductLineChange"
                style="width: 100%"
              />
            </div>

            <!-- Select Product -->
            <div class="bottom_head_fields ProductsSelect">
              <label class="label_main">Select Products</label>
              <a-select
                v-model:value="selectedProduct"
                :options="filteredProducts"
                show-search
                placeholder="Search and select a product"
                :filter-option="filterOption"
                style="width: 100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed, watch } from 'vue'
import useConfigurator from '@/composables/useConfigurator'
import { useRouter } from 'vue-router'

const router = useRouter()

const {
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
} = useConfigurator()

onMounted(() => {
  fetchBrands()
  fetchCategories()
})

// Dropdown options mapping
const filteredBrands = computed(() => {
  if (!Array.isArray(brands.value)) return []
  return brands.value.map(item => ({
    label: item.name,
    value: item.id
  }))
})

const filteredCategories = computed(() => {
  if (!Array.isArray(categories.value)) return []
  return categories.value.map(item => ({
    label: item.name,
    value: item.id
  }))
})

const filteredProductLines = computed(() => {
  if (!Array.isArray(productLines.value)) return []
  return productLines.value.map(item => ({
    label: item.name,
    value: item.id
  }))
})

const filteredProducts = computed(() => {
  if (!Array.isArray(products.value)) return []
  return products.value.map(item => ({
    label: item.title,
    value: item.slug
  }))
})

// Filters for search
const filterOption = (input, option) =>
  option.label.toLowerCase().includes(input.toLowerCase())

// Handlers
const onBrandChange = (value) => {
  selectedBrand.value = value
  selectedProductLine.value = null
  selectedProduct.value = null
  productLines.value = []
  products.value = []

  // Optionally refetch products if brand affects products directly
}

const onCategoryChange = (value) => {
  selectedCategory.value = value
  selectedProductLine.value = null
  selectedProduct.value = null
  productLines.value = []
  products.value = []

  if (value) {
    fetchProductLines(value)
  }
}

const onProductLineChange = (value) => {
  selectedProductLine.value = value
  selectedProduct.value = null
  // Only fetch by product_line_id
  if (value) {
    fetchProducts({ product_line_id: value })
  }
}

watch(selectedProduct, (slug) => {
    if (!slug) return
    const product = products.value.find(p => p.slug === slug)
    if (product && product.slug && product.category_url) {
        router.push(`/products/${product.category_url}/${product.slug}`)
    }
})
</script>