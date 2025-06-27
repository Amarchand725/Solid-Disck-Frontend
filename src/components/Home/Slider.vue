  <template>
    <div>
      <section class="banner_section" v-if="sliders.length">
        <Swiper
          class="banner-swiper"
          :modules="[Autoplay]"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          loop
          lazy="true"
        >
        <SwiperSlide v-for="(slider, index) in sliders" :key="index">
          <router-link to="/">
            <picture>
              <source
                  :srcset="slider.image || '/placeholders/270x280.svg'"
                  type="image/webp"
              />
              <img
                :src="slider.image || '/placeholders/1600x400.svg'"
                :srcset="slider.image"
                :sizes="'(max-width: 600px) 400px, (max-width: 900px) 600px, (max-width: 1100px) 800px, (max-width: 1300px) 1000px, (max-width: 1500px) 1200px, 1600px'"
                :alt="slider.title || 'Slider'"
                :title="slider.title || 'Slider'"
                width="1600"
                height="400"
                decoding="async"
                :loading="index === 0 ? 'eager' : 'lazy'"
                :fetchpriority="index === 0 ? 'high' : 'low'"
                @error="onImageError"
                class="banner-image"
              />
          </picture>
          </router-link>
        </SwiperSlide>
        </Swiper>
      </section>
    </div>
  </template>

  <script setup>

  // Swiper
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay } from 'swiper/modules'

  // Swiper CSS
  import 'swiper/css'

  const props = defineProps({
    sliders: {
        type: Array,
        default: () => []
    }
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
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 4 / 1;
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
