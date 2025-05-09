<template>
    <main>
    <section class="product_detail_page_main">
        <div class="breadcrumb_wrapper">
            <span class="path_name">
                <a title="Home" href="/">Home</a>
                <span class="separator">&gt;</span>
            </span>
            
            <span 
                class="path_name" 
                v-if="categoryTrail?.length"
                v-for="catTrail in categoryTrail"
            >
                <router-link 
                    :title="catTrail.name" to="#"
                >{{ catTrail.name }}
                </router-link>
                <span class="separator">&gt;</span>
            </span>
            <strong title="productDetails.title">{{ productDetails?.slug }}</strong>
        </div>
        <div class="ant-row css-i6rspj">
            <ProductDetailComponent :productDetails="productDetails" />
            <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-8 ant-col-xl-8 css-i6rspj">
                <div class="product_detail_right">
                    <QuoteForm :productDetails="productDetails"/>
                    <DeliveryOption />
                </div>
            </div>
            <ProductFullDescription :productDetails="productDetails" />
            <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-8 ant-col-xl-8 css-i6rspj">
                <BestFor />
                <div class="social-share">
                    <span class="text-qblack text-[13px] mr-[17px] inline-block">Share This</span>
                    <SocialShare />
                </div>
            </div>
        </div>
        <div class="accessories_products_sec"></div>
        <RelatedProductComponent :products="relatedProducts" />
    </section>
  </main>
</template>
<script setup>
    import { ref, onMounted, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import { useProducts } from '@/composables/useProducts';
    import ProductDetailComponent from '@/components/ProductDetails.vue'
    import ProductFullDescription from '@/components/ProductFullDescription.vue'
    import QuoteForm from '@/components/QuoteForm.vue';
    import DeliveryOption from '@/components/DeliveryOption.vue';
    import BestFor from '@/components/BestFor.vue';
    import SocialShare from '@/components/SocialShare.vue';
    import RelatedProductComponent from '@/components/RelatedProducts.vue';

    const { getProductBySlug } = useProducts();

    const route = useRoute();

    const productDetails = ref(null);
    const relatedProducts = ref([]);
    const categoryTrail = ref(null);

    const loadProduct = async () => {
        const slug = route.params.slug;
        const categoryPath = route.params.categoryPath;

        // 🛑 Check if either param is missing
        if (!slug || !categoryPath) {
            console.warn('Missing slug or categoryPath:', { slug, categoryPath });
            return;
        }

        try {
            const data = await getProductBySlug(slug, categoryPath);
            productDetails.value = data.details;
            relatedProducts.value = data.related_products;
            categoryTrail.value = data.details.category_trail;
        } catch (err) {
            console.error('Failed to load product:', err);
        }
    };

    // Initial load
    onMounted(loadProduct);

    // React to route param changes
    watch(
    () => [route.params.slug, route.params.categoryPath],
        loadProduct
    );
</script>