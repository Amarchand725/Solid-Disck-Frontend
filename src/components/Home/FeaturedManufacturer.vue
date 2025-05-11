<template>
    <section class="manufacturer_partners_section">
        <h2>Featured Manufacturers</h2>
        <div class="ant-row manufacturer_partners_card_main css-i6rspj" style="margin-left: -10px; margin-right: -10px; row-gap: 20px;"
            v-if="brands?.length"
        >
            <div 
                v-for="brand in brands" 
                :key="brand.id"
                class="ant-col manufacturer_partners_card_inner css-i6rspj" 
                style="padding-left: 10px; padding-right: 10px; flex-basis: 20%; max-width: 20%;"
            >
                <router-link 
                    class="popular_cards_main_inner-a" 
                    title="{{ brand.name }}" 
                    to="#"
                >
                    <div class="manufacturer_inner">
                        <img 
                            :alt="brand.name"
                            :title="brand.name"
                            loading="lazy" width="110" height="70" decoding="async" data-nimg="1" 
                            class="manufacturer_image" 
                            :src="brand.logo || '/placeholders/110x70.svg'"
                            @error="onImageError"
                            style="color: transparent;"
                        >
                    </div>
                </router-link >
            </div>
        </div>
    </section>
</template>
<script setup>
import { onMounted } from 'vue'
import { useBrands } from '@/composables/useFeaturedBrands.js'

const { brands, loading, error, getBrands } = useBrands()

onMounted(() => {
  getBrands()
})

const onImageError = (event) => {
    event.target.src = '/placeholders/110x70.svg'
}
</script>