<template>
    <div>
        <main>
            <!-- Banner Section -->
            <Slider v-if="!loadingSlider && sliders.length" :sliders="sliders" />
            
            <!-- Central Content -->
            <CentralContent />

            <!-- Why work with us section  -->
            <WhyWorkWithUs />

            <!-- Top Seller Manufacturer -->
            <TopSellerManufacturer />            

            <!-- Top seller categories -->
            <TopSellerCategory />

            <!-- Featured Categories -->
            <FeaturedCategories />

            <!-- Featured Manufacturer -->
            <FeaturedManufacturer />

            <!-- Best Selling Product -->
            <BestSellingProduct v-if="!loading && products" :products="products" />

            <!-- Secure Payment Sticker -->
            <SecurePaymentSticker />

            <!-- Blogs Section -->
            <BlogsComponent />
        </main>
    </div>
</template>

<script setup>
    import WhyWorkWithUs from '@/components/Home/WhyWorkWithUs.vue';
    import Slider from '@/components/Home/Slider.vue';
    import CentralContent from '@/components/Home/CentralContent.vue';
    import TopSellerManufacturer from '@/components/Home/TopSellerManufacturer.vue';
    import TopSellerCategory from '@/components/Home/TopSellerCategory.vue';
    import FeaturedCategories from '@/components/Home/FeaturedCategories.vue';
    import FeaturedManufacturer from '@/components/Home/FeaturedManufacturer.vue';
    import BestSellingProduct from '@/components/Home/BestSellingProduct.vue';
    import BlogsComponent from '@/components/Home/BlogsComponent.vue';
    import SecurePaymentSticker from '../components/Home/SecurePaymentSticker.vue';

    import { onMounted } from 'vue'
    import { useProducts } from '@/composables/useBestSellingProduct.js'
    import { useSliders } from '@/composables/useSliders.js'

    const { products, loading, error, getProducts } = useProducts()
    const { sliders, loadingSlider, getSliders } = useSliders()

    onMounted(() => {
        getProducts(),
        getSliders()
    })
</script>