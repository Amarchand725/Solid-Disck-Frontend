<template>
    <div class="ant-col quick_tech_specs_main ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-16 ant-col-xl-16 css-i6rspj">
        <div class="quick_tech_specs_left">
            <div class="tab-buttons w-full sm:mt-0" style="margin-bottom: 2.5rem;">
                <div class="specsTabs">
                    <ul class="flex">
                        <li>
                            <h2 class="border-bottom-black" title="Specifications">Specifications</h2>
                        </li>
                        <li style="margin-left: 40px;">
                            <h2 class="" title="Reviews">Reviews</h2>
                        </li>
                    </ul>
                </div>
                <div class="w-full h-[1px] bg-[#E8E8E8] absolute left-0 sm:top-[50px] top-[36px] -z-10"></div>
            </div>
            <div data-aos="fade-up" class="w-full tab-content-item">
                <h6 class="font-medium text-qblack mb-2" style="font-size: 18px; margin-bottom: 0.5rem; font-weight: 500;">Reviews</h6>
                <div class="w-full">
                    <div class="review-wrapper w-full">
                        <div class="w-full reviews mb-[60px]">
                            <div class="reviewblock">
                                <h6>0<span>/5</span></h6>
                                <div class="flex space-x-1 items-center stars">
                                    <svg width="33" height="30" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="specification_main_custom" v-html="productDetails?.full_description"></div>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        productDetails: Object
    })
    
    document.addEventListener("DOMContentLoaded", function () {
        const tabs = document.querySelectorAll(".specsTabs ul li h2");
        const specsSection = document.querySelector(".specification_main_custom");
        const reviewsSection = document.querySelector(".tab-content-item");

        // Initial State
        specsSection.style.display = "block";
        reviewsSection.style.display = "none";
        tabs[0].classList.add("border-bottom-black"); // 'Specifications' active

        tabs.forEach((tab, index) => {
            tab.addEventListener("click", () => {
                // Reset all tab classes
                tabs.forEach(t => t.classList.remove("border-bottom-black"));

                // Add active class to clicked tab
                tab.classList.add("border-bottom-black");

                // Toggle content sections
                if (tab.getAttribute("title") === "Specifications") {
                specsSection.style.display = "block";
                reviewsSection.style.display = "none";
                } else if (tab.getAttribute("title") === "Reviews") {
                specsSection.style.display = "none";
                reviewsSection.style.display = "block";
                }
            });
        });
    });
</script>