<template>
    <div>
        <main>
            <div class="request_for_quote_page_main">
                <div class="title_main">
                    <nav class="ant-breadcrumb custom_breadcrumb_comp css-i6rspj">
                        <ol>
                            <li><span class="ant-breadcrumb-link"><a href="/">Home</a></span></li>
                            <li class="ant-breadcrumb-separator" aria-hidden="true">&gt;</li>
                            <li><span class="ant-breadcrumb-link"><a href="/reqforquote">Request For Quote</a></span></li>
                        </ol>
                    </nav>
                    <h1>Request For Quote</h1>
                </div>
                <div class="req_for_quote_form_main">
                    <div class="req_for_quote_form_inner">
                        <form @submit.prevent="handleSubmit" id="control-hooks" autocomplete="off" class="ant-form ant-form-vertical css-i6rspj req_for_quote_form_fields" style="width: 450px;">
                            <div class="ant-form-item css-i6rspj">
                                <div class="ant-row ant-form-item-row css-i6rspj">
                                    <div class="ant-col ant-form-item-label css-i6rspj">
                                        <label for="control-hooks_fullName" class="ant-form-item-required" title="Full Name">Full Name</label>
                                    </div>
                                    <div class="ant-col ant-form-item-control css-i6rspj">
                                        <div class="ant-form-item-control-input">
                                            <div class="ant-form-item-control-input-content">
                                                <input v-model="full_name" placeholder="Full Name"  id="control-hooks_fullName" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ant-form-item css-i6rspj">
                                <div class="ant-row ant-form-item-row css-i6rspj">
                                    <div class="ant-col ant-form-item-label css-i6rspj">
                                        <label for="control-hooks_company" class="" title="Company">Company</label>
                                    </div>
                                    <div class="ant-col ant-form-item-control css-i6rspj">
                                        <div class="ant-form-item-control-input">
                                            <div class="ant-form-item-control-input-content">
                                                <input v-model="company" placeholder="Company Name" id="control-hooks_company" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ant-form-item css-i6rspj">
                                <div class="ant-row ant-form-item-row css-i6rspj">
                                    <div class="ant-col ant-form-item-label css-i6rspj">
                                        <label for="control-hooks_mpn" class="ant-form-item-required" title="Mpn">Mpn</label>
                                    </div>
                                    <div class="ant-col ant-form-item-control css-i6rspj">
                                        <div class="ant-form-item-control-input">
                                            <div class="ant-form-item-control-input-content">
                                                <input v-model="mpn" placeholder="MPN"  id="control-hooks_mpn" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ant-form-item css-i6rspj">
                                <div class="ant-row ant-form-item-row css-i6rspj">
                                    <div class="ant-col ant-form-item-label css-i6rspj">
                                        <label for="control-hooks_email" class="ant-form-item-required" title="Email">Email</label>
                                    </div>
                                    <div class="ant-col ant-form-item-control css-i6rspj">
                                        <div class="ant-form-item-control-input">
                                            <div class="ant-form-item-control-input-content">
                                                <input v-model="email" placeholder="Email" id="control-hooks_email" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ant-form-item css-i6rspj">
                                <div class="ant-row ant-form-item-row css-i6rspj">
                                    <div class="ant-col ant-form-item-label css-i6rspj">
                                        <label for="control-hooks_phone" class="ant-form-item-required" title="Phone Number">Phone Number</label>
                                    </div>
                                    <div class="ant-col ant-form-item-control css-i6rspj">
                                        <div class="ant-form-item-control-input">
                                            <div class="ant-form-item-control-input-content">
                                                <input v-model="phone" placeholder="Phone" id="control-hooks_phone" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ant-form-item css-i6rspj">
                                <div class="ant-row ant-form-item-row css-i6rspj">
                                    <div class="ant-col ant-form-item-label css-i6rspj">
                                        <label for="control-hooks_phone" class="ant-form-item-required" title="How Soon Do You Need It?">How Soon Do You Need It?</label>
                                    </div>
                                    <div class="ant-col ant-form-item-control css-i6rspj">
                                        <div class="ant-form-item-control-input">
                                            <div class="ant-form-item-control-input-content">
                                                <input v-model="how_soon_need" placeholder="How Soon Do You Need It?" id="how_soon_need" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ant-form-item css-i6rspj">
                                <div class="ant-row ant-form-item-row css-i6rspj">
                                    <div class="ant-col ant-form-item-label css-i6rspj">
                                        <label for="control-hooks_message" class="" title="Message">Message</label>
                                    </div>
                                    <div class="ant-col ant-form-item-control css-i6rspj">
                                        <div class="ant-form-item-control-input">
                                            <div class="ant-form-item-control-input-content">
                                                <textarea v-model="message" placeholder="Write message" id="control-hooks_message" maxlength="100" class="ant-input css-i6rspj ant-input-outlined"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ant-form-item css-i6rspj">
                                <div class="ant-row ant-form-item-row css-i6rspj">
                                    <div class="ant-col ant-form-item-control css-i6rspj">
                                        <div class="ant-form-item-control-input">
                                            <div class="ant-form-item-control-input-content">
                                                <button type="submit" class="ant-btn css-i6rspj ant-btn-primary ant-btn-color-primary ant-btn-variant-solid">
                                                    <span v-if="!loading">Submit</span>
                                                    <span v-else>Submitting...</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script setup>
    import { useQuoteRequest } from '@/composables/useQuoteForm.js'

    const {
        mpn, full_name, company, email, phone, how_soon_need,
        loading, message, errors, quote_request
    } = useQuoteRequest({ useFullName: true, includeCompany: true, includeQuantity: false });
  
    const handleSubmit = async () => {
        await quote_request({
            mpn,
            full_name,
            company,
            email,
            phone,
            how_soon_need,
            message
        });
    };
</script>