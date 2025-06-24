<template>
    <div>
        <main>
            <div class="pt-0 pb-0">
                <div class="sitemap-main-wrapper container-x mx-auto">
                    <span class="fs-3 sitemap_main_heading">Our Sitemap</span>
                    <div v-if="loading" class="loader-wrapper">
                        <img src="/assets/image/Spinner-2.gif" alt="Loading..." class="loader-img" />
                    </div>

                    <div v-else>
                        <ul class="sitemap-category-wrapper webkitColumns" style="padding-left: 0px; gap: 20px;">
                            <li v-for="cat in categories" :key="cat.id" style="display: inline-block; flex-direction: column; width: 100%; border: 1px solid rgb(217, 217, 217); padding: 20px; background-color: rgb(238, 238, 238); margin-bottom: 20px;">
                                <router-link :to="`/categories/${cat.category_url}`">
                                    <span style="font-size: 25px; color: rgb(51, 51, 51); padding-left: 15px; padding-bottom: 20px; display: block; font-weight: 400; line-height: 28px; cursor: pointer;">
                                        {{ cat.name }} 
                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-q7mezt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIosIcon" style="font-size: 20px; color: rgb(51, 51, 51); margin-right: 0px;">
                                            <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
                                        </svg>
                                    </span>
                                </router-link>

                                <ul v-if="cat.children_recursive?.length" class="sitemap-category-wrapper " style="padding-left: 25px; gap: 0px;">
                                    <RecursiveCategory 
                                        v-for="child in cat.children_recursive"
                                        :key="child.id"
                                        :category="child"
                                    />
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <span v-for="group in groups" :key="group.id">
                        <span class="fs-3 sitemap_main_heading">{{ group.name }} Filters</span>
                        <ul class="sitemap-category-wrapper webkitColumns" style="padding-left: 0px; gap: 20px;">
                            <!-- Render top-level filter box -->
                            <li
                                v-for="parent in group.attributes"
                                :key="parent.id"
                                style="display: inline-block; flex-direction: column; width: 100%; border: 1px solid rgb(217, 217, 217); padding: 20px; background-color: rgb(238, 238, 238); margin-bottom: 20px;"
                            >
                                <!-- Heading with arrow -->
                                {{ parent.name }}
                                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-q7mezt" focusable="false" viewBox="0 0 24 24" style="font-size: 20px; color: rgb(51, 51, 51); margin-right: 0px;">
                                    <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
                                </svg>

                                <!-- Children list -->
                                <ul class="sitemap-category-wrapper" style="padding-left: 25px; gap: 0px;">
                                    <li
                                        v-for="child in parent.attribute_values"
                                        :key="child.id"
                                        style="display: flex; flex-direction: column; width: 100%; border-bottom: none; padding: 0px; background-color: transparent; border-top: none; border-right: none; border-left: 1px solid rgb(51, 51, 51); margin-bottom: 0px;"
                                    >
                                        <router-link
                                        :to="`/attributes/${child.slug_path}`"
                                        style="font-size: 14px; color: rgb(51, 51, 51); padding-left: 15px; display: block; font-weight: 700; line-height: 28px; cursor: pointer;"
                                        >
                                        {{ child.name }}
                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-q7mezt" focusable="false" viewBox="0 0 24 24" style="font-size: 12px; color: rgb(51, 51, 51); margin-right: 0px;">
                                            <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
                                        </svg>
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </span>
                </div>
            </div>
        </main>
    </div>
</template>
<script setup>
import RecursiveCategory from '@/components/Sitemap/RecursiveCategory.vue'

import { onMounted } from 'vue'
import { useCategories } from '@/composables/useCategories.js'
import { useGroups } from '@/composables/useGroups.js'

const { categories, loading, getCategories } = useCategories()
const { groups, getGroups } = useGroups()

onMounted(() => {
  getCategories()
  getGroups()
})
</script>
<style scoped>  
    .css-q7mezt {
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        flex-shrink: 0;
        fill: currentcolor;
        font-size: 1.5rem;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .dropdown-container {
        position: relative;
        display: inline-block;
        }

        .dropdown-btn {
        background-color: #003366;
        color: #fff;
        padding: 12px 18px;
        font-size: 16px;
        font-weight: bold;
        border: none;
        cursor: pointer;
        }

        .dropdown-menu,
        .submenu {
        list-style: none;
        margin: 0;
        padding: 0;
        position: absolute;
        display: none;
        background-color: #ffffff;
        min-width: 220px;
        border: 1px solid #ccc;
        z-index: 999;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .dropdown-menu {
        top: 100%;
        left: 0;
        }

        .submenu {
        top: 0;
        left: 100%;
        }

        .dropdown-item {
        padding: 12px 18px;
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        background-color: #ffffff;
        color: #333;
        transition: background-color 0.3s ease;
        }

        .dropdown-item:hover {
        background-color: #f5f5f5;
        }

        .dropdown-item:hover > .submenu {
        display: block;
        }

        .dropdown-container:hover .dropdown-menu {
        display: block;
        }

        .dropdown-item:has(.submenu)::after {
        content: '▶';
        position: absolute;
        right: 12px;
        color: #999;
        font-size: 12px;
    }
</style>