<template>
  <div class="left-icons cart">
    <router-link class="nav-link" to="/cart">
      <img src="/assets/image/Cart-Icon.webp" alt="Cart Icon" title="Cart" />
      <p>Cart ({{ cartItemCount }})</p>
    </router-link>

    <div class="cart_overview_modal_main">
      <div class="cart_overview_modal_header">
        <p>{{ cartItemCount }} Items in Cart</p>
      </div>
      <div class="cart_overview_modal_content">
        <ul>
          <li v-for="item in fullCart.items" :key="item.id" class="cart_items">
            <div class="image">
              <router-link 
                :to="`/products/${item.product.category_url}/${item.product.slug}`"
              >
                <img
                  :alt="item.product.title"
                  loading="lazy" width="80" height="80" decoding="async"
                  :src="item.product.thumbnail || '/placeholders/80x80.svg'"
                  @error="onImageError"
                  style="color: transparent;"
                />
              </router-link>
            </div>
            <div class="title">
              <router-link 
                :to="`/products/${item.product.category_url}/${item.product.slug}`"
              >
                <p>{{ shortDescription(item?.product?.short_description, 150) }}</p>
              </router-link>
              <div class="price">
                <span>
                  {{ settings?.currency ?? '' }}{{ item.unit_price }} <strong>X</strong> {{ item.quantity }}
                </span>
                = <p>{{ settings?.currency ?? '' }}{{ item.sub_total }}</p>
              </div>
            </div>
            <div class="cross_icon">
              <span role="img" @click="removeCartItem(item.id)" aria-label="delete" class="anticon anticon-delete">
                <svg viewBox="64 64 896 896" focusable="false" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                  <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
              </svg>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div class="cart_overview_modal_footer">
        <div class="subtotal">
          <span>Subtotal:</span>
          <p>{{ settings?.currency ?? '' }}{{ fullCart.subtotal }}</p>
        </div>
        <div class="footer_btn">
          <router-link class="view_cart_btn" to="/cart">View Cart</router-link>
          <router-link class="checkout_btn" to="/checkout">Checkout</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'CartOverview',
    props: {
      cartItemCount: {
        type: Number,
        required: true
      },
      fullCart: {
        type: Object,
        required: true
      },
      settings: {
        type: Object,
        required: false
      },
      removeCartItem: {
        type: Function,
        required: true
      }
    }
  }
</script>
<script setup>
  const onImageError = (event) => {
    event.target.src = '/placeholders/80x80.svg'
  }

  function shortDescription(html, limit = '') {
    const text = (html || '').replace(/<[^>]*>/g, ''); // strip HTML tags safely

    // If limit is a number and greater than 0, apply truncation
    if (Number(limit) > 0) {
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    }

    // Otherwise, return the full text
    return text;
  }
</script>
