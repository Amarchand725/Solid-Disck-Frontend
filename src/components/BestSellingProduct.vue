<template>
    <section class="best_selling_product_section" v-if(products)>
        <h2>Best Selling</h2>
        <div class="ant-row css-i6rspj" style="margin-left: -12px; margin-right: -12px; row-gap: 24px;">
            <div class="ant-col processor_left ant-col-xs-24 ant-col-sm-24 ant-col-md-16 ant-col-lg-16 ant-col-xl-16 css-i6rspj" style="padding-left: 12px; padding-right: 12px;"><a href="#"><h3 title="2GS116-500 Seagate IronWolf 12TB 7200RPM SATA 6Gb/s 3.5-inch NAS Hard Drive">2GS116-500 Seagate IronWolf 12TB 7200RPM SATA 6Gb/s 3.5-inch NAS Hard Drive <br><span title="2GS116-500">2GS116-500</span></h3></a>
                <p>{{ products.title }}</p>
                <router-link title="Shop Now" to="#">
                    <button type="button" class="ant-btn css-i6rspj ant-btn-default ant-btn-color-default ant-btn-variant-outlined"><span>Shop Now</span></button>
                </router-link>
            </div>
            <div class="ant-col processor_right ant-col-xs-24 ant-col-sm-24 ant-col-md-8 ant-col-lg-8 ant-col-xl-8 css-i6rspj" style="padding-left: 12px; padding-right: 12px;">
                <router-link href="#">
                    <img 
                        :alt="products.title" 
                        :title="products.title" 
                        loading="lazy" decoding="async" data-nimg="fill" sizes="100vw" 
                        :srcset="products.thumbnail"
                        :src="products.thumbnail" 
                        style="position: absolute; height: 100%; width: 100%; inset: 0px; object-fit: contain; color: transparent;"
                    >
                </router-link>
            </div>
        </div>
    </section>
</template>
<script setup>
import { onMounted } from 'vue'
import { useProducts } from '@/composables/useBestSellingProduct.js'

const { products, loading, error, getProducts } = useProducts()

onMounted(() => {
  getProducts()
})
</script>