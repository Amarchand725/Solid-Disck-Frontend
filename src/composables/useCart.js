import { ref } from 'vue'
import { fullCart, cartItemCount, setCartData } from './cartState'
import { buyNowProduct, setBuyNowData } from './sharedState'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
import axios from '@/plugins/axios'

// Utility to get or create guest_id
function getGuestId() {
  let guestId = localStorage.getItem('guest_id')
  if (!guestId) {
    guestId = crypto.randomUUID() // modern browsers, fallback if needed
    localStorage.setItem('guest_id', guestId)
  }
  return guestId
}

function isLoggedIn() {
  return false
}

export function useCart() {
  const loading = ref(false)
  const loading2 = ref(false)
  const toast = useToast()
  const message = ref('')
  const router = useRouter()

  const handleError = (error, fallback = 'An error occurred.') => {
    const errorMessage = error.response?.data?.message || fallback
    message.value = errorMessage
    toast.error(errorMessage)
  }

  // Helper to add guest_id to request data or params if no logged user
  function withGuestId(payload = {}) {
    if (!isLoggedIn()) {
      return { ...payload, guest_id: getGuestId() }
    }
    return payload
  }

  const getCart = async () => {
    try {
      const params = !isLoggedIn() ? { guest_id: getGuestId() } : {}
      const response = await axios.get('/cart', { params })
      setCartData(response.data)
    } catch (error) {
      toast.error('Failed to load cart')
    }
  }

  const addToCart = async (productSlug, quantity = 1) => {
    loading.value = true
    try {
        const payload = withGuestId({ slug: productSlug, quantity })
        const response = await axios.post('/cart/store', payload)
      setCartData(response.data)
      message.value = response.data.message || 'Item added to cart.'
      toast.success(message.value)
    } catch (error) {
      handleError(error, 'Failed to add to cart.')
    } finally {
      loading.value = false
    }
  }


  const buyItNow = async (productSlug, quantity = 1) => {
    loading2.value = true
    try {
      const payload = withGuestId({ slug: productSlug, quantity })
      const response = await axios.post('/cart/store', payload)
      setCartData(response.data)
      message.value = response.data.message || 'Item added to cart.'
      // toast.success(message.value)
      router.push('/checkout')
    } catch (error) {
      // handleError(error, 'Failed to add to cart.')
    } finally {
      loading2.value = false
    }
  }

  const updateCartItem = async (productSlug, quantity) => {
    loading.value = true
    try {
      const payload = withGuestId({ slug: productSlug, quantity })
      const response = await axios.put('/cart/store', payload)
      message.value = response.data.message || 'Cart updated.'
      toast.success(message.value)
    } catch (error) {
      handleError(error, 'Failed to update cart.')
    } finally {
      loading.value = false
    }
  }

  const updateShipping = async (rate, country) => {
    loading.value = true
    try {
      const payload = withGuestId({ 
        rate,
        country,
      })
      const response = await axios.put('/cart/update-shipping', payload)
      // setCartData(response.data)
      const resData = response.data;
      if (resData?.buyNow && Object.keys(resData.buyNow).length > 0) {
        // If buyNow key exists, use it
        setBuyNowData(response.data);
      } else{
        // Otherwise assume it's cart data
        setCartData(response.data);
      } 
      message.value = response.data.message || 'Shipping updated.'
      // toast.success(message.value)
    } catch (error) {
      handleError(error, 'Failed to update shipping.')
    } finally {
      loading.value = false
    }
  }

  const updateTax = async (country, state) => {
    loading.value = true
    try {
      const payload = withGuestId({ country, state }) // Include guest ID if needed
      const response = await axios.put('/cart/update-tax', payload)
      const resData = response.data;
      if (resData?.buyNow && Object.keys(resData.buyNow).length > 0) {
        // If buyNow key exists, use it
        setBuyNowData(response.data);
      } else{
        // Otherwise assume it's cart data
        setCartData(response.data);
      } 
      message.value = response.data.message || 'Tax updated.'
      // toast.success(message.value)
    } catch (error) {
      handleError(error, 'Failed to update tax.')
    } finally {
      loading.value = false
    }
  }


  const increaseCartItem = async (item_id) => {
    loading.value = true    
    try {
      const payload = withGuestId({ cart_item_id: item_id })
      const response = await axios.put('/cart/increase', payload)
      setCartData(response.data)
      message.value = response.data.message || 'Quantity increased.'
      toast.success(message.value)
    } catch (error) {
      handleError(error, 'Failed to increase quantity.')
    } finally {
      loading.value = false
    }
  }

  const decreaseCartItem = async (item_id) => {
    loading.value = true
    try {
      const payload = withGuestId({ cart_item_id: item_id })
      const response = await axios.put('/cart/decrease', payload)
      setCartData(response.data)
      message.value = response.data.message || 'Quantity decreased.'
      toast.success(message.value)
    } catch (error) {
      handleError(error, 'Failed to decrease quantity.')
    } finally {
      loading.value = false
    }
  }

  const removeCartItem = async (item_id) => {
    loading.value = true
    try {
      const config = {
        data: withGuestId({ cart_item_id: item_id })
      }
      const response = await axios.delete('/cart/remove', config)
      setCartData(response.data)
      message.value = response.data.message || 'Item removed from cart.'
      toast.success(message.value)
    } catch (error) {
      handleError(error, 'Failed to remove item.')
    } finally {
      loading.value = false
    }
  }

  const clearCart = async () => {
    loading.value = true
    try {
      const config = {
        data: withGuestId()
      }
      const response = await axios.delete('/cart/clear', config)
      message.value = response.data.message || 'Cart cleared.'
      toast.success(message.value)
    } catch (error) {
      handleError(error, 'Failed to clear cart.')
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    loading2,
    message,
    addToCart,
    updateCartItem,
    updateShipping,
    updateTax,
    increaseCartItem,
    decreaseCartItem,
    removeCartItem,
    clearCart,
    fullCart,
    cartItemCount,
    getCart,
    buyItNow,
  }
}

export const buyItNow = async (productSlug, quantity = 1, router) => {
  const toast = useToast()

  try {
    const response = await axios.post('/cart/store', {
      slug: productSlug.slug,
      quantity,
    })

    setCartData(response.data)
    toast.success(response.data.message || 'Item added to cart.')
    router.push('/checkout')
  } catch (error) {
    console.error('Buy it now failed:', error)
    toast.error('Failed to add item to cart.')
  }
}