<template>
  <div class="reset-password">
    <h2>Reset Your Password</h2>
    <form @submit.prevent="submitReset">
      <input type="password" v-model="password" placeholder="New password" required />
      <input type="password" v-model="password_confirmation" placeholder="Confirm password" required />
      <button type="submit">Reset Password</button>

      <p v-if="message" class="success">{{ message }}</p>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import useResetPassword from '@/composables/useResetPassword.js'

const route = useRoute()
const email = ref('')
const token = ref('')

onMounted(() => {
  email.value = route.query.email
  token.value = route.query.token
})

const {
  password,
  password_confirmation,
  message,
  error,
  resetPassword
} = useResetPassword()

const submitReset = () => {
  resetPassword({ email: email.value, token: token.value })
}
</script>

<style scoped>
.success { color: green; }
.error { color: red; }
</style>
