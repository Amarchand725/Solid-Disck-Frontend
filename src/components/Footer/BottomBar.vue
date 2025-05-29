<template>
    <div class="secend-container">
        <div style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
            <p>
                © {{ currentYear }} <router-link to="/" target="_blank" rel="noopener noreferrer">{{ settings?.name }}</router-link> All rights reserved
            </p>
            <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                <!-- <a href="#" target="_blank" rel="noopener noreferrer">
                    <img 
                        alt="DMCA Protected" 
                        loading="lazy" width="140" height="30" decoding="async" data-nimg="1" 
                        srcset="/assets/image/dmca_protected_sml_120n.avif" 
                        src="/assets/image/dmca_protected_sml_120n.avif"
                        style="color: transparent; margin-top: 3px;"
                    >
                </a> -->
                <!-- <img 
                    alt="Payment Gateways" 
                    loading="lazy" width="100" height="50" decoding="async" data-nimg="1" 
                    srcset="/assets/logos/secure.png"
                    src="/assets/logos/secure.png" 
                    style="color: transparent;"
                > -->
                <img 
                    alt="Payment Gateways" 
                    loading="lazy" width="400" height="80" decoding="async" data-nimg="1"  
                    srcset="/assets/image/payment-getways.webp"
                    src="/assets/image/payment-getways.webp" 
                    style="color: transparent;"
                >
            </div>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        settings: Object,
        currentYear: Number
    })
</script>