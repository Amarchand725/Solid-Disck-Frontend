import { loadStripe } from '@stripe/stripe-js'
import { ref } from 'vue'

let stripe = null
const cardElement = ref(null)
const elements = ref(null)

export function useStripe() {
  const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY // from Stripe dashboard

  const mountStripe = async (elementId = 'card-element') => {
    stripe = await loadStripe(stripePublicKey)
    elements.value = stripe.elements()

    const card = elements.value.create('card')
    card.mount(`#${elementId}`)
    cardElement.value = card
  }

  const getPaymentMethodId = async () => {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement.value,
    })

    if (error) {
      throw error
    }

    return paymentMethod.id
  }

  const confirmPayment = async (clientSecret) => {
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret)

    if (error) {
      return { error }
    }

    return { paymentIntent }
  }

  return {
    mountStripe,
    getPaymentMethodId,
    confirmPayment,
  }
}


// import { loadStripe } from '@stripe/stripe-js'
// import { ref, onMounted } from 'vue'

// let stripe = null
// const cardElement = ref(null)
// const elements = ref(null)

// export function useStripe() {
//   const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY // from Stripe dashboard

//   const mountStripe = async (elementId = 'card-element') => {
//     stripe = await loadStripe(stripePublicKey)
//     elements.value = stripe.elements()

//     const card = elements.value.create('card')
//     card.mount(`#${elementId}`)
//     cardElement.value = card
//   }

//   const getPaymentMethodId = async () => {
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement.value,
//     })

//     if (error) {
//       throw error
//     }
    
//     return paymentMethod.id
//   }

//   return {
//     mountStripe,
//     getPaymentMethodId,
//   }
// }