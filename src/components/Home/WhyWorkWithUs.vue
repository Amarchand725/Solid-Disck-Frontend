<template>
    <section class="why_work_with_us">
        <div class="left_banner_container">
            <router-link to="/">
                <img 
                    v-if="bannerObj.left" 
                    :alt="bannerObj.left.title" 
                    :title="bannerObj.left.title" 
                    loading="lazy" width="200" height="200" decoding="async" data-nimg="1" 
                    :srcset="bannerObj.left.banner"
                    :src="bannerObj.left.banner || '/placeholders/200x200.svg'" 
                    @error="onImageError"
                    style="color: transparent;"
                >
            </router-link>
        </div>
        <div class="why_work_with_us_content">
            <h2>ASK, COMPARE &amp; ORDER</h2>
            <div class="bottom_card_main">
                <div class="work_with_us_card" title="Connect with Our Experts – Call Now">
                    <a href="tel:+18887195848">
                        <div class="inner"><img alt="why-work-with-us-image" title="why-work-with-us-image" loading="lazy" width="45" height="45" decoding="async" data-nimg="1" srcset="/assets/image/Call-Icon-home.avif"
                            src="/assets/image/Call-Icon-home.avif" style="color: transparent;"></div><span>Call Now</span></a>
                </div>
                <div class="work_with_us_card center" title="Make Smarter Choices – Compare Now">
                    <a href="/compare">
                        <div class="inner"><img alt="why-work-with-us-image" title="why-work-with-us-image" loading="lazy" width="45" height="45" decoding="async" data-nimg="1" srcset="/assets/image/Compare-Product-Icon.webp"
                            src="/assets/image/Compare-Product-Icon.webp" style="color: transparent;"></div><span>Compare Now</span></a>
                </div>
                <div class="work_with_us_card" title="Choose Your Server Solution">
                    <a href="/configurator">
                        <div class="inner"><img alt="why-work-with-us-image" title="why-work-with-us-image" loading="lazy" width="45" height="45" decoding="async" data-nimg="1" srcset="/assets/image/Shop-By-Server-Icon.webp"
                            src="/assets/image/Shop-By-Server-Icon.webp" style="color: transparent;"></div><span>Shop By Server</span></a>
                </div>
                <div class="work_with_us_card right" title="Compatible Upgrades for Your PC">
                    <a href="/group-products">
                        <div class="inner"><img alt="why-work-with-us-image" title="why-work-with-us-image" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" srcset="/assets/image/group-product-icon.webp"
                            src="/assets/image/group-product-icon.webp" style="color: transparent; filter: brightness(0) invert(1);"></div><span>Group Products</span></a>
                </div>
            </div>
            <a class="create_an_account" title="Create An Account" href="/login">Create An Account</a>
        </div>
        <div class="right_banner_container">
            <router-link to="/">
                <img 
                    v-if="bannerObj.right" 
                    :alt="bannerObj.right.title" 
                    :title="bannerObj.right.title" 
                    loading="lazy" width="200" height="200" decoding="async" data-nimg="1" 
                    :srcset="bannerObj.right.banner"
                    :src="bannerObj.right.banner || '/placeholders/200x200.svg'" 
                    @error="onImageError"
                    style="color: transparent;"
                >
            </router-link>
        </div>
    </section>
</template>
<script setup>
import { onMounted, computed } from 'vue'
import { useBanners } from '@/composables/useBanners.js'

const { banners, getBanners } = useBanners()

onMounted(() => {
  getBanners()
})

const bannerObj = computed(() => {
  const bannersList = banners.value ?? []
  return {
    left: bannersList.find(b => b.title?.toLowerCase() === 'left banner') ?? null,
    right: bannersList.find(b => b.title?.toLowerCase() === 'right banner') ?? null
  }
})

const onImageError = (event) => {
    event.target.src = '/placeholders/200x200.svg'
}

</script>