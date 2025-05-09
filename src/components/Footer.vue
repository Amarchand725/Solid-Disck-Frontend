<template>
    <footer>
        <!-- Footer content -->
        <div class="footer-container">
            <div class="first-container">
                <div>
                    <router-link class="nav-link" to="/">
                        <img 
                            :alt="settings?.name" 
                            :title="settings?.name" 
                            loading="lazy" width="220" height="55" decoding="async" data-nimg="1" 
                            :srcset="settings?.logo || '/images/loader.gif'"
                            :src="settings?.logo || '/images/loader.gif'" 
                            @error="onImageError"
                            style="color: transparent;"
                        >
                    </router-link>
                    <div class="logo_bottom_para" style="width: 350px; margin-top: 10px;">
                        <div class="info-detail">
                            <span>Address</span>
                            <span>{{ settings?.address ?? '' }}</span>
                        </div>
                        <div class="info-detail">
                            <span>Phone</span>
                            <span>
                                <a href="tel:+{{ settings?.phone ?? '' }}" title="Call ETechBuy">{{ settings?.phone ?? '' }}</a>
                            </span>
                        </div>
                        <div class="info-detail">
                            <span>Email</span>
                            <span>
                                <div class="email-links">
                                    <a href="mailto:{{ settings?.support_email ?? '' }}" title="Contact our Support Team">{{ settings?.support_email ?? '' }}</a>
                                    <br>
                                    <a href="mailto:{{ settings?.sale_email ?? '' }}" title="Contact our Sales Team">{{ settings?.sale_email ?? '' }}</a>
                                </div>
                            </span>
                        </div>
                        <div class="info-detail">
                            <span>Working Hours</span>
                            <span>{{ settings?.day_range ?? '' }} / {{ settings?.start_time ?? '' }} - {{ settings?.end_time ?? '' }} ({{ settings?.timezone ?? '' }})</span>
                        </div>
                    </div>
                    <div class="social-icons">
                        <a target="_blank" class="footer_icon" v-if="settings && settings.instagram_link" :href="settings?.instagram_link">
                            <img src="/assets/image/Instagram-Footer-Icon.webp" aria-label="Visit our Instagram Page" title="Visit our Instagram Page" alt="Instagram Footer Icon">
                        </a>
                        <a target="_blank" class="footer_icon" v-if="settings && settings.facebook_link" :href="settings?.facebook_link">
                            <img src="/assets/image/Facebook-Footer-Icon.webp" aria-label="Visit our Facebook Page" title="Visit our Facebook Page" alt="Facebook Footer Icon">
                        </a>
                        <a target="_blank" class="footer_icon" v-if="settings && settings.youtube_link" :href="settings?.youtube_link">
                            <img src="/assets/image/Youtube-Footer-Icon.webp" aria-label="Visit our Youtube Channel" title="Visit our Youtube Channel" alt="Youtube Footer Icon">
                        </a>
                        <a target="_blank" class="footer_icon" v-if="settings && settings.twitter_link" :href="settings?.twitter_link">
                            <img src="/assets/image/Twitter-Footer-Icon.webp" aria-label="Visit our Twitter Page" title="Visit our Twitter Page" alt="Twitter Footer Icon">
                        </a>
                        <a target="_blank" class="footer_icon" v-if="settings && settings.pinterest_link" :href="settings?.pinterest_link">
                            <img src="/assets/image/Pinterest-Footer-Icon.webp" aria-label="Visit our Pinterest Page" title="Visit our Pinterest Page" alt="Pinterest Footer Icon">
                        </a>
                        <a target="_blank" class="footer_icon" v-if="settings && settings.reddit" :href="settings?.reddit">
                            <img src="/assets/image/Reddit-Footer-Icon.webp" aria-label="Visit our Reddit Community Page" title="Visit our Reddit Community Page" alt="Reddit Footer Icon">
                        </a>
                    </div>
                </div>
                <div style="display: flex; flex-direction: column;" v-if="categories?.length">
                    <h4 href="#" class="headlingTag" title="FEATURED CATEGORIES">FEATURED CATEGORIES</h4>
                    <router-link 
                        v-for="category in categories" 
                        :key="category.id"
                        class="tags" 
                        :title="category.name" 
                        to="#">
                        {{ category.name }}
                    </router-link>
                </div>
                <div style="display: flex; flex-direction: column;">
                    <h4 href="#" class="headlingTag">INFORMATION</h4>
                    <a class="tags" title="Privacy Policy" href="#">Privacy Policy</a>
                    <a class="tags" title="Return Policy" href="#">Return Policy</a>
                    <a class="tags" title="Warranty Info" href="#">Warranty Info</a>
                    <a class="tags" title="Shipping" href="#">Shipping</a>
                    <a class="tags" title="Tax Exempt" href="#">Tax Exempt</a>
                    <a class="tags" title="Payment Methods" href="#">Payment Methods</a>
                    <a class="tags" title="FAQs" href="/faq">FAQs</a>
                    <a class="tags" title="Terms &amp; Conditions" href="#">Terms &amp; Conditions</a>
                    <a class="tags" title="Request For Quote" href="#">Request For Quote</a>
                </div>
                <div>
                    <div style="display: flex; flex-direction: column;">
                        <h4 href="#" class="headlingTag">Customer Account</h4>
                        <router-link class="tags" title="Login" to="/login">Login</router-link>
                        <router-link class="tags" title="Register" to="/register">Register</router-link>
                        <a class="tags" title="My Account" href="#">My Account</a>
                        <a class="tags" title="Shopping Cart" href="#">Shopping Cart</a>
                        <a class="tags" title="Order Process" href="#">Order Process</a>
                        <a class="tags" title="Our Services" href="#">Our Services</a>
                        <a class="tags" title="About Us" href="#">About Us</a>
                        <a class="tags" title="Contact Us" href="#">Contact Us</a>
                        <router-link class="tags" title="Blogs" to="#">Blogs</router-link>
                        <a class="tags" title="Sitemap" href="#">Sitemap</a>
                    </div>
                    <div class="seals">
                        <img 
                            alt="SSL Secure Seal" 
                            title="SSL Secure Seal" 
                            loading="lazy" width="50" height="50" decoding="async" data-nimg="1" 
                            srcset="/assets/image/SSL_Seal.webp"
                            src="/assets/image/SSL_Seal.webp" 
                            style="color: transparent;"
                        >
                        <img 
                            alt="PCI Secure Seal" 
                            title="PCI Secure Seal" 
                            loading="lazy" width="50" height="50" decoding="async" data-nimg="1" 
                            srcset="/assets/image/PCI_Seal.webp"
                            src="/assets/image/PCI_Seal.webp" 
                            style="color: transparent;"
                        >
                        <img 
                            alt="DUNS Seal" 
                            title="DUNS Seal" 
                            loading="lazy" width="50" height="50" decoding="async" data-nimg="1" 
                            srcset="/assets/image/duns-seal-removebg-preview.avif"
                            src="/assets/image/duns-seal-removebg-preview.avif" 
                            style="color: transparent;"
                        >
                        <img 
                            alt="Norton Seal" 
                            title="Norton Seal" 
                            loading="lazy" width="50" height="50" decoding="async" data-nimg="1" 
                            srcset="/assets/image/Nortons-eal-removebg-preview.webp"
                            src="/assets/image/Nortons-eal-removebg-preview.webp" 
                            style="color: transparent;"
                        >
                    </div>
                </div>
            </div>
            <div class="secend-container">
                <div style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
                    <p>
                        ©2025 <a href="#" target="_blank" rel="noopener noreferrer">ETechBuy</a> All rights reserved
                    </p>
                    <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img 
                                alt="DMCA Protected" 
                                loading="lazy" width="140" height="30" decoding="async" data-nimg="1" 
                                srcset="/assets/image/dmca_protected_sml_120n.avif" 
                                src="/assets/image/dmca_protected_sml_120n.avif"
                                style="color: transparent; margin-top: 3px;"
                            >
                        </a>
                        <img 
                            alt="Payment Gateways" 
                            loading="lazy" width="250" height="30" decoding="async" data-nimg="1" 
                            srcset="/assets/image/payment-getways.avif"
                            src="/assets/image/payment-getways.avif" 
                            style="color: transparent;"
                        >
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup>
    import { onMounted } from 'vue'
    import { useSettings } from '@/composables/useSettings.js'
    import { useCategories } from '@/composables/useFeaturedCategories.js'
    const { settings } = useSettings()

    const onImageError = (event) => {
        event.target.src = '/images/loader.gif'
    }

    const { categories, loading, error, getCategories } = useCategories()

    onMounted(() => {
        getCategories()
    })
</script>

<style scoped>
/* Optional scoped styling */
</style> 