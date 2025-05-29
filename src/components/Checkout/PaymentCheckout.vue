<template>
  <div class="payment_method_main">
    <div class="head_main">
      <h3>Payment Method</h3>
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
          <span class="capitalize">{{ getPaymentMethodImage(method).title }}</span>
           <img
          :src="getPaymentMethodImage(method).url" 
          :alt="method"
          :width="getPaymentMethodImage(method).width" 
          :height="getPaymentMethodImage(method).height" 
          style="object-fit: contain;margin-left: auto;"
        />
        </label>
      </div>
    </div>

    <!-- Dynamic Method Form (Payarc only) -->
    <div class="payment_method_main_wrapper">
      <component :is="selectedComponent" ref="gatewayRef" />
    </div>

    <div style="display: flex; justify-content: center; margin-top: 20px;">
      <button
        @click="handlePlaceOrder"
        :disabled="props.loading || internalLoading"
        type="button"
        id="pay-button"
        class="w-full h-[50px] black-btn flex justify-center items-center bank_of_america_btn_main"
      >
        {{ props.loading || internalLoading ? 'Placing Order...' : 'Place Order' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import PayarcForm from '@/components/Checkout/PayarcForm.vue'
import { ref, computed } from 'vue'
import { usePayarc } from '@/composables/usePayarc'

const selectedMethod = ref('Paypal')
const internalLoading = ref(false) // for internal operations like card fetching
const gatewayRef = ref(null)

const props = defineProps({
  loading: Boolean, 
})
const emit = defineEmits(['place-order'])

const selectedComponent = computed(() =>
  selectedMethod.value === 'Payarc' ? PayarcForm : null
)

const { mountPayarc } = usePayarc()
const paymentError = ref('')

const handlePlaceOrder = async () => {
  try {
    internalLoading.value = true

    if (selectedMethod.value === 'Payarc') {
      const cardData = await gatewayRef.value?.getCardData?.()
      if (!cardData) {
        throw new Error('Please enter valid card details.')
      }
    }

    emit('place-order') // Let parent take over order placement
  } catch (err) {
    paymentError.value = err.message || 'Payment error occurred'
  } finally {
    internalLoading.value = false
  }
}

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
      return { method: 'paypal' }
    }
    throw new Error('Unsupported method for tokenization')
  }
})

const getPaymentMethodImage = (method) => {
  switch (method.toLowerCase()) {
    case 'paypal':
      return {
        url: '/assets/image/paypal_logo_icon_170865.png',
        width: 150,
        title: "PayPal",
        height: 60,
      }
    case 'payarc':
      return {
        url: '/assets/image/payment_icons.avif',
        width: 130,
        title: "Debit/Credit Card",
        height: 24,
      }
    default:
      return {
        url: '/assets/image/payment_icons.avif',
        width: 40,
        height: 24,
      }
  }
}
</script>
