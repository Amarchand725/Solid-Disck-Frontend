<template>
    <div class="border-bottom pb-4 mb-4">
                                <h4 class="font-size-14 mb-3 font-weight-bold">Brands</h4>

                                <!-- Checkboxes -->
                                <div class="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="brandAdidas">
                                        <label class="custom-control-label" for="brandAdidas">Adidas
                                            <span class="text-gray-25 font-size-12 font-weight-normal"> (56)</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="brandNewBalance">
                                        <label class="custom-control-label" for="brandNewBalance">New Balance
                                            <span class="text-gray-25 font-size-12 font-weight-normal"> (56)</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="brandNike">
                                        <label class="custom-control-label" for="brandNike">Nike
                                            <span class="text-gray-25 font-size-12 font-weight-normal"> (56)</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="brandFredPerry">
                                        <label class="custom-control-label" for="brandFredPerry">Fred Perry
                                            <span class="text-gray-25 font-size-12 font-weight-normal"> (56)</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="brandTnf">
                                        <label class="custom-control-label" for="brandTnf">The North Face
                                            <span class="text-gray-25 font-size-12 font-weight-normal"> (56)</span>
                                        </label>
                                    </div>
                                </div>
                                <!-- End Checkboxes -->

                                <!-- View More - Collapse -->
                                <div class="collapse" id="collapseBrand">
                                    <div class="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="brandGucci">
                                            <label class="custom-control-label" for="brandGucci">Gucci
                                                <span class="text-gray-25 font-size-12 font-weight-normal"> (56)</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="brandMango">
                                            <label class="custom-control-label" for="brandMango">Mango
                                                <span class="text-gray-25 font-size-12 font-weight-normal"> (56)</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <!-- End View More - Collapse -->

                                <!-- Link -->
                                <a class="link link-collapse small font-size-13 text-gray-27 d-inline-flex mt-2" data-toggle="collapse" href="#collapseBrand" role="button" aria-expanded="false" aria-controls="collapseBrand">
                                    <span class="link__icon text-gray-27 bg-white">
                                        <span class="link__icon-inner">+</span>
                                    </span>
                                    <span class="link-collapse__default">Show more</span>
                                    <span class="link-collapse__active">Show less</span>
                                </a>
                                <!-- End Link -->
                            </div>
</template>