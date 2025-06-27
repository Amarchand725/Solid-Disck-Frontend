<template>
  <div class="xml-wrapper">
    <p class="xml-info">
      <b>This XML file does not appear to have any style information associated with it. The document tree is shown below.</b>
    </p>
    <hr />
    <br />
    <div class="xml-output" v-html="formattedXml"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from '@/plugins/axios'

const route = useRoute()
const formattedXml = ref('')

onMounted(async () => {
  try {
    const sitemapName = route.params.sitemapName
    const res = await axios.get(`/${sitemapName}.xml`, {
      headers: { Accept: 'application/xml' },
      responseType: 'text'
    })

    // Escape and pretty format the XML
    formattedXml.value = res.data
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br/>')
  } catch (err) {
    console.error('Error loading sitemap XML', err)
    formattedXml.value = '&lt;error&gt;Unable to load sitemap&lt;/error&gt;'
  }
})
</script>

<style scoped>
.xml-wrapper {
  font-family: monospace;
  padding: 20px;
  background: #fff;
  color: #000;
}
.xml-info {
  font-family: sans-serif;
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
}
</style>
