<template>
    <div class="d-none d-xl-block col-md-auto">
        <div class="d-flex">
            <i class="ec ec-support font-size-50 text-primary"></i>
            <div class="ml-2">
                <div class="phone">
                    <strong>Support</strong> <a href="tel:800856800604" class="text-gray-90">{{ settings?.phone ?? '' }}</a>
                </div>
                <div class="email">
                    E-mail: <a href="mailto:{{ settings?.email ?? '' }}?subject=Help Need" class="text-gray-90">{{ settings?.email ?? '' }}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { useSettings } from '@/composables/useSettings.js'
    const { settings } = useSettings()
</script>