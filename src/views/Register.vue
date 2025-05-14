<template>
    <div>
        <main>
            <section class="signup_page_main">
                <div class="title_main">
                    <nav class="ant-breadcrumb custom_breadcrumb_comp css-i6rspj">
                        <ol>
                            <li><span class="ant-breadcrumb-link"><a href="index.html">Home</a></span></li>
                            <li class="ant-breadcrumb-separator" aria-hidden="true">&gt;</li>
                            <li><span class="ant-breadcrumb-link"><a href="register.html">Sign up</a></span></li>
                        </ol>
                    </nav>
                    <h1>Sign up</h1>
                </div>
                <div class="signup_main_inner">
                    <div class="signup_form">
                        <h1>Create Your Account</h1>
                        <div class="signup_form_inner">
                            <form @submit.prevent="handleSubmit">
                                <div class="ant-row css-i6rspj">
                                    <div class="ant-col ant-col-sm-24 ant-col-xl-12 css-i6rspj">
                                        <div class="fields_main">
                                            <label class="fields">First Name*</label>
                                            <input v-model="first_name" placeholder="Enter first name" id="customer_firstname" class="ant-input css-i6rspj ant-input-outlined" type="name" value="" name="customer_firstname">
                                            <p class="error_messages">{{ errors.first_name }}</p>
                                        </div>
                                    </div>
                                    <div class="ant-col ant-col-sm-24 ant-col-xl-12 css-i6rspj">
                                        <div class="fields_main">
                                            <label class="fields">Last Name*</label>
                                            <input v-model="last_name" placeholder="Enter last name" id="customer_lastname" class="ant-input css-i6rspj ant-input-outlined" type="name" value="" name="customer_lastname">
                                            <p class="error_messages">{{ errors.last_name }}</p>
                                        </div>
                                    </div>
                                    <div class="ant-col ant-col-sm-24 ant-col-xl-12 css-i6rspj">
                                        <div class="fields_main">
                                            <label class="fields">Phone Number*</label>
                                            <input v-model="phone" placeholder="Enter phone number" id="customer_mobile" class="ant-input css-i6rspj ant-input-outlined" type="tel" value="" name="customer_mobile">
                                            <p class="error_messages">{{ errors.phone }}</p>
                                        </div>
                                    </div>
                                    <div class="ant-col ant-col-sm-24 ant-col-xl-12 css-i6rspj">
                                        <div class="fields_main">
                                            <label class="fields">Email Address*</label>
                                            <input v-model="email" placeholder="Enter email" id="customer_email" class="ant-input css-i6rspj ant-input-outlined" type="email" value="" name="customer_email">
                                            <p class="error_messages">{{ errors.email }}</p>
                                        </div>
                                    </div>
                                    <div class="ant-col ant-col-sm-24 ant-col-xl-12 css-i6rspj">
                                        <div class="fields_main">
                                            <label class="fields">Password*</label>
                                            <div class="pass_main">
                                                <input v-model="password" :type="passwordVisible ? 'text' : 'password'" placeholder="Enter password" id="customer_password" class="ant-input css-i6rspj ant-input-outlined" name="customer_password">
                                                <div class="eye_main" @click="togglePassword" data-target="customer_password"><span role="img" aria-label="eye" class="anticon anticon-eye"><svg viewBox="64 64 896 896" focusable="false" data-icon="eye" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path></svg></span></div>
                                            </div>
                                            <p class="error_messages">{{ errors.password }}</p>
                                        </div>
                                    </div>
                                    <div class="ant-col ant-col-sm-24 ant-col-xl-12 css-i6rspj">
                                        <div class="fields_main">
                                            <label class="fields">Confirm Password*</label>
                                            <div class="pass_main">
                                                <input v-model="password_confirmation" :type="passwordVisible ? 'text' : 'password'" placeholder="Enter confirmed password" id="customer_confirm_password" class="ant-input css-i6rspj ant-input-outlined" name="customer_confirm_password">
                                                <div class="eye_main" @click="togglePassword" data-target="customer_confirm_password"><span role="img" aria-label="eye" class="anticon anticon-eye"><svg viewBox="64 64 896 896" focusable="false" data-icon="eye" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path></svg></span></div>
                                            </div>
                                            <p class="error_messages">{{ errors.password_confirmation }}</p>
                                        </div>
                                    </div>
                                    <div class="ant-col ant-col-sm-24 ant-col-xl-12 css-i6rspj">
                                        <div class="fields_main">
                                            <label class="fields">Country*</label>
                                            <div class="pass_main">
                                                <select v-model="countryId" class="ant-select ant-select-outlined ant-select-in-form-item ant-select-status-success css-i6rspj ant-select-single ant-select-show-arrow ant-select-show-search">
                                                    <option value="">Select Country</option>
                                                    <option v-for="country in countries" :key="country.id" :value="country.id">
                                                        {{ country.name }}
                                                    </option>
                                                </select>
                                            </div>
                                            <p class="error_messages">{{ errors.countryId }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="remeber_pass">
                                    <label class="ant-checkbox-wrapper css-i6rspj">
                                        <span class="ant-checkbox ant-wave-target css-i6rspj">
                                            <input v-model="i_have_read" id="check" class="ant-checkbox-input" type="checkbox">
                                            <span class="ant-checkbox-inner"></span>
                                        </span>
                                    </label>
                                    <label for="check">
                                        I have read and agree to {{ settings?.website_url }}
                                        <router-link to="/policies/terms-and-condition">Terms and Conditions</router-link>
                                    </label>
                                </div>
                                <p class="error_messages" style="margin-left: 35px;">{{ errors.i_have_read }}</p>
                                <button type="submit" class="ant-btn css-i6rspj ant-btn-default ant-btn-color-default ant-btn-variant-outlined sign_in_btn">
                                    <span v-if="!loading">Create Account</span>
                                    <span v-else>Submitting...</span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="sign_up_sec">
                        <h2>Already have an account?</h2>
                        <router-link to="/login">Sign In</router-link>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
<script setup>
    import { ref } from 'vue';
    import { onMounted } from 'vue';
    import { useCustomer } from '@/composables/useCustomer.js'
    import { useLocations } from '@/composables/useLocations.js'
    import { useSettings } from '@/composables/useSettings.js'
    const { settings } = useSettings()
    const passwordVisible = ref(false);

    const { getCountries, countries } = useLocations();

    onMounted(() => {
        getCountries();
    });

    const {
        first_name, last_name, phone, email, password, password_confirmation, countryId, i_have_read,
        loading, errors, customer_register
    } = useCustomer();
  
    const handleSubmit = async () => {
        await customer_register({ first_name, last_name, phone, email, password, password_confirmation, countryId, i_have_read });
    };
    function togglePassword() {
        passwordVisible.value = !passwordVisible.value;
    }
</script>
<style>
    .custom-select {
        width: 100%;
        padding: 10px 40px 10px 10px; /* space for the dropdown arrow */
        border: 1px solid #000;
        border-bottom: 2px solid #000; /* match the underline effect */
        border-radius: 0;
        background-color: #fff;
        font-size: 16px;
        box-shadow: none;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url('data:image/svg+xml;utf8,<svg fill="%23000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 24px;
    }
    .customer_shipping_country-select {
        font-family: Arial, sans-serif;
        text-align: center;
        margin: 20px auto;
    }
        
    .customer_shipping_country-select label {
        font-size: 20px;
        color: #003366;
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
    }
        
    .shipping-select .sub-text {
        color: #0074cc;
        font-size: 14px;
        margin-bottom: 10px;
    }
</style>