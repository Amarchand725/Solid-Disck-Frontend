<template>
    <div class="ant-row navbar-menu css-i6rspj">
        <div class="ant-col ant-col-10 css-i6rspj">
            <ul class="ant-menu-overflow ant-menu ant-menu-root ant-menu-horizontal ant-menu-light nav-menu-custom css-i6rspj" role="menu" tabindex="0" data-menu-list="true" style="width: 100%;">
                <li class="ant-menu-overflow-item ant-menu-submenu ant-menu-submenu-horizontal" role="none" style="opacity: 1; order: 0;">
                    <div role="menuitem" class="ant-menu-submenu-title" tabindex="-1" aria-expanded="false" aria-haspopup="true" data-menu-id="rc-menu-uuid-26089-1-/categories" aria-controls="rc-menu-uuid-26089-1-/categories-popup">
                        <img src="/assets/image/cart-right-icon.webp" alt="Cart Right Icon" class="ant-menu-item-icon" style="width: 10px; rotate: -90deg; filter: brightness(0) invert(1);">
                        <span class="ant-menu-title-content">
                            <span>Shop By Category</span>
                        </span>
                        <i class="ant-menu-submenu-arrow"></i>
                    </div>
                </li>
                <li class="ant-menu-overflow-item ant-menu-overflow-item-rest ant-menu-submenu ant-menu-submenu-horizontal ant-menu-submenu-disabled" aria-hidden="true" role="none" style="opacity: 0; height: 0px; overflow-y: hidden; order: 2147483647; pointer-events: none; position: absolute;">
                    <div role="menuitem" class="ant-menu-submenu-title" aria-expanded="false" aria-haspopup="true" aria-disabled="true" data-menu-id="rc-menu-uuid-26089-1-rc-menu-more" aria-controls="rc-menu-uuid-26089-1-rc-menu-more-popup">
                        <span role="img" aria-label="ellipsis" class="anticon anticon-ellipsis">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="ellipsis" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"></path>
                            </svg>
                        </span>
                        <i class="ant-menu-submenu-arrow"></i>
                    </div>
                </li>
            </ul>
            <div aria-hidden="true" style="display: none;"></div>
        </div>
        <div class="ant-col ant-col-14 contact-now-container css-i6rspj">
            <div class="track-order-container">
                <div class="contact-now-link trackorder_link" role="button" tabindex="0" style="cursor: pointer;">
                    <img src="/assets/image/Track-Order-Icon.webp" alt="Track Order Icon" title="Track Your Order">
                    <span class="contact-now" title="Track Your Order">Track Order</span>
                </div>
            </div>
            <a href="mailto:{{ settings?.support_email ?? '' }}" class="contact-now-link">
                <img src="/assets/image/Mail-Icon.webp" alt="Mail Icon" title="Contact our support team">
                <span class="contact-now" title="Contact our support team">{{ settings?.support_email ?? '' }}</span>
            </a>
            <a href="tel:+{{ settings?.phone ?? '' }}" class="contact-now-link">
                <img src="/assets/image/Call-Icon.webp" alt="Call Icon" title="Call {{ settings?.name ?? '' }}">
                <span class="contact-now" title="Call {{ settings?.name ?? '' }}">{{ settings?.phone ?? '' }}</span>
            </a>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        settings: Object
    })
</script>