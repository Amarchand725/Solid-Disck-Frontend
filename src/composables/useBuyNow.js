import { ref } from 'vue';
import axios from '@/plugins/axios';
import { useRouter } from 'vue-router';
import { buyNowProduct, setBuyNowData } from './sharedState'

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

export function useBuyNow() {
  const router = useRouter();
  const loadingBuyNow = ref(false);
  const error = ref(null);

  function withGuestId(payload = {}) {
    if (!isLoggedIn()) {
      return { ...payload, guest_id: getGuestId() }
    }
    return payload
  }

  // Send product to backend session for buy now
  async function buyNow(productSlug, quantity = 1) {
    loadingBuyNow.value = true;
    error.value = null;

    try {
      const payload = withGuestId({ slug: productSlug, quantity })
      const response = await axios.post('/buy-now', payload)
      setBuyNowData(response.data.buyNow || null);
      localStorage.setItem('checkout_source', 'buy_now');
      router.push('/checkout')
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to process Buy Now';
    } finally {
      loadingBuyNow.value = false;
    }
  }

  async function restoreBuyNow() {
    try {
      const guestId = localStorage.getItem('guest_id'); // or pass with header if needed
      const response = await axios.get('/buy-now-data', {
        params: { guest_id: guestId }
      });
      setBuyNowData(response.data.buyNow || null);
    } catch (err) {
      error.value = 'Failed to restore Buy Now product';
      setBuyNowData(null);
    }
  }

  // Clear the buy now session (after order or cancel)
  async function clearBuyNow() {
    loadingBuyNow.value = true;
    error.value = null;

    try {
      const response = await axios.post('/buy-now-clear');
      setBuyNowData(response.data.buyNow || null);
      localStorage.removeItem('checkout_source');
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to clear Buy Now session';
    } finally {
      loadingBuyNow.value = false;
    }
  }

  return {
    buyNow,
    restoreBuyNow,
    clearBuyNow,
    buyNowProduct,
    loadingBuyNow,
    error,
  };
}