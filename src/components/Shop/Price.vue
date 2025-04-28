<template>
    <div class="range-slider">
                                <h4 class="font-size-14 mb-3 font-weight-bold">Price</h4>
                                <!-- Range Slider -->
                                <input class="js-range-slider" type="text"
                                data-extra-classes="u-range-slider u-range-slider-indicator u-range-slider-grid"
                                data-type="double"
                                data-grid="false"
                                data-hide-from-to="true"
                                data-prefix="$"
                                data-min="0"
                                data-max="3456"
                                data-from="0"
                                data-to="3456"
                                data-result-min="#rangeSliderExample3MinResult"
                                data-result-max="#rangeSliderExample3MaxResult">
                                <!-- End Range Slider -->
                                <div class="mt-1 text-gray-111 d-flex mb-4">
                                    <span class="mr-0dot5">Price: </span>
                                    <span>$</span>
                                    <span id="rangeSliderExample3MinResult" class=""></span>
                                    <span class="mx-0dot5"> — </span>
                                    <span>$</span>
                                    <span id="rangeSliderExample3MaxResult" class=""></span>
                                </div>
                                <button type="submit" class="btn px-4 btn-primary-dark-w py-2 rounded-lg">Filter</button>
                            </div>
</template>