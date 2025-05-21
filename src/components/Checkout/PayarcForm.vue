<template>
  <div class="payment_method_main_wrapper px-4 py-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Name on Card -->
      <div class="form-group">
        <label class="block font-medium mb-2">Name on Card</label>
        <input
          v-model="card.name"
          type="text"
          placeholder="John Doe"
          :class="['form-control', errors.name ? 'input-error' : '']"
        />
        <p v-if="errors.name" class="text-red-500 text-sm mt-1 error-message">{{ errors.name }}</p>
      </div>

      <!-- Card Number -->
      <div class="form-group">
        <label class="block font-medium mb-2">Card Number</label>
        <input
          v-model="card.number"
          type="text"
          placeholder="4111 1111 1111 1111"
          :class="['form-control', errors.name ? 'input-error' : '']"
        />
        <p v-if="errors.number" class="text-red-500 text-sm mt-1 error-message">{{ errors.number }}</p>
      </div>

      <!-- Expiry -->
      <div class="form-group">
        <label class="block font-medium mb-2">Expiry Date</label>
        <input
          v-model="card.expiry"
          type="text"
          placeholder="MM/YY"
          :class="['form-control', errors.name ? 'input-error' : '']"
        />
        <p v-if="errors.expiry" class="text-red-500 text-sm mt-1 error-message">{{ errors.expiry }}</p>
      </div>

      <!-- Security Code -->
      <div class="form-group">
        <label class="block font-medium mb-2">Security Code</label>
        <input
          v-model="card.cvv"
          type="text"
          placeholder="123"
          :class="['form-control', errors.name ? 'input-error' : '']"
        />
        <p v-if="errors.cvv" class="text-red-500 text-sm mt-1 error-message">{{ errors.cvv }}</p>
      </div>

      <!-- Zip Code -->
      <div class="form-group md:col-span-2">
        <label class="block font-medium mb-2">Zip Code</label>
        <input
          v-model="card.zip"
          type="text"
          placeholder="12345"
          :class="['form-control', errors.name ? 'input-error' : '']"
        />
        <p v-if="errors.zip" class="text-red-500 text-sm mt-1 error-message">{{ errors.zip }}</p>
      </div>
    </div>

    <!-- Error Message -->
    <div v-if="error" class="mt-4 text-red-600 text-sm">{{ error }}</div>
  </div>
</template>
<script setup>
    import { ref } from 'vue'

    const card = ref({
    number: '',
    expiry: '',
    cvv: '',
    name: '',
    zip: ''
    })

    const errors = ref({
    name: '',
    number: '',
    expiry: '',
    cvv: '',
    zip: ''
    })

    const error = ref('')

    function validateCardForm() {
    errors.value = {
        name: '',
        number: '',
        expiry: '',
        cvv: '',
        zip: ''
    }
    error.value = ''

    const nameRegex = /^[A-Za-z\s]+$/
    const cardNumberRegex = /^\d{16}$/
    const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/
    const cvvRegex = /^\d{3,4}$/
    const zipRegex = /^\d{5}$/

    let isValid = true

    if (!card.value.name || !nameRegex.test(card.value.name)) {
        errors.value.name = 'Enter a valid name on card'
        isValid = false
    }

    const plainNumber = card.value.number.replace(/\s+/g, '')
    if (!plainNumber || !cardNumberRegex.test(plainNumber)) {
        errors.value.number = 'Enter a valid 16-digit card number'
        isValid = false
    }

    if (!card.value.expiry || !expiryRegex.test(card.value.expiry)) {
        errors.value.expiry = 'Enter expiry in MM/YY format'
        isValid = false
    }

    if (!card.value.cvv || !cvvRegex.test(card.value.cvv)) {
        errors.value.cvv = 'Enter a valid 3 or 4 digit CVV'
        isValid = false
    }

    if (!card.value.zip || !zipRegex.test(card.value.zip)) {
        errors.value.zip = 'Enter a valid 5-digit ZIP code'
        isValid = false
    }

    if (!isValid) {
        error.value = 'Please correct the errors above.'
    }

    return isValid
    }

    function getCardData() {
        if (validateCardForm()) {
            return card.value
        } else {
            return null
        }
    }

    defineExpose({
        getCardData
    })
</script>

<!-- <script setup>
    import { ref } from 'vue'

    const card = ref({
        number: '',
        expiry: '',
        cvv: '',
        name: '',
        zip: ''
    })

    function getCardData() {
        return card.value
    }

    defineExpose({
        getCardData
    })
</script> -->

<style scoped>
    .error-message {
        color: red;
        font-size: 14px;
        margin-top: 4px;
    }
    .input-error {
        border: 1px solid red !important;
    }
    .form-group {
    margin-bottom: 20px;
    }

    .form-control {
    width: 100%;
    padding: 10px 14px;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-sizing: border-box;
    transition: border-color 0.2s;
    }

    .form-control:focus {
    border-color: #2563eb;
    outline: none;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
    }
</style>