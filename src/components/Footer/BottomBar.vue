<template>
    <div class="secend-container">
        <div style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
            <p>
                © {{ currentYear }} <router-link to="/" target="_blank" rel="noopener noreferrer">{{ settings?.name }}</router-link> All rights reserved
            </p>
            <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                <a href="//www.dmca.com/Protection/Status.aspx?ID=99871f18-5690-4a47-8ad1-c86661b95c31" title="DMCA.com Protection Status" class="dmca-badge"> 
                    <img src ="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=99871f18-5690-4a47-8ad1-c86661b95c31"  alt="DMCA.com Protection Status" />
                    <!-- <img 
                        alt="DMCA.com Protection Status" 
                        srcset="/assets/image/dmca-blue.webp"
                        src ="/assets/image/dmca-blue.webp"  
                        loading="lazy" width="92" height="35" decoding="async" data-nimg="1"  
                        /> -->
                </a>  
                <img 
                    alt="Payment Gateways" 
                    loading="lazy" width="261" height="29" decoding="async" data-nimg="1"  
                    srcset="/assets/image/visa-card.webp"
                    src="/assets/image/visa-card.webp" 
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