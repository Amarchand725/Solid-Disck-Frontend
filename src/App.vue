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
<style>
body {
  font-family: 'Roboto', sans-serif;
}
:root {
      --primary-color: #001e4c !important;
}

.manufacturer_inner:hover {
    box-shadow: 0 8px 16px #005ac7 !important;
    border-color: transparent;
}

.popular_cards_main_inner:hover{
  box-shadow: 0 8px 16px #005ac7 !important;
    border-color: transparent;
}
</style>