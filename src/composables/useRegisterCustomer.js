import { ref } from 'vue';
import axios from '@/plugins/axios';
import { useToast } from 'vue-toastification';

export function useRegisterCustomer() {
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const password_confirmation = ref('');
  const loading = ref(false);
  const message = ref('');
  const toast = useToast();

  const register = async () => {
    loading.value = true;
    try {
      const response = await axios.post('/customer/register', {
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: password_confirmation.value,
      });

      toast.success(response.data.message || 'Registered successfully!');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Registration failed.';
      message.value = errorMessage;
      toast.error(errorMessage);
    } finally {
      loading.value = false;
    }
  };

  return {
    name,
    email,
    password,
    password_confirmation,
    loading,
    message,
    register,
  };
}
