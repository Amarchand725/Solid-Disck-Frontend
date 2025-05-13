<template>
    <div class="shipping_main" v-html="policyDetails?.content"></div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { usePolicies } from '@/composables/usePolicies.js'

const { getPolicyBySlug } = usePolicies();

const policyDetails = ref(null);
const title = 'delivery-option'; // You must pass a title

onMounted(async () => {
  try {
    const data = await getPolicyBySlug(title); // Pass title here
    policyDetails.value = data;
  } catch (err) {
    console.error('Failed to load policy:', err);
  }
});
</script>