<template>
    <header>
        <nav>
            <div class="ant-row ant-row-space-between ant-row-middle navbar-main css-i6rspj">
                <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-4 css-i6rspj">
                    <div class="header_left">
                        <router-link class="nav-link" to="/">
                            <img 
                                alt="Logo" title="{{ settings?.name ?? '' }}" fetchpriority="high" 
                                width="220" height="50" decoding="async" data-nimg="1" 
                                :src="settings?.logo || '/placeholders/220x50.svg'"
                                @error="onLogoError"
                                style="color: transparent; object-fit: contain; margin-left: -25px; width: 100%; height: auto;">
                        </router-link>
                    </div>
                </div>
                <div class="ant-col header_searchbar_main ant-col-xs-24 ant-col-sm-24 ant-col-md-13 css-i6rspj">
                    <Search />

                    <div class="right_icons_main_mobile right_icons_main">
                        <div class="left-icons shopper-approved">
                            <router-link to="#" class="shopperlink new-sa-seals placement-default">
                                <img src="https://www.shopperapproved.com/seal/39536/default-sa-seal.gif" alt="Default Sa Seal" title="Customer Reviews" style="border-radius: 4px;">
                            </router-link>
                        </div>

                        <CartOverView 
                            :cartItemCount="cartItemCount"
                            :fullCart="fullCart"
                            :settings="settings"
                            :removeCartItem="removeCartItem"
                        />
                       
                        <!-- <div class="left-icons">
                            <router-link to="login">
                                <img src="/assets/image/SignIn-Icon.webp" alt="SignIn Icon" title="Signin">
                                <p>Sign In</p>
                            </router-link>
                        </div> -->
                        <div class="left-icons" v-if="!isLoggedIn">
                            <router-link to="/login">
                            <img src="/assets/image/SignIn-Icon.webp" alt="SignIn Icon" />
                            <p>Sign In</p>
                            </router-link>
                        </div>
                        <div class="left-icons" v-else>
                            <router-link to="/my-account">
                            <img src="/assets/image/SignIn-Icon.webp" alt="Account Icon" />
                            <p>Account</p>
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="ant-col right_icons_main ant-col-xs-24 ant-col-sm-24 ant-col-md-7 css-i6rspj">
                    <div class="undefined right_icons_main">
                        <div class="left-icons shopper-approved">
                            <router-link to="#" class="shopperlink new-sa-seals placement-default">
                                <img src="https://www.shopperapproved.com/seal/39536/default-sa-seal.gif" alt="Default Sa Seal" title="Customer Reviews" style="border-radius: 4px;">
                            </router-link>
                        </div>
                        <CartOverView 
                            :cartItemCount="cartItemCount"
                            :fullCart="fullCart"
                            :settings="settings"
                            :removeCartItem="removeCartItem"
                        />
                        <!-- <div class="left-icons">
                            <router-link 
                                to="/login"
                            >
                                <img src="/assets/image/SignIn-Icon.webp" alt="SignIn Icon" title="Signin">
                                <p>Sign In</p>
                            </router-link>
                        </div> -->
                        <div class="left-icons" v-if="!isLoggedIn">
                            <router-link to="/login">
                            <img src="/assets/image/SignIn-Icon.webp" alt="SignIn Icon" />
                            <p>Sign In</p>
                            </router-link>
                        </div>
                        <div class="left-icons" v-else>
                            <router-link to="/my-account">
                            <img src="/assets/image/SignIn-Icon.webp" alt="Account Icon" />
                            <p>Account</p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="navbar-main-menu-rows" style="">
                <TopNavBar :settings="settings" />
                <NavbarHeaderMenu />
            </div>
        </nav>
    </header>
</template>
<script setup>
// Sub components
import TopNavBar from '@/components/Header/TopNavBar.vue'
import NavbarHeaderMenu from '@/components/Header/NavbarHeaderMenu.vue'
import CartOverView from '@/components/Header/CartOverView.vue'
import Search from '@/components/Header/Search.vue'

//
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useSettings } from '@/composables/useSettings.js'
import { useCart } from '@/composables/useCart'

const { settings } = useSettings()
const { cartItemCount, fullCart, removeCartItem } = useCart()

const onLogoError = (event) => {
  event.target.src = '/placeholders/220x50.svg'
}

const store = useStore();
const isLoggedIn = computed(() => store.getters.isLoggedIn);
</script>