<template>
   <div>
      <!-- ========== MAIN CONTENT ========== -->
      <main id="content" role="main">
         <!-- Slider Section -->
         <Slider />
         <!-- End Slider Section -->
         <div class="container">
            <!-- Banner -->
            <Banner />
            <!-- End Banner -->
            <!-- Deals-and-tabs -->
            <Deals />
            <!-- End Deals-and-tabs -->
         </div>
         <!-- Products-4-1-4 -->
         <Products />
         <!-- End Products-4-1-4 -->
         <div class="container">
            <!-- Prodcut-cards-carousel -->
            <BestSeller />
            <!-- End Prodcut-cards-carousel -->
            <!-- Full banner -->
            <FullBanner />
            <!-- End Full banner -->
            <!-- Recently viewed -->
            <RecentlyViewed />
            <!-- End Recently viewed -->
            <!-- Brand Carousel -->
            <BrandCarousel />
            <!-- End Brand Carousel -->
         </div>
      </main>
      <!-- ========== END MAIN CONTENT ========== -->
   </div>
</template>

<script setup>
   import Slider from '@/components/Slider.vue';
   import Banner from '@/components/Banner.vue';
   import Deals from '@/components/Deals.vue';
   import Products from '@/components/Products.vue';
   import BestSeller from '@/components/BestSeller.vue';
   import FullBanner from '@/components/FullBanner.vue';
   import RecentlyViewed from '@/components/RecentlyViewed.vue';
   import BrandCarousel from '@/components/BrandCarousel.vue';
</script>

<style scoped>
/* Inline or import styles */
</style>
  