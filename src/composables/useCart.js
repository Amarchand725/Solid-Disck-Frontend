import { ref } from 'vue'
import { fullCart, cartItemCount, setCartData } from './cartState'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
import axios from '@/plugins/axios'

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

  const getCart = async () => {
    try {
      const response = await axios.get('/cart')
      setCartData(response.data)
    } catch (error) {
      toast.error('Failed to load cart')
    }
  }

  const addToCart = async (productSlug, quantity = 1) => {
    loading.value = true
    try {
      const response = await axios.post('/cart/store', {
        slug: productSlug,
        quantity
      })
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
      const response = await axios.post('/cart/store', {
        slug: productSlug,
        quantity
      })
      setCartData(response.data)
      message.value = response.data.message || 'Item added to cart.'
      toast.success(message.value)
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
      const response = await axios.put('/cart/store', {
        slug: productSlug,
        quantity
      })
      message.value = response.data.message || 'Cart updated.'
      toast.success(message.value)
    } catch (error) {
      handleError(error, 'Failed to update cart.')
    } finally {
      loading.value = false
    }
  }

  const updateShipping = async (rate) => {
    loading.value = true
    try {
      const response = await axios.put('/cart/update-shipping', {
        rate
      })
      setCartData(response.data)
      message.value = response.data.message || 'Shipping updated.'
      // toast.success(message.value)
    } catch (error) {
      handleError(error, 'Failed to update shipping.')
    } finally {
      loading.value = false
    }
  }

  const increaseCartItem = async (item_id) => {
    loading.value = true    
    try {
      const response = await axios.put('/cart/increase', {
        cart_item_id: item_id
      })
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
      const response = await axios.put('/cart/decrease', {
        cart_item_id: item_id
      })
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
      const response = await axios.delete('/cart/remove', {
        data: { cart_item_id: item_id }
      })
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
      const response = await axios.delete('/cart/clear')
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