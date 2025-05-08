<template>
    <router-link
        :to="`/single-product/${product.slug}`"
        class="TabProductCard_image_main__n81WY"
    >
        <img 
            :alt="product.title"
            :title="product.title"
            fetchpriority="high" width="270" height="280" decoding="async" data-nimg="1" 
            :srcset="product.thumbnail"
            :sr="product.thumbnail"
            style="color: transparent; max-width: 100%; height: auto;"
        />

    </router-link>
    <span class="TabProductCard_category__yj7NY" v-if="product.category">
        {{ product.category.name }}
    </span>
    <router-link class="TabProductCard_title_main__m3y_P" title="{{ product.title }}" to="">
        {{ product.title }}
    </router-link>
    <div class="TabProductCard_pricing__n1Y_K">
        <span class="TabProductCard_price__JKv5c">
            <div>
                <span style="font-size: 16px; font-weight: 400; text-decoration: line-through; margin-right: 8px; color: rgb(0, 0, 0);">
                    {{ settings?.currency ?? '' }}{{ product.unit_price }}
                </span>
            </div>
            <span class="TabProductCard_product_price__miZKi" style="margin-top: 18px;">
                {{ settings?.currency ?? '' }}{{ product.discount_price }}
            </span>
        </span>
        <router-link to="#">
            <span role="img" aria-label="eye" class="anticon anticon-eye">
                <svg viewBox="64 64 896 896" focusable="false" data-icon="eye" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                </svg>
            </span>
        </router-link>
    </div>
    <div class="TabProductCard_card_bottom__WLdA5">
        <button @click="handleAddToCart" :disabled="loading" class="TabProductCard_add_to_cart_btn___s_fG" title="Add To Cart">
            {{ loading ? 'Adding...' : 'Add to Cart' }}
        </button>
    </div>
</template>
<script setup>
import { useSettings } from '@/composables/useSettings.js'
import { useCart } from '@/composables/useCart'

const { settings } = useSettings()

const { addToCart, loading } = useCart()

const props = defineProps({
  product: Object
})

const handleAddToCart = async () => {
  await addToCart(props.product.slug, 1)
}
</script>