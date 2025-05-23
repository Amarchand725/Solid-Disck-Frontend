import { ref } from 'vue';
import axios from '@/plugins/axios';

const groups = ref([]);
const loading = ref(false);
const error = ref(null);

const getGroups = async () => {
  loading.value = true;
  try {
    const res = await axios.get('/get-groups');
    groups.value = res.data.data;
  } catch (err) {
    // console.error('API error:', err);
    error.value = err;
  } finally {
    // console.log('API error:', err);
    loading.value = false;
  }
};

export function useGroups() {
  return {
    groups,
    loading,
    error,
    getGroups,
  };
}
