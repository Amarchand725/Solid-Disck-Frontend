<template>
    <div class="ant-row css-i6rspj">
        <div class="ant-col ant-col-xs-4 css-i6rspj">
            <div class="product_view_left">
                <router-link 
                    :to="`/products/${product.category_url}/${product.slug}`"
                >
                    <img 
                        :alt="product?.title" 
                        :title="product?.title" 
                        loading="lazy" width="220" height="220" decoding="async" data-nimg="1"
                        :src="product?.thumbnail || '/placeholders/220x220.svg'" 
                        @error="onImageError"
                        style="color: transparent;"
                    >
                </router-link>
            </div>
        </div>
        <div class="ant-col ant-col-xs-12 css-i6rspj">
            <div class="product_view_mid">
                <router-link 
                    :to="`/products/${product.category_url}/${product.slug}`"
                >
                    <h3 :title="product?.title">
                        {{ shortDescription(product?.short_description, 150) }}
                    </h3>
                </router-link>
                <div class="mnp">
                    <p>
                        <b>MPN:&nbsp; </b>
                        <router-link 
                            :title="product?.mpn" 
                            to="#"
                        >
                            {{ product?.mpn }}
                        </router-link>
                        &nbsp;
                    </p>
                    
                    <span>|</span>

                    <p v-if="product && product.brand" :title="product.brand.name">
                        Brand:&nbsp;
                        <router-link 
                            style="color: black;"
                            to="#" 
                        >
                            {{ product?.brand.name }}
                        </router-link>
                        &nbsp;
                    </p>
                </div>
                <div class="specs"></div>
            </div>
        </div>
        <div class="ant-col ant-col-xs-8 css-i6rspj">
            <div class="product_view_right">
                <p class="in_stock" title="In Stock"><b>●</b> In Stock</p>
                <div class="shipping"><b>Product Condition: </b>
                    <p :title="product?.condition.name">{{ product?.condition.name }}</p>
                </div>
                <div class="__className_139476 cut_price">{{ settings?.currency ?? '' }} {{ product?.unit_price }}</div>
                <div class="__className_139476 main_price">{{ settings?.currency ?? '' }} {{ product?.discount_price }}</div>
                <div class="quantity_main">
                    <div class="qty_wrapper">
                        <span>Qty:</span>
                        <input
                            type="number"
                            v-model.number="quantities[product.slug]"
                            min="1"
                            max="1000" 
                            class="ant-input css-i6rspj ant-input-outlined"
                            placeholder="1"
                            value="1"
                        />
                    </div>
                    <div class="cart_icons">
                        <span @click="increaseQuantity(product)" role="img" aria-label="caret-up" tabindex="-1" class="anticon anticon-caret-up">
                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                            </svg>
                        </span>
                        <span @click="decreaseQuantity(product)" role="img" aria-label="caret-down" tabindex="-1" class="anticon anticon-caret-down">
                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <button @click="handleAddToCart(product)" :disabled="loading" title="Add To Cart" type="button" class="ant-btn css-i6rspj ant-btn-default ant-btn-color-default ant-btn-variant-outlined">
                    <span>{{ loading ? 'Adding...' : 'Add to Cart' }}</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
  product: Object,
  settings: Object,
  quantities: Object
})

const emit = defineEmits(['increase', 'decrease', 'add-to-cart'])

function increaseQuantity(product) {
  emit('increase', product)
}

function decreaseQuantity(product) {
  emit('decrease', product)
}

function handleAddToCart(product) {
  emit('add-to-cart', product)
}

function onImageError(e) {
  e.target.src = '/placeholders/220x220.svg'
}

// Short description formatter
function shortDescription(html, limit = '') {
    const text = (html || '').replace(/<[^>]*>/g, '');

    if (Number(limit) > 0) {
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    }

    return text;
}
</script>