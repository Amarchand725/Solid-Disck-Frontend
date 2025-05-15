import { ref, reactive } from 'vue';
import axios from '@/plugins/axios';
import { useToast } from 'vue-toastification';

export function useQuoteRequest() {
  const form_name = ref('full_form');
  const full_name = ref('');
  const company = ref('');
  const mpn = ref('');
  const email = ref('');
  const phone = ref('');
  const how_soon_need = ref('');
  const message = ref('');
  const loading = ref(false);
  const toast = useToast();

  // ✅ Use reactive instead of ref
  const errors = reactive({
    full_name: '',
    company: '',
    mpn: '',
    email: '',
    phone: '',
    how_soon_need: '',
    message: '',
  });

  const validate = () => {
    let isValid = true;

    // ✅ Clear each field manually to retain reactivity
    for (const key in errors) {
      errors[key] = '';
    }

    if (!full_name.value.trim()) {
      errors.full_name = 'Name is required.';
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

    if (!mpn.value || parseInt(mpn.value) <= 0) {
      errors.mpn = 'MPN is required.';
      isValid = false;
    }

    return isValid;
  };

  const quote_request = async (formData) => {
    if (!validate()) return;

    loading.value = true;
    try {
      const response = await axios.post('/quote_requests/store', {
        form: form_name.value,
        full_name: formData.full_name.value,
        company: formData.company.value,
        mpn: formData.mpn.value,
        email: formData.email.value,
        phone: formData.phone.value,
        how_soon_need: formData.how_soon_need.value,
        message: formData.message.value,
      });

      message.value = response.data.message || 'Sent quote request successfully!';
      toast.success(message.value);

      // ✅ Reset fields
      formData.full_name.value = '';
      formData.company.value = '';
      formData.mpn.value = '';
      formData.email.value = '';
      formData.phone.value = '';
      formData.how_soon_need.value = '';
      formData.message.value = '';

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
    form_name,
    full_name,
    company,
    mpn,
    email,
    phone,
    how_soon_need,
    message,
    loading,
    errors,
    quote_request,
    validate,
  };
}