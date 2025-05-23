<template>
    <div>
        <main>
            <div class="contact_page_main">
                <div class="title_main">
                    <nav class="ant-breadcrumb custom_breadcrumb_comp css-i6rspj">
                        <ol>
                            <li><span class="ant-breadcrumb-link"><a href="/">Home</a></span></li>
                            <li class="ant-breadcrumb-separator" aria-hidden="true">&gt;</li>
                            <li><span class="ant-breadcrumb-link"><a href="/contact">Contact</a></span></li>
                        </ol>
                    </nav>
                    <h1>Contact</h1>
                </div>
                <span v-if="settings?.location_map_url">
                    <iframe 
                        :src="settings?.location_map_url"
                        width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0"
                    >
                    </iframe>
                </span>
                <div class="contact_form_main">
                    <div class="contact_form">
                        <h1>Get in Touch</h1>
                        <div class="contact_form_inner">
                            <form @submit.prevent="handleSubmit" id="control-hooks" autocomplete="off" class="ant-form ant-form-vertical css-i6rspj req_for_quote_form_fields">
                                <div class="ant-form-item css-i6rspj">
                                    <div class="ant-row ant-form-item-row css-i6rspj">
                                        <div class="ant-col ant-form-item-label css-i6rspj">
                                            <label for="control-hooks_fullName" class="ant-form-item-required" title="Full Name">Full Name</label>
                                        </div>
                                        <div class="ant-col ant-form-item-control css-i6rspj">
                                            <div class="ant-form-item-control-input">
                                                <div class="ant-form-item-control-input-content">
                                                    <input v-model="full_name" id="control-hooks_fullName" placeholder="Enter you full name" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                                    <p class="error_messages">{{ errors.full_name }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ant-form-item css-i6rspj">
                                    <div class="ant-row ant-form-item-row css-i6rspj">
                                        <div class="ant-col ant-form-item-label css-i6rspj">
                                            <label for="control-hooks_email" class="ant-form-item-required" title="Email Address">Email Address</label>
                                        </div>
                                        <div class="ant-col ant-form-item-control css-i6rspj">
                                            <div class="ant-form-item-control-input">
                                                <div class="ant-form-item-control-input-content">
                                                    <input v-model="email" id="control-hooks_email" placeholder="Enter you email" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                                    <p class="error_messages">{{ errors.email }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ant-form-item css-i6rspj">
                                    <div class="ant-row ant-form-item-row css-i6rspj">
                                        <div class="ant-col ant-form-item-label css-i6rspj">
                                            <label for="control-hooks_subject" class="ant-form-item-required" title="Subject">Subject</label>
                                        </div>
                                        <div class="ant-col ant-form-item-control css-i6rspj">
                                            <div class="ant-form-item-control-input">
                                                <div class="ant-form-item-control-input-content">
                                                    <input v-model="subject" id="control-hooks_subject" placeholder="Enter subject" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                                    <p class="error_messages">{{ errors.subject }}</p>
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
                                                    <textarea v-model="message" id="control-hooks_message" placeholder="Enter message" maxlength="100" class="ant-input css-i6rspj ant-input-outlined"></textarea>
                                                    <p class="error_messages">{{ errors.message }}</p>
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
                <div class="bottom_specs">
                    <div class="item"><span role="img" aria-label="mail" class="anticon anticon-mail"><svg viewBox="64 64 896 896" focusable="false" data-icon="mail" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z"></path></svg></span>
                        <h4>Email Address</h4>
                        <div class="item_inner_wrapper">
                            <div class="item_inner">
                                <h3>Support:</h3>
                                <p>
                                    <a href="mailto:{{ settings?.support_email ?? '' }}">{{ settings?.support_email ?? '' }}</a>
                                </p>
                            </div>
                            <div class="item_inner">
                                <h3>Sales:</h3>
                                <p><a href="{{ settings?.sale_email ?? '' }}">{{ settings?.sale_email ?? '' }}</a></p>
                            </div>
                            <!-- <div class="item_inner">
                                <h3>RMA:</h3>
                                <p><a href="mailto:rma@Soliddiskdirect.com">rma@Soliddiskdirect.com</a></p>
                            </div> -->
                        </div>
                    </div>
                    <div class="item"><span role="img" aria-label="phone" class="anticon anticon-phone"><svg viewBox="64 64 896 896" focusable="false" data-icon="phone" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 00-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 01553.1 553 395.34 395.34 0 01437 633.8L353.2 550a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 00-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z"></path></svg></span>
                        <h4>Phone Number</h4>
                        <div class="item_inner_wrapper">
                            <div class="item_inner">
                                <h3>Tel:</h3>
                                <p><a href="tel:+{{ settings?.phone ?? '' }}">+{{ settings?.phone ?? '' }}</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <span role="img" aria-label="pushpin" class="anticon anticon-pushpin">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="pushpin" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3-15.4 12.3-16.6 35.4-2.7 49.4l181.7 181.7-215.4 215.2a15.8 15.8 0 00-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8z"></path>
                            </svg>
                        </span>
                        <h4>Location</h4>
                        <div class="item_inner_wrapper">
                            <div class="item_inner">
                                <h3>Address:</h3>
                                <p>{{ settings?.address ?? '' }}</p>
                            </div>
                            <div class="item_inner">
                                <h3>Mailing Address:</h3>
                                <p>{{ settings?.address ?? '' }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script setup>
    import { useGetInTouch } from '@/composables/useGetInTouch.js'
    import { useSettings } from '@/composables/useSettings.js'
    const { settings } = useSettings()

    const {
        full_name, email, subject, message,
        loading, errors, contact_messages
    } = useGetInTouch();
  
    const handleSubmit = async () => {
        await contact_messages({ full_name, email, subject, message });
    };
</script>