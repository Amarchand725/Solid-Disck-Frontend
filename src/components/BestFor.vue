<template>
    <div class="quick_tech_specs_right" v-html="policyDetails?.content"></div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { usePolicies } from '@/composables/usePolicies.js'

const { getPolicyByTitle } = usePolicies();

const policyDetails = ref(null);
const title = 'Best For'; // You must pass a title

onMounted(async () => {
  try {
    const data = await getPolicyByTitle(title); // Pass title here
    policyDetails.value = data;
  } catch (err) {
    console.error('Failed to load policy:', err);
  }
});
</script>