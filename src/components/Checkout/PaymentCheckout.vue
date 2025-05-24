<template>
  <div class="payment_method_main">
    <div class="head_main">
      <h3>Payment Method</h3>
      <img 
        loading="lazy" width="150" height="20" decoding="async"
        src="/assets/image/payment_icons.avif"
        style="color: transparent;"
      />
    </div>

    <!-- Payment Selection -->
    <div class="payment_method_radio">
      <div class="ant-radio-group">
        <label
          class="ant-radio-wrapper"
          v-for="method in ['Paypal', 'Payarc']"
          :key="method"
          style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;"
        >
          <span class="ant-radio ant-wave-target">
            <input
              class="ant-radio-input"
              type="radio"
              :value="method"
              v-model="selectedMethod"
            />
            <span class="ant-radio-inner"></span>
          </span>
          <span class="capitalize">{{ method }}</span>
        </label>
      </div>
    </div>

    <!-- Dynamic Method Form (Payarc only) -->
    <div class="payment_method_main_wrapper">
      <component :is="selectedComponent" ref="gatewayRef" />
    </div>

    <div style="display: flex; justify-content: center; margin-top: 20px;">
      <button @click="handlePlaceOrder" :disabled="loading" type="button" id="pay-button" class="w-full h-[50px] black-btn flex justify-center items-center bank_of_america_btn_main">
        {{ loading ? 'Placing Order...' : 'Place Order' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import PayarcForm from '@/components/Checkout/PayarcForm.vue'
import { ref, computed } from 'vue'
import { usePayarc } from '@/composables/usePayarc'
import axios from '@/plugins/axios'

const selectedMethod = ref('Paypal')
const loading = ref(false)
const gatewayRef = ref(null)

const selectedComponent = computed(() => {
  return selectedMethod.value === 'Payarc' ? PayarcForm : null
})

const emit = defineEmits(['place-order'])

const { mountPayarc } = usePayarc()
const paymentError = ref('')

const handlePlaceOrder = async () => {
  loading.value = true
  try {
    emit('place-order') // Unified trigger
  } catch (err) {
    paymentError.value = err.message || 'Payment error occurred'
  } finally {
    loading.value = false
  }
}

// Expose method for OrderSummary.vue
defineExpose({
  async getPaymentToken() {
    if (selectedMethod.value === 'Payarc') {
      const cardData = await gatewayRef.value?.getCardData?.()
      if (!cardData) throw new Error('Card data missing')

      return {
        method: 'payarc',
        card_number: cardData.number,
        expiry: cardData.expiry,
        cvv: cardData.cvv,
        name: cardData.name || '',
        email: cardData.email || '',
      }
    } else if (selectedMethod.value === 'Paypal') {
      return {
        method: 'paypal',
      }
    }

    throw new Error('Unsupported method for tokenization')
  }
})
</script>


<!-- <script setup>
import PayarcForm from '@/components/Checkout/PayarcForm.vue'
import { ref, computed } from 'vue'
import { usePayarc } from '@/composables/usePayarc'
import axios from '@/plugins/axios'

const selectedMethod = ref('Paypal')
const loading = ref(false)
const gatewayRef = ref(null)

const selectedComponent = computed(() => {
  return selectedMethod.value === 'Payarc' ? PayarcForm : null
})

const emit = defineEmits(['place-order'])

const { mountPayarc } = usePayarc()

const paymentError = ref('')

const handlePlaceOrder = async () => {
  loading.value = true

  try {
    if (selectedMethod.value === 'Payarc') {
      emit('place-order') 
      gatewayRef.value?.handlePayment?.()
    } else if (selectedMethod.value === 'Paypal') {
      emit('place-order', { method: 'paypal' })
    }
  } catch (err) {
    paymentError.value = err.message || 'Payment error occurred'
  } finally {
    loading.value = false
  }
}

defineExpose({
  async getPaymentToken() {
    if (selectedMethod.value === 'Payarc') {
      const cardData = gatewayRef.value.getCardData?.()
      if (!cardData) throw new Error('Card data missing')

      return {
        method: 'payarc',
        card_number: cardData.number,
        expiry: cardData.expiry,
        cvv: cardData.cvv,
        name: cardData.name || '',
        email: cardData.email || '',
      }
    }

    throw new Error('Unsupported method for tokenization')
  },
})
</script> -->
