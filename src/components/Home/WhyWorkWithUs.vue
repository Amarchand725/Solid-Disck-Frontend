<template>
    <section class="why_work_with_us">
        <div class="left_banner_container">
            <router-link 
                v-if="bannerObj.left?.category"
                :to="`/categories/${bannerObj.left.category.category_url}`"
                >

                <picture v-if="bannerObj.left" >
                    <source
                        :srcset="bannerObj.left.banner || '/placeholders/270x280.svg'"
                        type="image/webp"
                    />
                    <img
                        :alt="bannerObj.left.title" 
                        :title="bannerObj.left.title" 
                        loading="lazy" width="200" height="200" decoding="async" data-nimg="1" 
                        :src="bannerObj.left.banner || '/placeholders/200x200.svg'" 
                        @error="onImageError"
                        style="color: transparent;"
                    >
                </picture>
            </router-link>
        </div>
        <div class="why_work_with_us_content">
            <h2>ASK, COMPARE &amp; ORDER</h2>
            <div class="bottom_card_main">
                <div class="work_with_us_card" title="Connect with Our Experts – Call Now">
                    <a :href="`tel:${settings?.phone}`">
                        <div class="inner">
                            <img 
                                alt="why-work-with-us-image" 
                                title="why-work-with-us-image" 
                                loading="lazy" width="45" height="45" decoding="async" data-nimg="1" 
                                srcset="/assets/image/Call-Icon-home.avif"
                                src="/assets/image/Call-Icon-home.avif" 
                                style="color: transparent;"
                            >
                        </div>
                        <span>Call Now</span>
                    </a>
                </div>
                <div class="work_with_us_card center" title="Make Smarter Choices – Compare Now">
                    <router-link to="/products/compare">
                        <div class="inner">
                            <img alt="why-work-with-us-image" title="why-work-with-us-image" loading="lazy" width="45" height="45" decoding="async" data-nimg="1" 
                                srcset="/assets/image/Compare-Product-Icon.webp"
                                src="/assets/image/Compare-Product-Icon.webp" 
                                style="color: transparent;"
                            >
                        </div>
                        <span>Compare Now</span>
                    </router-link>
                </div>
                <div class="work_with_us_card" title="Choose Your Server Solution">
                    <router-link to="/products/configurator">
                        <div class="inner">
                            <img alt="why-work-with-us-image" title="why-work-with-us-image" loading="lazy" width="45" height="45" decoding="async" data-nimg="1" 
                                srcset="/assets/image/Shop-By-Server-Icon.webp"
                                src="/assets/image/Shop-By-Server-Icon.webp" 
                                style="color: transparent;"
                            >
                        </div>
                        <span>Shop By Server</span>
                    </router-link>
                </div>
            </div>
            <router-link class="create_an_account" title="Create An Account" to="/register">Create An Account</router-link>
        </div>
        <div class="right_banner_container">
            <router-link 
                v-if="bannerObj.right?.category"
                :to="`/categories/${bannerObj.right.category.category_url}`"
            >
                <picture v-if="bannerObj.right" >
                    <source
                        :srcset="bannerObj.right.banner || '/placeholders/270x280.svg'"
                        type="image/webp"
                    />
                    <img 
                        :alt="bannerObj.right.title" 
                        :title="bannerObj.right.title" 
                        loading="lazy" width="200" height="200" decoding="async" data-nimg="1" 
                        :src="bannerObj.right.banner || '/placeholders/200x200.svg'" 
                        @error="onImageError"
                        style="color: transparent;"
                    >
                </picture>
            </router-link>
        </div>
    </section>
</template>
<script setup>
import { onMounted, computed } from 'vue'
import { useBanners } from '@/composables/useBanners.js'
import { useSettings } from '@/composables/useSettings.js'
const { settings } = useSettings();

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