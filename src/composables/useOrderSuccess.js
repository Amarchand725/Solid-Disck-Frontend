import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from '@/plugins/axios';

export default function useOrderSuccess() {
  const route = useRoute();
  const orderNumber = route.params.order_number;

  const order = ref(null);
  const loading = ref(true);
  const error = ref(null);

  const fetchOrder = async () => {
    try {
      const response = await axios.get('/orders/order-success-info', {
        params: { order_number: orderNumber }
      });
      order.value = response.data;
    } catch (err) {
      error.value = 'Could not load order information.';
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchOrder);

  return {
    order,
    loading,
    error
  };
}
