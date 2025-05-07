import axios from '@/plugins/axios'

/**
 * Add item to cart
 */
export const addToCart = (productSlug, quantity = 1) => {
  return axios.post('/cart/store', {
    slug: productSlug,
    quantity
  })
}

/**
 * Update cart item quantity
 */
export const updateCartItem = (productSlug, quantity) => {
  return axios.put('/cart/store', {
    slug: productSlug,
    quantity
  })
}

/**
 * Increase cart item quantity
 */
export const increaseCartItem = (productSlug) => {
  return axios.put('/cart/increase', {
    slug: productSlug
  })
}

/**
 * Decrease cart item quantity
 */
export const decreaseCartItem = (productSlug) => {
  return axios.put('/cart/decrease', {
    slug: productSlug
  })
}

/**
 * Remove item from cart
 */
export const removeFromCart = (productSlug) => {
  return axios.delete('/cart/remove', {
    data: { slug: productSlug }
  })
}

/**
 * Clear the entire cart
 */
export const clearCart = () => {
  return axios.delete('/cart/clear')
}
