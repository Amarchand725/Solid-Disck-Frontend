<template>
    <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-10 ant-col-xl-8 css-i6rspj">
        <div class="order_summary_main">
            <h2>Order Summary</h2>
            <div class="ant-collapse ant-collapse-icon-position-start custom_collapsed css-i6rspj">
                <div class="ant-collapse-item">
                    <div onclick="toggleSummary()" class="ant-collapse-header" role="button" aria-expanded="false" aria-disabled="false" tabindex="0">
                        <div class="ant-collapse-expand-icon"><span role="img" aria-label="collapsed" class="anticon anticon-right ant-collapse-arrow"><svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" style=""><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg></span></div>
                        <span class="ant-collapse-header-text">{{ cartItemCount }} Items</span>
                    </div>
                    <div 
                        id="summaryBody"
                        class="ant-collapse-content ant-collapse-content-inactive ant-collapse-content-hidden" 
                        v-if="fullCart && fullCart.items && fullCart.items.length"
                    >
                        <div class="ant-collapse-content-box">
                            <div 
                                class="collapsed_item_main"
                                v-for="item in fullCart.items" 
                                :key="item.id"
                            >
                                <div class="left">
                                    <span>{{ item.product.title }}<sup>x{{ item.quantity }}</sup></span>
                                </div>
                                <div class="right">
                                    <p>{{ settings?.currency ?? '' }}{{ item.sub_total }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <h2>Cart is empty</h2>
                    </div>
                </div>
            </div>
            <div class="sub_total_main">
                <div class="sub_total">
                    <span>Subtotal:</span>
                    <p>{{ settings?.currency ?? '' }}{{ fullCart.subtotal }}</p>
                </div>
                <div class="sub_total"><span>Shipping:</span>
                    <p>{{ settings?.currency ?? '' }}{{ fullCart.shipping_cost }}</p>
                </div>
                <div class="sub_total"><span>Tax:</span>
                    <p> (0%) $0.00</p>
                </div>
            </div>
            <div class="sub_total total"><span>Total:</span>
                <p>{{ settings?.currency ?? '' }}{{ fullCart.total }}</p>
            </div>
            <PaymentCheckout />
        </div>
    </div>
</template>
<script setup>
    import { useSettings } from '@/composables/useSettings.js'
    import { useCart } from '@/composables/useCart'
    import PaymentCheckout from '@/components/Checkout/PaymentCheckout.vue';

    const { settings } = useSettings()
    const { cartItemCount, fullCart } = useCart()
</script>