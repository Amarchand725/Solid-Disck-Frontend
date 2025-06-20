import { ref, watch } from 'vue';
import axios from 'axios';

export default function useFedEx(countryRef, zipRef, weightRef) {
    const rates = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const fetchRates = async () => {
        const country = countryRef.value;
        const zip_code = zipRef.value;
        const weight = weightRef.value;

        if (!country || !zip_code ) return;

        loading.value = true;
        error.value = null;

        try {
            const payload = { country, zip_code, weight };
            console.log('fatchRates payload: '+payload)
            const response = await axios.post('/shipping/fedex', {
              params: payload,
            });
            
            rates.value = response.data.rates || [];
        } catch (err) {
            console.error('FedEx API error:', err);
            error.value = 'Failed to fetch FedEx shipping rates';
        } finally {
            loading.value = false;
        }
    };

    return {
        fetchRates,
        rates,
        loading,
        error,
    };
}

// export default function useFedEx(countryRef, zipcodeRef, weightRef) {
//   const rates = ref([]);
//   const loading = ref(false);
//   const error = ref(null);

//   watch([countryRef, zipcodeRef, weightRef], async ([newCountry, newZip, newWeight], [oldCountry, oldZip, oldWeight]) => {
//     if (newCountry && newZip && newWeight > 0 && (newCountry !== oldCountry || newZip !== oldZip || newWeight !== oldWeight)) {
//       await fetchRates(newCountry, newZip, newWeight);
//     }
//   });

//   async function fetchRates(country, zipcode, shippingWeight) {
//     loading.value = true;
//     error.value = null;
//     try {
//       const response = await axios.get('/shipping/fedex', {
//         country,
//         zipcode, 
//         shippingWeight
//       });
//       rates.value = response.data.rates || [];
//     } catch (err) {
//       console.error('FedEx API error:', err);
//       error.value = 'Failed to fetch FedEx shipping rates';
//     } finally {
//       loading.value = false;
//     }
//   }

//   return {
//     rates,
//     loading,
//     error,
//   };
// }