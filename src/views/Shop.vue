<template>
  <div>
    <main>
      <section class="products_category_page">
        <!-- Top Row -->
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

        <!-- Second Row -->
        <div class="ant-row second_row css-i6rspj">
          <!-- Sidebar -->
          <div class="ant-col left_bar ant-col-xs-5 css-i6rspj">
            <div style="margin-bottom: 16px;">
              <h2 title="Customize Your Results">Customize Your Results</h2>
            </div>

            <div style="margin-bottom: 15px;">
              <div class="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 mb-6">
                <button 
                  @click="resetFilters" 
                  class="filter-input mt-3 md:mt-0 md:ml-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md shadow-sm transition"
                >
                  Reset Filters
                </button>
              </div>

              <!-- Filters -->
              <div class="ant-collapse ant-collapse-icon-position-start side_bar_tabs css-i6rspj">
                <!-- Brand Filter -->
                <div title="Manufacturer" class="ant-collapse-item ant-collapse-item-active">
                  <div class="ant-collapse-header" role="button" aria-expanded="true" aria-disabled="false" tabindex="0">
                    <div class="ant-collapse-expand-icon">
                      <span role="img" aria-label="caret-right" class="anticon anticon-caret-right ant-collapse-arrow">
                        <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="true" style="transform: rotate(90deg);">
                          <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" />
                        </svg>
                      </span>
                    </div>
                    <span class="ant-collapse-header-text">Manufacturer</span>
                  </div>
                  <div class="ant-collapse-content ant-collapse-content-active">
                    <div class="ant-collapse-content-box">
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

                <!-- Category Filter -->
                <div title="Category" class="ant-collapse-item ant-collapse-item-active">
                  <div class="ant-collapse-header" role="button" aria-expanded="true" aria-disabled="false" tabindex="0">
                    <div class="ant-collapse-expand-icon">
                      <span role="img" aria-label="caret-right" class="anticon anticon-caret-right ant-collapse-arrow">
                        <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="true" style="transform: rotate(90deg);">
                          <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" />
                        </svg>
                      </span>
                    </div>
                    <span class="ant-collapse-header-text">Category</span>
                  </div>
                  <div class="ant-collapse-content ant-collapse-content-active">
                    <div class="ant-collapse-content-box">
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
              </div> <!-- End Collapse -->
            </div>
          </div>

          <!-- Product List -->
          <div class="ant-col ant-col-xs-19 css-i6rspj">
            <div class="col_right">
              <div class="product_list_wrapper">
                <div v-if="loading" class="product_view_comp_main">
                  <div class="ant-row css-i6rspj">
                    Loading...
                  </div>
                </div>

                <div v-else>
                  <div class="product_view_comp_main" v-for="product in products" :key="product.id">
                    <ProductList
                      :product="product"
                      :settings="settings"
                      :loading="loader"
                      :loading2="loading2"
                      :quantities="quantities"
                      @increase="increaseQuantity"
                      @decrease="decreaseQuantity"
                      @add-to-cart="handleAddToCart"
                      @buy-it-now="handleBuyItNow"
                    />
                  </div>
                </div>
              </div>

              <!-- Pagination -->
              <div class="bottom_navigation" v-if="pagination.total > 0">
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
          </div> <!-- End Product List -->
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
    //Sub Component
    import CategoryBreadcrumb from '@/components/SingleProduct/CategoryBreadcrumb.vue';
    import ProductList from '@/components/Shop/ProductList.vue';
    
    import { ref, onMounted, watch, computed } from 'vue';
    import { useRoute } from 'vue-router';
    import { useBrands } from '@/composables/useBrands';
    import { useCategories } from '@/composables/useCategories';
    import { useProducts } from '@/composables/useProducts';
    import { useSettings } from '@/composables/useSettings.js'
    import { useCart } from '@/composables/useCart'

    // Composables
    const { settings } = useSettings();
    const { getCategoryBySlug } = useCategories();
    const { products, pagination, loading, getProductsByCategory } = useProducts();
    const { addToCart, buyItNow, loading2, loader } = useCart();

    const { getCategories } = useCategories();
    const { getBrands } = useBrands();

    const categories = ref([]);
    const brands = ref([]);

    const selectedCategory = ref(null);
    const selectedBrand = ref(null);
    // Route & reactive state
    const route = useRoute();
    const category = ref(null);
    const categoryTrail = ref([]);

    // Store quantities per product
    const quantities = ref({});

    // Quantity handlers
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

    // Add to cart using selected quantity
    const handleAddToCart = async (product) => {
        const quantity = quantities.value[product.slug] || 1;
        await addToCart(product.slug, quantity);
    };

    const handleBuyItNow = async (product) => {
        await buyItNow(product.slug, 1);
    };

    // Load category and its products
    const loadCategory = async () => {
        // const slug = route.params.slug;
        const segments = route.path.split('/').filter(Boolean);
        const slug = segments[segments.length - 1];

        if (!slug) {
            console.warn('Missing slug:', { slug });
            return;
        }

        try {
            const result = await getCategoryBySlug(slug);
            category.value = result;
            categoryTrail.value = result?.category_trail || [];

            await getProductsByCategory({
                categorySlug: slug,
                perPage: 10,
                page: 1,
                sortField: 'created_at',
                sortDirection: 'desc',
                search: '',
            });
        } catch (err) {
            console.error('Failed to load category or products:', err);
        }
    };

    const loadProducts = async () => {
    const segments = route.path.split('/').filter(Boolean);
    const slug = segments[segments.length - 1];

    try {
        await getProductsByCategory({
            categorySlug: selectedCategory.value,
            brand: selectedBrand.value,
            subCategory: selectedCategory.value,
            perPage: 10,
            page: 1,
            sortField: 'created_at',
            sortDirection: 'desc',
            search: '',
        });
    } catch (err) {
        console.error("Failed to load filtered products:", err);
    }
};

    // Lifecycle
    onMounted(async () => {
    await loadCategory();
    categories.value = await getCategories();
    brands.value = await getBrands();
});


    const resetFilters = () => {
        selectedCategory.value = null;
        selectedBrand.value = null;
        loadProducts();
    };

    // Watch for route slug changes
    watch(() => [route.params.slug], loadCategory);

    const goToPage = (page) => {
        const segments = route.path.split('/').filter(Boolean);
        const slug = segments[segments.length - 1];

        getProductsByCategory({
            categorySlug: slug,
            page,
            perPage: pagination.value.per_page,
            sortField: 'created_at',
            sortDirection: 'desc',
            search: '',
        });
    };

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
  width: -webkit-fill-available;
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