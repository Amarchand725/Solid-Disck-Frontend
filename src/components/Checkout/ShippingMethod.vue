<template>
    <div class="head_main two">
        <h1>Shipping Method</h1>
    </div>
    <div class="bill_to_diff">
        <p class="bill_to_diff_para">Choose Your Preferred Delivery Method</p>
    </div>
    <div class="ant-table-wrapper shipping_table css-i6rspj">
        <div class="ant-spin-nested-loading css-i6rspj">
            <div class="ant-spin-container">
                <div class="ant-table ant-table-empty css-i6rspj">
                    <div class="ant-table-container">
                        <div class="ant-table-content">
                            <table style="table-layout: auto;">
                                <colgroup>
                                    <col class="ant-table-selection-col">
                                </colgroup>
                                <thead class="ant-table-thead">
                                    <tr>
                                        <th class="ant-table-cell ant-table-selection-column"></th>
                                        <th class="ant-table-cell" scope="col">Service Name</th>
                                        <th class="ant-table-cell" scope="col">Cost</th>
                                    </tr>
                                </thead>
                                <tbody class="ant-table-tbody" v-if="shippingRates.length">
                                    <!-- Show rates if available -->
                                    <tr
                                        v-for="(rate, index) in shippingRates"
                                        :key="rate.serviceType"
                                        :class="{ 'selected-row': selectedIndex === index }"
                                        @click="selectRate(rate, index)"
                                        style="cursor: pointer;"
                                    >
                                        <td class="ant-table-cell">
                                        <input
                                            type="radio"
                                            name="service"
                                            :value="rate"
                                            :checked="selectedIndex === index"
                                            @change="selectRate(rate, index)"
                                        />
                                        </td>
                                        <td class="ant-table-cell">
                                        {{ rate.serviceName }}
                                        </td>
                                        <td class="ant-table-cell">
                                        {{ rate.currency }} {{ rate.totalCharge }}
                                        </td>
                                    </tr>

                                    <!-- Show placeholder if no shippingRates -->
                                    <tr 
                                        v-if="!shippingRates || shippingRates.length === 0"
                                        class="ant-table-placeholder"
                                    >
                                        <td class="ant-table-cell" colspan="3">
                                            Add Zip Code for Shipping Details
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { toRefs, ref } from 'vue'
import { useShippingRates } from '@/composables/useShippingRates.js'
import { useCart } from '@/composables/useCart'
const { updateShipping } = useCart()

// Define props
const props = defineProps({
  country: String,
  zip: String
})

// Convert to refs (✅ this makes them reactive)
const { country, zip } = toRefs(props)

// Use composable with reactive values
const {
  shippingRates,
  loading,
  error,
  fetchRates
} = useShippingRates(country, zip)

const selectedRate = ref(null)
const selectedIndex = ref(null)

const selectRate = (rate, index) => {
  selectedRate.value = rate
  selectedIndex.value = index
  updateShipping(rate)
}
</script>
<style scoped>
tr:hover {
  background-color: #f5f5f5; /* Light gray background on hover */
  cursor: pointer;
}

.selected-row {
  background-color: #e6f7ff; /* Highlight selected row */
}
</style>