// composables/useSettings.js
import { ref, onMounted } from 'vue';
import axios from '@/plugins/axios'; // or just 'axios'

const settings = ref(null);

const setFavicon = (url) => {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = url;
};

const getSettings = async () => {
  try {
    const response = await axios.get('/settings');
    settings.value = response.data.data;

    // ✅ Set favicon if available
    if (settings.value?.favicon) {
      setFavicon(settings.value.favicon);
    }

    // ✅ Set title if available
    if (settings.value?.name) {
      document.title = settings.value.name;
    }

  } catch (error) {
    console.error('Error fetching settings:', error);
  }
};

export function useSettings() {
  onMounted(getSettings);
  return { settings };
}