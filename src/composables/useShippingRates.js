import { ref, watch } from 'vue'
import axios from '@/plugins/axios'

export function useShippingRates(countryRef, zipCodeRef) {
  const shippingRates = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchRates = async () => {
    if (!countryRef.value || !zipCodeRef.value) return

    loading.value = true
    error.value = null

    try {
      const response = await axios.post('/shipping/rates', {
        country: countryRef.value,
        zip_code: zipCodeRef.value,
      })

        //   shippingRates.value = response.data?.data?.output?.rateReplyDetails || []
        const rateReplyDetails = response.data?.data?.output?.rateReplyDetails ?? []
        shippingRates.value = rateReplyDetails.map((rate) => {
            const details = rate.ratedShipmentDetails?.[0] || {}
            const packageDetails = details.ratedPackages?.[0]?.packageRateDetail || {}

            return {
                serviceName: rate.serviceName,
                serviceType: rate.serviceType,
                totalCharge: details.totalNetCharge,
                currency: details.currency,
                baseCharge: details.totalBaseCharge,
                fuelSurcharge: packageDetails.surcharges?.find(s => s.type === 'FUEL')?.amount ?? 0,
                deliverySurcharge: packageDetails.surcharges?.find(s => s.type === 'DELIVERY_AREA')?.amount ?? 0
            }
        })
    } catch (err) {
        error.value = err
        shippingRates.value = []
    } finally {
        loading.value = false
    }
  }

  // ✅ Watch refs and call fetchRates when both are filled
  watch([countryRef, zipCodeRef], ([country, zip]) => {
    if (country && zip) {
      fetchRates()
    }
  })

  return {
    shippingRates,
    loading,
    error,
    fetchRates
  }
}
