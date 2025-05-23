import { ref } from 'vue';
import axios from '@/plugins/axios';

const policies = ref([]);
const loading = ref(false);
const error = ref(null);

const getPolicies = async () => {
  loading.value = true;
  try {
    const res = await axios.get('/policies');
    policies.value = res.data.data;
  } catch (err) { 
    error.value = err;
  } finally {
    loading.value = false;
  }
};

const getPolicyBySlug = async (slug) => {
  try {
    const res = await axios.get(`/policies/${slug}`);
    return res.data.data;
  } catch (err) {
    throw err;
  }
};


export function usePolicies() {
  return {
    policies,
    loading,
    error,
    getPolicies,
    getPolicyBySlug,
  };
}
