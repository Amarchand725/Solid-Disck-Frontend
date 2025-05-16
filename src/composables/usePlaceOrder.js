import { ref } from 'vue'
import axios from '@/plugins/axios';
import { useRouter } from 'vue-router'

export function usePlaceOrder() {
  const isPlacing = ref(false)
  const error = ref('')
  const router = useRouter()

  const placeOrder = async ({
    shipping,
    billing,
    stripe,
    cardElement,
    cardErrorRef
  }) => {
    try {
      isPlacing.value = true
      error.value = ''

      const token = localStorage.getItem('auth_token')
      if (!token) {
        localStorage.setItem('shipping', JSON.stringify(shipping))
        localStorage.setItem('billing', JSON.stringify(billing))
        localStorage.setItem('redirect_to_payment', 'true');
        return router.push({ name: 'Login' })
      }

      // 1. Create paymentMethod via Stripe
      const { paymentMethod, error: stripeError } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: billing.name,
          email: billing.email
        }
      })

      if (stripeError) {
        cardErrorRef.value = stripeError.message
        return
      }

      // 2. Call Laravel backend
      const response = await axios.post('/orders/place-order', {
        shipping,
        billing,
        payment_method_id: paymentMethod.id
      })

      if (response.data.success) {
        localStorage.removeItem('shipping')
        localStorage.removeItem('billing')
        router.push({ name: 'OrderSuccess' })
      } else {
        error.value = 'Order failed. Try again.'
      }

    } catch (err) {
      error.value = err.response?.data?.message || err.message
    } finally {
      isPlacing.value = false
    }
  }

  return {
    placeOrder,
    isPlacing,
    error
  }
}


// import { ref } from 'vue'
// import axios from '@/plugins/axios';
// import { useToast } from 'vue-toastification';

// export function usePlaceOrder() {
//     const loading = ref(false);
//     const message = ref('');
//     const toast = useToast();
//     const error = ref(null)
//     const success = ref(false)

//     const placeOrder = async (payload) => {
//         loading.value = true
//         error.value = null
//         success.value = false

//         try {
//             const response = await axios.post('/orders/place-order', payload)

//             success.value = true
//             // return response.data // optional: order ID or message
//             message.value = response.data.message || 'You have placed order successfully!';
//             toast.success(message.value);
//         } catch (err) {
//         if (err.response?.data) {
//             error.value = err.response.data
//         } else {
//             error.value = { message: err.message }
//         }
//         throw error.value
//         } finally {
//         loading.value = false
//         }
//     }

//     return {
//         placeOrder,
//         loading,
//         error,
//         success
//     }
// }