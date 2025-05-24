<!-- <template>
    <div class="blogsSearchComp">
        <input placeholder="Search Blog..." id="blog-search-bar" type="text">
        <button type="button" id="blog-search-button">Search</button>
    </div>
</template> -->
<template>
  <div class="blogsSearchComp">
    <input
      v-model="localSearchQuery"
      @keyup.enter="submitSearch"
      placeholder="Search Blog..."
      id="blog-search-bar"
      type="text"
    />
    <button type="button" id="blog-search-button" @click="submitSearch">
      Search
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['search']);
const localSearchQuery = ref('');

const submitSearch = () => {
  emit('search', localSearchQuery.value);
};
</script>

