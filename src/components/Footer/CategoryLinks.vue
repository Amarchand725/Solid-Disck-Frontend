<template>
    <div style="display: flex; flex-direction: column;" v-if="categories?.length">
        <h4 href="#" class="headlingTag" title="FEATURED CATEGORIES">FEATURED CATEGORIES</h4>
        <router-link 
            v-for="category in categories" 
            :key="category.id"
            class="tags" 
            :title="category.name" 
            :to="`/categories/show/${category.slug}`"
        >
            {{ category.name }}
        </router-link>
    </div>
</template>
<script>
    export default {
        name: 'CategoryLinks',
        props: {
            categories: {
            type: Array,
            required: true
            }
        }
    }
</script>