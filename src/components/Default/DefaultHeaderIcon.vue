<template>
    <div class="col-md-auto align-self-center">
        <div class="d-flex">
            <ul class="d-flex list-unstyled mb-0">
                <li class="col">
                    <router-link class="nav-link text-gray-90" to="/products/compare">
                        <i class="font-size-22 ec ec-compare"></i>
                    </router-link>
                </li>
                <li class="col">
                    <router-link class="nav-link text-gray-90" to="/wishlist">
                        <i class="font-size-22 ec ec-favorites"></i>
                    </router-link>
                </li>
                <li class="col pr-0">
                    <router-link class="text-gray-90 position-relative d-flex" to="/cart" data-toggle="tooltip" data-placement="top" title="Cart">
                        <i class="font-size-22 ec ec-shopping-bag"></i>
                        <span class="width-22 height-22 bg-dark position-absolute flex-content-center text-white rounded-circle left-12 top-8 font-weight-bold font-size-12">2</span>
                        <span class="font-weight-bold font-size-16 text-gray-90 ml-3">$1785.00</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>