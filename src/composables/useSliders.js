import { ref } from 'vue';
import axios from '@/plugins/axios';

const sliders = ref([]);
const loading = ref(false);
const error = ref(null);

const getSliders = async () => {
  loading.value = true;
  try {
    const res = await axios.get('/sliders');
    sliders.value = res.data.data;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

export function useSliders() {
  return {
    sliders,
    loading,
    error,
    getSliders,
  };
}