<template>
   <li class="dropdown-item">
    {{ item.name }}
    <ul v-if="item.children_recursive?.length" class="submenu">
      <CategoryMenu
        v-for="(child, i) in item.children_recursive"
        :key="i"
        :item="child"
      />
    </ul>
  </li>
</template>

<script setup>
defineProps({
  item: Object
})
</script>
