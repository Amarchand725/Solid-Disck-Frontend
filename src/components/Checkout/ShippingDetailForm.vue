<template>
  <div class="shipping_details_form">
    <form id="checkoutForm" class="ant-form ant-form-vertical css-i6rspj" @submit.prevent>
      <div class="ant-row shipping_details_row css-i6rspj">

        <!-- Country Select -->
        <div class="ant-col ant-col-xl-12 css-i6rspj">
          <div class="ant-form-item css-i6rspj ant-form-item-has-success">
            <!-- <select
              v-model="shippingCountry"
              @change="handleShippingCountryChange"
              class="ant-select ant-select-outlined ant-select-in-form-item ant-select-status-success css-i6rspj ant-select-single ant-select-show-arrow ant-select-show-search"
            >
              <option value=""> Select Country</option>
              <option v-for="country in shippingCountries" :key="country.id" :value="country.id">
                {{ country.name }}
              </option>
            </select> -->
            <select
                v-model="shippingCountry"
                @change="handleShippingCountryChange"
                style="width: 100%; height: 40px; padding: 0 12px; line-height: 40px;"
                class="custom-select"
              >
                <option value="">Select Country</option>
                <option
                  v-for="country in shippingCountries"
                  :key="country.id"
                  :value="country.id"
                  style="padding: 6px 10px;"
                >
                  {{ country.name }}
                </option>
            </select>

            <p v-if="errors.shippingCountry" class="error-text">{{ errors.shippingCountry }}</p>
          </div>
        </div>
        <div class="ant-col ant-col-xl-12 css-i6rspj"></div>
        
        <!-- First Name -->
        <div class="ant-col ant-col-xl-12 css-i6rspj">
          <div class="ant-form-item css-i6rspj">
            <input
              v-model="shippingForm.first_name"
              placeholder="First Name*"
              id="checkoutForm_fname"
              aria-required="true"
              class="ant-input css-i6rspj ant-input-outlined"
              type="text"
            />
            <p v-if="errors.first_name" class="error-text">{{ errors.first_name }}</p>
          </div>
        </div>

        <!-- Last Name -->
        <div class="ant-col ant-col-xl-12 css-i6rspj">
          <div class="ant-form-item css-i6rspj">
            <input
              v-model="shippingForm.last_name"
              placeholder="Last Name*"
              id="checkoutForm_lname"
              aria-required="true"
              class="ant-input css-i6rspj ant-input-outlined"
              type="text"
            />
            <p v-if="errors.last_name" class="error-text">{{ errors.last_name }}</p>
          </div>
        </div>

        <!-- Address -->
        <div class="ant-col ant-col-xl-12 css-i6rspj">
          <div class="ant-form-item css-i6rspj">
            <input
              v-model="shippingForm.address"
              placeholder="Street address*"
              id="checkoutForm_address"
              aria-required="true"
              class="ant-input css-i6rspj ant-input-outlined"
              type="text"
            />
            <p v-if="errors.address" class="error-text">{{ errors.address }}</p>
          </div>
        </div>  

        <!-- Optional Address2 -->
        <div class="ant-col ant-col-xl-12 css-i6rspj">
          <div class="ant-form-item css-i6rspj">
            <input
              v-model="shippingForm.address_line_2"
              placeholder="Street Address 2 (optional)"
              id="checkoutForm_company"
              class="ant-input css-i6rspj ant-input-outlined"
              type="text"
            />
          </div>
        </div>

        <!-- State Select -->
        <div class="ant-col ant-col-xl-12 css-i6rspj">
          <div class="ant-form-item css-i6rspj">
            <!-- <select
              v-model="shippingState"
              @change="handleShippingStateChange"
              :disabled="!shippingCountry"
              class="ant-select ant-select-outlined ant-select-in-form-item css-i6rspj ant-select-single ant-select-show-arrow ant-select-show-search"
            >
              <option value="">Select State</option>
              <option v-for="state in shippingStates" :key="state.id" :value="state.id">
                {{ state.name }}
              </option>
            </select> -->
            <select
                v-model="shippingState"
                @change="handleShippingStateChange"
                :disabled="!shippingCountry"
                style="width: 100%; height: 40px; padding: 0 12px; line-height: 40px;"
                class="custom-select"
              >
                <option value="">Select State</option>
                <option
                  v-for="state in shippingStates" :key="state.id" :value="state.id"
                  style="padding: 6px 10px;"
                >
                  {{ state.name }}
                </option>
            </select>
            <p v-if="errors.shippingState" class="error-text">{{ errors.shippingState }}</p>
          </div>
        </div>

        <!-- City Select -->
        <div class="ant-col ant-col-xl-12 css-i6rspj">
          <div class="ant-form-item css-i6rspj">
            <!-- <select
              v-model="shippingCity"
              :disabled="!shippingState"
              class="ant-select ant-select-outlined ant-select-in-form-item css-i6rspj ant-select-single ant-select-show-arrow ant-select-show-search"
            >
              <option value="">Select City</option>
              <option v-for="city in shippingCities" :key="city.id" :value="city.id">
                {{ city.name }}
              </option>
            </select> -->
            <select
                v-model="shippingCity"
                :disabled="!shippingState"
                style="width: 100%; height: 40px; padding: 0 12px; line-height: 40px;"
                class="custom-select"
              >
                <option value="">Select State</option>
                <option
                  v-for="city in shippingCities" :key="city.id" :value="city.id"
                  style="padding: 6px 10px;"
                >
                  {{ city.name }}
                </option>
            </select>
            <p v-if="errors.shippingCity" class="error-text">{{ errors.shippingCity }}</p>
          </div>
        </div>

        <!-- Zip Code -->
        <div class="ant-col ant-col-xl-8 css-i6rspj">
          <div class="ant-form-item css-i6rspj">
            <input
              v-model="shippingForm.zip"
              @input="handleZipChange"
              placeholder="Zip Code*"
              id="checkoutForm_zip_code"
              aria-required="true"
              class="ant-input css-i6rspj ant-input-outlined"
              type="text"
            />
          </div>
        </div>

        <!-- Email -->
        <div class="ant-col ant-col-xl-8 css-i6rspj">
          <div class="ant-form-item css-i6rspj">
            <input
              v-model="shippingForm.email"
              placeholder="Email address*"
              id="checkoutForm_email"
              aria-required="true"
              class="ant-input css-i6rspj ant-input-outlined"
              type="text"
            />
            <p v-if="errors.email" class="error-text">{{ errors.email }}</p>
          </div>
        </div>

        <!-- Phone Number -->
        <div class="ant-col ant-col-xl-8 css-i6rspj">
          <div class="ant-form-item css-i6rspj">
            <input
              v-model="shippingForm.phone"
              placeholder="Phone Number*"
              id="checkoutForm_phone_number"
              aria-required="true"
              class="ant-input css-i6rspj ant-input-outlined"
              type="text"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { reactive, ref, watch, onMounted, defineProps, defineEmits } from 'vue'
import { useLocations } from '@/composables/useLocations.js'

const {
  countries: shippingCountries,
  states: shippingStates,
  cities: shippingCities,
  getCountries: getShippingCountries,
  getStatesByCountry: getShippingStatesByCountry,
  getCitiesByState: getShippingCitiesByState
} = useLocations()

const shippingCountry = ref('')
const shippingState = ref('')
const shippingCity = ref('')

// Sync refs into shippingForm reactive for validation
const shippingForm = reactive({
  email: '',
  first_name: '',
  last_name: '',
  address: '',
  shippingCountry: '',
  shippingState: '',
  shippingCity: '',
  zip: '',
  phone: ''
})

const errors = reactive({})

watch(shippingCountry, async (val) => {
  shippingForm.shippingCountry = val
  if (val) {
    shippingState.value = ''
    shippingCity.value = ''
    shippingForm.shippingState = ''
    shippingForm.shippingCity = ''
    await getShippingStatesByCountry(val)
    emit('update:country', val)
  }
})

watch(shippingState, async (val) => {
  shippingForm.shippingState = val
  if (val) {
    shippingCity.value = ''
    shippingForm.shippingCity = ''
    await getShippingCitiesByState(val)

    // Emit state for external logic (e.g., parent or composable)
    emit('update:state', val)
  }
})

watch(shippingCity, (val) => {
  shippingForm.shippingCity = val
})

const handleShippingCountryChange = (event) => {
  shippingCountry.value = event.target.value
}

const handleShippingStateChange = (event) => {
  shippingState.value = event.target.value
}

onMounted(async () => {
  await getShippingCountries()
  // Access the array inside the ref using .value
  const us = shippingCountries.value.find((c) => c.name === 'United States')
  if (us) {
    shippingCountry.value = us.id
  }
})

// Define props & emits to sync with parent (if needed)
const props = defineProps({
  country: [Number, String],
  zip: String,
  formData: Object,
})

const emit = defineEmits(['update:country', 'update:zip', 'update:formData', 'update:state'])

const handleZipChange = (event) => {
  shippingForm.zip = event.target.value
  emit('update:zip', event.target.value)
}

watch(shippingForm, () => { 
  emit('update:formData', { ...shippingForm }) // important: spread the object
}, { deep: true })
</script>

<style scoped>
.error-text {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.25rem;
}
</style>
