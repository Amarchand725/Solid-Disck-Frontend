<template>
    <div>
        <main>
            <!-- Banner Section -->
            <Banner />

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
            <BestSellingProduct />

            <!-- Blogs Section -->
            <Blogs />
        </main>
    </div>
</template>

<script setup>
    import WhyWorkWithUs from '@/components/WhyWorkWithUs.vue';
    import Banner from '@/components/Banner.vue';
    import CentralContent from '@/components/CentralContent.vue';
    import TopSellerManufacturer from '@/components/TopSellerManufacturer.vue';
    import TopSellerCategory from '@/components/TopSellerCategory.vue';
    import FeaturedCategories from '@/components/FeaturedCategories.vue';
    import FeaturedManufacturer from '@/components/FeaturedManufacturer.vue';
    import BestSellingProduct from '@/components/BestSellingProduct.vue';
    import Blogs from '@/components/Blogs.vue';
</script>

<style scoped>
/* Inline or import styles */
</style>