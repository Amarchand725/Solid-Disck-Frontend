<template>
    <section class="top-seller-manufacturer-product-section" v-if="brands.length">
        <div class="ant-tabs ant-tabs-left top-seller-manufacturer-product-tab css-i6rspj" style="height: 700px;">
            <div role="tablist" class="ant-tabs-nav">
                <div class="ant-tabs-nav-wrap">
                    <div class="ant-tabs-nav-list" style="transform: translate(0px, 0px);">
                        <div 
                            v-for="brand in brands" 
                            :key="brand.id"
                            :class="['ant-tabs-tab', { 'ant-tabs-tab-active': brand.id === activeBrandId }]"
                            @click="selectBrand(brand.id)"
                            >
                            <div 
                                class="ant-tabs-tab-btn"
                                :id="`rc-tabs-0-tab-${brand.id}`"
                                :aria-controls="`rc-tabs-0-panel-${brand.id}`"
                                role="tab"
                                :aria-selected="brand.id === activeBrandId"
                            >
                                <span>{{ brand.name }}</span>   
                            </div>
                        </div>
                        <div class="ant-tabs-ink-bar ant-tabs-ink-bar-animated" style="height: 44px; top: 22px; transform: translateY(-50%);"></div>
                    </div>
                </div>
                <div class="ant-tabs-nav-operations ant-tabs-nav-operations-hidden">
                    <button type="button" class="ant-tabs-nav-more" tabindex="-1" aria-hidden="true" aria-haspopup="listbox" aria-controls="rc-tabs-0-more-popup" id="rc-tabs-0-more" aria-expanded="false" style="visibility: hidden; order: 1;"><span role="img" aria-label="ellipsis" class="anticon anticon-ellipsis"><svg viewBox="64 64 896 896" focusable="false" data-icon="ellipsis" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"></path></svg></span></button>
                </div>
                <div class="ant-tabs-extra-content">
                    <div class="extra_tabbar_content">
                        <h2 title="Top Manufacturers Product">Top Manufacturers Product</h2>
                    </div>
                </div>
            </div>
            <div class="ant-tabs-content-holder">
                <div class="ant-tabs-content ant-tabs-content-left" v-if="activeBrand && activeBrand.products.length">
                    <div
                        role="tabpanel"
                        :id="`rc-tabs-0-panel-${activeBrand.id}`"
                        :aria-labelledby="`rc-tabs-0-tab-${activeBrand.id}`"
                        class="ant-tabs-tabpane ant-tabs-tabpane-active"
                    >
                        <div class="top-seller-manufacturer-product-tab-content-main-cards">
                            <div
                                v-for="product in activeBrand.products"
                                :key="product.id" 
                                class="TabProductCard_industries_card_main__imFgg"
                                >
                                <ProductCard :product="product" />
                            </div>
                        </div>
                    </div>
                </div>
                <a class="top-seller-manufacturer-product-tab-explore-more-btn" title="Explore More" href="#">Explore More</a>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useBrands } from '@/composables/useBrands.js'
import ProductCard from './ProductCard.vue'

// Step 1: Get brands from composable
const { brands, getBrands } = useBrands()

// Step 2: Track which brand tab is active
const activeBrandId = ref(null)

// Step 3: Compute the active brand based on the ID
const activeBrand = computed(() => {
  return brands.value.find(b => b.id === activeBrandId.value)
})

// Step 4: When component mounts, fetch and set first active brand
onMounted(async () => {
  await getBrands()
  if (brands.value.length) {
    activeBrandId.value = brands.value[0].id // auto-select first brand
  }
})

// Step 5: Change active brand on click
const selectBrand = (id) => {
  activeBrandId.value = id
}
</script>
