<template>
  <section class="banner_section" v-if="sliders.length">
    <Swiper
      class="banner-swiper"
      :modules="[Autoplay]"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      loop
    >
      <SwiperSlide v-for="(slider, index) in sliders" :key="index">
        <router-link to="/">
          <img
            :src="slider.image || '/placeholders/1500x400.svg'"
            :alt="slider.title || 'Slider'"
            :title="slider.title || 'Slider'"
            width="1500"
            height="400"
            decoding="async"
            loading="lazy" 
            @error="onImageError"
            class="banner-image"
          />
        </router-link>
      </SwiperSlide>
    </Swiper>
  </section>
</template>


<script setup>
import { onMounted } from 'vue'
import { useSliders } from '@/composables/useSliders.js'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

// Swiper CSS
import 'swiper/css'

const { sliders, getSliders } = useSliders()

onMounted(() => {
  getSliders()
})

const onImageError = (event) => {
  event.target.src = '/placeholders/1500x400.svg'
}

</script>


<style scoped>
.banner-swiper {
  width: 100%;
  height: 350px;
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
