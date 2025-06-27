<template>
    <header>
        <nav>
            <div class="ant-row ant-row-space-between ant-row-middle navbar-main css-i6rspj">
                <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-4 css-i6rspj">
                    <div class="header_left">
                        <router-link class="nav-link" to="/">
                            <img
                                :alt="settings?.name || 'Solid Disk Direct Logo'"
                                :title="settings?.name || 'Solid Disk Direct'"
                                fetchpriority="high"
                                decoding="async"
                                loading="lazy"
                                width="220"
                                height="50"
                                :src="settings?.logo || '/assets/image/cOPCmXsTYZD8imXv03nHXTUesUat0VzFcRfOt5to.webp'"
                                :srcset="generateLogoSrcset(settings?.logo)"
                                sizes="(max-width: 600px) 120px, (max-width: 1024px) 180px, 220px"
                                @error="onLogoError"
                                style="object-fit: contain; margin-left: -25px; width: 100%; height: auto;"
                                />
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
            <div class="navbar-main-menu-rows" v-if="route.path !== '/site-map'">
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
import { useRoute } from 'vue-router'
import { computed } from 'vue';
import { useSettings } from '@/composables/useSettings.js'
import { useCart } from '@/composables/useCart'

const route = useRoute()

const { settings } = useSettings()
const { cartItemCount, fullCart, removeCartItem } = useCart()

const onLogoError = (event) => {
  event.target.src = '/placeholders/220x50.svg'
}

const store = useStore();
const isLoggedIn = computed(() => store.getters.isLoggedIn);

function generateLogoSrcset(logoUrl) {
  if (!logoUrl) return ''
  const ext = logoUrl.match(/\.(webp|png|jpg|jpeg)$/i)?.[0] || '.webp'
  const base = logoUrl.replace(ext, '')

  return [
    `${base}-100w${ext} 100w`,
    `${base}${ext} 220w`
  ].join(', ')
}
</script>
<style>
.left-icons.shopper-approved {
  border: 2px solid #ccc;
  border-radius: 8px; /* Rounded corners on all sides */
  padding: 1px;
  display: inline-block;
  transition: all 0.3s ease;
}

.left-icons.shopper-approved:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Subtle hover effect */
  border-color: #007bff; /* Optional: change border color on hover */
  background-color: #f9f9f9;
  cursor: pointer;
}
.right_icons_main {
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.left-icons.cart {
  min-width: 80px; /* Reserve space for cart icon + count like (0) */
}
/* Hide on screens smaller than 768px (typical mobile size) */
@media (max-width: 767px) {
  .left-icons.shopper-approved {
    display: none !important;
  }
}
</style>