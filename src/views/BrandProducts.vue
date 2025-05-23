<template>
    <div>
        <main>
            <section class="products_category_page">
                <div class="ant-row top_row css-i6rspj">
                    <div class="ant-col ant-col-xs-24 css-i6rspj">
                        <div class="breadcrumb_wrapper">
                            <span class="path_name">
                                <router-link title="Home" to="/">Home</router-link>
                                <span class="separator">&gt;</span>
                            </span>

                            <CategoryBreadcrumb :categoryTrail="categoryTrail" />
                            
                            <span class="path_name">
                                <strong :title="category?.name">{{ category?.name }}</strong>
                            </span>
                        </div>
                        <h1 :title="category?.name">{{ category?.name }}</h1>
                        <div class="header_description" v-html="category?.description"></div>
                    </div>
                </div>
                <div class="ant-row second_row css-i6rspj">
                    <div class="ant-col left_bar ant-col-xs-5 css-i6rspj">
                        <div style="margin-bottom: 16px;">  
                            <h2 title="Customize Your Results">Customize Your Results</h2></div>
                        <div style="margin-bottom: 15px;">
                            <div class="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 mb-6">
                            <button 
                                @click="resetFilters" 
                                class="filter-input mt-3 md:mt-0 md:ml-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md shadow-sm transition"
                                >
                                Reset Filters
                                </button>
                        </div>
                        </div>
                        <div class="ant-collapse ant-collapse-icon-position-start side_bar_tabs css-i6rspj">
                            <div title="Manufacturer" class="ant-collapse-item ant-collapse-item-active">
                                <div class="ant-collapse-header" role="button" aria-expanded="true" aria-disabled="false" tabindex="0">
                                    <div class="ant-collapse-expand-icon"><span role="img" aria-label="caret-right" class="anticon anticon-caret-right ant-collapse-arrow"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-right" width="1em" height="1em" fill="currentColor" aria-hidden="true" style="transform: rotate(90deg);"><path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path></svg></span></div>
                                    <span
                                    class="ant-collapse-header-text">Manufacturer</span>
                                </div>
                                <div class="ant-collapse-content ant-collapse-content-active" style="">
                                    <div class="ant-collapse-content-box">
                                        <div>
                                            <div class="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 mb-6">
                                           <select 
                                            v-model="selectedBrand" 
                                            @change="loadProducts"
                                            class="filter-input w-full mt-3 px-4 py-2 border border-gray-300 rounded-md"
                                            >
                                            <option :value="null">All Brands</option>
                                            <option v-for="brand in brands" :key="brand.id" :value="brand.slug">
                                                {{ brand.name }}
                                            </option>
                                            </select>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div title="Category" class="ant-collapse-item ant-collapse-item-active">
                                <div class="ant-collapse-header" role="button" aria-expanded="true" aria-disabled="false" tabindex="0">
                                    <div class="ant-collapse-expand-icon"><span role="img" aria-label="caret-right" class="anticon anticon-caret-right ant-collapse-arrow"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-right" width="1em" height="1em" fill="currentColor" aria-hidden="true" style="transform: rotate(90deg);"><path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path></svg></span></div>
                                    <span
                                    class="ant-collapse-header-text">Category</span>
                                </div>
                                <div class="ant-collapse-content ant-collapse-content-active" style="">
                                    <div class="ant-collapse-content-box">
                                        <div>
                                            <div class="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 mb-6">
                                          <select 
                                            v-model="selectedCategory" 
                                            @change="loadProducts"
                                            class="filter-input w-full mt-3 px-4 py-2 border border-gray-300 rounded-md"
                                            >
                                            <option :value="null">All Categories</option>
                                            <option v-for="cat in categories" :key="cat.id" :value="cat.slug">
                                                {{ cat.name }}
                                            </option>
                                            </select>

                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="ant-col ant-col-xs-19 css-i6rspj">
                        <div class="col_right">
                            <!-- <div class="sort_bar">
                                <div class="sort">
                                    <p>SORT:</p>
                                    <div onclick="openThis()" class="ant-select ant-select-outlined css-i6rspj ant-select-single ant-select-show-arrow" style="width: 145px;">
                                        <div class="ant-select-selector"><span class="ant-select-selection-wrap"><span class="ant-select-selection-search"><input autocomplete="off" class="ant-select-selection-search-input" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="rc_select_0_list" aria-autocomplete="list" aria-controls="rc_select_0_list" readonly="" unselectable="on" type="search" value="" id="rc_select_0" style="opacity: 0;"></span>
                                            <span
                                            class="ant-select-selection-item" title="Sort by latest">Sort by latest</span>
                                                </span>
                                        </div><span class="ant-select-arrow" unselectable="on" aria-hidden="true" style="user-select: none;"><span role="img" aria-label="caret-down" class="anticon anticon-caret-down"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg></span></span>
                                    </div>
                                </div>
                            </div> -->

                            <div class="product_list_wrapper">
                                <div 
                                    v-if="loading" 
                                    class="product_view_comp_main"
                                >
                                    <div class="ant-row css-i6rspj">
                                        Loading...
                                    </div>
                                </div>

                                <div v-else>
                                    <div 
                                        class="product_view_comp_main"
                                        v-for="product in products" :key="product.id"
                                    >
                                        <ProductList
                                            :product="product"
                                            :settings="settings"
                                            :loading="loading"
                                            :quantities="quantities"
                                            @increase="increaseQuantity"
                                            @decrease="decreaseQuantity"
                                            @add-to-cart="handleAddToCart"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="bottom_navigation" v-if="pagination && pagination.total > 0">
                                <p>
                                    Showing <b>{{ showingStart }} - {{ showingEnd }}</b> Results
                                </p>

                                <div class="bottom_pagination">
                                    <ul class="ant-pagination css-i6rspj">
                                        <li
                                            v-for="page in visiblePages"
                                            :key="page"
                                            :title="page"
                                            :class="[
                                            'ant-pagination-item',
                                            `ant-pagination-item-${page}`,
                                            page === pagination.current_page ? 'ant-pagination-item-active' : ''
                                            ]"
                                            tabindex="0"
                                            @click="goToPage(page)"
                                        >
                                            <a rel="index follow">{{ page }}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useBrands } from '@/composables/useBrands';
import { useCategories } from '@/composables/useCategories';
import { useProducts } from '@/composables/useProducts';
import { useSettings } from '@/composables/useSettings.js'
import { useCart } from '@/composables/useCart';

import CategoryBreadcrumb from '@/components/SingleProduct/CategoryBreadcrumb.vue';
import ProductList from '@/components/Shop/ProductList.vue';

const { settings } = useSettings();
const { getBrandBySlug } = useBrands();
const { products, pagination, loading, getProductsByBrand } = useProducts();
const { addToCart } = useCart();
const route = useRoute();
const { getCategories } = useCategories();
const { getBrands } = useBrands();

const categories = ref([]);
const brands = ref([]);

const selectedCategory = ref(null);
const selectedBrand = ref(null);


const category = ref(null);
const categoryTrail = ref([]);

const quantities = ref({});

const searchQuery = ref('');
const brandSlug = computed(() => route.params.slug);

// Handlers
const increaseQuantity = (product) => {
  const key = product.slug;
  quantities.value[key] = (quantities.value[key] || 1) + 1;
};

const decreaseQuantity = (product) => {
  const key = product.slug;
  if ((quantities.value[key] || 1) > 1) {
    quantities.value[key]--;
  }
};

const handleAddToCart = async (product) => {
  const quantity = quantities.value[product.slug] || 1;
  await addToCart(product.slug, quantity);
};

// Load products with filters
const loadProducts = async (page = 1) => {
  await getProductsByBrand({
    brandSlug: selectedBrand.value || undefined,
    categorySlug: selectedCategory.value || undefined,
    page,
    perPage: 10,
    sortField: 'created_at',
    sortDirection: 'desc',
    search: searchQuery.value,
  });
};


const loadBrand = async () => {
  try {
    const result = await getBrandBySlug(brandSlug.value);
    category.value = result;
    categoryTrail.value = result?.category_trail || [];
    await loadProducts();
  } catch (err) {
    console.error('Failed to load brand products:', err);
  }
};

const resetFilters = () => {
  selectedCategory.value = null;
  selectedBrand.value = null;
  searchQuery.value = '';
  loadProducts();
};

// Pagination
const goToPage = (page) => loadProducts(page);

const showingStart = computed(() => {
  const { current_page, per_page, total } = pagination.value;
  return Math.min((current_page - 1) * per_page + 1, total);
});

const showingEnd = computed(() => {
  const { current_page, per_page, total } = pagination.value;
  return Math.min(current_page * per_page, total);
});

const visiblePages = computed(() => {
  const pages = [];
  const { current_page, last_page } = pagination.value;
  const maxButtons = 5;

  let start = Math.max(current_page - Math.floor(maxButtons / 2), 1);
  let end = start + maxButtons - 1;

  if (end > last_page) {
    end = last_page;
    start = Math.max(end - maxButtons + 1, 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});

// Watch route slug changes
watch(() => brandSlug.value, loadBrand);

onMounted(async () => {
  categories.value = await getCategories();
  console.log('Loaded categories:', categories.value); // 🔍 Check output

  brands.value = await getBrands();
  console.log('Loaded brands:', brands.value); // 🔍 Check output

  selectedBrand.value = brandSlug.value;
  await loadBrand();
});
</script>
<style scoped>
    .bottom_navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    }

    .bottom_pagination ul {
    display: flex;
    list-style: none;
    padding: 0;
    }

    .ant-pagination-item {
    padding: 6px 12px;
    margin: 0 4px;
    cursor: pointer;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    }

    .ant-pagination-item-active {
    background-color: #1890ff;
    color: white;
    border-color: #1890ff;
    }

    .filter-input,
.filter-select,
.filter-button {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;
}

.filter-input:focus,
.filter-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}

.filter-button {
  background-color: #e5e7eb;
  color: #374151;
  cursor: pointer;
}

.filter-button:hover {
  background-color: #d1d5db;
}

</style>