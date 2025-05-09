import { ref, watch } from 'vue';
import axios from 'axios';

export default function useFedEx(countryRef, zipcodeRef) {
  const rates = ref([]);
  const loading = ref(false);
  const error = ref(null);

  watch([countryRef, zipcodeRef], async ([newCountry, newZip], [oldCountry, oldZip]) => {
    if (newCountry && newZip && (newCountry !== oldCountry || newZip !== oldZip)) {
      await fetchRates(newCountry, newZip);
    }
  });

  async function fetchRates(country, zipcode) {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get('/shipping/fedex', {
        country,
        zipcode
      });
      rates.value = response.data.rates || [];
    } catch (err) {
      console.error('FedEx API error:', err);
      error.value = 'Failed to fetch FedEx shipping rates';
    } finally {
      loading.value = false;
    }
  }

  return {
    rates,
    loading,
    error,
  };
}