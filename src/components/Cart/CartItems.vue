<template>
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
                            :src="item.product.thumbnail || '/placeholders/70x70.svg'" 
                            @error="onImageError"
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
</template>
<script>
    export default {
        name: 'CartItems',
        props: {
            settings:Object,
            fullCart: Object,
            removeCartItem: Function,
            clearCart: Function,
            increaseCartItem: Function,
            decreaseCartItem: Function
        }
    }
</script>
<script setup>
    const onImageError = (event) => {
        event.target.src = '/placeholders/70x70.svg'
    }
</script>