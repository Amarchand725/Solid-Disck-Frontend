import { ref } from 'vue';
import axios from '@/plugins/axios';

const countries = ref([]);
const states = ref([]);
const cities = ref([]);
const loading = ref(false);
const error = ref(null);

const getCountries = async () => {
  loading.value = true;
  try {
    const res = await axios.get('/countries');
    countries.value = res.data;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

const getStatesByCountry = async (countryId) => {
  states.value = [];
  cities.value = [];
  if (!countryId) return;
  loading.value = true;
  try {
    const res = await axios.get(`/states/${countryId}`);
    states.value = res.data;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

const getCitiesByState = async (stateId) => {
  cities.value = [];
  if (!stateId) return;
  loading.value = true;
  try {
    const res = await axios.get(`/cities/${stateId}`);
    cities.value = res.data;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

export function useLocations() {
  return {
    countries,
    states,
    cities,
    loading,
    error,
    getCountries,
    getStatesByCountry,
    getCitiesByState,
  };
}
