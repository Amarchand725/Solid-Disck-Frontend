<script setup>
import { ref, onMounted } from 'vue'
import { useCart } from '@/composables/useCart'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import Loader from '@/components/Header/Loader.vue'

const { getCart } = useCart()
const loading = ref(true)

onMounted(async () => {
  try {
    await getCart()
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <Header />
    <router-view />
    <Footer />

    <!-- Loader on top -->
     <Loader v-if="loading" />
  </div>
</template>

