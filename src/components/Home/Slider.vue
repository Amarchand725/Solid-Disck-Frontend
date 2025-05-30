<template>
  <section class="banner_section" v-if="sliders.length">
    <Swiper
      class="banner-swiper"
      :modules="[Autoplay]"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      loop
    >
     <SwiperSlide v-for="(slider, index) in sliders" :key="index">
        <router-link to="/">
          <img
            :src="slider.image || '/placeholders/1600x400.svg'"
            :srcset="generateSrcset(slider.image)"
            :sizes="'(max-width: 600px) 400px, (max-width: 900px) 600px, (max-width: 1100px) 800px, (max-width: 1300px) 1000px, (max-width: 1500px) 1200px, 1600px'"
            :alt="slider.title || 'Slider'"
            :title="slider.title || 'Slider'"
            width="1600"
            height="400"
            decoding="async"
            :loading="index === 0 ? 'eager' : 'lazy'"
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

function generateSrcset(imageUrl) {
  if (!imageUrl) return '/placeholders/1600x400.svg'

  const extMatch = imageUrl.match(/\.(webp|jpg|jpeg|png)$/i)
  const ext = extMatch ? extMatch[0] : '.webp'
  const base = imageUrl.replace(ext, '')
  const sizes = [400, 600, 800, 1000, 1200, 1600]

  return sizes
    .map(size => `${base}-${size}w${ext} ${size}w`)
    .join(', ')
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
  object-fit: cover;
  position: relative;
}

@media (max-width: 768px) {
  .banner-swiper {
    height: 200px;
  }
}

@media (max-width: 480px) {
  .banner-swiper {
    height: 150px;
  }
}
</style>
