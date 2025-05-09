import { ref } from 'vue';
import axios from '@/plugins/axios';
import { useToast } from 'vue-toastification';

export function useQuoteRequest() {
  const first_name = ref('');
  const last_name = ref('');
  const email = ref('');
  const phone = ref('');
  const quantity = ref('');
  const how_soon = ref('');
  const loading = ref(false);
  const message = ref('');
  const toast = useToast();

  const errors = ref({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    quantity: '',
    how_soon: '',
  });

  const validate = () => {
    let isValid = true;
    errors.value = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      quantity: '',
      how_soon: '',
    };

    if (!first_name.value.trim()) {
      errors.value.first_name = 'First name is required.';
      isValid = false;
    }

    if (!last_name.value.trim()) {
      errors.value.last_name = 'Last name is required.';
      isValid = false;
    }

    if (!email.value.trim()) {
      errors.value.email = 'Email is required.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      errors.value.email = 'Invalid email address.';
      isValid = false;
    }

    if (!phone.value.trim()) {
      errors.value.phone = 'Phone number is required.';
      isValid = false;
    } else if (!/^[0-9\-+\s()]{7,15}$/.test(phone.value)) {
      errors.value.phone = 'Invalid phone number.';
      isValid = false;
    }

    if (!quantity.value || parseInt(quantity.value) <= 0) {
      errors.value.quantity = 'Quantity must be a positive number.';
      isValid = false;
    }

    if (!how_soon.value.trim()) {
      errors.value.how_soon = 'This field is required.';
      isValid = false;
    }

    return isValid;
  };

  const quote_request = async () => {
    if (!validate()) return;

    loading.value = true;
    try {
      const response = await axios.post('/quote_requests/store', {
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        phone: phone.value,
        quantity: quantity.value,
        how_soon: how_soon.value,
      });

      toast.success(response.data.message || 'Sent quote request successfully!');

      // Reset fields on success
      first_name.value = '';
      last_name.value = '';
      email.value = '';
      phone.value = '';
      quantity.value = '';
      how_soon.value = '';
      errors.value = {};
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Request failed.';
      message.value = errorMessage;
      toast.error(errorMessage);
    } finally {
      loading.value = false;
    }
  };

  return {
    first_name,
    last_name,
    email,
    phone,
    quantity,
    how_soon,
    loading,
    message,
    errors,
    quote_request,
    validate, // Return the validate function for external usage
  };
}



// import { ref } from 'vue';
// import axios from '@/plugins/axios';
// import { useToast } from 'vue-toastification';

// export function useQuoteRequest() {
//   const first_name = ref('');
//   const last_name = ref('');
//   const email = ref('');
//   const phone = ref('');
//   const quantity = ref('');
//   const how_soon = ref('');
//   const loading = ref(false);
//   const message = ref('');
//   const toast = useToast();

//   const errors = ref({
//     first_name: '',
//     last_name: '',
//     email: '',
//     phone: '',
//     quantity: '',
//     how_soon: '',
//   });

//   const validate = () => {
//     let isValid = true;
//     errors.value = {
//       first_name: '',
//       last_name: '',
//       email: '',
//       phone: '',
//       quantity: '',
//       how_soon: '',
//     };

//     if (!first_name.value.trim()) {
//       errors.value.first_name = 'First name is required.';
//       isValid = false;
//     }

//     if (!last_name.value.trim()) {
//       errors.value.last_name = 'Last name is required.';
//       isValid = false;
//     }

//     if (!email.value.trim()) {
//       errors.value.email = 'Email is required.';
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
//       errors.value.email = 'Invalid email address.';
//       isValid = false;
//     }

//     if (!phone.value.trim()) {
//       errors.value.phone = 'Phone number is required.';
//       isValid = false;
//     } else if (!/^[0-9\-+\s()]{7,15}$/.test(phone.value)) {
//       errors.value.phone = 'Invalid phone number.';
//       isValid = false;
//     }

//     if (!quantity.value || parseInt(quantity.value) <= 0) {
//       errors.value.quantity = 'Quantity must be a positive number.';
//       isValid = false;
//     }

//     // Optional validation for how_soon
//     if (!how_soon.value.trim()) {
//       errors.value.how_soon = 'This field is required.';
//       isValid = false;
//     }

//     return isValid;
//   };

//   const quote_request = async () => {
//     if (!validate()) return;

//     loading.value = true;
//     try {
//       const response = await axios.post('/quote_requests/store', {
//         first_name: first_name.value,
//         last_name: last_name.value,
//         email: email.value,
//         phone: phone.value,
//         quantity: quantity.value,
//         how_soon: how_soon.value,
//       });

//       toast.success(response.data.message || 'Sent quote request successfully!');

//       // Reset fields on success
//       first_name.value = '';
//       last_name.value = '';
//       email.value = '';
//       phone.value = '';
//       quantity.value = '';
//       how_soon.value = '';
//       errors.value = {};
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || 'Request failed.';
//       message.value = errorMessage;
//       toast.error(errorMessage);
//     } finally {
//       loading.value = false;
//     }
//   };

//   return {
//     first_name,
//     last_name,
//     email,
//     phone,
//     quantity,
//     how_soon,
//     loading,
//     message,
//     errors,
//     quote_request,
//   };
// }