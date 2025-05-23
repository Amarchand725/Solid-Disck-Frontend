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
                            <button title="Reset Filters" type="button" class="ant-btn css-i6rspj ant-btn-default ant-btn-color-default ant-btn-variant-outlined reset_filter"><span>Reset Filters</span></button>
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
                                            <div class="ant-select ant-select-outlined css-i6rspj ant-select-single ant-select-allow-clear ant-select-show-arrow ant-select-show-search" style="width: 100%;">
                                                <div class="ant-select-selector"><span class="ant-select-selection-wrap"><span class="ant-select-selection-search"><input autocomplete="off" class="ant-select-selection-search-input" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="rc_select_1_list" aria-autocomplete="list" aria-controls="rc_select_1_list" type="search" value="" id="rc_select_1"></span>
                                                    <span
                                                    class="ant-select-selection-placeholder">Select Manufacturer</span>
                                                        </span>
                                                </div><span class="ant-select-arrow" unselectable="on" aria-hidden="true" style="user-select: none;"><span role="img" aria-label="down" class="anticon anticon-down ant-select-suffix"><svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span></span>
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
                                            <div class="ant-select ant-select-outlined css-i6rspj ant-select-single ant-select-allow-clear ant-select-show-arrow ant-select-show-search" style="width: 100%;">
                                                <div class="ant-select-selector"><span class="ant-select-selection-wrap"><span class="ant-select-selection-search"><input autocomplete="off" class="ant-select-selection-search-input" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="rc_select_2_list" aria-autocomplete="list" aria-controls="rc_select_2_list" type="search" value="" id="rc_select_2"></span>
                                                    <span
                                                    class="ant-select-selection-placeholder">Select Category</span>
                                                        </span>
                                                </div><span class="ant-select-arrow" unselectable="on" aria-hidden="true" style="user-select: none;"><span role="img" aria-label="down" class="anticon anticon-down ant-select-suffix"><svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="ant-col ant-col-xs-19 css-i6rspj">
                        <div class="col_right">
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
                    </div>
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
    import { useCategories } from '@/composables/useCategories';
    import { useProducts } from '@/composables/useProducts';
    import { useSettings } from '@/composables/useSettings.js'
    import { useCart } from '@/composables/useCart'

    // Composables
    const { settings } = useSettings();
    const { getCategoryBySlug } = useCategories();
    const { products, pagination, loading, getProductsByCategory } = useProducts();
    const { addToCart, buyItNow, loading2, loader } = useCart();

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

    // Lifecycle
    onMounted(loadCategory);

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
</style>