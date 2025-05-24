<template>
    <div class="top_related_products_sec" v-if="products?.length">
        <div class="top_related_products">
            <h3 style="font-size: 32px; font-weight: 700; line-height: 40px; margin-bottom: 25px;">Top Related Products</h3>
            <Swiper
                :slides-per-view="4"
                :space-between="20"
                :navigation="true"
                :pagination="{ clickable: true }"
                :autoplay="{ delay: 3000 }"
                loop
                class="top_related_swiper"
            >
                <SwiperSlide v-for="product in products" :key="product.id">
                    <div class="item">
                        <div class="top_main">
                            <router-link
                            :to="`/products/${product.category_url}/${product.slug}`"
                            class="img_main"
                            >
                            <img
                                :alt="product?.title"
                                :title="product?.title"
                                fetchpriority="high" width="188" height="188" decoding="async"
                                :src="product?.thumbnail || '/placeholders/270x280.svg'"
                                @error="onImageError"
                                style="color: transparent;"
                            />
                            </router-link>
                            <router-link :to="`/products/${product.category_url}/${product.slug}`">
                            <h3 :title="shortDescription(product?.short_description, 80)">
                                {{ shortDescription(product?.short_description, 60) }}
                            </h3>
                            </router-link>

                            <!-- Rating and pricing sections remain the same -->
                            <div class="checkbox_main"> ... </div>
                            <div class="price_main" v-if="product?.discount_price"> ... </div>
                            <div class="price_main" v-else> ... </div>
                        </div>

                        <button @click="handleAddToCart(product)" :title="'Add To Cart'" type="button" class="ant-btn">
                            {{ loadingMap[product.slug] ? 'Adding...' : 'Add to Cart' }}
                        </button>
                        <button style="background-color: #f5ad1d !important;" @click="handleBuyItNow(product)" :disabled="loading2" class="ant-btn" title="Buy It Now">
                            {{ buyingMap[product.slug] ? 'Buying...' : 'Buy It Now' }}
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>
<script setup>
    // Swiper
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { Autoplay } from 'swiper/modules'
    import 'swiper/css'
    import 'swiper/css/navigation'
    import 'swiper/css/pagination'
    import { useSettings } from '@/composables/useSettings.js'
    import { useCart } from '@/composables/useCart'
    import { ref } from 'vue'
    
    const { settings } = useSettings()
    const { addToCart, buyItNow } = useCart()

    const loadingMap = ref({})
    const buyingMap = ref({})


    const props = defineProps({
        products: Array
    })

    const handleAddToCart = async (product) => {
        loadingMap.value[product.slug] = true
        try {
            await addToCart(product.slug, 1)
        } finally {
            loadingMap.value[product.slug] = false
        }
    }

    const handleBuyItNow = async (product) => {
        buyingMap.value[product.slug] = true
        try {
            await buyItNow(product.slug, 1)
        } finally {
            buyingMap.value[product.slug] = false
        }
    }

    function shortDescription(html, limit = '') {
        const text = (html || '').replace(/<[^>]*>/g, ''); // strip HTML tags safely

        // If limit is a number and greater than 0, apply truncation
        if (Number(limit) > 0) {
            return text.length > limit ? text.substring(0, limit) + '...' : text;
        }

        // Otherwise, return the full text
        return text;
    }

    const onImageError = (event) => {
        event.target.src = '/placeholders/270x280.svg'
    }
</script>