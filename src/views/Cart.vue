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
                        <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-20 ant-col-lg-18 ant-col-xl-18 css-i6rspj">
                            <div class="cart_items_main">
                                <div class="cart_items_top">
                                    <div class="items">Item</div>
                                    <div class="price">Price</div>
                                    <div class="quantity">Quantity</div>
                                    <div class="item_total">Item Total</div>
                                    <div class="item_delete"></div>
                                </div>
                            </div>
                            <span v-if="fullCart && fullCart.items && fullCart.items.length">
                                <div 
                                    class="cart_items_bottom"
                                    v-for="item in fullCart.items" 
                                    :key="item.id"
                                >
                                    <div class="items">
                                        <router-link to="#">
                                            <img 
                                                :alt="item.product.title" 
                                                loading="lazy" width="70" height="70" decoding="async" data-nimg="1" 
                                                :srcset="item.product.thumbnail"
                                                :src="item.product.thumbnail" 
                                                style="color: transparent;"
                                            >
                                        </router-link>
                                        <div class="items_inner">
                                            <a href="#">
                                                {{ item.product.title }}
                                            </a>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span class="original_price">{{ settings?.currency ?? '' }}{{ item.unit_price }}</span>
                                    </div>
                                    <div class="quantity">
                                        <input 
                                            placeholder="0" min="1" 
                                            class="ant-input css-i6rspj ant-input-outlined" 
                                            type="number" 
                                            v-model.number="item.quantity"
                                        >
                                        <div class="cart_icons">
                                            <span role="img" @click="increaseCartItem(item.id)" aria-label="caret-up" tabindex="-1" class="anticon anticon-caret-up">
                                                <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                    <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                                                </svg>
                                            </span>
                                            <span 
                                                role="img" 
                                                aria-label="caret-down" 
                                                tabindex="-1" 
                                                class="anticon anticon-caret-down" 
                                                :style="{
                                                    cursor: item.quantity <= 1 ? 'not-allowed' : 'pointer',
                                                    opacity: item.quantity <= 1 ? 0.5 : 1
                                                }"
                                                @click="item.quantity > 1 && decreaseCartItem(item.id)"
                                            >
                                                <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                    <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="item_total">{{ settings?.currency ?? '' }}{{ item.sub_total }}</div>
                                    <div class="item_delete" style="cursor: pointer;">
                                        <span role="img" aria-label="delete" @click="removeCartItem(item.id)" class="anticon anticon-delete">
                                            <svg viewBox="64 64 896 896" focusable="false" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div 
                                    class="cart_items_bottom responsive_mobile"
                                    v-for="item in fullCart.items" 
                                    :key="item.id"
                                >
                                    <div class="items">
                                        <router-link to="#">
                                            <img 
                                                :alt="item.product.title" 
                                                loading="lazy" width="70" height="70" decoding="async" data-nimg="1" 
                                                :srcset="item.product.thumbnail"
                                                :src="item.product.thumbnail" 
                                                style="color: transparent;"
                                            >
                                        </router-link>
                                        <div class="items_inner">
                                            <a href="#">
                                                {{ item.product.title }}
                                            </a>
                                            <div class="bottom_prices_and_quantity">
                                                <div class="price">
                                                    <p>Price</p><span class="original_price">{{ settings?.currency ?? '' }}{{ item.unit_price }}</span>
                                                </div>
                                                <div class="qty">
                                                    <p>Quantity</p>
                                                    <div class="quantity">
                                                        <input 
                                                            placeholder="0" min="1" 
                                                            class="ant-input css-i6rspj ant-input-outlined" 
                                                            type="number" 
                                                            v-model.number="item.quantity"
                                                        >
                                                        <div class="cart_icons">
                                                            <span role="img" aria-label="caret-up" tabindex="-1" class="anticon anticon-caret-up">
                                                                <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                    <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                                                                </svg>
                                                            </span>
                                                            <span role="img" aria-label="caret-down" tabindex="-1" class="anticon anticon-caret-down" style="cursor: not-allowed; opacity: 0.5;">
                                                                <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                    <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item_total">
                                                    <p>Total</p>{{ settings?.currency ?? '' }}{{ item.sub_total }}
                                                </div>
                                            </div>
                                            <div class="item_delete" style="cursor: pointer;">
                                                <span role="img" aria-label="delete" @click="removeCartItem(item.id)" class="anticon anticon-delete">
                                                    <svg viewBox="64 64 896 896" focusable="false" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                        <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                            <span v-else>
                                <h2 style="text-align: center; padding: 20px 0px;">Cart Is Empty</h2>
                            </span>
                            <div class="sign_in_text_main">
                                <div class="remove-all-main">
                                    <div>
                                        <div class="remove_all_link" @click="clearCart()" style="cursor: pointer;">Remove All</div>
                                    </div>
                                    <div class="continue-shopping">
                                        <router-link to="/checkout" style="background-color: rgb(245, 173, 29);">
                                            Proceed to Checkout
                                        </router-link>
                                        <router-link to="/">Continue Shopping</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                <a class="checkout-btn" href="#">
                                    <button type="button" class="ant-btn css-i6rspj ant-btn-primary ant-btn-color-primary ant-btn-variant-solid"><span style="font-size: 14px; font-weight: 600; color: rgb(255, 255, 255);">Proceed to Checkout</span></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script setup>
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