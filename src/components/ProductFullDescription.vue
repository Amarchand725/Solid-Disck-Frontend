<template>
    <div class="ant-col quick_tech_specs_main ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-16 ant-col-xl-16 css-i6rspj">
        <div class="quick_tech_specs_left">
            <div class="tab-buttons w-full sm:mt-0" style="margin-bottom: 2.5rem;">
                <div class="specsTabs">
                    <ul class="flex">
                        <li>
                            <h2 class="border-bottom-black" title="Specifications">Specifications</h2></li>
                        <li style="margin-left: 40px;">
                            <h2 class="" title="Reviews">Reviews</h2></li>
                    </ul>
                </div>
                <div class="w-full h-[1px] bg-[#E8E8E8] absolute left-0 sm:top-[50px] top-[36px] -z-10"></div>
            </div>
            <div class="specification_main" v-html="productDetails?.full_description"></div>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        productDetails: Object
    })
</script>