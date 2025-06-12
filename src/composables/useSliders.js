import { ref } from 'vue';
import axios from '@/plugins/axios';

const sliders = ref([]);
const loadingSlider = ref(false);
const error = ref(null);

const getSliders = async () => {
  loadingSlider.value = true;
  try {
    const res = await axios.get('/sliders');
    sliders.value = res.data.data;
  } catch (err) {
    error.value = err;
  } finally {
    loadingSlider.value = false;
  }
};

export function useSliders() {
  return {
    sliders,
    loadingSlider,
    error,
    getSliders,
  };
}