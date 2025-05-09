<template>
    <div class="form_bulk_main">
      <h4>Looking for a Bulk Quantity of {{ productDetails?.mpn }}?</h4>
      <p class="top_para">
        Request a Quote below and one of our sales representatives will get in touch with you very soon.
      </p>
  
      <form @submit.prevent="handleSubmit">
        <input type="hidden" v-model="mpn" name="mpn" />
        <div class="ant-row input_row css-i6rspj">
            <div class="ant-col ant-col-xs-12 css-i6rspj">
                <input v-model="first_name" placeholder="First Name" class="ant-input css-i6rspj ant-input-outlined form_bulk_input_field" type="text" value="" name="first_name">
                <p class="error_messages">{{ errors.first_name }}</p>
            </div>
            <div class="ant-col ant-col-xs-12 css-i6rspj">
                <input v-model="last_name" placeholder="Last Name" class="ant-input css-i6rspj ant-input-outlined form_bulk_input_field" type="text" value="" name="last_name">
                <p class="error_messages">{{ errors.last_name }}</p>
            </div>
        </div>
        <div class="ant-row input_row css-i6rspj">
            <div class="ant-col ant-col-xs-12 css-i6rspj">
                <input v-model="email" placeholder="Email Address" class="ant-input css-i6rspj ant-input-outlined form_bulk_input_field" type="email" value="" name="email">
                <p class="error_messages">{{ errors.email }}</p>
            </div>
            <div class="ant-col ant-col-xs-12 css-i6rspj">
                <input v-model="phone" placeholder="Phone Number" class="ant-input css-i6rspj ant-input-outlined form_bulk_input_field" type="tel" value="" name="phone">
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
                <input v-model="how_soon_need" placeholder="How Soon Do You need it?" class="ant-input css-i6rspj ant-input-outlined form_bulk_input_field" type="text" value="" name="how_soon_need">
                <p class="error_messages">{{ errors.how_soon_need }}</p>
            </div>
        </div>
  
        <!-- Submit Button -->
        <button type="submit" class="ant-btn">
          <span v-if="!loading">Submit</span>
          <span v-else>Submitting...</span>
        </button>
  
        <p class="bottom_para">Quotes processed weekdays 6:00 am - 6:00 pm (PST)...</p>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue';  // Import computed from 'vue'
  import { useQuoteRequest } from '@/composables/useQuoteForm.js'
  
  const props = defineProps({
    productDetails: Object
  })

  // const product_mpn = ref(props.productDetails?.mpn ?? '');
  const mpn = ref('');

  watch(
    () => props.productDetails?.mpn,
    (newMpn) => {
      mpn.value = newMpn ?? ''; // Set to empty string if mpn is null or undefined
    },
    { immediate: true }
  )

  const { first_name, last_name, email, phone, quantity, how_soon_need, errors, loading, quote_request } = useQuoteRequest()
  
  const handleSubmit = async () => {
    console.log("Submitting with mpn:", mpn.value); 
    const formData = {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      phone: phone.value,
      quantity: quantity.value,
      how_soon_need: how_soon_need.value,
      mpn: mpn.value  // Add mpn to the form data
    };

    // Call the quote_request function with the form data
    await quote_request(formData);
  };
  </script>
  