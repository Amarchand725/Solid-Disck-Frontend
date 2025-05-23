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

    <!-- Dynamic Method Form -->
    <div class="payment_method_main_wrapper">
      <component :is="selectedComponent" ref="gatewayRef" />
    </div>

    <!-- Order Button -->
    <!-- <div class="text-center mt-5">
      <button @click="handlePlaceOrder" :disabled="loading" class="black-btn">
        {{ loading ? 'Placing Order...' : 'Place Order' }}
      </button>
    </div> -->
    <div style="display: flex; justify-content: center; margin-top: 20px;">
        <button @click="handlePlaceOrder" :disabled="loading" type="button" id="pay-button" class="w-full h-[50px] black-btn flex justify-center items-center bank_of_america_btn_main">
            {{ loading ? 'Placing Order...' : 'Place Order' }}
        </button>
        <!-- <p v-if="error" class="error">{{ error }}</p> -->
        <!-- <img id="loadingIcon" height="30px" width="30px" src="/loading.gif" style="margin-left: 10px; display: none;" alt="Loading"> -->
    </div>
  </div>
</template>
<script setup>
    import PayPalCheckout from '@/components/Checkout/PayPalCheckout.vue'
    import PayarcForm from '@/components/Checkout/PayarcForm.vue'

    import { ref, watch, computed } from 'vue'
    import { usePaypal } from '@/composables/usePaypal'
    import { usePayarc } from '@/composables/usePayarc'
    
    const selectedMethod = ref('Paypal')
    const loading = ref(false)

    const gatewayRef = ref(null)

    const selectedComponent = computed(() => {
        return selectedMethod.value === 'Paypal' ? PayPalCheckout : PayarcForm
    })

    defineProps({
        selectedMethod: String,
        loading: Boolean,
    })

    const emit = defineEmits(['place-order'])

    const paymentError = ref('')
    const { mountPaypal, paypalResponse } = usePaypal()
    const { mountPayarc, getPayarcToken } = usePayarc()

    watch(() => selectedMethod, async (method) => {
        try {
            if (method === 'Paypal') {
            await mountPaypal('paypal-button', '100.00') // amount should be dynamic
            } else if (method === 'Payarc') {
            await mountPayarc('payarc-form')
            }
        } catch (err) {
            paymentError.value = err.message
        }
    })

    // defineExpose({
    //     async getPaymentToken() {
    //         if (!gatewayRef.value) throw new Error('Payment form not mounted')

    //         if (selectedMethod.value === 'Paypal') {
    //             return paypalResponse.value
    //         }

    //         if (selectedMethod.value === 'Payarc') {
    //             const cardData = gatewayRef.value.getCardData?.()
    //         if (!cardData) throw new Error('Card data missing')
    //             return await getPayarcToken(cardData)
    //         }
    //     }
    // })

    defineExpose({
        async getPaymentToken() {
            if (!gatewayRef.value) throw new Error('Payment form not mounted')

            if (selectedMethod.value === 'Paypal') {
                if (!paypalResponse.value) throw new Error('PayPal response missing')
                return {
                    method: 'paypal',
                    payment_method_id: paypalResponse.value.id || paypalResponse.value.orderID // or whatever your backend expects
                }
            }

            if (selectedMethod.value === 'Payarc') {
                const cardData = gatewayRef.value.getCardData?.()
            if (!cardData) throw new Error('Card data missing')

            const token = await getPayarcToken(cardData)
                return {
                    method: 'payarc',
                    payment_method_id: token
                }
            }

            throw new Error('Unsupported payment method')
        }
    })

    function handlePlaceOrder() {
        emit('place-order')
        if (!gatewayRef.value) return
        gatewayRef.value.handlePayment?.()
    }
</script>

<!-- <script setup>
import { ref, computed } from 'vue'
import PayPalCheckout from '@/components/Checkout/PayPalCheckout.vue'
import PayarcForm from '@/components/Checkout/PayarcForm.vue'

const selectedMethod = ref('Paypal')
const loading = ref(false)

const gatewayRef = ref(null)

const selectedComponent = computed(() => {
  return selectedMethod.value === 'Paypal' ? PayPalCheckout : PayarcForm
})

function handlePlaceOrder() {
  if (!gatewayRef.value) return
  gatewayRef.value.handlePayment?.()
}
</script> -->