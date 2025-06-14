<template>
  <div class="track-order-container">
    <div class="track-order-card">
      <h1 class="track-order-title">Track Your Order</h1>
      <!-- Input Section -->
      <div class="input-group">
        <input
          v-model="emailInput"
          type="email"
          placeholder="Enter shipping email"
          class="track-input"
        />

        <input
          v-model="trackingInput"
          type="text"
          placeholder="Track order e.g ORDABC"
          class="track-input"
        />
        
        <button @click="trackOrder" class="track-button">
          <span v-if="loading">Loading...</span>
          <span v-else>Track</span>
        </button>
      </div>

      <!-- Error Message -->
      <p v-if="error" class="error-message">{{ error }}</p>

      <!-- Order Info Section -->
      <div v-if="order" class="order-details">
        <h2 class="order-id">Order #{{ order?.order_number }}</h2>
        <p class="order-date">
          <strong>Placed On:</strong> {{ formattedDate }} <br />
          <strong>Tracking ID {{ order?.shipping_method }}#:</strong> {{ order?.tracking_number }}
        </p>

        <div class="track-order-horizontal">
          <div class="progress-track">
            <div
              v-for="(status, index) in allStatuses"
              :key="status.key"
              class="progress-step"
            >
              <div
                class="circle"
                :class="[
                  'circle',
                  {
                    fullyDelivered: currentStatusIndex === allStatuses.length - 1, // All circles should turn orange
                    completed: index < currentStatusIndex && currentStatusIndex !== allStatuses.length - 1,
                    active: index === currentStatusIndex && status.key !== 'delivered',
                    delivered: index === currentStatusIndex && status.key === 'delivered'
                  }
                ]"
              >
                <span v-if="currentStatusIndex === allStatuses.length - 1 || index < currentStatusIndex">✔</span>
                <span v-else-if="status.key === 'out_for_delivered'">🚚</span>
                <span v-else-if="status.key === 'delivered'">📦</span>
              </div>

              <div
                v-if="index < allStatuses.length - 1"
                class="line"
                :class="getLineClass(index)"
              ></div>

              <div class="label">{{ status.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from '@/plugins/axios';

const trackingInput = ref('')
const emailInput = ref('')
const order = ref(null)
const error = ref('')
const loading = ref(false)

// Dummy data
async function trackOrder() {
  const query = trackingInput.value.trim()
  const email = emailInput.value.trim()
  if (!query || !email) {
    error.value = 'Please enter both order number and shipping email.'
    order.value = null
    return
  }

  loading.value = true     // Start loader before request
  error.value = ''
  order.value = null

  try {
    const response = await axios.get('/orders/track-order', {
      params: { query, email },
    })
    order.value = response.data
  } catch (e) {
    if (e.response && e.response.status === 404) {
      error.value = 'Order not found. Please check your order number and shipping email.'
    } else {
      error.value = 'An error occurred. Please try again later.'
    }
  } finally {
    loading.value = false  // Stop loader after request finished (success or error)
  }
}

const allStatuses = [
  { key: 'pending', label: 'Pending', class: 'secondary' },
  { key: 'confirmed', label: 'Confirmed', class: 'primary' },
  { key: 'shipped', label: 'Shipped', class: 'info' },
  { key: 'out_for_delivered', label: 'Out for delivery', class: 'info' },
  { key: 'delivered', label: 'Delivered', class: 'success' },
  // { key: 'cancelled', label: 'Cancelled', class: 'danger' },
  // { key: 'returned', label: 'Returned', class: 'warning' }
]

const currentStatusIndex = computed(() => {
  if (!order.value) return -1
  return allStatuses.findIndex(
    s => s.key === order.value.order_status.toLowerCase()
  )
})

function getLineClass(index) {
  if (currentStatusIndex.value === allStatuses.length - 1) {
    // Fully delivered: highlight all lines orange
    return 'orange'
  } else if (index < currentStatusIndex.value) {
    // Only completed steps get highlighted
    return 'blue'
  } else {
    return ''
  }
}

const outForDeliveryIndex = computed(() => {
  return allStatuses.findIndex(s => s.key === 'out_for_delivered')
})

const formattedDate = computed(() => {
  if (!order.value || !order.value.created_at) return ''
  return new Date(order.value.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})
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
  background-color: #001e4c;
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
.track-order-horizontal {
  overflow-x: hidden; /* remove scroll */
  padding: 2rem 1rem;
  background: #f5f7fa;
}

.progress-track {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
}

.progress-step {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px; /* Adjust depending on spacing */
  text-align: center;
  z-index: 2;
}

.circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 3px solid #cbd5e1;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  position: relative;
  z-index: 2;
}

.circle.completed {
  background-color: #001e4c;
  border-color: #001e4c;
  color: white;
}

.circle.active {
  border-color: #001e4c;
  color: #001e4c;
}

.circle.delivered {
  background-color: #faad14;
  border-color: #faad14;
  color: white;
}

.label {
  margin-top: 8px;
  font-size: 14px;
  color: #374151;
}

/* Progress Line */
.line {
  position: absolute;
  top: 16px;
  left: 50%;
  width: calc(100% - 40px);
  height: 4px;
  background-color: #e5e7eb;
  z-index: 1;
  transform: translateX(20px);
  border-radius: 2px;
}

.line.blue {
  background-color: #001e4c; /* your primary step color */
}

.line.orange {
  background-color: #faad14; /* completed (delivered) color */
}

.circle.fullyDelivered {
  background-color: #faad14 !important;
  border-color: #faad14 !important;
  color: white !important;
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
