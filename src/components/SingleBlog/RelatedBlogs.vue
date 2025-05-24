<template>
  <div class="blog-slider-section">
    <h2 class="section-title">Discover</h2>
    <Swiper
      :modules="[Autoplay]"
      :slides-per-view="4"
      :space-between="30"
      :loop="true"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :navigation="true"
      :pagination="{ clickable: true }"
      class="blog-swiper"
    >
      <SwiperSlide v-for="blog in blogs" :key="blog.id">
        <div class="blog-card">
            <router-link class="blog-image" :to="`/blogs/${blog.slug}`">
                <img 
                :alt="blog.title" 
                :title="blog.title" 
                loading="lazy" decoding="async"
                class="card-image"
                :src="blog.banner || '/placeholders/290x100.svg'"
                @error="onImageError"
                >
            </router-link>

            <div class="blog-content">
                <h3 class="blog-description">{{ shortDescription(blog.description) }}</h3>
            </div>

            <router-link :to="`/blogs/${blog.slug}`">
                <button class="view-button">View</button>
            </router-link>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps({
  blogs: Array
})

function shortDescription(html, limit = 150) {
  const text = (html || '').replace(/<[^>]*>/g, ''); // safely handle undefined
  return text.length > limit ? text.substring(0, limit) + '...' : text;
}
</script>

<style scoped>
.blog-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 420px; /* 🔧 Adjust this based on your content */
  max-width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background: #fff;
}

.card-image {
  width: 100%;
  height: 120px;
  object-fit: contain;
  background: #f9f9f9;
}

.blog-content {
  padding: 16px;
  flex-grow: 1;
  overflow-y: auto;
}

.blog-title-link {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 10px;
  color: #222;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Show max 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.blog-description {
  font-size: 14px;
  color: #555;
  margin: 0 0 10px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}


.view-button {
  width: 100%;
  background-color: #0059b3;
  color: white;
  padding: 10px;
  border: none;
  border-top: 1px solid #ccc;
  font-weight: 600;
  cursor: pointer;
  border-radius: 0 0 10px 10px;
}
</style>
