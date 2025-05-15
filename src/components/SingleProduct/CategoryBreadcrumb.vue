<template>
    <span 
        class="path_name" 
        v-if="categoryTrail?.length"
        v-for="catTrail in categoryTrail"
    >
        <router-link 
            :title="catTrail.name" 
            :to="`/categories/${catTrail.slug}`"
        >
        {{ catTrail.name }}
        </router-link>
        <span class="separator">&gt;</span>
    </span>
</template>
<script>
    export default {
        name: 'CategoryBreadcrumb',
        props: {
            categoryTrail: {
                type: Array,
                required: true
            }
        }
    }
</script>