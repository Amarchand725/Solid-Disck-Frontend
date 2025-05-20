<template>
  <span v-if="categoryTrail?.length" class="path_name">
    <template v-for="(cat, index) in categoryTrail" :key="index">
      <router-link
        :title="cat.name"
        :to="getCategoryPath(index)"
        class="breadcrumb-link"
      >
        {{ cat.name }}
      </router-link>
      <span v-if="index < categoryTrail.length - 0" class="separator"> &gt; </span>
    </template>
  </span>
</template>

<script>
export default {
  name: 'CategoryBreadcrumb',
  props: {
    categoryTrail: {
      type: Array,
      required: true
    }
  },
  methods: {
    getCategoryPath(index) {
      const pathSegments = this.categoryTrail
        .slice(0, index + 1)
        .map(cat => cat.slug);
      return `/categories/${pathSegments.join('/')}`;
    }
  }
}
</script>

<style scoped>
.path_name {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.breadcrumb-link {
  color: #007bff;
  text-decoration: none;
}
.separator {
  margin: 0 5px;
  color: #888;
}
</style>

<!-- <template>
    <span 
        class="path_name" 
        v-if="categoryTrail?.length"
        v-for="catTrail in categoryTrail"
    >
        <router-link 
            :title="catTrail.name" 
            :to="`/categories/${catTrail.slug}`"
        >
        {{ catTrail.name }}
        </router-link>
        <span class="separator">&gt;</span>
    </span>
</template>
<script>
    export default {
        name: 'CategoryBreadcrumb',
        props: {
            categoryTrail: {
                type: Array,
                required: true
            }
        }
    }
</script> -->