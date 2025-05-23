<template>
  <div class="search_bar_main">
    <span class="ant-input-group-wrapper ant-input-search ant-input-group-wrapper-outlined css-i6rspj ant-input-search-with-button header-search-input">
      <span class="ant-input-wrapper ant-input-group css-i6rspj">
        <input
          v-model="searchTerm"
          @input="handleSearch"
          @keydown.enter="handleSearch"
          placeholder="What can we help you find today?"
          class="ant-input ant-input-outlined"
          type="text"
          style="padding-left: 12px"
        />
        <span class="ant-input-group-addon">
          <button type="button" @click="handleSearch" class="ant-btn ant-btn-primary ant-btn css-i6rspj ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-input-search-button">
            <img src="/assets/image/search-icon.webp" alt="Search Icon" style="width: 15px; filter: brightness(0) invert(1);" />
          </button>
        </span>
      </span>
    </span>

    <!-- ... existing template above ... -->
    <!-- Search Results Dropdown -->
    <div class="search_dropdown" v-if="searchResults?.length">
        <ul>
            <li v-for="item in searchResults" :key="item.id">
                <a :href="`/products/${item.category_url}/${item.slug}`">{{ item.title }}</a>
            </li>
        </ul>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useProducts } from '@/composables/useProducts'

const searchTerm = ref('')
const { searchResults, searchProducts } = useProducts()
const handleSearch = () => {
  if (!searchTerm.value.trim()) {
    searchResults.value = []
    return
  }
  searchProducts(searchTerm.value)
}
</script>
<style scoped>
.search_dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  z-index: 999;
  margin-top: 4px;
  padding: 0.5rem 0;
}

.search_dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.search_dropdown li {
  padding: 0.5rem 1rem;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.2s;
}

.search_dropdown li:last-child {
  border-bottom: none;
}

.search_dropdown li:hover {
  background-color: #f9f9f9;
}

.search_dropdown a {
  text-decoration: none;
  color: #333;
  display: block;
  width: 100%;
}
</style>