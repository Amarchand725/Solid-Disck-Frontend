<script setup>
  import { useCart } from '@/composables/useCart'
  import Header from '@/components/Header/Header.vue'
  import Footer from '@/components/Footer/Footer.vue'

  const { getCart } = useCart()

  getCart() // Load cart data when app starts
</script>

<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>


