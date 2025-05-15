<template>
    <div class="ant-row navbar-header-menu css-i6rspj">
        <div class="ant-col ant-col-24 css-i6rspj">
            <div>
                <div>
                    <div class="parent-header-menu">
                        <ul class="ant-menu-overflow ant-menu ant-menu-root ant-menu-horizontal ant-menu-light css-i6rspj" role="menu" tabindex="0" data-menu-list="true">
                             <li
                                v-for="(group, index) in groups"
                                :key="group.id"
                                class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child"
                                role="menuitem"
                                tabindex="-1"
                                :data-menu-id="`rc-menu-uuid-26089-2-${group.name.toUpperCase()}`"
                                :style="{ opacity: 1, order: index }"
                                @click="handleOpen(group.id)"
                                >
                                <span class="ant-menu-title-content">
                                    <span title="group.name" style="display: flex; align-items: center;">
                                    <span>{{ group.name }}&nbsp;</span>
                                    <img
                                        src="/assets/image/dropdown-down.webp"
                                        alt="Dropdown Down"
                                        :title="group.name"
                                        style="width: 17px; filter: brightness(0) invert(1);"
                                    />
                                    </span>
                                </span>
                            </li>
                        </ul>
                        <div aria-hidden="true" style="display: none;"></div>
                    </div>
                </div>
                <div
                    class="header-menu-wrapper"
                    id="header-menu-dropdown"
                    v-show="showDropdown && selectedGroup"
                    >
                   <div
                    class="header-menu"
                    v-for="attribute in selectedGroup?.attributes || []"
                    :key="selectedGroupId + '-' + attribute.id"
                    >
                    <strong :title="attribute.name">{{ attribute.name }}</strong>
                    <div class="header-menu-items">
                        <ul
                        class="ant-menu ant-menu-root ant-menu-vertical ant-menu-light css-i6rspj"
                        role="menu"
                        tabindex="0"
                        data-menu-list="true"
                        >
                        <li
                            class="ant-menu-item ant-menu-item-only-child"
                            v-for="value in visibleValues(attribute)"
                            :key="value.id"
                            :title="value.name"
                            role="menuitem"
                            tabindex="-1"
                        >
                            <span class="ant-menu-title-content">{{ value.name }}</span>
                        </li>
                        </ul>
                        <div aria-hidden="true" style="display: none;"></div>
                        <button
                        v-if="attribute.attribute_values.length > 5"
                        type="button"
                        class="ant-btn css-i6rspj ant-btn-default ant-btn-color-default ant-btn-variant-outlined"
                        @click="toggleExpand(attribute.id)"
                        >
                        <span>{{ isExpanded(attribute.id) ? 'Less' : 'More...' }}</span>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useGroups } from '@/composables/useGroups.js'

const { groups, loading, error, getGroups } = useGroups()

onMounted(() => {
  getGroups()
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const props = defineProps({
  settings: Object
})

const selectedGroupId = ref(null)
const showDropdown = ref(false)

const selectedGroup = computed(() => {
  return groups.value.find(group => group.id === selectedGroupId.value)
})

function handleOpen(groupId) {
  if (selectedGroupId.value === groupId) {
    // Toggle dropdown if same group clicked again
    showDropdown.value = !showDropdown.value
  } else {
    // Open new group
    selectedGroupId.value = groupId
    showDropdown.value = true
  }
}

function handleClickOutside(event) {
  const dropdown = document.getElementById('header-menu-dropdown')
  const menuItems = document.querySelector('.parent-header-menu')

  if (
    dropdown &&
    !dropdown.contains(event.target) &&
    menuItems &&
    !menuItems.contains(event.target)
  ) {
    showDropdown.value = false
  }
}

const expandedAttributes = ref(new Set())

function isExpanded(attributeId) {
  return expandedAttributes.value.has(attributeId)
}

function toggleExpand(attributeId) {
  if (expandedAttributes.value.has(attributeId)) {
    expandedAttributes.value.delete(attributeId)
  } else {
    expandedAttributes.value.add(attributeId)
  }
  // Trigger reactivity by creating a new Set
  expandedAttributes.value = new Set(expandedAttributes.value)
}

function visibleValues(attribute) {
  if (isExpanded(attribute.id)) {
    return attribute.attribute_values
  } else {
    return attribute.attribute_values.slice(0, 5)
  }
}

</script>
