<template>
  <div>
    <h1>Your Order Number: {{ orderNumber }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderNumber: null,
    }
  },
  mounted() {
    this.orderNumber = this.$route.params.orderNumber
    console.log('Order number:', this.orderNumber)
  }
}
</script>