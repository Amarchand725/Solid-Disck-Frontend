<template>
    <footer>
        <!-- Footer content -->
        <div class="footer-container">
            <div class="first-container">
                <LogoSection :settings="settings" />
                <CategoryLinks :categories="categories" />
                <InformationLinks />
                <CustomerAccountLinks />
            </div>
            <BottomBar :currentYear="currentYear" :settings="settings" />
        </div>
    </footer>
</template>

<script setup>
    // Sub Components
    import LogoSection from '@/components/Footer/LogoSection.vue'  
    import CategoryLinks from '@/components/Footer/CategoryLinks.vue'
    import InformationLinks from '@/components/Footer/InformationLinks.vue'
    import CustomerAccountLinks from '@/components/Footer/CustomerAccountLinks.vue'
    import BottomBar from '@/components/Footer/BottomBar.vue'

    // 
    import { onMounted } from 'vue'
    import { useSettings } from '@/composables/useSettings.js'
    import { useCategories } from '@/composables/useFeaturedCategories.js'
    const { settings } = useSettings()

    const { categories, loading, error, getCategories } = useCategories()

    onMounted(() => {
        getCategories()
    })

    const currentYear = new Date().getFullYear();
</script>