<template>
  <div id="paypal-button-container"></div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import axios from 'axios'
import { useCart } from '@/composables/useCart'

const { fullCart } = useCart()

const amount = computed(() => {
  return (fullCart.value?.total ?? 0).toFixed(2)
})

const handlePayment = async () => {
  alert('Wait for PayPal approval') // or check for approval trigger
}

defineExpose({ handlePayment })

onMounted(async () => {
  const { data } = await axios.get('/api/paypal/client-id')
  const script = document.createElement('script')
  script.src = `https://www.paypal.com/sdk/js?client-id=${data.clientId}&currency=USD`
  document.head.appendChild(script)

  script.onload = () => {
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
                { 
                    amount: { 
                        value: amount.value, 
                    } 
                }
            ]
        })
      },
      onApprove: async (data) => {
        await axios.post('/api/paypal/capture', { orderID: data.orderID })
        alert('PayPal payment successful!')
      }
    }).render('#paypal-button-container')
  }
})
</script>