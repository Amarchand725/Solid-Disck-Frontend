// composables/usePaypal.js
import { ref } from 'vue'

const paypalResponse = ref(null)

export function usePaypal() {
  const paypalLoaded = ref(false)

  const mountPaypal = async (elementId = 'paypal-button', amount = '100.00') => {
    return new Promise((resolve, reject) => {
      if (!window.paypal) {
        return reject(new Error('PayPal SDK not loaded'))
      }

      window.paypal.Buttons({
        style: {
          layout: 'vertical',
          color: 'gold',
          shape: 'rect',
          label: 'paypal',
        },
        createOrder(data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount, // dynamic value recommended
                },
              },
            ],
          })
        },
        onApprove(data, actions) {
          return actions.order.capture().then(details => {
            paypalResponse.value = details
            resolve(details)
          })
        },
        onError(err) {
          console.error('PayPal Error:', err)
          reject(err)
        },
      }).render(`#${elementId}`)

      paypalLoaded.value = true
    })
  }

  return {
    mountPaypal,
    paypalResponse,
  }
}