<template>
    <div class="bill_to_diff">
        <label for="billToDiffCheckbox" class="ant-checkbox-wrapper css-i6rspj">
            <span class="ant-checkbox ant-wave-target css-i6rspj">
                <input class="ant-checkbox-input" type="checkbox" id="billToDiffCheckbox">
                <span class="ant-checkbox-inner"></span>
            </span>
            <span class="bill_to_diff_para">Bill to a different address</span>
        </label>
    </div>
    <div id="billingForm" class="shipping_details_form" style="display: none; margin-top: 20px;">
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
                                        <select v-model="billCountry" @change="handleCountryChange" class="ant-select ant-select-outlined ant-select-in-form-item ant-select-status-success css-i6rspj ant-select-single ant-select-show-arrow ant-select-show-search">
                                            <option value="">Select Country</option>
                                            <option v-for="country in billCountries" :key="country.id" :value="country.id">
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
                                        <select v-model="billState" @change="handleStateChange" :disabled="!billCountry" class="ant-select ant-select-outlined ant-select-in-form-item css-i6rspj ant-select-single ant-select-show-arrow ant-select-show-search">
                                            <option value="">Select State</option>
                                            <option v-for="state in billStates" :key="state.id" :value="state.id">
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
                                        <select v-model="billCity" :disabled="!billState" class="ant-select ant-select-outlined ant-select-in-form-item css-i6rspj ant-select-single ant-select-show-arrow ant-select-show-search">
                                            <option value="">Select City</option>
                                            <option v-for="city in billCities" :key="city.id" :value="city.id">
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
                                        <input placeholder="Zip Code*" id="checkoutForm_zip_code" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
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
    import { ref, onMounted } from 'vue';
    import { useLocations } from '@/composables/useLocations.js'

    const {
        countries: billCountries,  
        states: billStates,        
        cities: billCities,        
        loading: billLoading,      
        error: billError,          
        getCountries: getBillCountries,  
        getStatesByCountry: getBillStatesByCountry, 
        getCitiesByState: getBillCitiesByState  
    } = useLocations()

    const billCountry = ref('')
    const billState = ref('')
    const billCity = ref('')

    // When country changes, reset state and city
    const handleCountryChange = async () => {
        billState.value = ''
        billCity.value = ''
        await getBillStatesByCountry(billCountry.value) 
    }

    // When state changes, reset city
    const handleStateChange = async () => {
        billCity.value = ''
        await getBillCitiesByState(billState.value) 
    }

    // On component mount, load countries
    onMounted(() => {
        getBillCountries() 
    })

</script>
<style>
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
</style>