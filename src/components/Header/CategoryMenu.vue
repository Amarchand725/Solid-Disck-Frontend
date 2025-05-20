<template>
  <li class="dropdown-item">
    <!-- 💻 Desktop view -->
    <router-link
      v-if="!isMobile"
      class="router-link-custom"
      :to="`/categories/${item.slug}`"
    >
      {{ item.name }}
    </router-link>

    <ul v-if="!isMobile && hasChildren" class="submenu">
      <CategoryMenu
        v-for="child in item.children_recursive"
        :key="child.id"
        :item="child"
      />
    </ul>

    <!-- 📱 Mobile view -->
    <div v-if="isMobile">
      <div
        class="mobile-menu-header flex justify-between items-center cursor-pointer py-2"
        @click="toggleExpand"
      >
        <router-link
          :to="`/categories/${item.slug}`"
          class="router-link-custom flex-1"
        >
          {{ item.name }}
        </router-link>

        <!-- Show arrow only if children -->
        <svg
          v-if="hasChildren"
          :class="['w-4 h-4 transition-transform duration-200', isExpanded ? 'rotate-90' : '']"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

      <ul v-if="isExpanded && hasChildren" class="submenu pl-4">
        <CategoryMenu
          v-for="child in item.children_recursive"
          :key="child.id"
          :item="child"
        />
      </ul>
    </div>
  </li>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import CategoryMenu from './CategoryMenu.vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true
  },
  categoryTrail: {
    type: Array,
    required: true
  }
})

const isExpanded = ref(false)
const isMobile = ref(false)

const hasChildren = computed(() => {
  return Array.isArray(props.item.children_recursive) && props.item.children_recursive.length > 0
})

function toggleExpand() {
  if (hasChildren.value) {
    isExpanded.value = !isExpanded.value
  }
}

function checkMobile() {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})
// Methods (can be inside <script setup>)
</script>

<style scoped>
.router-link-custom {
  color: #000 !important;
  text-decoration: none;
}

.submenu {
  list-style: none;
  padding-left: 0;
}

.dropdown-item {
  position: relative;
}

/* 💻 Desktop submenu */
@media (min-width: 769px) {
  .submenu {
    position: absolute;
    background: white;
    border: 1px solid #ddd;
    display: none;
    margin-top: 0.5rem;
    min-width: 180px;
    z-index: 100;
  }

  .dropdown-item:hover > .submenu {
    display: block;
  }
}

/* 📱 Mobile styling */
.mobile-menu-header {
  border-bottom: 1px solid #eee;
  user-select: none;
}

.w-4 {
  width: 1rem;
  height: 1rem;
}

.rotate-90 {
  transform: rotate(90deg);
}
</style>
