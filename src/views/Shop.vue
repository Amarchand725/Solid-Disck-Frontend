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
                            <div class="sort_bar">
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
                            </div>

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
                                            :quantities="quantities"
                                            @increase="increaseQuantity"
                                            @decrease="decreaseQuantity"
                                            @add-to-cart="handleAddToCart"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="bottom_navigation">
                                <p>Showing <b>1 - 10</b> Results</p>
                                <div class="bottom_pagination">
                                    <ul class="ant-pagination css-i6rspj">
                                        <li title="1" class="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active" tabindex="0"><a rel="index follow">1</a></li>
                                        <li title="2" class="ant-pagination-item ant-pagination-item-2" tabindex="0"><a rel="index follow">2</a></li>
                                        <li title="3" class="ant-pagination-item ant-pagination-item-3" tabindex="0"><a rel="index follow">3</a></li>
                                        <li title="4" class="ant-pagination-item ant-pagination-item-4" tabindex="0"><a rel="index follow">4</a></li>
                                        <li title="5" class="ant-pagination-item ant-pagination-item-5 ant-pagination-item-before-jump-next" tabindex="0"><a rel="index follow">5</a></li>
                                        <li title="10" class="ant-pagination-item ant-pagination-item-10" tabindex="0"><a rel="index follow">10</a></li>
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
    
    import { ref, onMounted, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import { useCategories } from '@/composables/useCategories';
    import { useProducts } from '@/composables/useProducts';
    import { useSettings } from '@/composables/useSettings.js'
    import { useCart } from '@/composables/useCart'

    // Composables
    const { settings } = useSettings();
    const { getCategoryBySlug } = useCategories();
    const { products, pagination, loading, getProductsByCategory } = useProducts();
    const { addToCart } = useCart();

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

    // Load category and its products
    const loadCategory = async () => {
        const slug = route.params.slug;

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
                perPage: 12,
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

</script>
