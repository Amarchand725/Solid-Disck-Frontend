<template>
    <div class="ant-row navbar-menu css-i6rspj">
        <div class="ant-col ant-col-10 css-i6rspj">
            <ul class="ant-menu-overflow ant-menu ant-menu-root ant-menu-horizontal ant-menu-light nav-menu-custom css-i6rspj" role="menu" tabindex="0" data-menu-list="true" style="width: 100%;">
                <li class="ant-menu-overflow-item ant-menu-submenu ant-menu-submenu-horizontal" role="none" style="opacity: 1; order: 0;">
                  <div class="dropdown-container">
                    <button class="dropdown-btn">Shop By Category</button>
                    <ul class="dropdown-menu">
                      <CategoryMenu
                        v-for="(item, index) in visibleCategories"
                        :key="index"
                        :item="item"
                      />
                      <li
                        v-if="hasOverflow"
                        class="dropdown-item view-more"
                        @click.stop.prevent="toggleView"
                      >
                        {{ showAll ? 'View Less' : 'View More' }}
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="ant-menu-overflow-item ant-menu-overflow-item-rest ant-menu-submenu ant-menu-submenu-horizontal ant-menu-submenu-disabled" aria-hidden="true" role="none" style="opacity: 0; height: 0px; overflow-y: hidden; order: 2147483647; pointer-events: none; position: absolute;">
                    <div role="menuitem" class="ant-menu-submenu-title" aria-expanded="false" aria-haspopup="true" aria-disabled="true" data-menu-id="rc-menu-uuid-26089-1-rc-menu-more" aria-controls="rc-menu-uuid-26089-1-rc-menu-more-popup">
                        <span role="img" aria-label="ellipsis" class="anticon anticon-ellipsis">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="ellipsis" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"></path>
                            </svg>
                        </span>
                        <i class="ant-menu-submenu-arrow"></i>
                    </div>  
                </li>
            </ul>
            <div aria-hidden="true" style="display: none;"></div>
        </div>
        <div class="ant-col ant-col-14 contact-now-container css-i6rspj">
            <div class="track-order-container">
                <div class="contact-now-link trackorder_link" role="button" tabindex="0" style="cursor: pointer;">
                    <img src="/assets/image/Track-Order-Icon.webp" alt="Track Order Icon" title="Track Your Order">
                    <span class="contact-now" title="Track Your Order">Track Order</span>
                </div>
            </div>
            <a href="mailto:{{ settings?.support_email ?? '' }}" class="contact-now-link">
                <img src="/assets/image/Mail-Icon.webp" alt="Mail Icon" title="Contact our support team">
                <span class="contact-now" title="Contact our support team">{{ settings?.support_email ?? '' }}</span>
            </a>
            <a href="tel:+{{ settings?.phone ?? '' }}" class="contact-now-link">
                <img src="/assets/image/Call-Icon.webp" alt="Call Icon" title="Call {{ settings?.name ?? '' }}">
                <span class="contact-now" title="Call {{ settings?.name ?? '' }}">{{ settings?.phone ?? '' }}</span>
            </a>
        </div>
    </div>
</template>
<script setup>
  import { onMounted , onUnmounted  } from 'vue'
  import { useCategories } from '@/composables/useCategories.js'
  import CategoryMenu from '@/components/Header/CategoryMenu.vue'
  import { ref, computed } from 'vue'
  const { categories2, loading, error, getCategories2 } = useCategories()
  onMounted(() => {
  getCategories2()
  console.log('Categories:', categories2.value) // this should show your full nested category structure
})

const dropdownElement = ref(null);
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Outside click logic
const handleClickOutside = (e) => {
  if (dropdownElement.value && !dropdownElement.value.contains(e.target)) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

  const showAll = ref(false)
  const maxVisible = 6 // how many items to show initially

  const visibleCategories = computed(() =>
    showAll.value ? categories2.value : categories2.value.slice(0, maxVisible)
  )

  const hasOverflow = computed(() => categories2.value.length > maxVisible)
  const toggleView = () => (showAll.value = !showAll.value)

    const props = defineProps({
        settings: Object
    })
</script>
<style>
.dropdown-container {
  position: relative;
  display: inline-block;
}

.dropdown-btn {
  background-color: #003366;
  color: #fff;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.dropdown-menu,
.submenu {
  list-style: none;
  margin: 0;
  padding: 6px 0;
  position: absolute;
  display: none;
  background-color: #fff;
  min-width: 220px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  z-index: 999;
  font-size: 13px;
  font-weight: 500;
  font-family: "Segoe UI", Tahoma, sans-serif;
  line-height: 1.4;
}

.dropdown-menu {
  top: 100%;
  left: 0;
}

.submenu {
  top: 0;
  left: 100%;
  margin-left: 4px;
}

.dropdown-item {
  display: flex;
  align-items: center;
  padding: 8px 14px;
  color: #111827;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  transition: background-color 0.2s ease;
  border-radius: 6px;
}

.dropdown-item:hover {
  background-color: #f3f4f6;
}

/* Show menus on hover */
.dropdown-container:hover > .dropdown-menu,
.dropdown-item:hover > .submenu {
  display: block;
}

/* Submenu arrow */
.dropdown-item:has(.submenu)::after {
  content: '›';
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: #6b7280;
}

ul.dropdown-menu,
ul.submenu {
  font-family: "Segoe UI", Tahoma, sans-serif;
  line-height: 1.4;
}

.dropdown-item {
  display: flex;
  align-items: center;
}

.view-more {
  font-weight: 600;
  color: #1d4ed8;
  text-align: center;
  border-top: 1px solid #e5e7eb;
}
.view-more:hover {
  background-color: #f1f5f9;
}


    </style>