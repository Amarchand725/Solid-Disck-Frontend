import { ref } from 'vue';
import axios from '@/plugins/axios';

const testimonials = ref([]);
const loading = ref(false);
const error = ref(null);

const getTestimonials = async () => {
  loading.value = true;
  try {
    const res = await axios.get('/testimonials');
    testimonials.value = res.data.data;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

export function useTestimonials() {
  return {
    testimonials,
    loading,
    error,
    getTestimonials,
  };
}