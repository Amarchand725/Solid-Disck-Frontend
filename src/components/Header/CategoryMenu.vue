<template>
  <li class="dropdown-item">
    <router-link class="router-link-custom" :to="`/categories/${item.slug}`">{{ item.name }}</router-link>

    <!-- Only show submenu if there are children -->
    <ul v-if="hasChildren" class="submenu">
      <CategoryMenu
        v-for="child in item.children_recursive"
        :key="child.id"
        :item="child"
      />
    </ul>
  </li>
</template>

<script setup>
import { computed, onMounted } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

// Ensure the current category does not render itself or already rendered children
const hasChildren = computed(() => {
  return Array.isArray(props.item.children_recursive) &&
         props.item.children_recursive.length > 0 &&
         props.item.children_recursive.every(child => child.id !== props.item.id)
})

onMounted(() => {
  console.log('Rendering item:', props.item.name, 'Children:', props.item.children_recursive?.map(c => c.name))
})
</script>
<style>
.router-link-custom {
  color: #000 !important;   /* Make text black */
  text-decoration: none;    /* Remove underline */
}
</style>
