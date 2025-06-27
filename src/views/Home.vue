<template>
    <div>
        <main>
            <div v-if="!homeReady" class="loader-overlay">
                <img src="/assets/image/Spinner-2.gif" alt="Loading..." class="spinner-gif" />
                
                <!-- Skeleton Loader for Product Card -->
                <!-- <div class="gear-loader">
                    <div class="gear"></div>
                </div> -->



                <!-- <main class="loader-section">
                    <div class="loader-overlay">
                        <div class="gear-pulse-loader">
                        <div class="gear"></div>
                        <div class="glow-ring"></div>
                        </div>
                        <p class="loading-text">Loading…</p>
                    </div>
                </main> -->
            </div>
            <div v-else>
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
            </div>
        </main>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { defineAsyncComponent } from 'vue';

    const Slider = defineAsyncComponent(() => import('@/components/Home/Slider.vue'));
    const CentralContent = defineAsyncComponent(() => import('@/components/Home/CentralContent.vue'));
    const WhyWorkWithUs = defineAsyncComponent(() => import('@/components/Home/WhyWorkWithUs.vue'));
    const TopSellerManufacturer = defineAsyncComponent(() => import('@/components/Home/TopSellerManufacturer.vue'));
    const TopSellerCategory = defineAsyncComponent(() => import('@/components/Home/TopSellerCategory.vue'));
    const FeaturedCategories = defineAsyncComponent(() => import('@/components/Home/FeaturedCategories.vue'));
    const FeaturedManufacturer = defineAsyncComponent(() => import('@/components/Home/FeaturedManufacturer.vue'));
    const BestSellingProduct = defineAsyncComponent(() => import('@/components/Home/BestSellingProduct.vue'));
    const BlogsComponent = defineAsyncComponent(() => import('@/components/Home/BlogsComponent.vue'));
    const SecurePaymentSticker = defineAsyncComponent(() => import('@/components/Home/SecurePaymentSticker.vue'));

    
    import { useProducts } from '@/composables/useBestSellingProduct.js'
    import { useSliders } from '@/composables/useSliders.js'

    const { products, loading, error, getProducts } = useProducts()
    const { sliders, loadingSlider, getSliders } = useSliders()
    const homeReady = ref(false)

    onMounted(async () => {
        await Promise.all([
            getProducts(),
            getSliders()
        ])
        homeReady.value = true
    })
</script>
<!-- <style scoped>
.gear-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f8f9fa;
}

.gear {
  width: 60px;
  height: 60px;
  border: 8px solid #007bff;
  border-top: 8px solid transparent;
  border-radius: 50%;
  animation: rotate 1.2s linear infinite;
  position: relative;
}

.gear::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  background: #007bff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

</style> -->
<style scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.spinner-gif {
  width: 80px;
  height: 80px;
}
</style>

<!-- <style>
.loader-section {
  min-height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader-overlay {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.75); /* light white overlay */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  z-index: 1;
  border-radius: 10px;
}

.gear-pulse-loader {
  position: relative;
  width: 80px;
  height: 80px;
}

.gear {
  width: 80px;
  height: 80px;
  border: 6px solid #001e4c;
  border-top-color: #f5ad1d;
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
}

.glow-ring {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 0 0 10px #f5ad1d, 0 0 20px #f5ad1d, 0 0 30px #001e4c inset;
  animation: pulse 2s ease-in-out infinite;
}

.loading-text {
  margin-top: 20px;
  color: #001e4c;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Segoe UI', sans-serif;
  animation: fadeIn 1s ease-in-out infinite alternate;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 10px #f5ad1d, 0 0 20px #f5ad1d, 0 0 30px #001e4c inset;
  }
  50% {
    box-shadow: 0 0 20px #f5ad1d, 0 0 40px #f5ad1d, 0 0 50px #001e4c inset;
  }
}

@keyframes fadeIn {
  from { opacity: 0.5; }
  to { opacity: 1; }
}
</style> -->