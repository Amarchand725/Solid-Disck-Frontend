<template>
    <nav class="navbar navbar-expand u-header__navbar py-0 justify-content-xl-between max-width-270 min-width-270">
        <!-- Logo -->
        <router-link class="nav-link" to="/">
            <img
                width="200"
                :src="settings?.logo || '/images/loader.gif'"
                alt="Logo"
                @error="onImageError"
            />
        </router-link>
        <!-- End Logo -->

        <!-- Fullscreen Toggle Button -->
        <button id="sidebarHeaderInvokerMenu" type="button" class="navbar-toggler d-block btn u-hamburger mr-3 mr-xl-0"
            aria-controls="sidebarHeader"
            aria-haspopup="true"
            aria-expanded="false"
            data-unfold-event="click"
            data-unfold-hide-on-scroll="false"
            data-unfold-target="#sidebarHeader1"
            data-unfold-type="css-animation"
            data-unfold-animation-in="fadeInLeft"
            data-unfold-animation-out="fadeOutLeft"
            data-unfold-duration="500">
            <span id="hamburgerTriggerMenu" class="u-hamburger__box">
                <span class="u-hamburger__inner"></span>
            </span>
        </button>
        <!-- End Fullscreen Toggle Button -->
    </nav>
</template>
<script setup>
    import { useSettings } from '@/composables/useSettings.js'
    const { settings } = useSettings()

    const onImageError = (event) => {
        event.target.src = '/images/loader.gif'
    }
</script>

<style scoped>
/* Optional scoped styling */
</style> 