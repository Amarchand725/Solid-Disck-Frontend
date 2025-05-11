<template>
    <div class="top_related_products_sec" v-if="products?.length">
        <div class="top_related_products">
            <h3 style="font-size: 32px; font-weight: 700; line-height: 40px; margin-bottom: 25px;">Top Related Products</h3>
            <div class="owl-carousel undefined owl-loaded owl-drag">
                <div class="owl-stage-outer">
                    <div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all; width: 3126px;">
                        <div
                            class="owl-item active" 
                            style="width: 390.666px;"
                            v-for="product in products"
                        >
                            <div class="item">
                                <div class="top_main">
                                    <router-link
                                        :to="`/products/${product.category_url}/${product.slug}`"
                                        class="img_main" 
                                    >
                                        <img 
                                            :alt="product?.title" 
                                            :title="product?.title"
                                            fetchpriority="high" width="188" height="188" decoding="async" data-nimg="1" 
                                            :src="product?.thumbnail || '/placeholders/270x280.svg'"
                                            @error="onImageError"
                                            style="color: transparent;"
                                        >
                                    </router-link>
                                    <router-link 
                                        :to="`/products/${product.category_url}/${product.slug}`"
                                    >
                                        <h3 :title="shortDescription(product?.short_description, 80)" >
                                            {{ shortDescription(product?.short_description, 60) }}
                                        </h3>
                                    </router-link>
                                    <div class="checkbox_main">
                                        <div class="star_main">
                                            <span role="img" aria-label="star" class="anticon anticon-star" style="color: rgb(189, 189, 189);">
                                                <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                                </svg>
                                            </span>
                                            <span role="img" aria-label="star" class="anticon anticon-star" style="color: rgb(189, 189, 189);">
                                                <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                                </svg>
                                            </span>
                                            <span role="img" aria-label="star" class="anticon anticon-star" style="color: rgb(189, 189, 189);">
                                                <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                                </svg>
                                            </span>
                                            <span role="img" aria-label="star" class="anticon anticon-star" style="color: rgb(189, 189, 189);">
                                                <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                                </svg>
                                            </span>
                                            <span role="img" aria-label="star" class="anticon anticon-star" style="color: rgb(189, 189, 189);">
                                                <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <p class="count">(0)</p>
                                    </div>
                                    <div class="price_main">
                                        <p class="price cut">{{ settings?.currency ?? '' }}{{ product?.unit_price }}</p>
                                        <p class="price">{{ settings?.currency ?? '' }}{{ product?.discount_price }}</p>
                                    </div>
                                </div>
                                <button title="Add To Cart" type="button" class="ant-btn css-i6rspj ant-btn-default ant-btn-color-default ant-btn-variant-outlined">
                                    <span>Add To Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="owl-nav">
                    <button type="button" role="presentation" class="owl-prev">
                        <span aria-label="Previous">‹</span>
                    </button>
                    <button type="button" role="presentation" class="owl-next">
                        <span aria-label="Next">›</span>
                    </button>
                </div>
                <div class="owl-dots"></div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { useSettings } from '@/composables/useSettings.js'
    const { settings } = useSettings()

    const props = defineProps({
        products: Array
    })

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