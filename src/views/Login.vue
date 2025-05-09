<template>
    <div>
        <main>
            <section class="login_page_main">
                <div class="title_main">
                    <nav class="ant-breadcrumb custom_breadcrumb_comp css-i6rspj">
                        <ol>
                            <li><span class="ant-breadcrumb-link"><a href="/">Home</a></span></li>
                            <li class="ant-breadcrumb-separator" aria-hidden="true">&gt;</li>
                            <li><span class="ant-breadcrumb-link"><a href="login.html">Sign In</a></span></li>
                        </ol>
                    </nav>
                    <h1>Sign In</h1></div>
                <div class="login_main_inner">
                    <div class="login_form">
                        <div class="login_form_inner">
                            <label class="fields">Email Address*</label>
                            <input id="customer_email" class="ant-input css-i6rspj ant-input-outlined" type="email" value="" name="customer_email">
                            <p class="error_messages"></p>
                            <div class="forget_pass">
                                <label>Password*</label><a href="#">Forgot Password?</a></div>
                            <div class="pass_main">
                                <input id="customer_password" class="ant-input css-i6rspj ant-input-outlined" type="password" name="customer_password">
                                <div class="eye_main"><span role="img" aria-label="eye" class="anticon anticon-eye"><svg viewBox="64 64 896 896" focusable="false" data-icon="eye" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path></svg></span></div>
                            </div>
                            <p class="error_messages"></p>
                            <div class="remeber_pass">
                                <label class="ant-checkbox-wrapper css-i6rspj"><span class="ant-checkbox ant-wave-target css-i6rspj"><input id="remember_me" class="ant-checkbox-input" type="checkbox"><span class="ant-checkbox-inner"></span></span>
                                </label>
                                <label for="remember_me">Remember me</label>
                            </div>
                            <button type="button" class="ant-btn css-i6rspj ant-btn-default ant-btn-color-default ant-btn-variant-outlined sign_in_btn"><span>Sign In</span></button>
                            <p class="privacy_notes">By signing in, you agree to EtechBuy's <a href="#">Privacy Notice</a> and <a href="#">Terms and Conditions</a>.</p>
                        </div>
                    </div>
                    <div class="sign_up_sec">
                        <h2>New customer?</h2>
                        <router-link 
                            title="Create an account" 
                            to="/register"
                        >
                        Create an account
                        </router-link>
                    </div>
                </div>
            </section>
            <!-- Banners, product categories, and product listings -->
        </main>
    </div>
</template>