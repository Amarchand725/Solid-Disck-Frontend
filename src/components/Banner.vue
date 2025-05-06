<template>
  <section class="banner_section" v-if="bannerObj">
    <router-link class="nav-link" to="/">
      <img
        :alt="bannerObj.title"
        :title="bannerObj.title"
        fetchpriority="high"
        decoding="async"
        data-nimg="fill"
        sizes="100vw"
        :src="bannerObj.banner"
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

const bannerObj = computed(() => {
  return banners.value?.find(b => b.title?.toLowerCase() === 'home banner') ?? null
})
</script>
