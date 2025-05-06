<template>
    <section class="top-seller-manufacturer-product-section" v-if="brands.length">
        <div class="ant-tabs ant-tabs-left top-seller-manufacturer-product-tab css-i6rspj" style="height: 700px;">
            <div role="tablist" class="ant-tabs-nav">
                <div class="ant-tabs-nav-wrap">
                    <div class="ant-tabs-nav-list" style="transform: translate(0px, 0px);">
                        <!-- <div data-node-key="2" class="ant-tabs-tab ant-tabs-tab-active"> -->
                        <div 
                            v-for="brand in brands" 
                            :key="brand.id"
                            :class="['ant-tabs-tab', { 'ant-tabs-tab-active': brand.id === activeBrandId }]"
                            @click="selectBrand(brand.id)"
                            >
                            <!-- <div role="tab" aria-selected="true" class="ant-tabs-tab-btn" tabindex="0" id="rc-tabs-0-tab-2" aria-controls="rc-tabs-0-panel-2"><span>Cisco</span></div> -->
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
                    <!-- <div id="rc-tabs-0-panel-2" role="tabpanel" tabindex="0" aria-labelledby="rc-tabs-0-tab-2" aria-hidden="false" class="ant-tabs-tabpane ant-tabs-tabpane-active"> -->
                    <div 
                        v-for="product in activeBrand.products"
                        :key="product.id"
                        role="tabpanel"
                        :id="`rc-tabs-0-panel-${activeBrand.id}`"
                        :aria-labelledby="`rc-tabs-0-tab-${activeBrand.id}`"
                        class="ant-tabs-tabpane ant-tabs-tabpane-active"
                    >
                        <div class="top-seller-manufacturer-product-tab-content-main-cards">
                            <div class="TabProductCard_industries_card_main__imFgg">
                                <router-link class="TabProductCard_image_main__n81WY" to="#">
                                    <img alt="Catalyst 3850 Series C3850-48F 48 x RJ-45 Ports PoE+ 10/100/1000Base-T Layer 3 Managed 1U Rack-mountable Stackable Gigabit Ethernet Network Switch" title="Catalyst 3850 Series C3850-48F 48 x RJ-45 Ports PoE+ 10/100/1000Base-T Layer 3 Managed 1U Rack-mountable Stackable Gigabit Ethernet Network Switch"
                                    fetchpriority="high" width="270" height="280" decoding="async" data-nimg="1" srcset="/assets/image/WS-C3850-48F-S.avif"
                                    src="/assets/image/WS-C3850-48F-S.avif" style="color: transparent; max-width: 100%; height: auto;">
                                </router-link>
                                <span class="TabProductCard_category__yj7NY">Switches</span>
                                <a class="TabProductCard_title_main__m3y_P" title="Catalyst 3850 Series C3850-48F 48 x RJ-45 Ports PoE+ 10/100/1000Base-T Layer 3 Managed 1U Rack-mountable Stackable Gigabit Ethernet Network Switch" href="/ws-c3850-48f-s/30543950.html">
                                    Catalyst 3850 Series C3850-48F 48 x RJ-4...
                                </a>
                                <div class="TabProductCard_pricing__n1Y_K">
                                    <span class="TabProductCard_price__JKv5c">
                                        <div>
                                            <span style="font-size: 16px; font-weight: 400; text-decoration: line-through; margin-right: 8px; color: rgb(0, 0, 0);">
                                                $319.88
                                            </span>
                                        </div>
                                        <span class="TabProductCard_product_price__miZKi" style="margin-top: 18px;">$255.90</span>
                                    </span>
                                    <a href="/ws-c3850-48f-s/30543950.html">
                                        <span role="img" aria-label="eye" class="anticon anticon-eye">
                                            <svg viewBox="64 64 896 896" focusable="false" data-icon="eye" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                                <div class="TabProductCard_card_bottom__WLdA5">
                                    <button class="TabProductCard_add_to_cart_btn___s_fG" title="Add To Cart">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <a class="top-seller-manufacturer-product-tab-explore-more-btn" title="Explore More" href="#">Explore More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useBrands } from '@/composables/useBrands.js'

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
