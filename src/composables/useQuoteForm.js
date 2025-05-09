import { ref, reactive } from 'vue';
import axios from '@/plugins/axios';
import { useToast } from 'vue-toastification';

export function useQuoteRequest() {
  const mpn = ref('');
  const first_name = ref('');
  const last_name = ref('');
  const email = ref('');
  const phone = ref('');
  const quantity = ref('');
  const how_soon_need = ref('');
  const loading = ref(false);
  const message = ref('');
  const toast = useToast();

  // ✅ Use reactive instead of ref
  const errors = reactive({
    mpn: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    quantity: '',
    how_soon_need: '',
  });

  const validate = () => {
    let isValid = true;

    // ✅ Clear each field manually to retain reactivity
    for (const key in errors) {
      errors[key] = '';
    }

    if (!first_name.value.trim()) {
      errors.first_name = 'First name is required.';
      isValid = false;
    }

    if (!email.value.trim()) {
      errors.email = 'Email is required.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      errors.email = 'Invalid email address.';
      isValid = false;
    }

    if (!phone.value.trim()) {
      errors.phone = 'Phone number is required.';
      isValid = false;
    } 
    // else if (!/^[0-9\-+\s()]{7,15}$/.test(phone.value)) {
    //   errors.phone = 'Invalid phone number.';
    //   isValid = false;
    // }

    if (!quantity.value || parseInt(quantity.value) <= 0) {
      errors.quantity = 'Quantity must be a positive number.';
      isValid = false;
    }

    return isValid;
  };

  const quote_request = async (formData) => {
    if (!validate()) return;

    loading.value = true;
    try {
      const response = await axios.post('/quote_requests/store', {
        mpn: formData.mpn,
        first_name: formData.first_name.value,
        last_name: formData.last_name.value,
        email: formData.email.value,
        phone: formData.phone.value,
        quantity: formData.quantity.value,
        how_soon_need: formData.how_soon_need.value,
      });

      message.value = response.data.message || 'Sent quote request successfully!';
      toast.success(message.value);

      // ✅ Reset fields
      formData.first_name.value = '';
      formData.last_name.value = '';
      formData.email.value = '';
      formData.phone.value = '';
      formData.quantity.value = '';
      formData.how_soon_need.value = '';

      // ✅ Clear errors after success
      for (const key in errors) {
        errors[key] = '';
      }

    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Request failed.';
      message.value = errorMessage;
      toast.error(errorMessage);
    } finally {
      loading.value = false;
    }
  };


  return {
    mpn,
    first_name,
    last_name,
    email,
    phone,
    quantity,
    how_soon_need,
    loading,
    message,
    errors,
    quote_request,
    validate,
  };
}