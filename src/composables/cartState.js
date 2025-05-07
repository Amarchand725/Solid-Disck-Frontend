import { ref } from 'vue'

export const fullCart = ref({})
export const cartItemCount = ref(0)

export const setCartData = (data) => {
    const items = data?.cart?.items || []
    fullCart.value = data?.cart || {}
    cartItemCount.value = items.reduce((sum, item) => sum + (item.quantity || 0), 0)
}   