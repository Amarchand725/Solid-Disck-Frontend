import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import axios from '@/plugins/axios';
import { useToast } from 'vue-toastification';
import { useStore } from 'vuex';

export function useCustomer() {
  const first_name = ref('');
  const last_name = ref('');
  const email = ref('');
  const phone = ref('');
  const password = ref('');
  const password_confirmation = ref('');
  const countryId = ref('');
  const i_have_read = ref('');
  const loading = ref(false);
  const toast = useToast();

  const router = useRouter();
  const store = useStore();

  // 🟡 Also used for login
  const login_email = ref('');
  const login_password = ref('');

  const errors = reactive({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
    countryId: '',
    i_have_read: '',
    login_email: '',
    login_password: ''
  });

  const clearErrors = () => {
    for (const key in errors) {
      errors[key] = '';
    }
  };

  const validateRegister = () => {
    let isValid = true;
    clearErrors();

    if (!first_name.value.trim()) {
      errors.first_name = 'First name is required.';
      isValid = false;
    }

    if (!last_name.value.trim()) {
      errors.last_name = 'Last name is required.';
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
      errors.phone = 'Phone is required.';
      isValid = false;
    }

    if (!password.value.trim()) {
      errors.password = 'Password is required.';
      isValid = false;
    }

    if (!password_confirmation.value.trim()) {
      errors.password_confirmation = 'Password confirmation is required.';
      isValid = false;
    }

    if (!countryId.value) {
      errors.countryId = 'Country is required.';
      isValid = false;
    }

    if (!i_have_read.value) {
      errors.i_have_read = 'You must agree to the terms & conditions.';
      isValid = false;
    }

    return isValid;
  };

  const validateLogin = () => {
    let isValid = true;
    clearErrors();

    if (!login_email.value.trim()) {
      errors.login_email = 'Email is required.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(login_email.value)) {
      errors.login_email = 'Invalid email format.';
      isValid = false;
    }

    if (!login_password.value.trim()) {
      errors.login_password = 'Password is required.';
      isValid = false;
    }

    return isValid;
  };

   // Fetch user data after login
  const fetchUserData = async () => {
    const token = localStorage.getItem('auth_token');
    if (token != undefined) {
      try {
        const response = await axios.get('/customer/profile');
        
        if (response.data && response.data) {
          store.commit('setCustomerData', response.data.data);

        } else {
          toast.error('Failed to fetch user data!');
        }
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch user data!');
      }
    }
  };

  const customer_register = async (formData) => {
    if (!validateRegister()) return;
      const message = ref('');
      loading.value = true;
    try {
      const response = await axios.post('/customer/register', {
        first_name: formData.first_name.value,
        last_name: formData.last_name.value,
        email: formData.email.value,
        phone: formData.phone.value,
        password: formData.password.value,
        password_confirmation: formData.password_confirmation.value,
        countryId: formData.countryId.value,
        i_have_read: formData.i_have_read.value,
      });

      if (response.data.data.token) {
        await store.dispatch('login', response.data.data.token); // pass token to store
        await fetchUserData();
        router.push('/my-account');
      }

      toast.success(response.data.message || 'Registered successfully!');

      // Reset fields
      formData.first_name.value = '';
      formData.last_name.value = '';
      formData.email.value = '';
      formData.phone.value = '';
      formData.password.value = '';
      formData.password_confirmation.value = '';
      formData.countryId.value = '';
      formData.i_have_read.value = '';

      clearErrors();
    } catch (error) {
      console.error(error); // Log the full error
      const errorMessage = error.response?.data?.message || 'Registration failed.';
      message.value = errorMessage;
      toast.error(errorMessage);
    } finally {
      loading.value = false;
    }
  };

  const customer_login = async () => {
    if (!validateLogin()) return;

    loading.value = true;
    try {
      const response = await axios.post('/customer/login', {
        email: login_email.value,
        password: login_password.value
      });

      toast.success(response.data.message || 'Login successful!');

      if (response.data.token) {
        await store.dispatch('login', response.data.token); // pass token to store
        await fetchUserData();
        // router.push('/my-account');
        const redirectToCheckout = localStorage.getItem('redirect_to_checkout');

        if (redirectToCheckout === 'true') {
          localStorage.removeItem('redirect_to_checkout');
          router.push({ name: 'Checkout' }); // redirect to checkout page
        } else {
          localStorage.removeItem('redirect_to_checkout');
          localStorage.removeItem('shipping');
          localStorage.removeItem('billing');
          router.push('/my-account'); // default after-login page
        }
      }

      // Optionally clear login fields
      login_email.value = '';
      login_password.value = '';
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error('Invalid email or password.');
      } else {
        const errorMessage = error.response?.data?.message || 'Login failed.';
        toast.error(errorMessage);
      }
    } finally {
      loading.value = false;
    }
  };

  return {
    // Registration fields
    first_name,
    last_name,
    email,
    phone,
    password,
    password_confirmation,
    countryId,
    i_have_read,

    // Login fields
    login_email,
    login_password,

    // Shared
    loading,
    errors,

    // Functions
    customer_register,
    customer_login,
  };
}
