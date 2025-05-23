// composables/usePayarc.js
import { ref } from 'vue'

const payarcToken = ref(null)

export function usePayarc() {
  const payarcMounted = ref(false)

  const mountPayarc = async (formId = 'payarc-form') => {
    // This is a placeholder – replace with actual SDK logic
    console.log(`Mounting Payarc form into #${formId}`)
    payarcMounted.value = true
  }

  const getPayarcToken = async (cardData) => {
    // Replace this with real tokenization logic from Payarc's API/SDK
    if (!cardData.number || !cardData.expiry || !cardData.cvv) {
      throw new Error('Missing card data')
    }

    // Simulate async call
    return new Promise((resolve) => {
      setTimeout(() => {
        payarcToken.value = getPayarcToken
        resolve(payarcToken.value)
      }, 500)
    })
  }

  return {
    mountPayarc,
    getPayarcToken,
    payarcToken,
  }
}