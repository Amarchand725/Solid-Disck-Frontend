<template>
    <div class="form_bulk_main">
      <h4>Looking for a Bulk Quantity of {{ productDetails?.mpn }}?</h4>
      <p class="top_para">
        Request a Quote below and one of our sales representatives will get in touch with you very soon.
      </p>
  
      <form @submit.prevent="handleSubmit">
        <div class="ant-row input_row css-i6rspj">
            <div class="ant-col ant-col-xs-12 css-i6rspj">
                <input v-model="first_name" placeholder="First Name" class="ant-input css-i6rspj ant-input-outlined form_bulk_input_field" type="text" value="" name="name">
                <p class="error_messages">{{ errors.first_name }}</p>
            </div>
            <div class="ant-col ant-col-xs-12 css-i6rspj">
                <input v-model="last_name" placeholder="Last Name" class="ant-input css-i6rspj ant-input-outlined form_bulk_input_field" type="text" value="" name="lastName">
                <p class="error_messages">{{ errors.last_name }}</p>
            </div>
        </div>
        <div class="ant-row input_row css-i6rspj">
            <div class="ant-col ant-col-xs-12 css-i6rspj">
                <input v-model="email" placeholder="Email Address" class="ant-input css-i6rspj ant-input-outlined form_bulk_input_field" type="email" value="" name="email">
                <p class="error_messages">{{ errors.email }}</p>
            </div>
            <div class="ant-col ant-col-xs-12 css-i6rspj">
                <input v-model="phone" placeholder="Phone Number" class="ant-input css-i6rspj ant-input-outlined form_bulk_input_field" type="tel" value="" name="mobile">
                <p class="error_messages">{{ errors.phone }}</p>
            </div>
        </div>
        <div class="ant-row input_row css-i6rspj">
            <div class="ant-col ant-col-xs-12 css-i6rspj">
                <div class="quantity_input_main">
                    <div class="quantity_input"><span style="color: black;">QTY</span>
                        <input v-model="quantity" placeholder="01" class="ant-input css-i6rspj ant-input-outlined form_bulk_input_field" type="number" value="" name="quantity">
                    </div>
                    <p class="error_messages">{{ errors.quantity }}</p>
                </div>
            </div>
            <div class="ant-col ant-col-xs-12 css-i6rspj">
                <input v-model="how_soon" placeholder="How Soon Do You need it?" class="ant-input css-i6rspj ant-input-outlined form_bulk_input_field" type="text" value="" name="urgency">
                <p class="error_messages">{{ errors.how_soon }}</p>
            </div>
        </div>
  
        <!-- Submit Button -->
        <button type="submit" class="ant-btn" :disabled="loading || !isFormValid">
          <span v-if="!loading">Submit</span>
          <span v-else>Submitting...</span>
        </button>
  
        <p class="bottom_para">Quotes processed weekdays 6:00 am - 6:00 pm (PST)...</p>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';  // Import computed from 'vue'
  import { useQuoteRequest } from '@/composables/useQuoteForm.js'
  
  const { first_name, last_name, email, phone, quantity, how_soon, errors, loading, quote_request, validate } = useQuoteRequest()
  
  // Validate form and handle submission
  const isFormValid = computed(() => !Object.values(errors).some(error => error));
  
  const handleSubmit = async () => {
    if (!validate()) return;
  
    const success = await quote_request();
    if (success) {
      toast.success('Quote request submitted successfully!');
    } else {
      toast.error('Error submitting quote request.');
    }
  }
  </script>
  