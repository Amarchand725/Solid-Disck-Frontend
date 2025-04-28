import { ref } from 'vue';
import api from '@/plugins/axios';
import { useToast } from 'vue-toastification';

export function useSubscribe() {
  const email = ref('');
  const message = ref('');
  const loading = ref(false);
  const toast = useToast();

  const subscribe = async () => {
    loading.value = true;
    try {
      const response = await api.post('/subscriber/store', { email: email.value });
      message.value = response.data.message || 'Subscribed successfully!';
      toast.success(message.value);
      email.value = '';
      setTimeout(() => (message.value = ''), 3000);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Subscription failed.';
      message.value = errorMessage;
      toast.error(errorMessage);
      setTimeout(() => (message.value = ''), 3000);
    } finally {
      loading.value = false;
    }
  };

  return {
    email,
    message,
    loading,
    subscribe,
  };
}