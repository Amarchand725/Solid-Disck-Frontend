<template>
    <div class="payment_method_main">
        <div class="head_main">
            <h3>Payment Method</h3>
            <img 
                loading="lazy" width="150" height="20" decoding="async" data-nimg="1" 
                srcset="/assets/image/payment_icons.avif" 
                src="/assets/image/payment_icons.avif" 
                style="color: transparent;"
            >
        </div>
        <div class="payment_method_radio">
            <div class="ant-radio-group ant-radio-group-outline css-i6rspj">
                <label class="ant-radio-wrapper ant-radio-wrapper-checked css-i6rspj">
                    <span class="ant-radio ant-wave-target ant-radio-checked">
                        <input class="ant-radio-input" type="radio" value="boa">
                        <span class="ant-radio-inner"></span>
                    </span>
                    <span>Credit Card</span>
                </label>
            </div>
        </div>
        <div class="payment_method_main_wrapper">
            <div class="ant-row payment_method_row css-i6rspj">
                <div class="container">
                    <div id="errors-output" role="alert" style="color: red;"></div>
                    <div class="form-group card_number_main">
                        <div id="card-element" class="border p-2 rounded"></div>
                        <!-- <p v-if="cardError" class="text-red-500">{{ cardError }}</p> -->
                    </div>
                    <div id="field-errors" role="alert" style="color: red;"></div>
                    <input id="flexresponse" type="hidden" name="flexresponse">
                </div>
            </div>
        </div>
        <div style="display: flex; justify-content: center; margin-top: 20px;"></div>
        <div style="display: flex; justify-content: center; margin-top: 20px;">
            <button @click="handlePlaceOrder" :disabled="loading" type="button" id="pay-button" class="w-full h-[50px] black-btn flex justify-center items-center bank_of_america_btn_main">
                {{ loading ? 'Placing Order...' : 'Place Order' }}
            </button>
            <!-- <p v-if="error" class="error">{{ error }}</p> -->
            <!-- <img id="loadingIcon" height="30px" width="30px" src="/loading.gif" style="margin-left: 10px; display: none;" alt="Loading"> -->
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useStripe } from '@/composables/useStripe'

// Declare loading as a prop
defineProps({
  loading: Boolean,
  error: String,
})

const cardError = ref('')
const { mountStripe, getPaymentMethodId } = useStripe()

onMounted(() => {
  mountStripe('card-element').catch(err => {
    cardError.value = err.message

    console.log(cardError);
  })
})

defineExpose({
  getPaymentMethodId
})

const emit = defineEmits(['place-order'])

function handlePlaceOrder() {
  emit('place-order')
}
</script>
<style>
    .form-control {
        width: 100%;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        box-sizing: border-box;
    }

    .form-select {
        width: 100%;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        box-sizing: border-box;
    }

    .form-group {
        margin-bottom: 1rem;
    }
</style>