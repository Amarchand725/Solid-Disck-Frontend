<template>
    <div>
        <main>
            <div class="blog_details_page_main">
                <div v-html="blogDetails?.description"></div>
                <RelatedBlogsComponent :blogs="relatedBlogs" />
            </div>
        </main>
    </div>
</template>
<script setup>
    import RelatedBlogsComponent from '@/components/SingleBlog/RelatedBlogs.vue';

    import { ref, onMounted, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import { useBlogs } from '@/composables/useBlogs';
    const { getBlogBySlug } = useBlogs();

    const route = useRoute();

    const blogDetails = ref(null);
    const relatedBlogs = ref([]);

    const loadBlog = async () => {
        const slug = route.params.slug;

        // 🛑 Check if either param is missing
        if (!slug) {
            console.warn('Missing slug or categoryPath:', { slug });
            return;
        }

        try {
            const data = await getBlogBySlug(slug);
            blogDetails.value = data.details;
            relatedBlogs.value = data.related_blogs;

            // console.log(relatedBlogs)
        } catch (err) {
            console.error('Failed to load product:', err);
        }
    };

    // Initial load
    onMounted(loadBlog);

    // React to route param changes
    watch(
    () => [route.params.slug],
        loadBlog
    );
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
</style>