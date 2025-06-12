<template>
    <section class="best_selling_product_section" v-if="products">
        <h2>Best Selling</h2>
        <div class="ant-row css-i6rspj" style="margin-left: -12px; margin-right: -12px; row-gap: 24px;">
            <div class="ant-col processor_left ant-col-xs-24 ant-col-sm-24 ant-col-md-16 ant-col-lg-16 ant-col-xl-16 css-i6rspj" style="padding-left: 12px; padding-right: 12px;">
                <router-link 
                    :to="`/products/${products.category_url}/${products.slug}`"
                >
                    <h3 :title="products?.title">
                        {{ products?.title }}
                        <br>
                        <span :title="products?.mpn">{{ products?.mpn }}</span>
                    </h3>
                </router-link>
                <p>{{ products.title }}</p>
                <router-link 
                    title="Shop Now" 
                    :to="`/products/${products.category_url}/${products.slug}`"
                >
                    <button type="button" class="ant-btn css-i6rspj ant-btn-default ant-btn-color-default ant-btn-variant-outlined"><span>Shop Now</span></button>
                </router-link>
            </div>
            <div class="ant-col processor_right ant-col-xs-24 ant-col-sm-24 ant-col-md-8 ant-col-lg-8 ant-col-xl-8 css-i6rspj" style="padding-left: 12px; padding-right: 12px;">
                <router-link 
                    :to="`/products/${products.category_url}/${products.slug}`"
                >
                    <img 
                        :alt="products.title" 
                        :title="products.title" 
                        loading="lazy" decoding="async" data-nimg="fill" sizes="100vw" 
                        :src="products.thumbnail || '/placeholders/270x280.svg'"
                        @error="onImageError" 
                        style="position: absolute; height: 100%; width: 100%; inset: 0px; object-fit: contain; color: transparent;"
                    >
                </router-link>
            </div>
        </div>
    </section>
</template>
<script setup>
    const props = defineProps({
        products: {
            type: Array,
            default: () => []
        }
    })

    const onImageError = (event) => {
        event.target.src = '/placeholders/270x280.svg'
    }
</script>
<style>
/* General Styling for the Container */
.payment_shipping {
    background-color: #fafafa;
    padding: 26px 0;
}

/* Container with Max Width */
.payment_shipping .container {
    max-width: 1200px;
    margin: 0 auto;
}

/* Row Styling */
.payment_shipping .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

/* Column Styling */
.payment_shipping .col-sm-4 {
    flex: 1 1 30%;
    padding: 15px;
    box-sizing: border-box;
    text-align: center;
}

/* Payment Shipping Box Styling */
.payment_shipping_box {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

/* Icon Container */
.payment_shipping_box .icon_p img {
    max-width: 50px;
    margin-bottom: 15px;
}

/* Heading Styling */
.payment_shipping_box h4 {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
}

/* Satisfaction Guaranteed Section */
.payment_shipping_box_center {
    /* background-color: #f0f8ff; */
}

.payment_shipping_box_center h4 {
    font-size: 18px;
    color: #333;
    margin-bottom: 5px;
}

.payment_shipping_box_center h5 {
    font-size: 16px;
    color: #555;
    line-height: 1.4;
}

.payment_shipping_box_center h5 span {
    color: #d9534f;
    font-weight: bold;
}

/* Payment Image Styling */
.payment_shipping_img {
    max-width: 100%;
    height: auto;
    margin-top: 15px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .payment_shipping .row {
        flex-direction: column;
    }

    .payment_shipping .col-sm-4 {
        flex: 1 1 100%;
        margin-bottom: 20px;
    }
}

</style>