<template>
  <div class="forgot-password">
    <h2>Forgot Password</h2>
    <form @submit.prevent="sendResetEmail">
      <input type="email" v-model="email" placeholder="Enter your email" required />
      <button type="submit">Send Reset Link</button>

      <p v-if="message" class="success">{{ message }}</p>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import useForgotPassword from '@/composables/useForgotPassword.js'

const { email, message, error, sendResetEmail } = useForgotPassword()
</script>

<style scoped>
.success { color: green; }
.error { color: red; }
</style>