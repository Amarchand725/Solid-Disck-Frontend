// composables/usePayarc.js
import { ref } from 'vue'
import Payarc from 'payarc-sdk'  // <-- This assumes Payarc provides an npm package or SDK

const payarcToken = ref(null)
const payarcInstance = new Payarc({ publicKey: 'your_public_key_here' })

export function usePayarc() {
  const payarcMounted = ref(false)

  const mountPayarc = async (formId = 'payarc-form') => {
    // Initialize or mount the Payarc form in your UI
    // This depends on the Payarc SDK documentation
    console.log(`Mounting Payarc form into #${formId}`)
    payarcMounted.value = true
  }

  const getPayarcToken = async (cardData) => {
    if (!cardData.number || !cardData.expiry || !cardData.cvv) {
      throw new Error('Missing card data')
    }

    try {
      const tokenResponse = await payarcInstance.createToken(cardData)
      payarcToken.value = tokenResponse.token
      return tokenResponse.token
    } catch (error) {
      throw new Error('Tokenization failed: ' + error.message)
    }
  }

  return {
    mountPayarc,
    getPayarcToken,
    payarcToken,
  }
}