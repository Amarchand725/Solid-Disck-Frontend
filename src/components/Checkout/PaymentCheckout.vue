<template>
    <div class="payment_method_main">
        <div class="head_main">
            <h3>Payment Method</h3>
            <img 
                loading="lazy" width="150" height="20" decoding="async" data-nimg="1" 
                srcset="/assets/image/payment_icons.avif" 
                src="/assets/image/payment_icons.avif" 
                style="color: transparent;"
            >
        </div>
        <div class="payment_method_radio">
            <div class="ant-radio-group ant-radio-group-outline css-i6rspj">
                <label class="ant-radio-wrapper ant-radio-wrapper-checked css-i6rspj">
                    <span class="ant-radio ant-wave-target ant-radio-checked">
                        <input class="ant-radio-input" type="radio" value="boa">
                        <span class="ant-radio-inner"></span>
                    </span>
                    <span>Credit Card</span>
                </label>
            </div>
        </div>
        <div class="payment_method_main_wrapper">
            <div class="ant-row payment_method_row css-i6rspj">
                <div class="container">
                    <div id="errors-output" role="alert" style="color: red;"></div>
                    <div class="form-group card_number_main">
                        <label id="cardNumber-label" class="font-semibold">Card Number</label>
                        <!-- Card Number Input -->
                        <input type="text" id="cardNumber" class="form-control flex-microform" value="4111111111111111">
                        <div id="number-errors" role="alert" style="color: red;"></div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-4 security_number_main">
                            <label for="securityCode-container" class="font-semibold">Security Code</label>
                            <!-- Security Code Input -->
                            <input type="text" id="securityCode" class="form-control flex-microform" value="123">
                            <div id="securityCode-errors" role="alert" style="color: red;"></div>
                        </div>
                        <div class="form-group col-md-4 expiry_select_main">
                            <label for="expMonth" class="font-semibold">Expiry Month</label>
                            <select id="expMonth" class="form-select">
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <!-- Other months -->
                            </select>
                        </div>
                        <div class="form-group col-md-4 expiry_select_main">
                            <label for="expYear" class="font-semibold">Expiry Year</label>
                            <select id="expYear" class="form-select">
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <!-- Other years -->
                            </select>
                        </div>
                    </div>
                    <div id="field-errors" role="alert" style="color: red;"></div>
                    <input id="flexresponse" type="hidden" name="flexresponse">
                </div>
            </div>
        </div>

        <!-- <div class="payment_method_main_wrapper">
            <div class="ant-row payment_method_row css-i6rspj">
                <div class="container">
                    <div id="errors-output" role="alert" style="color: red;"></div>
                    <div class="form-group card_number_main">
                        <label id="cardNumber-label" class="font-semibold">Card Number</label>
                        <div id="number-container" class="form-control flex-microform"></div>
                        <div id="number-errors" role="alert" style="color: red;"></div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-4 security_number_main">
                            <label for="securityCode-container" class="font-semibold">Security Code</label>
                            <div id="securityCode-container" class="form-control flex-microform"></div>
                            <div id="securityCode-errors" role="alert" style="color: red;"></div>
                        </div>
                        <div class="form-group col-md-4 expiry_select_main">
                            <label for="expMonth" class="font-semibold">Expiry Month</label>
                            <select id="expMonth" class="form-select">
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4 expiry_select_main">
                            <label for="expYear" class="font-semibold">Expiry Year</label>
                            <select id="expYear" class="form-select">
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                                <option value="2032">2032</option>
                                <option value="2033">2033</option>
                            </select>
                        </div>
                    </div>
                    <div id="field-errors" role="alert" style="color: red;"></div>
                    <input id="flexresponse" type="hidden" name="flexresponse">
                </div>
            </div>
        </div> -->
        <div style="display: flex; justify-content: center; margin-top: 20px;"></div>
        <div style="display: flex; justify-content: center; margin-top: 20px;">
            <button type="button" id="pay-button" class="w-full h-[50px] black-btn flex justify-center items-center bank_of_america_btn_main">Place Now</button>
            <!-- <img id="loadingIcon" height="30px" width="30px" src="/loading.gif" style="margin-left: 10px; display: none;" alt="Loading"> -->
        </div>
    </div>
</template>
<style>
    .form-control {
        width: 100%;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        box-sizing: border-box;
    }

    .form-select {
        width: 100%;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        box-sizing: border-box;
    }

    .form-group {
        margin-bottom: 1rem;
    }
</style>