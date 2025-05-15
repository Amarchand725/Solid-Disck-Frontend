<template>
    <div>
        <section class="checkout_page_main">
            <div class="title_main">
                <nav class="ant-breadcrumb custom_breadcrumb_comp css-i6rspj">
                    <ol>
                        <li><span class="ant-breadcrumb-link"><a href="/">Home</a></span></li>
                        <li class="ant-breadcrumb-separator" aria-hidden="true">&gt;</li>
                        <li><span class="ant-breadcrumb-link"><a href="/checkout">Secure Checkout</a></span></li>
                    </ol>
                </nav>
                <h1>Secure Checkout</h1>
            </div>
            <div class="ant-row css-i6rspj">
                <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-14 ant-col-xl-16 css-i6rspj">
                    <div class="head_main">
                        <h1>Shipping Details</h1>
                    </div>
                    <!-- <ShippingDetailForm /> -->
                    <ShippingDetailForm
                        :country="shippingCountry"
                        :zip="shippingZip"
                        @update:country="shippingCountry = $event"
                        @update:zip="shippingZip = $event"
                    />
                    <div class="head_main two">
                        <h1>Billing Details</h1>
                    </div>
                    <BillingDetails />
                    <ShippingMethod
                        :country="shippingCountry"
                        :zip="shippingZip"
                    />
                </div>
                <OrderSummary />
            </div>
        </section>
    </div>
</template>
<script setup>
    //sub component
    import OrderSummary from '@/components/Checkout/OrderSummary.vue';
    import ShippingMethod from '@/components/Checkout/ShippingMethod.vue';
    import ShippingDetailForm from '@/components/Checkout/ShippingDetailForm.vue';    
    import BillingDetails from '@/components/Checkout/BillingDetailsForm.vue';    

    import { ref, watch } from 'vue'
    import { useShippingRates } from '@/composables/useShippingRates.js'

    const shippingCountry = ref('')
    const shippingZip = ref('')

    // const { fetchRates } = useShippingRates()
    // ✅ Pass refs to the composable
    const {
        shippingRates,
        loading,
        error,
        fetchRates
    } = useShippingRates(shippingCountry, shippingZip)

    // Watch for changes in country
    watch(() => shippingCountry.value, (country) => {
        if (country && shippingZip.value) {
            fetchRates(country, shippingZip.value)
        }
    })

    // Watch for changes in zip code
    watch(() => shippingZip.value, (zip) => {
        if (zip && shippingCountry.value) {
            fetchRates(shippingCountry.value, zip)
        }
    })
</script>