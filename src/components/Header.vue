<template>
    <header>
        <nav>
            <div class="ant-row ant-row-space-between ant-row-middle navbar-main css-i6rspj">
                <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-4 css-i6rspj">
                    <div class="header_left">
                        <router-link class="nav-link" to="/">
                            <img alt="Logo" title="{{ settings?.name ?? '' }}" fetchpriority="high" width="220" height="50" decoding="async" data-nimg="1" 
                                :src="settings?.logo || '/images/loader.gif'"
                                @error="onImageError"
                                style="color: transparent; object-fit: contain; margin-left: -25px; width: 100%; height: auto;">
                        </router-link>
                    </div>
                </div>
                <div class="ant-col header_searchbar_main ant-col-xs-24 ant-col-sm-24 ant-col-md-13 css-i6rspj">
                    <div class="search_bar_main">
                        <span class="ant-input-group-wrapper ant-input-group-wrapper-outlined css-i6rspj ant-input-search ant-input-search-with-button header-search-input">
                            <span class="ant-input-wrapper ant-input-group css-i6rspj">
                                <input placeholder="What can we help you find today?" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                <span class="ant-input-group-addon">
                                    <button type="button" class="ant-btn css-i6rspj ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-input-search-button">
                                        <img src="/assets/image/search-icon.webp" alt="Search Icon" style="width: 15px; filter: brightness(0) invert(1);">
                                    </button>
                                </span>
                            </span>
                        </span>
                        <div class="search_dropdown"></div>
                    </div>
                    <div class="right_icons_main_mobile right_icons_main">
                        <div class="left-icons shopper-approved">
                            <a href="#" class="shopperlink new-sa-seals placement-default">
                                <img src="https://www.shopperapproved.com/seal/39536/default-sa-seal.gif" alt="Default Sa Seal" title="Customer Reviews" style="border-radius: 4px;">
                            </a>
                        </div>
                        <div class="left-icons cart">
                            <router-link class="nav-link" to="/cart">
                                <img src="/assets/image/Cart-Icon.webp" alt="Cart Icon" title="Cart">
                                <p>Cart ({{ cartItemCount }})</p>
                            </router-link>
                            <div class="cart_overview_modal_main">
                                <div class="cart_overview_modal_header">
                                    <p>{{ cartItemCount }} Items in Cart</p>
                                </div>
                                <div class="cart_overview_modal_content">
                                    <ul>
                                        <li 
                                            class="cart_items"
                                            v-for="item in fullCart.items" 
                                            :key="item.id"
                                        >
                                            <div class="image">
                                                <router-link to="#">
                                                    <img 
                                                        :alt="item.product.title" 
                                                        loading="lazy" width="80" height="80" decoding="async" data-nimg="1" 
                                                        :srcset="item.product.thumbnail"
                                                        :src="item.product.thumbnail" 
                                                        style="color: transparent;"
                                                    >
                                                </router-link>
                                            </div>
                                            <div class="title">
                                                <router-link to="#">
                                                    <p>{{ item.product.title }}</p>
                                                </router-link>
                                                <div class="price">
                                                    <span>{{ settings?.currency ?? '' }}{{ item.unit_price }} <strong>X</strong> {{ item.quantity }}</span> = 
                                                    <p>{{ settings?.currency ?? '' }}{{ item.sub_total }}</p>
                                                </div>
                                            </div>
                                            <div class="cross_icon">
                                                <span role="img" @click="removeCartItem(item.id)" aria-label="delete" class="anticon anticon-delete">
                                                    <svg viewBox="64 64 896 896" focusable="false" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                        <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="cart_overview_modal_footer">
                                    <div class="subtotal"><span>Subtotal:</span>
                                        <p>{{ settings?.currency ?? '' }}{{ fullCart.subtotal }}</p>
                                    </div>
                                    <div class="footer_btn">
                                        <router-link class="view_cart_btn" to="/cart">View Cart</router-link>
                                        <router-link class="checkout_btn" to="/checkout">Checkout</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="left-icons">
                            <a href="#"><img src="/assets/image/SignIn-Icon.webp" alt="SignIn Icon" title="Signin">
                                <p>Sign In</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="ant-col right_icons_main ant-col-xs-24 ant-col-sm-24 ant-col-md-7 css-i6rspj">
                    <div class="undefined right_icons_main">
                        <div class="left-icons shopper-approved">
                            <a href="#" class="shopperlink new-sa-seals placement-default">
                                <img src="https://www.shopperapproved.com/seal/39536/default-sa-seal.gif" alt="Default Sa Seal" title="Customer Reviews" style="border-radius: 4px;">
                            </a>
                        </div>
                        <div class="left-icons cart">
                            <router-link class="nav-link" to="/cart">
                                <img src="/assets/image/Cart-Icon.webp" alt="Cart Icon" title="Cart">
                                <p>Cart ({{ cartItemCount }})</p>
                            </router-link>
                            <div class="cart_overview_modal_main" v-if="fullCart">
                                <div class="cart_overview_modal_header">
                                    <p>{{ cartItemCount }} Items in Cart</p>
                                </div>
                                <div class="cart_overview_modal_content">
                                    <ul>
                                        <li 
                                            class="cart_items"
                                            v-for="item in fullCart.items" 
                                            :key="item.id"
                                        >
                                            <div class="image">
                                                <router-link to="#">
                                                    <img 
                                                        :alt="item.product.title" 
                                                        loading="lazy" width="80" height="80" decoding="async" data-nimg="1" 
                                                        :srcset="item.product.thumbnail"
                                                        :src="item.product.thumbnail" 
                                                        style="color: transparent;"
                                                    >
                                                </router-link>
                                            </div>
                                            <div class="title">
                                                <router-link to="#">
                                                    <p>{{ item.product.title }}</p>
                                                </router-link>
                                                <div class="price">
                                                    <span>{{ settings?.currency ?? '' }}{{ item.unit_price }} <strong>X</strong> {{ item.quantity }}</span> = 
                                                    <p>{{ settings?.currency ?? '' }}{{ item.sub_total }}</p>
                                                </div>
                                            </div>
                                            <div class="cross_icon">
                                                <span role="img" aria-label="delete" @click="removeCartItem(item.id)" class="anticon anticon-delete">
                                                    <svg viewBox="64 64 896 896" focusable="false" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                        <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="cart_overview_modal_footer">
                                    <div class="subtotal"><span>Subtotal:</span>
                                        <p>{{ settings?.currency ?? '' }}{{ fullCart.subtotal }}</p>
                                    </div>
                                    <div class="footer_btn">
                                        <router-link class="view_cart_btn" to="/cart">View Cart</router-link>
                                        <router-link class="checkout_btn" to="/checkout">Checkout</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="left-icons">
                            <a href="#"><img src="/assets/image/SignIn-Icon.webp" alt="SignIn Icon" title="Signin">
                                <p>Sign In</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="navbar-main-menu-rows" style="">
                <div class="ant-row navbar-menu css-i6rspj">
                    <div class="ant-col ant-col-10 css-i6rspj">
                        <ul class="ant-menu-overflow ant-menu ant-menu-root ant-menu-horizontal ant-menu-light nav-menu-custom css-i6rspj" role="menu" tabindex="0" data-menu-list="true" style="width: 100%;">
                            <li class="ant-menu-overflow-item ant-menu-submenu ant-menu-submenu-horizontal" role="none" style="opacity: 1; order: 0;">
                                <div role="menuitem" class="ant-menu-submenu-title" tabindex="-1" aria-expanded="false" aria-haspopup="true" data-menu-id="rc-menu-uuid-26089-1-/categories" aria-controls="rc-menu-uuid-26089-1-/categories-popup">
                                    <img src="/assets/image/cart-right-icon.webp" alt="Cart Right Icon" class="ant-menu-item-icon" style="width: 10px; rotate: -90deg; filter: brightness(0) invert(1);"><span class="ant-menu-title-content"><span>Shop By Category</span></span>
                                    <i
                                    class="ant-menu-submenu-arrow"></i>
                                </div>
                            </li>
                            <li class="ant-menu-overflow-item ant-menu-overflow-item-rest ant-menu-submenu ant-menu-submenu-horizontal ant-menu-submenu-disabled" aria-hidden="true" role="none" style="opacity: 0; height: 0px; overflow-y: hidden; order: 2147483647; pointer-events: none; position: absolute;">
                                <div role="menuitem" class="ant-menu-submenu-title" aria-expanded="false" aria-haspopup="true" aria-disabled="true" data-menu-id="rc-menu-uuid-26089-1-rc-menu-more" aria-controls="rc-menu-uuid-26089-1-rc-menu-more-popup"><span role="img" aria-label="ellipsis" class="anticon anticon-ellipsis"><svg viewBox="64 64 896 896" focusable="false" data-icon="ellipsis" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"></path></svg></span>
                                    <i
                                    class="ant-menu-submenu-arrow"></i>
                                </div>
                            </li>
                        </ul>
                        <div aria-hidden="true" style="display: none;"></div>
                    </div>
                    <div class="ant-col ant-col-14 contact-now-container css-i6rspj">
                        <div class="track-order-container">
                            <div class="contact-now-link trackorder_link" role="button" tabindex="0" style="cursor: pointer;"><img src="/assets/image/Track-Order-Icon.webp" alt="Track Order Icon" title="Track Your Order"><span class="contact-now" title="Track Your Order">Track Order</span></div>
                        </div>
                        <a href="mailto:support@etechbuy.com" class="contact-now-link"><img src="/assets/image/Mail-Icon.webp" alt="Mail Icon" title="Contact our support team"><span class="contact-now" title="Contact our support team">support@etechbuy.com</span></a>
                        <a href="tel:+18887195848" class="contact-now-link"><img src="/assets/image/Call-Icon.webp" alt="Call Icon" title="Call Etechbuy"><span class="contact-now" title="Call Etechbuy">(888) 719-5848</span></a>
                    </div>
                </div>
                <div class="ant-row navbar-header-menu css-i6rspj">
                    <div class="ant-col ant-col-24 css-i6rspj">
                        <div>
                            <div>
                                <div class="parent-header-menu">
                                    <ul class="ant-menu-overflow ant-menu ant-menu-root ant-menu-horizontal ant-menu-light css-i6rspj" role="menu" tabindex="0" data-menu-list="true">
                                        <li onclick="handleOpen()" class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-26089-2-MEMORY" style="opacity: 1; order: 0;"><span class="ant-menu-title-content"><span title="MEMORY" style="display: flex; align-items: center;"><span>MEMORY&nbsp;</span><img src="/assets/image/dropdown-down.webp" alt="Dropdown Down" title="MEMORY" style="width: 17px; filter: brightness(0) invert(1);"></span>
                                            </span>
                                        </li>
                                        <li onclick="handleOpen()" class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-26089-2-HARD DRIVES" style="opacity: 1; order: 1;"><span class="ant-menu-title-content"><span title="HARD DRIVES" style="display: flex; align-items: center;"><span>HARD DRIVES&nbsp;</span><img src="/assets/image/dropdown-down.webp" alt="Dropdown Down" title="HARD DRIVES" style="width: 17px; filter: brightness(0) invert(1);"></span>
                                            </span>
                                        </li>
                                        <li onclick="handleOpen()" class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-26089-2-SOLID STATE DRIVES" style="opacity: 1; order: 2;"><span class="ant-menu-title-content"><span title="SOLID STATE DRIVES" style="display: flex; align-items: center;"><span>SOLID STATE DRIVES&nbsp;</span><img src="/assets/image/dropdown-down.webp" alt="Dropdown Down" title="SOLID STATE DRIVES"
                                            style="width: 17px; filter: brightness(0) invert(1);"></span>
                                            </span>
                                        </li>
                                        <li onclick="handleOpen()" class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-26089-2-NETWORK &amp; ACCESSORIES" style="opacity: 1; order: 3;"><span class="ant-menu-title-content"><span title="NETWORK &amp; ACCESSORIES" style="display: flex; align-items: center;"><span>NETWORK &amp; ACCESSORIES&nbsp;</span><img src="/assets/image/dropdown-down.webp" alt="Dropdown Down"
                                            title="NETWORK &amp; ACCESSORIES" style="width: 17px; filter: brightness(0) invert(1);"></span>
                                            </span>
                                        </li>
                                        <li onclick="handleOpen()" class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-26089-2-PROCESSORS" style="opacity: 1; order: 4;"><span class="ant-menu-title-content"><span title="PROCESSORS" style="display: flex; align-items: center;"><span>PROCESSORS&nbsp;</span><img src="/assets/image/dropdown-down.webp" alt="Dropdown Down" title="PROCESSORS" style="width: 17px; filter: brightness(0) invert(1);"></span>
                                            </span>
                                        </li>
                                        <li onclick="handleOpen()" class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-26089-2-MOTHERBOARDS" style="opacity: 1; order: 5;"><span class="ant-menu-title-content"><span title="MOTHERBOARDS" style="display: flex; align-items: center;"><span>MOTHERBOARDS&nbsp;</span><img src="/assets/image/dropdown-down.webp" alt="Dropdown Down" title="MOTHERBOARDS" style="width: 17px; filter: brightness(0) invert(1);"></span>
                                            </span>
                                        </li>
                                        <li onclick="handleOpen()" class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-26089-2-POWER SUPPLIES" style="opacity: 1; order: 6;"><span class="ant-menu-title-content"><span title="POWER SUPPLIES" style="display: flex; align-items: center;"><span>POWER SUPPLIES&nbsp;</span><img src="/assets/image/dropdown-down.webp" alt="Dropdown Down" title="POWER SUPPLIES"
                                            style="width: 17px; filter: brightness(0) invert(1);"></span>
                                            </span>
                                        </li>
                                        <li onclick="handleOpen()" class="ant-menu-overflow-item ant-menu-overflow-item-rest ant-menu-submenu ant-menu-submenu-horizontal ant-menu-submenu-disabled" aria-hidden="true" role="none" style="opacity: 0; height: 0px; overflow-y: hidden; order: 2147483647; pointer-events: none; position: absolute;">
                                            <div role="menuitem" class="ant-menu-submenu-title" aria-expanded="false" aria-haspopup="true" data-menu-id="rc-menu-uuid-26089-2-rc-menu-more" aria-controls="rc-menu-uuid-26089-2-rc-menu-more-popup" aria-disabled="true"><span role="img" aria-label="ellipsis" class="anticon anticon-ellipsis"><svg viewBox="64 64 896 896" focusable="false" data-icon="ellipsis" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"></path></svg></span>
                                                <i
                                                class="ant-menu-submenu-arrow"></i>
                                            </div>
                                        </li>
                                    </ul>
                                    <div aria-hidden="true" style="display: none;"></div>
                                </div>
                            </div>
                            <div class="header-menu-wrapper" id="header-menu-dropdown" style="display: none;">
                                <div class="header-menu"><strong title="BRANDS">BRANDS</strong>
                                    <div class="header-menu-items">
                                        <ul class="ant-menu ant-menu-root ant-menu-vertical ant-menu-light css-i6rspj" role="menu" tabindex="0" data-menu-list="true">
                                            <li class="ant-menu-item ant-menu-item-only-child" title="Seagate" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-3-storage-devices/hard-drives/server-hard-drives/seagate.html"><span class="ant-menu-title-content">Seagate</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="Western Digital" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-3-storage-devices/hard-drives/server-hard-drives/western-digital.html"><span class="ant-menu-title-content">Western Digital</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="Hitachi" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-3-storage-devices/hard-drives/server-hard-drives/hitachi.html"><span class="ant-menu-title-content">Hitachi</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="Fujitsu" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-3-storage-devices/hard-drives/server-hard-drives/fujitsu.html"><span class="ant-menu-title-content">Fujitsu</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="Toshiba" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-3-storage-devices/hard-drives/server-hard-drives/toshiba.html"><span class="ant-menu-title-content">Toshiba</span></li>
                                        </ul>
                                        <div aria-hidden="true" style="display: none;"></div>
                                        <button id="header-menu-more-btn" type="button" class="ant-btn css-i6rspj ant-btn-default ant-btn-color-default ant-btn-variant-outlined"><span>More...</span></button>
                                    </div>
                                </div>
                                <div class="header-menu"><strong title="CAPACITY">CAPACITY</strong>
                                    <div class="header-menu-items">
                                        <ul class="ant-menu ant-menu-root ant-menu-vertical ant-menu-light css-i6rspj" role="menu" tabindex="0" data-menu-list="true">
                                            <li class="ant-menu-item ant-menu-item-only-child" title="22TB" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-4-storage-devices/hard-drives/server-hard-drives/22tb.html"><span class="ant-menu-title-content">22TB</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="20TB" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-4-storage-devices/hard-drives/server-hard-drives/20tb.html"><span class="ant-menu-title-content">20TB</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="18TB" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-4-storage-devices/hard-drives/server-hard-drives/18tb.html"><span class="ant-menu-title-content">18TB</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="16TB" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-4-storage-devices/hard-drives/server-hard-drives/16tb.html"><span class="ant-menu-title-content">16TB</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="12TB" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-4-storage-devices/hard-drives/server-hard-drives/12tb.html"><span class="ant-menu-title-content">12TB</span></li>
                                        </ul>
                                        <div aria-hidden="true" style="display: none;"></div>
                                        <button id="header-menu-more-btn" type="button" class="ant-btn css-i6rspj ant-btn-default ant-btn-color-default ant-btn-variant-outlined"><span>More...</span></button>
                                    </div>
                                </div>
                                <div class="header-menu"><strong title="CATEGORY">CATEGORY</strong>
                                    <div class="header-menu-items">
                                        <ul class="ant-menu ant-menu-root ant-menu-vertical ant-menu-light css-i6rspj" role="menu" tabindex="0" data-menu-list="true">
                                            <li class="ant-menu-item ant-menu-item-only-child" title="Desktop" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-5-storage-devices/hard-drives/desktop-hard-drives.html"><span class="ant-menu-title-content">Desktop</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="Laptop" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-5-storage-devices/hard-drives/laptop-hard-drives.html"><span class="ant-menu-title-content">Laptop</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="Server" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-5-storage-devices/hard-drives/server-hard-drives.html"><span class="ant-menu-title-content">Server</span></li>
                                        </ul>
                                        <div aria-hidden="true" style="display: none;"></div>
                                    </div>
                                </div>
                                <div class="header-menu"><strong title="SPINDLE SPEED (RPM)">SPINDLE SPEED (RPM)</strong>
                                    <div class="header-menu-items">
                                        <ul class="ant-menu ant-menu-root ant-menu-vertical ant-menu-light css-i6rspj" role="menu" tabindex="0" data-menu-list="true">
                                            <li class="ant-menu-item ant-menu-item-only-child" title="15000" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-6-storage-devices/hard-drives/server-hard-drives/15000.html"><span class="ant-menu-title-content">15000</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="10000" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-6-storage-devices/hard-drives/server-hard-drives/10000.html"><span class="ant-menu-title-content">10000</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="7200" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-6-storage-devices/hard-drives/server-hard-drives/7200.html"><span class="ant-menu-title-content">7200</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="5900" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-6-storage-devices/hard-drives/server-hard-drives/5900.html"><span class="ant-menu-title-content">5900</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="5400" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-6-storage-devices/hard-drives/server-hard-drives/5400.html"><span class="ant-menu-title-content">5400</span></li>
                                        </ul>
                                        <div aria-hidden="true" style="display: none;"></div>
                                        <button id="header-menu-more-btn" type="button" class="ant-btn css-i6rspj ant-btn-default ant-btn-color-default ant-btn-variant-outlined"><span>More...</span></button>
                                    </div>
                                </div>
                                <div class="header-menu"><strong title="INTERFACE">INTERFACE</strong>
                                    <div class="header-menu-items">
                                        <ul class="ant-menu ant-menu-root ant-menu-vertical ant-menu-light css-i6rspj" role="menu" tabindex="0" data-menu-list="true">
                                            <li class="ant-menu-item ant-menu-item-only-child" title="SATA" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-7-storage-devices/hard-drives/desktop-hard-drives/sata.html"><span class="ant-menu-title-content">SATA</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="SAS" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-7-storage-devices/hard-drives/server-hard-drives/sas.html"><span class="ant-menu-title-content">SAS</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="Fibre Channel" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-7-storage-devices/hard-drives/server-hard-drives/fibre-channel.html"><span class="ant-menu-title-content">Fibre Channel</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="SCSI" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-7-storage-devices/hard-drives/server-hard-drives/scsi.html"><span class="ant-menu-title-content">SCSI</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="PATA" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-7-storage-devices/hard-drives/desktop-hard-drives/pata.html"><span class="ant-menu-title-content">PATA</span></li>
                                        </ul>
                                        <div aria-hidden="true" style="display: none;"></div>
                                        <button id="header-menu-more-btn" type="button" class="ant-btn css-i6rspj ant-btn-default ant-btn-color-default ant-btn-variant-outlined"><span>More...</span></button>
                                    </div>
                                </div>
                                <div class="header-menu"><strong title="FORM FACTOR">FORM FACTOR</strong>
                                    <div class="header-menu-items">
                                        <ul class="ant-menu ant-menu-root ant-menu-vertical ant-menu-light css-i6rspj" role="menu" tabindex="0" data-menu-list="true">
                                            <li class="ant-menu-item ant-menu-item-only-child" title="5.25-Inch" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-8-storage-devices/hard-drives/desktop-hard-drives/5.25-inch.html"><span class="ant-menu-title-content">5.25-Inch</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="3.5-Inch" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-8-storage-devices/hard-drives/server-hard-drives/3.5-inch.html"><span class="ant-menu-title-content">3.5-Inch</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="2.5-Inch" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-8-storage-devices/hard-drives/laptop-hard-drives/2.5-inch.html"><span class="ant-menu-title-content">2.5-Inch</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="1.8-Inch" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-8-storage-devices/hard-drives/laptop-hard-drives/1.8-inch.html"><span class="ant-menu-title-content">1.8-Inch</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="1.6-Inch" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-8-storage-devices/hard-drives/laptop-hard-drives/1.6-inch.html"><span class="ant-menu-title-content">1.6-Inch</span></li>
                                        </ul>
                                        <div aria-hidden="true" style="display: none;"></div>
                                        <button id="header-menu-more-btn" type="button" class="ant-btn css-i6rspj ant-btn-default ant-btn-color-default ant-btn-variant-outlined"><span>More...</span></button>
                                    </div>
                                </div>
                                <div class="header-menu"><strong title="CACHE">CACHE</strong>
                                    <div class="header-menu-items">
                                        <ul class="ant-menu ant-menu-root ant-menu-vertical ant-menu-light css-i6rspj" role="menu" tabindex="0" data-menu-list="true">
                                            <li class="ant-menu-item ant-menu-item-only-child" title="512MB" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-9-storage-devices/hard-drives/server-hard-drives/512mb.html"><span class="ant-menu-title-content">512MB</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="256MB" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-9-storage-devices/hard-drives/server-hard-drives/256mb.html"><span class="ant-menu-title-content">256MB</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="128MB" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-9-storage-devices/hard-drives/server-hard-drives/128mb.html"><span class="ant-menu-title-content">128MB</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="64MB" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-9-storage-devices/hard-drives/server-hard-drives/64mb.html"><span class="ant-menu-title-content">64MB</span></li>
                                            <li class="ant-menu-item ant-menu-item-only-child" title="32MB" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-19287-9-storage-devices/hard-drives/server-hard-drives/32mb.html"><span class="ant-menu-title-content">32MB</span></li>
                                        </ul>
                                        <div aria-hidden="true" style="display: none;"></div>
                                        <button id="header-menu-more-btn" type="button" class="ant-btn css-i6rspj ant-btn-default ant-btn-color-default ant-btn-variant-outlined"><span>More...</span></button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<script setup>
import { useSettings } from '@/composables/useSettings.js'
import { useCart } from '@/composables/useCart'
// const { removeCartItem } = useCart()

const { settings } = useSettings()
const { cartItemCount, fullCart, removeCartItem } = useCart()

const onImageError = (event) => {
  event.target.src = '/images/loader.gif'
}
</script>

<style scoped>
/* Optional scoped styling */
</style> 