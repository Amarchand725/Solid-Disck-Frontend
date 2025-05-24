import { ref } from 'vue';
import axios from '@/plugins/axios';

const blogs = ref([]);
const searchQuery = ref('');
const pagination = ref({
  current_page: 1,
  last_page: 1,
  per_page: 10,
  total: 0,
});
const loading = ref(false);
const error = ref(null);

// const getBlogs = async (page = 1, query = '') => {
//   loading.value = true;
//   searchQuery.value = query;
//   try {
//     const res = await axios.get('/blogs', {
//       params: {
//         page, // pass the current page
//         per_page: pagination.value.per_page,
//         search: searchQuery.value,
//       },
//     });

//     blogs.value = res.data.data;
//     pagination.value = res.data.pagination; // assign pagination data
//   } catch (err) {
//     error.value = err;
//   } finally {
//     loading.value = false;
//   }
// };

const getBlogs = async ({
  page = 1,
  perPage = 10,
  sortField = 'created_at',
  sortDirection = 'desc',
  search = '',
} = {}) => {
  loading.value = true;
  searchQuery.value = search;

  try {
    const res = await axios.get('/blogs', {
      params: {
        page,
        per_page: perPage,
        sort_field: sortField,
        sort_direction: sortDirection,
        search: search || '',
      },
    });

    blogs.value = res.data.data;
    pagination.value = res.data.pagination;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

const getBlogBySlug = async (slug) => {
  try {
    const res = await axios.get(`/blogs/show/${slug}`);
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
    pagination,
    searchQuery,
  };
}