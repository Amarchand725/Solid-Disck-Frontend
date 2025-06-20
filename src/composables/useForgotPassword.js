import { ref } from 'vue'
import axios from '@/plugins/axios';

export default function useForgotPassword() {
  const email = ref('')
  const message = ref('')
  const error = ref('')

  const sendResetEmail = async () => {
    message.value = ''
    error.value = ''
    try {
      const res = await axios.post('/forgot-password', { email: email.value })
      message.value = res.data.message || 'Reset link sent to your email.'
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to send reset link.'
    }
  }

  return {
    email,
    message,
    error,
    sendResetEmail,
  }
}