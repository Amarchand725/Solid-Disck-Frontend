<template>
    <li :key="category.id" style="display: flex; flex-direction: column; width: 100%; border-bottom: none; padding: 0px; background-color: transparent; border-top: none; border-right: none; border-left: 1px solid rgb(51, 51, 51); border-image: initial; margin-bottom: 0px;">
        <router-link :to="`/categories/${category.category_url}`">
            <span
                :style="{
                    fontSize: '14px',
                    color: '#333',
                    paddingLeft: '15px',
                    paddingBottom: '0px',
                    display: 'block',
                    lineHeight: '28px',
                    cursor: 'pointer',
                    fontWeight: hasChildren ? '700' : '400',
                }"
            >
                {{ category?.name }}
                <svg
                    v-if="hasChildren"
                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-q7mezt"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="ArrowForwardIosIcon"
                    style="font-size: 12px; color: rgb(51, 51, 51); margin-right: 0px;"
                >
                    <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
                </svg>
            </span>
        </router-link>
        <ul v-if="category.children_recursive?.length" class="sitemap-category-wrapper" style="padding-left: 25px; gap: 0px;">
            <RecursiveCategory
                v-for="child in category.children_recursive"
                :key="child.id"
                :category="child"
            />
        </ul>
    </li>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  category: Object
});

const hasChildren = computed(() =>
  Array.isArray(props.category.children_recursive) &&
  props.category.children_recursive.length > 0
);
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
