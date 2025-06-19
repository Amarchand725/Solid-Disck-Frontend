<template>
    <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-10 ant-col-xl-8 css-i6rspj">
        <div class="order_summary_main" v-if="loading">
            <img src="/assets/image/Spinner-2.gif" alt="Loading..." class="loader-img" />
        </div>
        <div class="order_summary_main" v-else-if="hasBuyNowProduct">
            <h2>Order Summary</h2>
            <div class="ant-collapse ant-collapse-icon-position-start custom_collapsed css-i6rspj">
                <div class="ant-collapse-item">
                    <div onclick="toggleSummary()" class="ant-collapse-header" role="button" aria-expanded="false" aria-disabled="false" tabindex="0">
                        <div class="ant-collapse-expand-icon"><span role="img" aria-label="collapsed" class="anticon anticon-right ant-collapse-arrow"><svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" style=""><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg></span></div>
                        <span class="ant-collapse-header-text">1 Item</span>
                    </div>
                    <div 
                        id="summaryBody"
                        class="ant-collapse-content ant-collapse-content-inactive ant-collapse-content-hidden" 
                    >
                        <div class="ant-collapse-content-box">
                            <div class="collapsed_item_main">
                                <div class="left">
                                    <span>{{ shortDescription(buyNowProduct?.product?.short_description, 50) }}<sup>x{{ buyNowProduct?.quantity }}</sup></span>
                                </div>
                                <div class="right">
                                    <p>{{ settings?.currency ?? '' }}{{ buyNowProduct?.unit_price }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sub_total_main">
                <div class="sub_total">
                    <span>Subtotal:</span>
                    <p>{{ settings?.currency ?? '' }}{{ buyNowProduct?.subtotal }}</p>
                </div>
                <div class="sub_total"><span>Shipping:</span>
                    <p>{{ settings?.currency ?? '' }}{{ buyNowProduct?.shipping_cost }}</p>
                </div>
                <div class="sub_total"><span>Tax:</span>
                    <p> ( {{ buyNowProduct?.tax_rate }} %) {{ settings?.currency ?? '' }} {{ buyNowProduct?.tax_amount }}</p>
                </div>
            </div>
            <div class="sub_total total"><span>Total:</span>
                <p>{{ settings?.currency ?? '' }}{{ buyNowProduct?.total }}</p>
            </div>
            <PaymentCheckout :error="error" :loading="placingOrder" @placeOrder="handlePlaceOrder" ref="paymentRef" />
        </div>
        <div class="order_summary_main" v-else>
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
                                    <span>{{ shortDescription(item?.product?.short_description, 50) }}<sup>x{{ item.quantity }}</sup></span>
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
                    <p> ( {{ fullCart?.tax_rate }} %) {{ settings?.currency ?? '' }} {{ fullCart?.tax_amount }}</p>
                </div>
            </div>
            <div class="sub_total total"><span>Total:</span>
                <p>{{ settings?.currency ?? '' }}{{ fullCart.total }}</p>
            </div>
            <PaymentCheckout :error="error" :loading="placingOrder" @placeOrder="handlePlaceOrder" ref="paymentRef" />
        </div>
    </div>
</template>
<script setup>
    import { ref, computed, onMounted } from 'vue'
    import { useSettings } from '@/composables/useSettings.js'
    import { useCart } from '@/composables/useCart'
    import { useBuyNow } from '@/composables/useBuyNow'
    import PaymentCheckout from '@/components/Checkout/PaymentCheckout.vue';
    import { usePlaceOrder } from '@/composables/usePlaceOrder'

    const props = defineProps({
        shippingRef: Object,
        shippingDetails: Object,
        billingDetails: Object,
    })

    const { settings } = useSettings()
    const { cartItemCount, fullCart, loading } = useCart()

    const { buyNowProduct, restoreBuyNow, clearBuyNow } = useBuyNow();

    const hasBuyNowProduct = computed(() => {
        return buyNowProduct.value && Object.keys(buyNowProduct.value).length > 0;
    });

    onMounted(async () => {
        const source = localStorage.getItem('checkout_source');
        if (source === 'buy_now') {
            await restoreBuyNow(); // ✅ This is now from the composable
        } else {
            await clearBuyNow();   // ✅ Also composable call
        }
    });

    const paymentRef = ref()
    const placingOrder = ref(false)

    const { placeOrder, error, success } = usePlaceOrder()

    const handlePlaceOrder = async () => {
        placingOrder.value = true
        try {
            const shippingForm = props.shippingDetails ?? {}
            const billingFormData = props.billingDetails ?? {}

            const billingForm = billingFormData?.sameAsShipping
            ? { ...shippingForm, same_as_shipping: true }
            : { ...(billingFormData || {}), same_as_shipping: false }

            const paymentInfo = await paymentRef.value.getPaymentToken()
            const payload = {
                shipping: shippingForm,
                billing: billingForm,
                cart: fullCart.value,
                buyNowProduct:buyNowProduct.value,
                payment: {},
            }

            // Conditional logic based on payment method
            if (paymentInfo.method === 'payarc') {
                payload.payment = {
                    method: 'payarc',
                    card_number: paymentInfo.card_number,
                    expiry: paymentInfo.expiry,
                    cvv: paymentInfo.cvv,
                    name: paymentInfo.name,
                    email: paymentInfo.email
                }
            } else if (paymentInfo.method === 'paypal') {
                payload.payment = {
                    method: 'paypal',
                }
            } else {
                throw new Error('Unsupported payment method selected')
            }
            await placeOrder(payload)
        } catch (err) {
            console.error('Checkout failed:', err.message || err)
        } finally {
            placingOrder.value = false
        }
    }

    function shortDescription(html, limit = '') {
        const text = (html || '').replace(/<[^>]*>/g, ''); // strip HTML tags safely

        // If limit is a number and greater than 0, apply truncation
        if (Number(limit) > 0) {
            return text.length > limit ? text.substring(0, limit) + '...' : text;
        }

        // Otherwise, return the full text
        return text;
    }
</script>