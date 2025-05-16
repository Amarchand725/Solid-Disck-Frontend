<template>
  <div class="bill_to_diff">
    <label for="billToDiffCheckbox" class="ant-checkbox-wrapper css-i6rspj">
      <span class="ant-checkbox ant-wave-target css-i6rspj">
        <input
          v-model="billingForm.same_as_shipping"
          class="ant-checkbox-input"
          type="checkbox"
          id="billToDiffCheckbox"
        />
        <span class="ant-checkbox-inner"></span>
      </span>
      <span class="bill_to_diff_para">Bill to a different address</span>
    </label>
  </div>

  <div
    id="billingForm"
    class="shipping_details_form"
    :style="{ display: billingForm.same_as_shipping ? 'block' : 'none', marginTop: '20px' }"
  >
    <form id="checkoutForm" class="ant-form ant-form-vertical css-i6rspj" @submit.prevent>
      <div class="ant-row shipping_details_row css-i6rspj">
        <div class="ant-col ant-col-xl-24 css-i6rspj">
          <div class="ant-form-item css-i6rspj">
            <div class="ant-row ant-form-item-row css-i6rspj">
              <div class="ant-col ant-form-item-control css-i6rspj">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <input
                      v-model="billingForm.email"
                      placeholder="Email address*"
                      id="checkoutForm_email"
                      aria-required="true"
                      :aria-invalid="errors.email ? 'true' : 'false'"
                      class="ant-input css-i6rspj ant-input-outlined"
                      type="email"
                    />
                    <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- First Name -->
        <div class="ant-col ant-col-xl-8 css-i6rspj">
          <div class="ant-form-item css-i6rspj">
            <input
              v-model="billingForm.first_name"
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
        <div class="ant-col ant-col-xl-8 css-i6rspj">
          <div class="ant-form-item css-i6rspj">
            <input
              v-model="billingForm.last_name"
              placeholder="Last Name*"
              id="checkoutForm_lname"
              aria-required="true"
              class="ant-input css-i6rspj ant-input-outlined"
              type="text"
            />
            <p v-if="errors.last_name" class="error-text">{{ errors.last_name }}</p>
          </div>
        </div>

        <div class="ant-col ant-col-xl-8 css-i6rspj">
          <div class="ant-form-item css-i6rspj">
            <div class="ant-row ant-form-item-row css-i6rspj">
              <div class="ant-col ant-form-item-control css-i6rspj">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <input
                      v-model="billingForm.company"
                      placeholder="Company"
                      id="checkoutForm_company"
                      class="ant-input css-i6rspj ant-input-outlined"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ant-col ant-col-xl-24 css-i6rspj">
          <div class="ant-form-item css-i6rspj">
            <div class="ant-row ant-form-item-row css-i6rspj">
              <div class="ant-col ant-form-item-control css-i6rspj">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <input
                      v-model="billingForm.address"
                      placeholder="Address: Street no. Block, Nearest Landmark*"
                      id="checkoutForm_address"
                      aria-required="true"
                      :aria-invalid="errors.address ? 'true' : 'false'"
                      class="ant-input css-i6rspj ant-input-outlined"
                      type="text"
                    />
                    <p v-if="errors.address" class="error-message">{{ errors.address }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Country -->
        <div class="ant-col ant-col-xl-8 css-i6rspj">
          <div class="ant-form-item css-i6rspj">
            <div class="ant-row ant-form-item-row css-i6rspj">
              <div class="ant-col ant-form-item-control css-i6rspj">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <select
                      v-model="billCountry"
                      @change="handleCountryChange"
                      class="ant-select ant-select-outlined ant-select-in-form-item ant-select-status-success css-i6rspj ant-select-single ant-select-show-arrow ant-select-show-search"
                      aria-required="true"
                      :aria-invalid="errors.billCountry ? 'true' : 'false'"
                    >
                      <option value="">Select Country</option>
                      <option v-for="country in billCountries" :key="country.id" :value="country.id">
                        {{ country.name }}
                      </option>
                    </select>
                    <p v-if="errors.billCountry" class="error-message">{{ errors.billCountry }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- State -->
        <div class="ant-col ant-col-xl-8 css-i6rspj">
          <div class="ant-form-item css-i6rspj">
            <div class="ant-row ant-form-item-row css-i6rspj">
              <div class="ant-col ant-form-item-control css-i6rspj">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <select
                      v-model="billState"
                      @change="handleStateChange"
                      :disabled="!billCountry"
                      class="ant-select ant-select-outlined ant-select-in-form-item css-i6rspj ant-select-single ant-select-show-arrow ant-select-show-search"
                      aria-required="true"
                      :aria-invalid="errors.billState ? 'true' : 'false'"
                    >
                      <option value="">Select State</option>
                      <option v-for="state in billStates" :key="state.id" :value="state.id">
                        {{ state.name }}
                      </option>
                    </select>
                    <p v-if="errors.billState" class="error-message">{{ errors.billState }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- City -->
        <div class="ant-col ant-col-xl-8 css-i6rspj">
          <div class="ant-form-item css-i6rspj">
            <div class="ant-row ant-form-item-row css-i6rspj">
              <div class="ant-col ant-form-item-control css-i6rspj">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <select
                      v-model="billCity"
                      :disabled="!billState"
                      class="ant-select ant-select-outlined ant-select-in-form-item css-i6rspj ant-select-single ant-select-show-arrow ant-select-show-search"
                      aria-required="true"
                      :aria-invalid="errors.billCity ? 'true' : 'false'"
                    >
                      <option value="">Select City</option>
                      <option v-for="city in billCities" :key="city.id" :value="city.id">
                        {{ city.name }}
                      </option>
                    </select>
                    <p v-if="errors.billCity" class="error-message">{{ errors.billCity }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Zip -->
        <div class="ant-col ant-col-xl-8 css-i6rspj">
          <div class="ant-form-item css-i6rspj">
            <div class="ant-row ant-form-item-row css-i6rspj">
              <div class="ant-col ant-form-item-control css-i6rspj">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <input
                      v-model="billingForm.zip"
                      placeholder="Zip Code*"
                      id="checkoutForm_zip_code"
                      aria-required="true"
                      :aria-invalid="errors.zip ? 'true' : 'false'"
                      class="ant-input css-i6rspj ant-input-outlined"
                      type="text"
                    />
                    <p v-if="errors.zip" class="error-message">{{ errors.zip }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Phone -->
        <div class="ant-col ant-col-xl-8 css-i6rspj">
          <div class="ant-form-item css-i6rspj">
            <div class="ant-row ant-form-item-row css-i6rspj">
              <div class="ant-col ant-form-item-control css-i6rspj">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <input
                      v-model="billingForm.phone"
                      placeholder="Phone Number*"
                      id="checkoutForm_phone_number"
                      aria-required="true"
                      :aria-invalid="errors.phone ? 'true' : 'false'"
                      class="ant-input css-i6rspj ant-input-outlined"
                      type="tel"
                    />
                    <p v-if="errors.phone" class="error-message">{{ errors.phone }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, watch } from 'vue'
import { useLocations } from '@/composables/useLocations.js'

const {
  countries: billCountries,
  states: billStates,
  cities: billCities,
  getCountries: getBillCountries,
  getStatesByCountry: getBillStatesByCountry,
  getCitiesByState: getBillCitiesByState,
} = useLocations()

const billCountry = ref('')
const billState = ref('')
const billCity = ref('')

// Sync billCountry, billState, billCity with billingForm for v-model binding consistency
const billingForm = reactive({
  same_as_shipping: false,
  email: '',
  first_name: '',
  last_name: '',
  company: '',
  address: '',
  billCountry: '',
  billState: '',
  billCity: '',
  zip: '',
  phone: '',
})

const errors = reactive({})

watch(billCountry, (val) => {
  billingForm.billCountry = val  // sync here
  billState.value = ''
  billCity.value = ''
  getBillStatesByCountry(val)
})

watch(billState, (val) => {
  billingForm.billState = val
  billCity.value = ''
  getBillCitiesByState(val)
})

watch(billCity, (val) => {
  billingForm.billCity = val
})

onMounted(() => {
  getBillCountries()
})

const props = defineProps({
  formData: Object
})

const emit = defineEmits(['update:formData'])
watch(billingForm, () => {
  emit('update:formData', { ...billingForm }) // important: spread the object
}, { deep: true })
</script>

<style scoped>
.ant-checkbox-input:checked + .ant-checkbox-inner {
  background-color: #1890ff;
  border-color: #1890ff;
}

.ant-checkbox-input:checked + .ant-checkbox-inner::after {
  display: block;
  content: '';
  position: absolute;
  left: 4px;
  top: 0px;
  width: 5px;
  height: 10px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.has-error input,
.has-error select {
  border-color: #ff4d4f;
}

.error-message {
  color: #ff4d4f;
  font-size: 0.875rem;
  margin-top: 4px;
}
</style>
