import { ref } from 'vue'

export const buyNowProduct = ref(null);

export const setBuyNowData = (data) => {
  // Try getting `data.buyNow`, or fallback to `data`
  buyNowProduct.value = data?.buyNow || data || null;
};
