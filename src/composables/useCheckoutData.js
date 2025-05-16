// composables/useCheckoutData.js
import { reactive } from 'vue'

// Shared reactive form data
const shippingForm = reactive({
  email: '',
  first_name: '',
  last_name: '',
  address: '',
  shippingCountry: '',
  shippingState: '',
  shippingCity: '',
  phone: '',
  zip: '',
})

const billingForm = reactive({
  email: '',
  first_name: '',
  last_name: '',
  address: '',
  shippingCountry: '',
  shippingState: '',
  shippingCity: '',
  phone: '',
  zip: '',
})

// Shared errors
const errors = reactive({
  shipping: {},
  billing: {},
})

// Common validation logic
function validateForm(form, errorTarget) {
  let isValid = true
  const localErrors = {}

  if (!form.email) {
    localErrors.email = 'Email is required.'
    isValid = false
  }
  if (!form.first_name) {
    localErrors.first_name = 'First name is required.'
    isValid = false
  }
  if (!form.last_name) {
    localErrors.last_name = 'Last name is required.'
    isValid = false
  }
  if (!form.address) {
    localErrors.address = 'Full address is required.'
    isValid = false
  }
  if (!form.shippingCountry) {
    localErrors.shippingCountry = 'Country is required.'
    isValid = false
  }
  if (!form.shippingState) {
    localErrors.shippingState = 'State is required.'
    isValid = false
  }
  if (!form.shippingCity) {
    localErrors.shippingCity = 'City is required.'
    isValid = false
  }

  // Save errors to the correct section (shipping or billing)
  errors[errorTarget] = localErrors

  return isValid
}

function validateShippingForm() {
  return validateForm(shippingForm, 'shipping')
}

function validateBillingForm() {
  return validateForm(billingForm, 'billing')
}

// Optional: clone current form values
function getShippingForm() {
  return { ...shippingForm }
}

function getBillingForm() {
  return { ...billingForm }
}

export const useCheckoutData = () => {
  return {
    shippingForm,
    billingForm,
    errors,
    validateShippingForm,
    validateBillingForm,
    getShippingForm,
    getBillingForm,
  }
}