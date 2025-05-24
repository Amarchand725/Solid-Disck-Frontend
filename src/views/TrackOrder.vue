<template>
  <div class="track-order-container">
    <div class="track-order-card">
      <h1 class="track-order-title">Track Your Order</h1>

      <!-- Input Section -->
      <div class="input-group">
        <input
          v-model="trackingInput"
          type="text"
          placeholder="Enter Order ID"
          class="track-input"
        />
        <button @click="trackOrder" class="track-button"> <span v-if="loading">Loading...</span>
  <span v-else>Track</span></button>
      </div>

      <!-- Error Message -->
      <p v-if="error" class="error-message">{{ error }}</p>

      <!-- Order Info Section -->
      <div v-if="order" class="order-details">
        <h2 class="order-id">Order #{{ order.id }}</h2>
        <p class="order-date"><strong>Placed On:</strong> {{ formattedDate }}</p>


        <!-- Status Timeline -->
       <div class="status-progress">
            <h3>Order Status</h3>
            <div class="progress-wrapper">
                <div
                    v-for="(status, index) in allStatuses"
                    :key="index"
                    class="progress-step"
                    :class="{ active: index <= currentStatusIndex }"
                >
                    <div class="step-circle">{{ index + 1 }}</div>
                    <div class="step-label">{{ status.label }}</div>
                </div>
                </div>
        </div>

        <!-- Items -->
        <div class="items-section">
          <h3>Items</h3>
          <ul>
            <li v-for="item in order.items" :key="item.id">
              <span>{{ item.product.title }} (x{{ item.quantity }})</span>
              <span class="item-price">${{ item.sub_total }}</span>
            </li>
          </ul>
        </div>

        <!-- Total -->
        <div class="total-price">
          Total: ${{ order.total }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from '@/plugins/axios';

const trackingInput = ref('')
const order = ref(null)
const error = ref('')
const loading = ref(false)


// Dummy data


async function trackOrder() {
  const query = trackingInput.value.trim()
  if (!query) {
    error.value = 'Please enter an order ID.'
    order.value = null
    return
  }

  loading.value = true     // Start loader before request
  error.value = ''
  order.value = null

  try {
    const response = await axios.get('/orders/track-order', { params: { query } })
    order.value = response.data
  } catch (e) {
    if (e.response && e.response.status === 404) {
      error.value = 'Order not found. Please check your ID.'
    } else {
      error.value = 'An error occurred. Please try again later.'
    }
  } finally {
    loading.value = false  // Stop loader after request finished (success or error)
  }
}

const allStatuses = [
  { label: 'Pending' },
  { label: 'Confirmed' },
  { label: 'Shipped' },
  { label: 'Out for Delivery' },
  { label: 'Delivered' }
]

const currentStatusIndex = computed(() => {
  if (!order.value) return -1
  return allStatuses.findIndex(
    s => s.label.toLowerCase() === order.value.order_status.toLowerCase()
    )
})

const formattedDate = computed(() => {
  if (!order.value || !order.value.created_at) return ''
  return new Date(order.value.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})


function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

const totalAmount = computed(() =>
  order.value
    ? order.value.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : 0
)
</script>
<style scoped>
.track-order-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  min-height: 100vh;
  background-color: #f3f4f6;
}

.track-order-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 600px;
  width: 100%;
}

.track-order-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
  text-align: center;
}

.input-group {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.track-input {
  flex: 1;
  padding: 0.6rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
}

.track-button {
  background-color: #2563eb;
  color: white;
  padding: 0.6rem 1.25rem;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  white-space: nowrap;
}

.track-button:hover {
  background-color: #1e40af;
}

.error-message {
  color: #dc2626;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  text-align: center;
}

.order-details {
  margin-top: 2rem;
}

.order-id {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #111827;
}

.order-date {
  font-size: 0.95rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.status-progress {
  margin-top: 2rem;
}

.status-progress h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.progress-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 1rem;
}

.progress-wrapper::before {
  content: '';
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 4px;
  background-color: #e5e7eb;
  z-index: 0;
}

.progress-step {
  position: relative;
  text-align: center;
  flex: 1;
  z-index: 1;
}

.step-circle {
  width: 26px;
  height: 26px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: #d1d5db;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  line-height: 26px;
  transition: background-color 0.3s ease;
}

.progress-step.active .step-circle {
  background-color: #2563eb;
  transform: scale(1.1);
}

.step-label {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: #374151;
}

.items-section {
  margin-top: 2rem;
}

.items-section h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1f2937;
}

.items-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.items-section li {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.25rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.item-price {
  color: #111827;
  font-weight: 500;
}

.total-price {
  text-align: right;
  margin-top: 1rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: #1f2937;
}

/* Responsive Styles */
@media (max-width: 640px) {
  .input-group {
    flex-direction: column;
    gap: 0.5rem;
  }

  .track-button {
    width: 100%;
    text-align: center;
  }

  .progress-wrapper {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    position: relative;
  }

  .progress-wrapper::before {
    height: 100%;
    width: 4px;
    top: 0;
    left: 13px;
    right: auto;
  }

  .progress-step {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: left;
    position: relative;
    padding-left: 2rem;
  }

  .step-circle {
    position: absolute;
    left: 0;
    margin: 0;
  }

  .step-label {
    margin-left: 2.5rem;
    font-size: 0.9rem;
  }
}
@media (max-width: 640px) {
  .input-group {
    flex-direction: column;
    gap: 0.5rem;
  }

  .track-button {
    width: 100%;
    text-align: center;
  }

  .progress-wrapper {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    position: relative;
    padding-left: 2.5rem;
  }

  .progress-wrapper::before {
    height: 100%;
    width: 4px;
    top: 0;
    left: 12px;
    right: auto;
    background-color: #e5e7eb;
  }

  .progress-step {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: 100%;
  }

  .step-circle {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #d1d5db;
    color: white;
    font-size: 0.9rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-right: 1rem;
    position: relative;
    z-index: 1;
  }

  .progress-step.active .step-circle {
    background-color: #2563eb;
  }

  .step-label {
    font-size: 0.95rem;
    color: #374151;
  }
}

</style>
