<template>
  <section class="banner_section" v-if="homeBanners.length">
    <Swiper
      class="banner-swiper"
      :modules="[Autoplay]"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      loop
    >
      <SwiperSlide v-for="(banner, index) in homeBanners" :key="index">
        <router-link to="/">
          <img
            :src="banner.banner || '/placeholders/1500x400.svg'"
            :alt="banner.title || 'Banner'"
            :title="banner.title || 'Banner'"
            width="1500"
            height="400"
            decoding="async"
            @error="onImageError"
            class="banner-image"
          />
        </router-link>
      </SwiperSlide>
    </Swiper>
  </section>
</template>


<script setup>
import { onMounted, computed } from 'vue'
import { useBanners } from '@/composables/useBanners.js'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

// Swiper CSS
import 'swiper/css'

const { banners, getBanners } = useBanners()

onMounted(() => {
  getBanners()
})

const onImageError = (event) => {
  event.target.src = '/placeholders/1500x400.svg'
}

const homeBanners = computed(() =>
  banners.value?.filter(b => b.title?.toLowerCase() === 'home banner') || []
)
</script>


<style scoped>
.banner-swiper {
  width: 100%;
  height: 370px;
  position: relative;
}

.banner-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  position: relative; /* remove absolute to prevent overlay */
}

@media (max-width: 768px) {
  .banner-swiper {
    height: 200px; /* smaller height on tablets/mobile */
  }
}

@media (max-width: 480px) {
  .banner-swiper {
    height: 150px; /* even smaller height on phones */
  }
}

</style>
