<template>
    <section class="blog_section">
        <div class="section-header">
            <h2>{{ settings?.name ?? '' }} Blogs</h2>
        </div>
        <div class="ant-row blog_section_row css-i6rspj">
            <div class="ant-col ant-col-xs-8 css-i6rspj">
                <h3><span>Stay Ahead With Tech Updates</span></h3>
                <p class="para_bottom">
                    Explore our blogs for insights, information, reviews, and answers to your tech questions.
                </p>
                <div class="explore_more_blogs">
                    <a href="#">
                        <button title="Explore more blogs" type="button" class="ant-btn css-i6rspj ant-btn-default ant-btn-color-default ant-btn-variant-outlined explore_more_blogs_button"><span>View All</span></button>
                    </a>
                </div>
            </div>
            <div class="ant-col ant-col-xs-16 css-i6rspj" v-if="blogs?.length">
                <div class="work_space_slider">
                    <div class="card_container">
                        <div 
                            class="item"
                            v-for="blog in blogs" 
                            :key="blog.id"
                        >
                            <div class="image-wrapper">
                                <img 
                                    :alt="blog.title" 
                                    :title="blog.title" 
                                    loading="lazy" decoding="async" data-nimg="fill"
                                    class="card-image" sizes="100vw" 
                                    :src="blog.banner || '/placeholders/290x100.svg'"
                                    @error="onImageError"  
                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; object-fit: fill; color: transparent;"
                                >
                            </div>
                            <div class="slider_main">
                                <router-link to="#">
                                    <h4 :title="blog.title.replace(/<[^>]*>/g, '')" class="blog-title-link">
                                        {{ blog.title.replace(/<[^>]*>/g, '') }}
                                    </h4>
                                </router-link>
                                <p>{{ shortDescription(blog.description) }}</p>
                                <div class="slider_inner">
                                    <p>Time to Read: {{ blog.created_at }}</p>
                                    <a class="eye_icon" href="#">
                                        <span role="img" aria-label="eye" class="anticon anticon-eye">
                                            <svg viewBox="64 64 896 896" focusable="false" data-icon="eye" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <p class="from_company">From </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { onMounted } from 'vue'
import { useBlogs } from '@/composables/useBlogs.js'
import { useSettings } from '@/composables/useSettings.js'
const { settings } = useSettings()

const { blogs, loading, error, getBlogs } = useBlogs()

onMounted(() => {
    getBlogs()
})

function shortDescription(html, limit = 150) {
  const text = (html || '').replace(/<[^>]*>/g, ''); // safely handle undefined
  return text.length > limit ? text.substring(0, limit) + '...' : text;
}

const onImageError = (event) => {
    event.target.src = '/placeholders/290x100.svg'
}
</script>