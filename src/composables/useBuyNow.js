import { ref } from 'vue';
import axios from '@/plugins/axios';
import { useRouter } from 'vue-router';

export function useBuyNow() {
  const router = useRouter();
  const loading = ref(false);
  const error = ref(null);
  const buyNowProduct = ref(null);
   const buyNowTotals = ref(null);

  // Send product to backend session for buy now
  async function buyNow(productSlug, quantity = 1) {
    loading.value = true;
    error.value = null;

    try {
      await axios.post('/buy-now', {
        product_slug: productSlug,
        quantity,
      });

        router.push('/checkout')
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to process Buy Now';
    } finally {
      loading.value = false;
    }
  }

  // Fetch the buy now product details from backend session
  async function fetchBuyNowProduct() {
    loading.value = true;
    error.value = null;

    try {
      const { data } = await axios.get('/buy-now-data');
      buyNowProduct.value = data;
    } catch (err) {
      error.value = err.response?.data?.message || 'No Buy Now product found';
      buyNowProduct.value = null;
    } finally {
      loading.value = false;
    }
  }

  // Clear the buy now session (after order or cancel)
  async function clearBuyNow() {
    loading.value = true;
    error.value = null;

    try {
      await axios.post('/buy-now-clear');
      buyNowProduct.value = null;
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to clear Buy Now session';
    } finally {
      loading.value = false;
    }
  }

  // New: Update shipping and tax for Buy Now product
  async function updateShippingTax(country, state, shippingRate) {
    loading.value = true;
    error.value = null;

    try {
      const { data } = await axios.post('/buy-now/update-shipping-tax', {
        country,
        state,
        rate: shippingRate,
      });

      if (data.success) {
        buyNowTotals.value = data.totals;
      } else {
        error.value = data.message || 'Failed to update shipping and tax';
      }
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to update shipping and tax';
    } finally {
      loading.value = false;
    }
  }

  return {
    buyNow,
    updateShippingTax,
    fetchBuyNowProduct,
    clearBuyNow,
    buyNowProduct,
    buyNowTotals,
    loading,
    error,
  };
}