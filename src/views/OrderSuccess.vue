<template>
  <div class="thank-you-container">
    <div class="thank-you-card">
      <h1 class="thank-you-title">Thank You for Your Order!</h1>
      <p class="order-number">Your Order Number: <strong>{{ orderNumber }}</strong></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderNumber: null,
    };
  },
  mounted() {
    this.orderNumber = this.$route.params.orderNumber;
    console.log('Order number:', this.orderNumber);
  }
};
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
