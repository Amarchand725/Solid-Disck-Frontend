<template>
    <div>
        <router-link class="nav-link" to="/">
            <img 
                :alt="settings?.name" 
                :title="settings?.name" 
                loading="lazy" width="220" height="50" decoding="async" data-nimg="1" 
                :src="settings?.white_logo || '/placeholders/220x50.svg'" 
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
                    <a href="tel:+{{ settings?.phone ?? '' }}" title="Call Soliddiskdirect">{{ settings?.phone ?? '' }}</a>
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
</template>
<script setup>
    const props = defineProps({
        settings: Object
    })

    const onImageError = (event) => {
        event.target.src = '/placeholders/220x50.svg'
    }
</script>