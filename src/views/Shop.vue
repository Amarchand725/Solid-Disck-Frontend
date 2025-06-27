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

                <span class="path_name" v-if="searchedKeyWord.length">
                  <span v-if="searchedKeyWord.length > 0 && categoryTrail.length > 0" class="separator"> &gt; </span>
                  <strong :title="searchedKeyWord">{{ searchedKeyWord }}</strong>
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
            <div v-if="isFetchingInitialProducts" class="loader-overlay">
              <img src="/assets/image/Spinner-2.gif" alt="Loading..." class="spinner-gif" />
            </div>
            <div v-else-if="products.length > 0" class="ant-col ant-col-xs-19 css-i6rspj">
              <div class="col_right">
                <div class="search-results-header" v-if="totalResults > 0">
                  <div class="results-count">
                    Showing <strong>{{ products.length.toLocaleString() }}</strong> of <strong>{{ totalResults.toLocaleString() }}</strong> results
                  </div>
                  <hr class="divider" />
                </div>
                <div class="product_list_wrapper">
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

                  <!-- Load More Button -->
                  <div class="load-more-container" v-if="hasMorePages">
                    <button @click="loadMoreProducts" :disabled="isLoadingMore" class="load-more-button">
                      <span v-if="!isLoadingMore">Load More Products</span>
                      <span v-else>Loading...</span>
                    </button>
                  </div>

                  <!-- End Message -->
                  <div v-else class="end-message">
                    You’ve reached the end.
                  </div>
                </div>

                <!-- Pagination -->
                <!-- <div class="bottom_navigation" v-if="pagination && pagination.total > 0">
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
                </div> -->
              </div>
            </div> 
            <div v-else class="no-products ant-col ant-col-xs-11 css-i6rspj">
              <div class="col_right">
                <div class="product_list_wrapper">
                  <h3>Product not found</h3>
                </div>
              </div>
            </div>
            <div class="ant-col ant-col-xs-8 css-i6rspj"></div>
          </div>
      </section>
    </main>
  </div>
</template>

<script setup>
    //Sub Component
    import CategoryBreadcrumb from '@/components/SingleProduct/CategoryBreadcrumb.vue';
    import ProductList from '@/components/Shop/ProductList.vue';
    
    import { ref, onMounted, onBeforeMount, watch, computed , nextTick  } from 'vue';
    import { useRoute } from 'vue-router';
    import { useBrands } from '@/composables/useBrands';
    import { useCategories } from '@/composables/useCategories';
    import { useProducts } from '@/composables/useProducts';
    import { useSettings } from '@/composables/useSettings.js'
    import { useCart } from '@/composables/useCart'
    import { useBuyNow } from '@/composables/useBuyNow'
    const { buyNow, loadingBuyNow} = useBuyNow()

    import { debounce } from 'lodash-es';

    const isLoadingMore = ref(false);
    const isFetchingInitialProducts = ref(true);
    const hasMorePages = computed(() => {
      return pagination.value && pagination.value.current_page < pagination.value.last_page;
    });

    // Composables
    const { settings } = useSettings();
    const { getCategoryBySlug } = useCategories();
    const { products, pagination, loading, getProductsByCategory, searchedKeyWord, searchProductsForPage, totalResults } = useProducts();
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
        const quantity = quantities.value[product.slug] || 1; 
        await buyNow(product.slug, quantity)
    };

    const loadInitialData = async () => {
      const segments = route.path.split('/').filter(Boolean);
      const slug = segments[segments.length - 1];
      const searchQuery = route.query.search;

      // Clear previous products only on initial load
      products.value = [];
      pagination.value = { current_page: 1, last_page: 1 }; // reset pagination if needed
      loading.value = true;
      loading.page = true;

      try {
        if (searchQuery) {
          // await searchProductsForPage(searchQuery, false); // false means replace, not append
          await searchProductsForPage({
            search: searchQuery,
            perPage: 10,
            page: 1,
            sortField: 'created_at',
            sortDirection: 'desc'
          }, false);
        } else if (slug) {
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
          }, false); // false = replace existing products
        }
      } catch (err) {
        console.error("Failed to load data:", err);
      } finally {
        isFetchingInitialProducts.value = false;
        loading.value = false;
        loading.page = false;
      }
  };

  const loadMoreProducts = async () => {
    if (isLoadingMore.value || !hasMorePages.value) return;

    isLoadingMore.value = true;

    try {
      const nextPage = pagination.value.current_page + 1;
      const querySearch = route.query.search;
      const segments = route.path.split('/').filter(Boolean);
      const slugParam = segments[segments.length - 1];

      let response;

      if (querySearch) {
        response = await searchProductsForPage({
          search: querySearch,
          brand: selectedBrand.value,
          subCategory: selectedCategory.value,
          perPage: 10,
          page: nextPage,
          sortField: 'created_at',
          sortDirection: 'desc',
        }, true); // 👈 append = true
      } else {
        response = await getProductsByCategory({
          categorySlug: slugParam,
          brand: selectedBrand.value,
          subCategory: selectedCategory.value,
          perPage: 10,
          page: nextPage,
          sortField: 'created_at',
          sortDirection: 'desc',
        }, true); // 👈 append = true
      }

      if (response?.data?.length) {
        products.value.push(...response.data);
        pagination.value = response.meta;
      }
    } catch (err) {
      console.error('Failed to load more:', err);
    } finally {
      isLoadingMore.value = false;
    }
  };

  onBeforeMount(() => {
    products.value = [];
    pagination.value = null;
    searchedKeyWord.value = '';
  });

  // Lifecycle
  onMounted(async () => {
    categories.value = await getCategories();
    brands.value = await getBrands();

    // Use nextTick to ensure route.query.search is available
    await nextTick();
    await loadInitialData();
  });

  watch(
    () => [route.params.slug, route.query.search],
    async () => {
      isFetchingInitialProducts.value = true;
      await nextTick();
      await loadInitialData();
    }
  );

  const resetFilters = () => {
    selectedCategory.value = null;
    selectedBrand.value = null;
    loadProducts();
  };
</script>
<style scoped>
    .load-more-container {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
    .load-more-button {
      background-color: #1890ff;
      color: white;
      padding: 10px 24px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: bold;
      transition: 0.3s;
    }
    .load-more-button:hover {
      background-color: #40a9ff;
    }
    .load-more-button[disabled] {
      background-color: #d9d9d9;
      cursor: not-allowed;
    }
    .end-message {
      text-align: center;
      color: #888;
      margin-top: 20px;
      font-style: italic;
    }
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
    .no-products {
      text-align: center;
      padding: 2rem;
      font-size: 1.2rem;
      color: #666;
      font-style: italic;
    }

    .loader-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(255, 255, 255, 0.7); /* light overlay */
      display: flex;
      justify-content: center;
      align-items: center;
      /* z-index: 9999; */
    }

    .spinner-gif {
      width: 80px; /* adjust size as needed */
      height: 80px;
    }

    .loader-overlay {
      /* animation: fadeIn 0.3s ease-in-out; */
    }

    .no-products {
      text-align: center;
      padding: 2rem 1rem;
    }

    .placeholder-wrapper {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 1rem;
    }

    .placeholder-card {
      width: 200px;
      height: 250px;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: 10px;
    }
    .search-results-header {
      margin: 1.5rem 0 1rem;
      padding: 0 0.5rem;
    }

    .results-count {
      font-size: 1.1rem;
      color: #333;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    .results-count strong {
      color: #007bff; /* Blue highlight */
    }

    .divider {
      border: none;
      border-top: 2px solid #eee;
      margin: 0;
    }

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>