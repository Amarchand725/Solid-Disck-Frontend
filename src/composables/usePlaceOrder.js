import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from '@/plugins/axios';
import { setCartData } from './cartState'
import { useToast } from 'vue-toastification'

export function usePlaceOrder() {
  const isPlacing = ref(false)
  const error = ref('')
  const router = useRouter()
  const toast = useToast()

  const placeOrder = async ({ shipping, billing, cart, paymentMethodId  }) => {
    try {
      isPlacing.value = true
      error.value = ''
      
      const token = localStorage.getItem('auth_token')
      // if (!token) {
      //   localStorage.setItem('shipping', JSON.stringify(shipping))
      //   localStorage.setItem('billing', JSON.stringify(billing))
      //   localStorage.setItem('redirect_to_checkout', 'true')
      //   toast.warning('Please login to continue placing your order.')
      //   return router.push({ name: 'Login' })
      // }
      // console.log('billing: ' + JSON.stringify(billing, null, 2))
      const response = await axios.post('/orders/place-order', {
        shipping,
        billing,
        cart,
        payment_method_id: paymentMethodId
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      // Handle success
      if (response.data.success==true) {
        // Clean up
        // localStorage.removeItem('shipping')
        // localStorage.removeItem('billing')
        // localStorage.removeItem('redirect_to_checkout')
        setCartData(response.data) 
        toast.success(response.data.message || 'You have placed your order successfully!')
        router.push({ name: 'OrderSuccess', params: { orderNumber: response.data.order_number } });
      } else {
        error.value = 'Order failed. Try again.'
        toast.error(response.data.message || 'Order failed. Try again!')
      }
    } catch (err) {
      error.value = err.response?.data?.message || err.message
      toast.error(error.value)
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