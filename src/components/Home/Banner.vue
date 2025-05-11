<template>
  <section class="banner_section" 
    v-if="bannerObj"
  >
    <router-link 
      class="nav-link" 
      to="/"
    >
      <img
        :alt="bannerObj?.title || 'Banner'"
        :title="bannerObj?.title || 'Banner'"
        fetchpriority="high" width="1500" height="400" decoding="async"
        :src="bannerObj?.banner || '/placeholders/1500x400.svg'"
        @error="onImageError"
        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
      />
    </router-link>
  </section>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useBanners } from '@/composables/useBanners.js'

const { banners, getBanners } = useBanners()

onMounted(() => {
  getBanners()
})

const onImageError = (event) => {
  event.target.src = '/placeholders/1500x400.svg'
}

const bannerObj = computed(() => {
  return banners.value?.find(b => b.title?.toLowerCase() === 'home banner') ?? null
})
</script>
