import { ref } from 'vue'
import axios from '@/plugins/axios';

export default function useResetPassword() {
  const password = ref('')
  const password_confirmation = ref('')
  const message = ref('')
  const error = ref('')

  const resetPassword = async ({ email, token }) => {
    try {
      const response = await axios.post('/reset-password', {
        email,
        token,
        password: password.value,
        password_confirmation: password_confirmation.value,
      })
      message.value = response.data.message || 'Password reset successful.'
    } catch (err) {
      error.value = err.response?.data?.message || 'Password reset failed.'
    }
  }

  return {
    password,
    password_confirmation,
    message,
    error,
    resetPassword,
  }
}