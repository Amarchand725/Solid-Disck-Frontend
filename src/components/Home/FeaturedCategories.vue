<template>
    <section class="explore_popular_products_section">
        <h2 title="Featured Categories">Featured Categories</h2>
        <div class="card_main_popular" v-if="categories?.length">
            <div 
                class="popular_cards_main_inner"
                v-for="category in categories" 
                :key="category.id"
            >
                <router-link 
                    class="popular_cards_main_inner-a" 
                    title="{{ category.name }}" 
                    :to="`/categories/show/${category.slug}`"
                >
                    <div class="card_content">
                        <img 
                            :alt="category.name"
                            :title="category.name"
                            fetchpriority="high" width="270" height="280" decoding="async" data-nimg="1" 
                            :src="category.banner || '/placeholders/270x280.svg'"
                            @error="onImageError"
                            style="color: transparent; max-width: 100%; height: auto;"
                        />
                        <p class="popular_cards_main_inner-p">{{ category.name }}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>
<script setup>
import { onMounted } from 'vue'
import { useCategories } from '@/composables/useFeaturedCategories.js'

const { categories, loading, error, getCategories } = useCategories()

onMounted(() => {
  getCategories()
})

const onImageError = (event) => {
    event.target.src = '/placeholders/270x280.svg'
}
</script>
