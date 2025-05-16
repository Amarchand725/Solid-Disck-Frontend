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
                    <p> (0%) $0.00</p>
                </div>
            </div>
            <div class="sub_total total"><span>Total:</span>
                <p>{{ settings?.currency ?? '' }}{{ fullCart.total }}</p>
            </div>
            <PaymentCheckout :error="error" :loading="loading" @placeOrder="handlePlaceOrder" ref="paymentRef" />
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import { useSettings } from '@/composables/useSettings.js'
    import { useCart } from '@/composables/useCart'
    import PaymentCheckout from '@/components/Checkout/PaymentCheckout.vue';
    import { usePlaceOrder } from '@/composables/usePlaceOrder'

    const props = defineProps({
        shippingRef: Object,
        // billingRef: Object,
        // paymentRef: Object,
        shippingDetails: Object,
        billingDetails: Object,
    })


    const { settings } = useSettings()
    const { cartItemCount, fullCart } = useCart()

    const paymentRef = ref()

    const { placeOrder, loading, error, success } = usePlaceOrder()

    // const handlePlaceOrder = async () => {
    //     try {
    //         const shippingForm = props.shippingDetails ?? {}
    //         const billingFormData = props.billingDetails ?? {}

    //         const billingForm = billingFormData?.sameAsShipping
    //             ? { ...shippingForm, same_as_shipping: true }
    //             : { ...(billingFormData || {}), same_as_shipping: false }

    //         // Step 1: Create payment method
    //         const stripePaymentMethodId = await paymentRef.value.getPaymentMethodId()

    //         const payload = {
    //             shipping: shippingForm,
    //             billing: billingForm,
    //             cart: fullCart.value,
    //             paymentMethodId: stripePaymentMethodId,
    //         }

    //         // Step 2: Send to backend (creates PaymentIntent)
    //         const result = await placeOrder(payload)

    //         // Step 3: If authentication is needed
    //         if (result?.requires_action) {
    //             const { error, paymentIntent } = await paymentRef.value.confirmPayment(result.payment_intent_client_secret)

    //             if (error) {
    //                 console.error('Authentication failed:', error.message)
    //                 return
    //             }

    //             if (paymentIntent.status === 'succeeded') {
    //                 console.log('✅ Payment succeeded after authentication', paymentIntent)
    //                 // Optionally notify backend or redirect
    //             } else {
    //                 console.warn('⚠️ Payment did not succeed after authentication:', paymentIntent.status)
    //             }
    //         } else if (result?.success) {
    //             console.log('✅ Payment succeeded without extra action', result)
    //         } else {
    //             console.error('❌ Unexpected response from backend:', result)
    //         }

    //     } catch (err) {
    //         console.error('Checkout failed:', err.message || err)
    //     }
    // }


    const handlePlaceOrder = async () => {
        try {
            const shippingForm = props.shippingDetails ?? {}
            const billingFormData = props.billingDetails ?? {}

            const billingForm = billingFormData?.sameAsShipping
            ? { ...shippingForm, same_as_shipping: true }
            : { ...(billingFormData || {}), same_as_shipping: false }

            const stripePaymentMethodId = await paymentRef.value.getPaymentMethodId()

            const payload = {
                shipping: shippingForm,
                billing: billingForm,
                cart: fullCart.value,
                paymentMethodId: stripePaymentMethodId,
            }
            // console.log(payload)
            const result = await placeOrder(payload)
            console.log('Order placed!', result)
        } catch (err) {
            console.error('Checkout failed:', err.message || err)
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