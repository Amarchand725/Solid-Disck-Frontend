import { ref, reactive } from 'vue';
import axios from '@/plugins/axios';
import { useToast } from 'vue-toastification';

export function useGetInTouch() {
  const full_name = ref('');
  const email = ref('');
  const subject = ref('');
  const message = ref('');
  const loading = ref(false);
  const toast = useToast();

  // ✅ Use reactive instead of ref
  const errors = reactive({
    full_name: '',
    email: '',
    subject: '',
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

    if (!subject.value.trim()) {
      errors.subject = 'Subject is required.';
      isValid = false;
    } 

    return isValid;
  };

  const contact_messages = async (formData) => {
    if (!validate()) return;

    loading.value = true;
    try {
      const response = await axios.post('/contact_messages/store', {
        name: formData.full_name.value,
        email: formData.email.value,
        subject: formData.subject.value,
        message: formData.message.value,
      });

      message.value = response.data.message || 'You sent message successfully!';
      toast.success(message.value);

      // ✅ Reset fields
      formData.full_name.value = '';
      formData.email.value = '';
      formData.subject.value = '';
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
    full_name,
    email,
    subject,
    message,
    loading,
    errors,
    contact_messages,
    validate,
  };
}