<template>
    <section class="top-seller-category-product-section" v-if="categories.length">
        <div class="ant-tabs ant-tabs-right top-seller-category-product-tab css-i6rspj" style="height: 700px;">
            <div role="tablist" class="ant-tabs-nav">
                <div class="ant-tabs-nav-wrap">
                    <div class="ant-tabs-nav-list" style="transform: translate(0px, 0px);">
                        <div 
                            v-for="category in categories" 
                            :key="category.id"
                            :class="['ant-tabs-tab', { 'ant-tabs-tab-active': category.id === activeId }]"
                            @click="selectCategory(category.id)"
                            >
                            <div 
                                class="ant-tabs-tab-btn"
                                :id="`rc-tabs-0-tab-${category.id}`"
                                :aria-controls="`rc-tabs-0-panel-${category.id}`"
                                role="tab"
                                :aria-selected="category.id === activeId"
                            >
                                <span>{{ category.name }}</span>   
                            </div>
                        </div>
                        <div class="ant-tabs-ink-bar ant-tabs-ink-bar-animated" style="height: 44px; top: 22px; transform: translateY(-50%);"></div>
                    </div>
                </div>
                <div class="ant-tabs-nav-operations ant-tabs-nav-operations-hidden">
                    <button type="button" class="ant-tabs-nav-more" tabindex="-1" aria-hidden="true" aria-haspopup="listbox" aria-controls="rc-tabs-1-more-popup" id="rc-tabs-1-more" aria-expanded="false" style="visibility: hidden; order: 1;">
                        <span role="img" aria-label="ellipsis" class="anticon anticon-ellipsis">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="ellipsis" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"></path>
                            </svg>
                        </span>
                    </button>
                </div>
                <div class="ant-tabs-extra-content">
                    <div class="extra_tabbar_content">
                        <h2 title="Top Categories Product">Top Categories Product</h2>
                    </div>
                </div>
            </div>
            <div class="ant-tabs-content-holder">
                <div class="ant-tabs-content ant-tabs-content-right" v-if="activeCategory && activeCategory.products.length">
                    <div 
                        role="tabpanel" tabindex="0" 
                        :id="`rc-tabs-1-panel-${activeCategory.id}`"
                        :aria-labelledby="`rc-tabs-1-tab-${activeCategory.id}`"
                        aria-hidden="false" 
                        class="ant-tabs-tabpane ant-tabs-tabpane-active"
                    >
                        <div class="top-seller-category-product-tab-content-main-cards">
                            <div
                                v-for="product in activeCategory.products"
                                :key="product.id" 
                                class="TabProductCard_industries_card_main__imFgg"
                                >

                                <ProductCard :product="product" />
                            </div>
                        </div>
                        <a 
                            class="top-seller-category-product-tab-explore-more-btn" 
                            title="Explore More" 
                            href="#"
                        >
                            Explore More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCategories } from '@/composables/useTopCategories.js'
import ProductCard from './ProductCard.vue'

// Step 1: Get brands from composable
const { categories, getCategories } = useCategories()

// Step 2: Track which brand tab is active
const activeId = ref(null)

// Step 3: Compute the active brand based on the ID
const activeCategory = computed(() => {
  return categories.value.find(c => c.id === activeId.value)
})

// Step 4: When component mounts, fetch and set first active brand
onMounted(async () => {
  await getCategories()
  if (categories.value.length) {
    activeId.value = categories.value[0].id // auto-select first brand
  }
})

// Step 5: Change active brand on click
const selectCategory = (id) => {
  activeId.value = id
}
</script>