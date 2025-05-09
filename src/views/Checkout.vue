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
                    <ShippingDetailForm />
                    <div class="head_main two">
                        <h1>Billing Details</h1>
                    </div>
                    <!-- <div class="bill_to_diff">
                        <label class="ant-checkbox-wrapper css-i6rspj">
                            <span class="ant-checkbox ant-wave-target css-i6rspj">
                                <input class="ant-checkbox-input" type="checkbox">
                                <span class="ant-checkbox-inner"></span>
                            </span>
                        </label>
                        <p class="bill_to_diff_para">Bill to a different address</p>
                    </div> -->
                    <BillingDetails />
                    <ShippingMethod />
                </div>
                <OrderSummary />
            </div>
        </section>
    </div>
</template>
<script setup>
    import OrderSummary from '@/components/OrderSummary.vue';
    import ShippingMethod from '@/components/ShippingMethod.vue';
    import ShippingDetailForm from '@/components/ShippingDetailForm.vue';    
    import BillingDetails from '@/components/BillingDetails.vue';    
</script>