<template>
    <div class="shipping_details_form">
        <form id="checkoutForm" class="ant-form ant-form-vertical css-i6rspj">
            <div class="ant-row shipping_details_row css-i6rspj">
                <div class="ant-col ant-col-xl-24 css-i6rspj">
                    <div class="ant-form-item css-i6rspj">
                        <div class="ant-row ant-form-item-row css-i6rspj">
                            <div class="ant-col ant-form-item-control css-i6rspj">
                                <div class="ant-form-item-control-input">
                                    <div class="ant-form-item-control-input-content">
                                        <input placeholder="Email address*" id="checkoutForm_email" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ant-col ant-col-xl-8 css-i6rspj">
                    <div class="ant-form-item css-i6rspj">
                        <div class="ant-row ant-form-item-row css-i6rspj">
                            <div class="ant-col ant-form-item-control css-i6rspj">
                                <div class="ant-form-item-control-input">
                                    <div class="ant-form-item-control-input-content">
                                        <input placeholder="First Name*" id="checkoutForm_fname" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ant-col ant-col-xl-8 css-i6rspj">
                    <div class="ant-form-item css-i6rspj">
                        <div class="ant-row ant-form-item-row css-i6rspj">
                            <div class="ant-col ant-form-item-control css-i6rspj">
                                <div class="ant-form-item-control-input">
                                    <div class="ant-form-item-control-input-content">
                                        <input placeholder="Last Name*" id="checkoutForm_lname" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ant-col ant-col-xl-8 css-i6rspj">
                    <div class="ant-form-item css-i6rspj">
                        <div class="ant-row ant-form-item-row css-i6rspj">
                            <div class="ant-col ant-form-item-control css-i6rspj">
                                <div class="ant-form-item-control-input">
                                    <div class="ant-form-item-control-input-content">
                                        <input placeholder="Company" id="checkoutForm_company" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
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
                                        <input placeholder="Address: Street no. Block, Nearest Landmark*" id="checkoutForm_address" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ant-col ant-col-xl-8 css-i6rspj">
                    <div class="ant-form-item css-i6rspj ant-form-item-has-success">
                        <div class="ant-row ant-form-item-row css-i6rspj">
                            <div class="ant-col ant-form-item-control css-i6rspj">
                                <div class="ant-form-item-control-input">
                                    <div class="ant-form-item-control-input-content">
                                        <!-- v-model="shippingCountry" -->
                                        <select v-model="shippingCountry" @change="handleShippingCountryChange" class="ant-select ant-select-outlined ant-select-in-form-item ant-select-status-success css-i6rspj ant-select-single ant-select-show-arrow ant-select-show-search">
                                            <option value="">Select Country</option>
                                            <option v-for="country in shippingCountries" :key="country.id" :value="country.id">
                                                {{ country.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ant-col ant-col-xl-8 css-i6rspj">
                    <div class="ant-form-item css-i6rspj">
                        <div class="ant-row ant-form-item-row css-i6rspj">
                            <div class="ant-col ant-form-item-control css-i6rspj">
                                <div class="ant-form-item-control-input">
                                    <div class="ant-form-item-control-input-content">
                                        <select v-model="shippingState" @change="handleShippingStateChange" :disabled="!shippingCountry" class="ant-select ant-select-outlined ant-select-in-form-item css-i6rspj ant-select-single ant-select-show-arrow ant-select-show-search">
                                            <option value="">Select State</option>
                                            <option v-for="state in shippingStates" :key="state.id" :value="state.id">
                                                {{ state.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ant-col ant-col-xl-8 css-i6rspj">
                    <div class="ant-form-item css-i6rspj">
                        <div class="ant-row ant-form-item-row css-i6rspj">
                            <div class="ant-col ant-form-item-control css-i6rspj">
                                <div class="ant-form-item-control-input">
                                    <div class="ant-form-item-control-input-content">
                                        <select v-model="shippingCity" :disabled="!shippingState" class="ant-select ant-select-outlined ant-select-in-form-item css-i6rspj ant-select-single ant-select-show-arrow ant-select-show-search">
                                            <option value="">Select City</option>
                                            <option v-for="city in shippingCities" :key="city.id" :value="city.id">
                                                {{ city.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ant-col ant-col-xl-8 css-i6rspj">
                    <div class="ant-form-item css-i6rspj">
                        <div class="ant-row ant-form-item-row css-i6rspj">
                            <div class="ant-col ant-form-item-control css-i6rspj">
                                <div class="ant-form-item-control-input">
                                    <div class="ant-form-item-control-input-content">
                                        <input :value="zip" @input="handleZipChange" placeholder="Zip Code*" id="checkoutForm_zip_code" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ant-col ant-col-xl-8 css-i6rspj">
                    <div class="ant-form-item css-i6rspj">
                        <div class="ant-row ant-form-item-row css-i6rspj">
                            <div class="ant-col ant-form-item-control css-i6rspj">
                                <div class="ant-form-item-control-input">
                                    <div class="ant-form-item-control-input-content">
                                        <input placeholder="Phone Number*" id="checkoutForm_phone_number" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="ant-col ant-col-xl-8 css-i6rspj">
                    <div class="city_manually">
                        <p class="manually_text">Town / City* (Add Manually)</p>
                            <label class="ant-checkbox-wrapper css-i6rspj"><span class="ant-checkbox ant-wave-target css-i6rspj"><input class="ant-checkbox-input" type="checkbox"><span class="ant-checkbox-inner"></span></span>
                        </label>
                    </div>
                </div> -->
            </div>
        </form>
    </div>
</template>
<script setup>
    import { ref, onMounted, defineProps, defineEmits, watch } from 'vue';
    import { useLocations } from '@/composables/useLocations.js'

    const {
        countries: shippingCountries, 
        states: shippingStates,       
        cities: shippingCities,       
        loading: shippingLoading,     
        error: shippingError,         
        getCountries: getShippingCountries, 
        getStatesByCountry: getShippingStatesByCountry, 
        getCitiesByState: getShippingCitiesByState  
    } = useLocations() 

    const shippingCountry = ref('')
    const shippingState = ref('')
    const shippingCity = ref('')

    const handleShippingCountryChange = async (event) => {
        const selectedCountry = event.target.value
        emit('update:country', selectedCountry) 
        
        // shippingState.value = ''
        // shippingCity.value = ''
        // await getShippingStatesByCountry(shippingCountry.value)  

        watch(shippingCountry, async (newVal) => {
            if (newVal) {
                shippingState.value = ''
                shippingCity.value = ''
                await getShippingStatesByCountry(newVal)
                emit('update:country', newVal)
            }
        })
    }

    const handleShippingStateChange = async () => {
        shippingCity.value = ''
        await getShippingCitiesByState(shippingState.value)  
    }

    onMounted(() => {
        getShippingCountries() 
    })

    // Define the props to receive country and zip values
    const props = defineProps({
        country: Number,
        zip: String,
    })

    // Define the emits to update country and zip values in the parent
    const emit = defineEmits(['update:country', 'update:zip'])

    // Handle zip code change and emit it to the parent
    const handleZipChange = (event) => {
        emit('update:zip', event.target.value) // Emit updated zip to parent
    }
</script>