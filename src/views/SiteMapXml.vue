<template>
  <div class="xml-wrapper">
    <p class="xml-info">
      <b>This XML file does not appear to have any style information associated with it. The document tree is shown below.</b>
    </p>
    <hr />
    <br />
    <!-- Loader Section -->
    <div v-if="isLoading" class="loader-overlay xml-loader">
      <img src="/assets/image/Spinner-2.gif" alt="Loading..." class="spinner-gif" />
    </div>
    <div v-else class="xml-output">
      &lt;?xml version="1.0" encoding="UTF-8"?&gt;<br />
      &lt;sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"&gt;<br />
      <div class="sitemap-block" v-for="url in sitemapLinks" :key="url.loc">
        &nbsp;&nbsp;&lt;sitemap&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;loc&gt;{{ url.loc }}&lt;/loc&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;lastmod&gt;{{ url.lastmod }}&lt;/lastmod&gt;<br />
        &nbsp;&nbsp;&lt;/sitemap&gt;<br />
      </div>
      &lt;/sitemapindex&gt;
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/plugins/axios'

const sitemapLinks = ref([])
const isLoading = ref(true)

onMounted(async () => {
  try {
    const res = await axios.get('/sitemap.xml', {
      headers: { Accept: 'application/xml' },
      responseType: 'text'
    })

    const parser = new DOMParser()
    const xml = parser.parseFromString(res.data, 'application/xml')
    const sitemapNodes = xml.getElementsByTagName('sitemap')

    sitemapLinks.value = Array.from(sitemapNodes).map(node => ({
      loc: node.getElementsByTagName('loc')[0]?.textContent,
      lastmod: node.getElementsByTagName('lastmod')[0]?.textContent
    }))
  } catch (err) {
    console.error('Failed to load sitemap.xml:', err)
  } finally {
    isLoading.value = false
  } 
})
</script>

<style scoped>
.xml-wrapper {
  font-family: monospace;
  background: #fff;
  padding: 20px;
  color: #000;
}

.xml-info {
  font-family: sans-serif;
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
}
.xml-wrapper {
  font-family: monospace;
  background: #fff;
  padding: 20px;
  color: #000;
}

.xml-info {
  font-family: sans-serif;
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
}

.xml-loader {
  font-family: sans-serif;
  font-size: 16px;
  color: #888;
}
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.7); /* light overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  /* z-index: 9999; */
}
</style>
