import { ref } from 'vue';
import axios from '@/plugins/axios';

const blogs = ref([]);
const loading = ref(false);
const error = ref(null);

const getBlogs = async () => {
  loading.value = true;
  try {
    const res = await axios.get('/blogs');
    blogs.value = res.data.data;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

const getBlogBySlug = async (slug) => {
  try {
    const res = await axios.get(`/blogs/${slug}`);
    return res.data.data;
  } catch (err) {
    throw err;
  }
};

export function useBlogs() {
  return {
    blogs,
    loading,
    error,
    getBlogs,
    getBlogBySlug,
  };
}