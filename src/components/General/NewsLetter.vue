<template>
    <div class="bg-primary py-3">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 mb-md-3 mb-lg-0">
                        <div class="row align-items-center">
                            <div class="col-auto flex-horizontal-center">
                                <i class="ec ec-newsletter font-size-40"></i>
                                <h2 class="font-size-20 mb-0 ml-3">Subscribe to Newsletter</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <!-- Subscribe Form -->
                        <form @submit.prevent="subscribe" class="js-validate js-form-message">
                            <label class="sr-only" for="subscribeSrEmail">Email address</label>
                            <div class="input-group input-group-pill">
                                <input type="email" v-model="email" class="form-control border-0 height-40" name="email" id="subscribeSrEmail" placeholder="Email address" aria-label="Email address" aria-describedby="subscribeButton" required
                                data-msg="Please enter a valid email address.">
                                <div class="input-group-append">
                                    <button type="submit" :disabled="loading" class="btn btn-dark btn-sm-wide height-40 py-2" id="subscribeButton">
                                        <span v-if="loading">Loading...</span>
                                        <span v-else>Subscribe</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <!-- End Subscribe Form -->
                    </div>
                </div>
            </div>
        </div>
</template>
<script setup>
    import { useSubscribe } from '@/composables/useSubscribe';
    const { email, message, loading, subscribe } = useSubscribe();
</script>