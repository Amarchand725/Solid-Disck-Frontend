<template>
    <div>
        <main>
            <div class="cart_page_main">
                <div class="title_main">
                    <nav class="ant-breadcrumb custom_breadcrumb_comp css-i6rspj">
                        <ol>
                            <li><span class="ant-breadcrumb-link"><a href="/">Home</a></span></li>
                            <li class="ant-breadcrumb-separator" aria-hidden="true">&gt;</li>
                            <li><span class="ant-breadcrumb-link"><a href="/cart">Cart</a></span></li>
                        </ol>
                    </nav>
                    <h1>Your Cart</h1>
                </div>
                <div class="shopping_cart_bottom_row">
                    <div class="ant-row css-i6rspj">
                        <CartItems
                            :settings="settings"
                            :fullCart="fullCart"
                            :removeCartItem="removeCartItem"
                            :clearCart="clearCart"
                            :increaseCartItem="increaseCartItem"
                            :decreaseCartItem="decreaseCartItem"
                        />

                        <OrderSummary :settings="settings" :fullCart="fullCart" />
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script setup>
//Sub Components
import CartItems from '@/components/Cart/CartItems.vue'
import OrderSummary from '@/components/Cart/OrderSummary.vue'

import { useSettings } from '@/composables/useSettings.js'
import { useCart } from '@/composables/useCart'

const { settings } = useSettings()
const { fullCart, removeCartItem, clearCart, increaseCartItem, decreaseCartItem } = useCart()


</script>

<style scope>
    .shipping-select {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 20px auto;
    }

    .shipping-select label {
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

    .custom-select {
    width: 250px;
    padding: 10px;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid #ccc;
    appearance: none;
    background: url('data:image/svg+xml;utf8,<svg fill="%23000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>') no-repeat right 10px center;
    background-color: #fff;
    background-size: 16px 16px;
    cursor: pointer;
    }
</style>