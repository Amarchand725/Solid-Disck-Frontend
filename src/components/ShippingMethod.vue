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
                                <tbody class="ant-table-tbody">
                                    <!-- Show rates if available -->
                                    <tr 
                                        v-for="rate in rates" 
                                        :key="rate.service_code"
                                    >
                                        <td class="ant-table-cell" colspan="3">
                                        {{ rate.service_name }} - ${{ rate.amount }}
                                        </td>
                                    </tr>

                                    <!-- Show placeholder if no rates -->
                                    <tr 
                                        v-if="!rates || rates.length === 0"
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
import { ref } from 'vue';
import useFedEx from '@/composables/useFedEx.js';

const country = ref('');
const zipcode = ref('');

const { rates, loading, error } = useFedEx(country, zipcode);
</script>