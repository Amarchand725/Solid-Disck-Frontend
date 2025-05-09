<template>
    <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-16 ant-col-xl-16 css-i6rspj">
        <div class="product_detail_left">
            <h1 
                :title="shortDescription(productDetails?.short_description, 150)">
                {{ shortDescription(productDetails?.short_description, 150) }}
            </h1>
            <div class="ant-row css-i6rspj">
                <div class="ant-col ant-col-xs-24 css-i6rspj">
                    <div class="mnp">
                        <p :title="productDetails?.mpn">MPN: <span>{{ productDetails?.mpn }}</span></p>
                        <p v-if="productDetails && productDetails.brand" :title="productDetails.brand.name">
                            Brand:&nbsp;
                            <router-link to="#" style="color: black;">{{ productDetails.brand.name }}</router-link>
                        </p>
                        <p v-if="productDetails && productDetails.category" :title="productDetails.category.name">
                            Category:&nbsp;
                            <router-link to="#" style="color: black;">{{ productDetails.category.name }}</router-link>
                        </p>
                    </div>
                </div>
                <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-11 ant-col-xl-12 css-i6rspj">
                    <div class="product_image_main">
                        <div class="product_image_inner">
                            <img 
                                :alt="productDetails?.title" 
                                :title="productDetails?.title" 
                                fetchpriority="high" decoding="async" data-nimg="fill" class="prodcut_image"
                                sizes="(max-width: 1600) 100%, (max-width: 767) 70%" 
                                :srcset="productDetails?.thumbnail"
                                :src="productDetails?.thumbnail" 
                                style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                            >
                            <div class="product_magnifier" style="background-position: -78.6458px 42.3438px; 
                                background-image: url(&quot;https://alpha-project-new.s3.us-east-2.amazonaws.com/production/uploads/1153005/WUH722222ALE6L1.webp&quot;); 
                                background-size: 1200px 1200px; background-repeat: no-repeat; display: none; top: -46.9375px; left: 1.45833px; width: 100px; height: 100px;"
                            >
                            </div>
                        </div>
                    </div>
                    <p style="border-bottom: 1px solid rgb(204, 204, 204); color: rgb(0, 0, 0); padding: 1rem 0.5rem; font-size: 14px;">
                        Note: The images on our website are generic. Original product may differ from the image.
                    </p>
                    <div class="bottom_images">
                        <template v-if="productDetails?.images?.length">
                            <div 
                                class="bottom_imagesinner"
                                v-for="productImage in productDetails.images" :key="productImage.id"
                            >
                                <img 
                                    :alt="productDetails?.title" 
                                    title="productDetails?.title"
                                    fetchpriority="high" decoding="async" data-nimg="fill" class="" sizes="(max-width: 1600) 100%, (max-width: 767) 70%" 
                                    :srcset="productImage?.image"
                                    :src="productImage?.image" 
                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                                >
                            </div>
                        </template>
                    </div>
                </div>
                <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-13 ant-col-xl-12 css-i6rspj">
                    <div class="main_info_cart_sec">
                        <div class="qr_code_cart">
                            <div class="cut_price_main">
                                <span>
                                    {{ settings?.currency ?? '' }}{{ productDetails?.unit_price }}
                                </span>
                                <!-- <p>20% OFF</p> -->
                            </div>
                            <span class="product_price" style="margin-top: 15px;">
                                {{ settings?.currency ?? '' }}{{ productDetails?.discount_price }}
                            </span>
                            <span class="lease_price">Lease Pricing Available</span>
                        </div>
                        <div class="reviewd_yet_main">
                            <p>Not Yet Reviewed</p>
                            <div class="star_main">
                                <span role="img" aria-label="star" class="anticon anticon-star" style="color: rgb(189, 189, 189);">
                                    <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                                    </svg>
                                </span>
                                <span role="img" aria-label="star" class="anticon anticon-star" style="color: rgb(189, 189, 189);">
                                    <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                                    </svg>
                                    </span>
                                    <span role="img" aria-label="star" class="anticon anticon-star" style="color: rgb(189, 189, 189);">
                                        <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                                        </svg>
                                    </span>
                                    <span role="img" aria-label="star" class="anticon anticon-star" style="color: rgb(189, 189, 189);">
                                        <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                                        </svg>
                                        </span><span role="img" aria-label="star" class="anticon anticon-star" style="color: rgb(189, 189, 189);"><svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg></span></div>
                            <span
                            class="count">(0)</span>
                        </div>
                        <div class="avalibilty_main">
                            <div class="input_main">
                                <input
                                    type="number"
                                    v-model.number="quantity"
                                    min="0"
                                    class="ant-input css-i6rspj ant-input-outlined"
                                    placeholder="0"
                                />

                                <div class="cart_icons">
                                    <span @click="quantity++" role="img" aria-label="caret-up" tabindex="-1" class="anticon anticon-caret-up" style="color: rgb(0, 0, 0);">
                                        <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                            <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                                        </svg>
                                    </span>
                                    <span @click="quantity > 0 ? quantity-- : null" role="img" aria-label="caret-down" tabindex="-1" class="anticon anticon-caret-down">
                                        <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div class="availibility">
                                <p><b>Availability:</b> In Stock</p>
                                <span>Express Delivery in USA Get within 1 to 3 days</span>
                            </div>
                        </div>
                        <button @click="handleAddToCart" :disabled="loading" title="Add To Cart" type="button" class="ant-btn css-i6rspj ant-btn-default ant-btn-color-default ant-btn-variant-outlined add_to_cart">
                            <span>{{ loading ? 'Adding...' : 'Add to Cart' }}</span>
                        </button>
                        <div class="norton_image">
                            <img 
                                alt="Norton" 
                                title="Norton" 
                                loading="lazy" width="110" height="58" decoding="async" data-nimg="1" 
                                srcset="/assets/image/norton-secure.avif" 
                                src="/assets/image/norton-secure.avif"
                                style="color: transparent;"
                            >
                        </div>
                        <p 
                            class="para_bottom" 
                            :title="shortDescription(productDetails?.short_description, 150)"
                        >
                            {{ shortDescription(productDetails?.short_description, 150) }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue';
    import { useCart } from '@/composables/useCart'
    import { useSettings } from '@/composables/useSettings.js'
    const { settings } = useSettings()

    const props = defineProps({
        productDetails: Object
    })

    const quantity = ref(1);

    // const { addToCart, loading } = useCart()
    const { addToCart, loading, decreaseCartItem } = useCart()
    const handleAddToCart = async () => {
        await addToCart(props.productDetails.slug, quantity.value)
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
</script>