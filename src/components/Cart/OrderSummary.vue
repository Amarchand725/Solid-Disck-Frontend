<template>
    <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-4 ant-col-lg-6 ant-col-xl-6 css-i6rspj">
        <div class="order_summary_main">
            <h1>Calculate Shipping</h1>
            <div class="shipping-calculation w-full">
                <div class="title px-[30px] bg-[#F6F6F6]">
                    <h3 class="text-[18px] font-bold">Free Ground Shipping Within US</h3>
                </div>
                <div class="ant-row css-i6rspj">
                    <div class="ant-col ant-col-xl-24 css-i6rspj">
                        <div class="ant-form-item css-i6rspj">
                            <div class="ant-row ant-form-item-row css-i6rspj">
                                <div class="ant-col ant-form-item-control css-i6rspj">
                                    <div class="ant-form-item-control-input">
                                        <div class="shipping-select">
                                            <select class="custom-select">
                                            <option value="us">United States</option>
                                            <option value="ua" selected>Ukraine</option>
                                            <option value="ca">Canada</option>
                                            <option value="uk">United Kingdom</option>
                                            <!-- Add more options as needed -->
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="customer_shipping_postcode_main">
                        <div class="ant-form-item css-i6rspj">
                            <div class="ant-row ant-form-item-row css-i6rspj">
                                <div class="ant-col ant-form-item-control css-i6rspj">
                                    <div class="ant-form-item-control-input">
                                        <div class="ant-form-item-control-input-content">
                                            <input placeholder="Zip Code*" id="customer_shipping_postcode" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="" name="customer_shipping_postcode" style="height: 40px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="ant-btn css-i6rspj ant-btn-primary ant-btn-color-primary ant-btn-variant-solid calculate-ship-btn" style="width: 100%; height: 40px; background-color: rgb(245, 173, 29); display: flex; justify-content: center; align-items: center;">
                            <span style="font-size: 14px; font-weight: 600; color: rgb(255, 255, 255);">Calculate Shipping</span>
                        </button>
                    </div>
                    <div class="ant-col ant-col-xl-24 css-i6rspj"></div>
                </div>
            </div>
            <div class="sub_total sub">
                <span>Subtotal:</span>
                <p>{{ settings?.currency ?? '' }}{{ fullCart.subtotal }}</p>
            </div>
            <div class="sub_total sub"><span>Shipping:</span>
                <p>{{ settings?.currency ?? '' }}0</p>
            </div>
            <div class="sub_total total"><span>Total:</span>
                <p>{{ settings?.currency ?? '' }}{{ fullCart.total }}</p>
            </div>
            <p class="tax">Tax and Shipping calculated at checkout.</p>
            <router-link class="checkout-btn" to="/checkout">
                <button type="button" class="ant-btn css-i6rspj ant-btn-primary ant-btn-color-primary ant-btn-variant-solid">
                    <span style="font-size: 14px; font-weight: 600; color: rgb(255, 255, 255);">Proceed to Checkout</span>
                </button>
            </router-link>
        </div>
    </div>
</template>
<script setup>
import { fullCart } from '@/composables/cartState';

    const props = defineProps({
        settings: Object,
        fullCart:Object
    })
</script>