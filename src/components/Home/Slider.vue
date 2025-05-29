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
          :src="slider.image || '/placeholders/1600x400.svg'"
          :srcset="generateSrcset(slider.image)"
          :sizes="'(max-width: 600px) 400px, (max-width: 900px) 600px, (max-width: 1100px) 800px, (max-width: 1300px) 1000px, (max-width: 1500px) 1200px, 1600px'"
          :alt="slider.title || 'Slider'"
          :title="slider.title || 'Slider'"
          width="1600"
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
<script>
export default {
  props: {
    slider: {
      type: Object,
      required: true
    }
  },
  methods: {
    generateSrcset(imageUrl) {
      if (!imageUrl) return '/placeholders/1600x400.svg';

      // Extract extension
      const extMatch = imageUrl.match(/\.(webp|jpg|jpeg|png)$/i);
      const ext = extMatch ? extMatch[0] : '.webp';

      // Remove extension to get base (everything before .webp)
      const base = imageUrl.replace(ext, '');

      // Your sizes (adjust as needed)
      const sizes = [400, 600, 800, 1000, 1200, 1600];

      // Map sizes to URLs like base-400w.webp
      return sizes
        .map(size => `${base}-${size}w${ext} ${size}w`)
        .concat([`${imageUrl} 1600w`])
        .join(', ');
    }
  }  // <-- no comma needed here, last property
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
