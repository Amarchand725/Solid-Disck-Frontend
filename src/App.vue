<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import HomeHeader from '@/components/Home/HomeHeader.vue'
import DefaultHeader from '@/components/Default/DefaultHeader.vue'
import Footer from '@/components/General/Footer.vue'

const route = useRoute()

const isHomePage = computed(() => route.path === '/')
</script>
<template>
  <div>
    <HomeHeader v-if="isHomePage" />
    <DefaultHeader v-else />
    <router-view />
    <Footer />
  </div>
</template>


