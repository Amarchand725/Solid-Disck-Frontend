<template>
    <div class="ant-row navbar-menu css-i6rspj">
        <div class="ant-col ant-col-10 css-i6rspj">
            <ul class="ant-menu-overflow ant-menu ant-menu-root ant-menu-horizontal ant-menu-light nav-menu-custom css-i6rspj" role="menu" tabindex="0" data-menu-list="true" style="width: 100%;">
                <li class="ant-menu-overflow-item ant-menu-submenu ant-menu-submenu-horizontal" role="none" style="opacity: 1; order: 0;">
                    <div class="dropdown-container">
                            <button class="dropdown-btn">Shop By Category</button>
                            <ul class="dropdown-menu">
                              <li class="dropdown-item">
                                Storage Devices
                                <ul class="submenu">
                                  <li class="dropdown-item">
                                    Hard Drives
                                    <ul class="submenu">
                                      <li class="dropdown-item">Server Hard Drives</li>
                                      <li class="dropdown-item">Desktop Hard Drives</li>
                                      <li class="dropdown-item">Laptop Hard Drives</li>
                                    </ul>
                                  </li>
                                  <li class="dropdown-item">Solid State Drives</li>
                                  <li class="dropdown-item">USB Flash Drives</li>
                                </ul>
                              </li>
                              <li class="dropdown-item">Memory</li>
                              <li class="dropdown-item">Network & Accessories</li>
                              <li class="dropdown-item">PC & Servers</li>
                              <li class="dropdown-item">Softwares</li>
                            </ul>
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
<style>
      .dropdown-container {
      position: relative;
      display: inline-block;
    }

    .dropdown-btn {
      /* background-color: #003366; */
      color: #fff;
      padding: 12px 18px;
      font-size: 16px;
      font-weight: bold;
      border: none;
      cursor: pointer;
    }

    .dropdown-menu,
    .submenu {
      list-style: none;
      margin: 0;
      padding: 0;
      position: absolute;
      display: none;
      background-color: #ffffff;
      min-width: 220px;
      border: 1px solid #ccc;
      z-index: 999;
      /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
    }

    .dropdown-menu {
      top: 100%;
      left: 0;
    }

    .submenu {
      top: 0;
      left: 100%;
    }

    .dropdown-item {
      padding: 5px 5px;
      cursor: pointer;
      white-space: nowrap;
      position: relative;
      background-color: #ffffff;
      color: #333;
      transition: background-color 0.3s ease;
    }

    .dropdown-item:hover {
      background-color: #f5f5f5;
    }

    .dropdown-item:hover > .submenu {
      display: block;
    }

    .dropdown-container:hover .dropdown-menu {
      display: block;
    }

    .dropdown-item:has(.submenu)::after {
      content: '>';
      position: absolute;
      right: 12px;
      color: #000000;
      font-size: 12px;
    }
    </style>