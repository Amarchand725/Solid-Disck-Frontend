<template>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <div class="thank-you-container">
      <div class="thank-you-card">
        <h1 class="thank-you-title">Thank You for Your Order!</h1>
        <p class="order-number">Your Order Number: <strong>{{ order.order_number }}</strong></p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { watch } from 'vue';
import useOrderSuccess from '@/composables/useOrderSuccess';

const { order, loading, error } = useOrderSuccess();

// Watch for when `order` is loaded, then fire gtag
watch(order, (newOrder) => {
  if (newOrder && newOrder.order_number) {
    gtag('event', 'conversion', {
      send_to:  'AW-16807205830/N2BuCL79v_wZEMa3ps4-', // ✅ replace with your real Google Ads conversion ID
      value: newOrder.total,            // ✅ dynamic order value
      currency: 'USD',
      transaction_id: newOrder.order_number // or use a dedicated transaction ID if available
    });
  }
});
</script>

<style scoped>
.thank-you-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9fafb;
}

.thank-you-card {
  text-align: center;
  background: white;
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.thank-you-title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.order-number {
  font-size: 1.25rem;
  color: #34495e;
}
</style>
