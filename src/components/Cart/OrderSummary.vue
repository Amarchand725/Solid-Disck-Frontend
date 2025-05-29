<template>
    <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-4 ant-col-lg-6 ant-col-xl-6 css-i6rspj">
        <div class="order_summary_main">
            <div class="sub_total sub">
                <span>Subtotal:</span>
                <p>{{ settings?.currency ?? '' }}{{ fullCart.subtotal }}</p>
            </div>
            <div class="sub_total total"><span>Total:</span>
                <p>{{ settings?.currency ?? '' }}{{ fullCart.total }}</p>
            </div>
            <p class="tax">Tax and Shipping calculated at checkout.</p>
            <router-link class="checkout-btn" :to="fullCart?.items?.length ? '/checkout' : '#'"
                            @click.prevent="!fullCart?.items?.length && toast.error('Your cart is empty!')">
                <button type="button" class="ant-btn css-i6rspj ant-btn-primary ant-btn-color-primary ant-btn-variant-solid">
                    <span style="font-size: 14px; font-weight: 600; color: rgb(255, 255, 255);">Proceed to Checkout</span>
                </button>
            </router-link>
        </div>
    </div>
</template>
<script setup>
    import { fullCart } from '@/composables/cartState';
    import { useToast } from 'vue-toastification'
    const toast = useToast()

    const props = defineProps({
        settings: Object,
        fullCart:Object
    })
</script>