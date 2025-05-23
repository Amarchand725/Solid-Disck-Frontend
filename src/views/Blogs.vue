<template>
    <div>
        <main>
            <div class="blogs_page_main">
                <div class="title_main">
                    <nav class="ant-breadcrumb custom_breadcrumb_comp css-i6rspj">
                        <ol>
                            <li><span class="ant-breadcrumb-link"><router-link to="/">Home</router-link></span></li>
                            <li class="ant-breadcrumb-separator" aria-hidden="true">&gt;</li>
                            <li><span class="ant-breadcrumb-link"><router-link to="#">Blogs</router-link></span></li>
                        </ol>
                    </nav>
                    <h1>Solid Disk Direct Blogs</h1>
                </div>
                <BlogSearch @search="handleSearch" />
                <div class="ant-row css-i6rspj" style="flex-wrap: wrap;">
                    <div
                        v-for="blog in blogs"
                        :key="blog.id"
                        class="ant-col ant-col-xl-8 css-i6rspj"
                    >
                        <div class="blogs_overview_main" style="height: 100%;">
                            <div class="left">
                                <img 
                                    :alt="blog.title" 
                                    :title="blog.title" 
                                    fetchpriority="high" width="262" height="226" decoding="async" data-nimg="1" 
                                    class="card-image" sizes="100vw" 
                                    :src="blog.banner || '/placeholders/290x100.svg'"
                                    @error="onImageError"  
                                    style="color: transparent;"
                                >
                            </div>
                            <div class="right">
                                <span :title="blog.title.replace(/<[^>]*>/g, '')">{{ blog.title.replace(/<[^>]*>/g, '') }}</span>
                                <div class="posted">
                                    <p>Posted:</p><strong>{{ blog.created_at }}</strong>
                                </div>
                                <div class="para" style="display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; -webkit-line-clamp: 3; width: 300px;">
                                    <h2>Introduction</h2>
                                    <p>{{ shortDescription(blog.description) }}</p>
                                </div>
                                <router-link class="read_more" :to="`/blogs/${blog.slug}`">Read Full Article</router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="view_more">
                    <div class="bottom_navigation">
                        <p>
                            Showing <b>{{ showingStart }} - {{ showingEnd }}</b> Results
                        </p>
                        <div class="bottom_pagination">
                            <ul class="ant-pagination css-i6rspj">
                                <li
                                    v-for="page in visiblePages"
                                    :key="page"
                                    :title="page"
                                    :class="[
                                    'ant-pagination-item',
                                    `ant-pagination-item-${page}`,
                                    page === pagination.current_page ? 'ant-pagination-item-active' : ''
                                    ]"
                                    tabindex="0"
                                    @click="goToPage(page)"
                                >
                                    <a rel="index follow">{{ page }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script setup>
import BlogSearch from '@/components/BlogSearch.vue';

import { ref, onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useBlogs } from '@/composables/useBlogs';

const route = useRoute();
const { blogs, loading, error, pagination, getBlogs, searchQuery } = useBlogs();

const handleSearch = (query) => {
  searchQuery.value = query;
  getBlogs({
    page: 1,
    perPage: pagination.value.per_page,
    sortField: 'created_at',
    sortDirection: 'desc',
    search: searchQuery.value || '',
  });
};

onMounted(() => {
  loadBlogs();
});

// Re-fetch if route slug changes
watch(() => route.params.slug, loadBlogs);

function loadBlogs(page = 1) {
  const segments = route.path.split('/').filter(Boolean);
  const slug = segments[segments.length - 1]; // Optional: handle category slug if needed

  getBlogs({
    page,
    perPage: pagination.value.per_page,
    sortField: 'created_at',
    sortDirection: 'desc',
    search: '', // Optional: add search term
  });
}

const goToPage = (page) => {
  loadBlogs(page);
};

const showingStart = computed(() => {
  const { current_page, per_page, total } = pagination.value;
  return Math.min((current_page - 1) * per_page + 1, total);
});

const showingEnd = computed(() => {
  const { current_page, per_page, total } = pagination.value;
  return Math.min(current_page * per_page, total);
});

const visiblePages = computed(() => {
  const pages = [];
  const { current_page, last_page } = pagination.value;
  const maxButtons = 5;

  let start = Math.max(current_page - Math.floor(maxButtons / 2), 1);
  let end = start + maxButtons - 1;

  if (end > last_page) {
    end = last_page;
    start = Math.max(end - maxButtons + 1, 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});

function shortDescription(html, limit = 150) {
  const text = (html || '').replace(/<[^>]*>/g, '');
  return text.length > limit ? text.substring(0, limit) + '...' : text;
}
</script>


<style>
    table{
        width: 100%;
    }
    thead, tbody, tr, td, th {
    border: 1px solid;
    border-color: inherit;
    }
    tr{
    text-align: left;
    }
    td{
    padding: inherit;
    }
    th{
    text-align: center;
    }
    .paraStyle{
    margin-bottom: 10px;
    }
    .bottom_navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    }

    .bottom_pagination ul {
    display: flex;
    list-style: none;
    padding: 0;
    }

    .ant-pagination-item {
    padding: 6px 12px;
    margin: 0 4px;
    cursor: pointer;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    }

    .ant-pagination-item-active {
    background-color: #1890ff;
    color: white;
    border-color: #1890ff;
    }
</style>