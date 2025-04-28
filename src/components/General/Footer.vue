<template>
    <!-- ========== FOOTER ========== -->
    <footer>
        <!-- Footer-top-widget -->
        <div class="container d-none d-lg-block mb-3">
        <div class="row">
            <FeaturedProducts />
            <OnSaleProducts />
            <TopRelatedProducts />
            <div class="col-wd-3 d-none d-wd-block">
                <a href="https://transvelo.github.io/electro-html/2.0/html/shop/shop.html" class="d-block"><img class="img-fluid" src="/assets/img/330X360/img1.jpg" alt="Image Description"></a>
            </div>
        </div>
        </div>
        <!-- End Footer-top-widget -->
        <!-- Footer-newsletter -->
        <NewsLetter />
        <!-- End Footer-newsletter -->
        <!-- Footer-bottom-widgets -->
        <div class="pt-8 pb-4 bg-gray-13">
            <div class="container mt-1">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="mb-6">
                            <router-link class="d-inline-block" :to="{ path: '/' }">
                                <img
                                    width="200"
                                    :src="settings?.logo || '/images/loader.gif'"
                                    alt="Logo"
                                    @error="onImageError"
                                />
                            </router-link>
                        </div>
                        <div class="mb-4">
                            <div class="row no-gutters">
                                <div class="col-auto">
                                    <i class="ec ec-support text-primary font-size-56"></i>
                                </div>
                                <div class="col pl-3">
                                    <div class="font-size-13 font-weight-light">Got questions? Call us 24/7!</div>
                                    <a href="tel:+80080018588" class="font-size-20 text-gray-90">{{ settings?.phone ?? '' }} </a>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <h6 class="mb-1 font-weight-bold">Contact info</h6>
                            <address class="">
                                {{ settings?.address ?? '' }}   
                            </address>
                        </div>
                        <div class="my-4 my-md-4">
                            <ul class="list-inline mb-0 opacity-7">
                                <li class="list-inline-item mr-0" v-if="settings && settings.facebook_link">
                                    <a class="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" :href="settings?.facebook_link || '#'">
                                        <span class="fab fa-facebook-f btn-icon__inner"></span>
                                    </a>
                                </li>
                                <li class="list-inline-item mr-0" v-if="settings && settings.instagram_link">
                                    <a class="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" :href="settings?.instagram_link || '#'">
                                        <span class="fab fa-instagram btn-icon__inner"></span>
                                    </a>
                                </li>
                                <li class="list-inline-item mr-0" v-if="settings && settings.twitter_link">
                                    <a class="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" :href="settings?.twitter_link || '#'">
                                        <span class="fab fa-twitter btn-icon__inner"></span>
                                    </a>
                                </li>
                                <li class="list-inline-item mr-0" v-if="settings && settings.linked_in_link">
                                    <a class="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" :href="settings?.linked_in_link || '#'">
                                        <span class="fab fa-linkedin btn-icon__inner"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="row">
                            <div class="col-12 col-md mb-4 mb-md-0">
                                <h6 class="mb-3 font-weight-bold">Find it Fast</h6>
                                <!-- List Group -->
                                <ul class="list-group list-group-flush list-group-borderless mb-0 list-group-transparent">
                                    <li><a class="list-group-item list-group-item-action" href="https://transvelo.github.io/electro-html/2.0/html/shop/product-categories-5-column-sidebar.html">Laptops & Computers</a></li>
                                    <li><a class="list-group-item list-group-item-action" href="https://transvelo.github.io/electro-html/2.0/html/shop/product-categories-5-column-sidebar.html">Cameras & Photography</a></li>
                                    <li><a class="list-group-item list-group-item-action" href="https://transvelo.github.io/electro-html/2.0/html/shop/product-categories-5-column-sidebar.html">Smart Phones & Tablets</a></li>
                                    <li><a class="list-group-item list-group-item-action" href="https://transvelo.github.io/electro-html/2.0/html/shop/product-categories-5-column-sidebar.html">Video Games & Consoles</a></li>
                                    <li><a class="list-group-item list-group-item-action" href="https://transvelo.github.io/electro-html/2.0/html/shop/product-categories-5-column-sidebar.html">TV & Audio</a></li>
                                    <li><a class="list-group-item list-group-item-action" href="https://transvelo.github.io/electro-html/2.0/html/shop/product-categories-5-column-sidebar.html">Gadgets</a></li>
                                    <li><a class="list-group-item list-group-item-action" href="https://transvelo.github.io/electro-html/2.0/html/shop/product-categories-5-column-sidebar.html">Car Electronic & GPS</a></li>
                                </ul>
                                <!-- End List Group -->
                            </div>

                            <div class="col-12 col-md mb-4 mb-md-0">
                                <!-- List Group -->
                                <ul class="list-group list-group-flush list-group-borderless mb-0 list-group-transparent mt-md-6">
                                    <li><a class="list-group-item list-group-item-action" href="https://transvelo.github.io/electro-html/2.0/html/shop/product-categories-5-column-sidebar.html">Printers & Ink</a></li>
                                    <li><a class="list-group-item list-group-item-action" href="https://transvelo.github.io/electro-html/2.0/html/shop/product-categories-5-column-sidebar.html">Software</a></li>
                                    <li><a class="list-group-item list-group-item-action" href="https://transvelo.github.io/electro-html/2.0/html/shop/product-categories-5-column-sidebar.html">Office Supplies</a></li>
                                    <li><a class="list-group-item list-group-item-action" href="https://transvelo.github.io/electro-html/2.0/html/shop/product-categories-5-column-sidebar.html">Computer Components</a></li>
                                    <li><a class="list-group-item list-group-item-action" href="https://transvelo.github.io/electro-html/2.0/html/shop/product-categories-5-column-sidebar.html">Accesories</a></li>
                                </ul>
                                <!-- End List Group -->
                            </div>

                            <div class="col-12 col-md mb-4 mb-md-0">
                                <h6 class="mb-3 font-weight-bold">Customer Care</h6>
                                <!-- List Group -->
                                <ul class="list-group list-group-flush list-group-borderless mb-0 list-group-transparent">
                                    <li><a class="list-group-item list-group-item-action" href="https://transvelo.github.io/electro-html/2.0/html/shop/my-account.html">My Account</a></li>
                                    <li><a class="list-group-item list-group-item-action" href="https://transvelo.github.io/electro-html/2.0/html/shop/track-your-order.html">Order Tracking</a></li>
                                    <li><a class="list-group-item list-group-item-action" href="https://transvelo.github.io/electro-html/2.0/html/shop/wishlist.html">Wish List</a></li>
                                    <li><a class="list-group-item list-group-item-action" href="terms-and-conditions.html">Customer Service</a></li>
                                    <li><a class="list-group-item list-group-item-action" href="terms-and-conditions.html">Returns / Exchange</a></li>
                                    <li><a class="list-group-item list-group-item-action" href="faq.html">FAQs</a></li>
                                    <li><a class="list-group-item list-group-item-action" href="terms-and-conditions.html">Product Support</a></li>
                                </ul>
                                <!-- End List Group -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Footer-bottom-widgets -->
        <!-- Footer-copy-right -->
        <div class="bg-gray-14 py-2">
        <div class="container">
            <div class="flex-center-between d-block d-md-flex">
                <div class="mb-3 mb-md-0">© <a href="#" class="font-weight-bold text-gray-90">{{ settings?.name ?? '' }}</a> - All rights Reserved</div>
                <div class="text-md-right">
                    <span class="d-inline-block bg-white border rounded p-1">
                        <img class="max-width-5" src="/assets/img/100X60/img1.jpg" alt="Image Description">
                    </span>
                    <span class="d-inline-block bg-white border rounded p-1">
                        <img class="max-width-5" src="/assets/img/100X60/img2.jpg" alt="Image Description">
                    </span>
                    <span class="d-inline-block bg-white border rounded p-1">
                        <img class="max-width-5" src="/assets/img/100X60/img3.jpg" alt="Image Description">
                    </span>
                    <span class="d-inline-block bg-white border rounded p-1">
                        <img class="max-width-5" src="/assets/img/100X60/img4.jpg" alt="Image Description">
                    </span>
                    <span class="d-inline-block bg-white border rounded p-1">
                        <img class="max-width-5" src="/assets/img/100X60/img5.jpg" alt="Image Description">
                    </span>
                </div>
            </div>
        </div>
        </div>
        <!-- End Footer-copy-right -->
    </footer>
    <!-- ========== END FOOTER ========== -->   
  </template>
  <script setup>
    import FeaturedProducts from '@/components/General/FeaturedProducts.vue';
    import OnSaleProducts from '@/components/General/OnSaleProducts.vue';
    import TopRelatedProducts from '@/components/General/TopRelatedProducts.vue';
    import NewsLetter from '@/components/General/NewsLetter.vue';

    import { useSettings } from '@/composables/useSettings.js'
    import { useSubscribe } from '@/composables/useSubscribe';
    const { settings } = useSettings()
    const { email, message, loading, subscribe } = useSubscribe();

    const onImageError = (event) => {
        event.target.src = '/images/loader.gif'
    }

    const currentYear = new Date().getFullYear();
</script>