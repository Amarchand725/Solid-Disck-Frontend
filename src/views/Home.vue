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
    import WhyWorkWithUs from '@/components/Home/WhyWorkWithUs.vue';
    import Banner from '@/components/Home/Banner.vue';
    import CentralContent from '@/components/Home/CentralContent.vue';
    import TopSellerManufacturer from '@/components/Home/TopSellerManufacturer.vue';
    import TopSellerCategory from '@/components/Home/TopSellerCategory.vue';
    import FeaturedCategories from '@/components/Home/FeaturedCategories.vue';
    import FeaturedManufacturer from '@/components/Home/FeaturedManufacturer.vue';
    import BestSellingProduct from '@/components/Home/BestSellingProduct.vue';
    import Blogs from '@/components/Home/Blogs.vue';
</script>

<style scoped>
/* Inline or import styles */
</style>