<template>
    <div>
    <!-- Banners, product categories, and product listings -->
    <section class="checkout_page_main">
        <div class="title_main">
            <nav class="ant-breadcrumb custom_breadcrumb_comp css-i6rspj">
                <ol>
                    <li><span class="ant-breadcrumb-link"><a href="/">Home</a></span></li>
                    <li class="ant-breadcrumb-separator" aria-hidden="true">&gt;</li>
                    <li><span class="ant-breadcrumb-link"><a href="/checkout">Secure Checkout</a></span></li>
                </ol>
            </nav>
            <h1>Secure Checkout</h1></div>
            <div class="ant-row css-i6rspj">
                <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-14 ant-col-xl-16 css-i6rspj">
                    <div class="head_main">
                        <h1>Shipping Details</h1></div>
                    <div class="shipping_details_form">
                        <form id="checkoutForm" class="ant-form ant-form-vertical css-i6rspj">
                            <div class="ant-row shipping_details_row css-i6rspj">
                                <div class="ant-col ant-col-xl-24 css-i6rspj">
                                    <div class="ant-form-item css-i6rspj">
                                        <div class="ant-row ant-form-item-row css-i6rspj">
                                            <div class="ant-col ant-form-item-control css-i6rspj">
                                                <div class="ant-form-item-control-input">
                                                    <div class="ant-form-item-control-input-content">
                                                        <input placeholder="Email address*" id="checkoutForm_email" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ant-col ant-col-xl-8 css-i6rspj">
                                    <div class="ant-form-item css-i6rspj">
                                        <div class="ant-row ant-form-item-row css-i6rspj">
                                            <div class="ant-col ant-form-item-control css-i6rspj">
                                                <div class="ant-form-item-control-input">
                                                    <div class="ant-form-item-control-input-content">
                                                        <input placeholder="First Name*" id="checkoutForm_fname" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ant-col ant-col-xl-8 css-i6rspj">
                                    <div class="ant-form-item css-i6rspj">
                                        <div class="ant-row ant-form-item-row css-i6rspj">
                                            <div class="ant-col ant-form-item-control css-i6rspj">
                                                <div class="ant-form-item-control-input">
                                                    <div class="ant-form-item-control-input-content">
                                                        <input placeholder="Last Name*" id="checkoutForm_lname" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ant-col ant-col-xl-8 css-i6rspj">
                                    <div class="ant-form-item css-i6rspj">
                                        <div class="ant-row ant-form-item-row css-i6rspj">
                                            <div class="ant-col ant-form-item-control css-i6rspj">
                                                <div class="ant-form-item-control-input">
                                                    <div class="ant-form-item-control-input-content">
                                                        <input placeholder="Company" id="checkoutForm_company" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ant-col ant-col-xl-24 css-i6rspj">
                                    <div class="ant-form-item css-i6rspj">
                                        <div class="ant-row ant-form-item-row css-i6rspj">
                                            <div class="ant-col ant-form-item-control css-i6rspj">
                                                <div class="ant-form-item-control-input">
                                                    <div class="ant-form-item-control-input-content">
                                                        <input placeholder="Address: Street no. Block, Nearest Landmark*" id="checkoutForm_address" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ant-col ant-col-xl-8 css-i6rspj">
                                    <div class="ant-form-item css-i6rspj ant-form-item-has-success">
                                        <div class="ant-row ant-form-item-row css-i6rspj">
                                            <div class="ant-col ant-form-item-control css-i6rspj">
                                                <div class="ant-form-item-control-input">
                                                    <div class="ant-form-item-control-input-content">
                                                        <div class="ant-select ant-select-outlined ant-select-in-form-item ant-select-status-success css-i6rspj ant-select-single ant-select-show-arrow ant-select-show-search" required="" aria-required="true">
                                                            <div class="ant-select-selector"><span class="ant-select-selection-wrap"><span class="ant-select-selection-search"><input id="checkoutForm_country" autocomplete="off" class="ant-select-selection-search-input" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="checkoutForm_country_list" aria-autocomplete="list" aria-controls="checkoutForm_country_list" aria-required="true" type="search" value=""></span>
                                                                <span
                                                                class="ant-select-selection-item" title="United States">United States</span>
                                                                    </span>
                                                            </div><span class="ant-select-arrow" unselectable="on" aria-hidden="true" style="user-select: none;"><span role="img" aria-label="down" class="anticon anticon-down ant-select-suffix"><svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ant-col ant-col-xl-8 css-i6rspj">
                                    <div class="ant-form-item css-i6rspj">
                                        <div class="ant-row ant-form-item-row css-i6rspj">
                                            <div class="ant-col ant-form-item-control css-i6rspj">
                                                <div class="ant-form-item-control-input">
                                                    <div class="ant-form-item-control-input-content">
                                                        <div class="ant-select ant-select-outlined ant-select-in-form-item css-i6rspj ant-select-single ant-select-show-arrow ant-select-show-search" required="" aria-required="true">
                                                            <div class="ant-select-selector"><span class="ant-select-selection-wrap"><span class="ant-select-selection-search"><input id="checkoutForm_state" autocomplete="off" class="ant-select-selection-search-input" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="checkoutForm_state_list" aria-autocomplete="list" aria-controls="checkoutForm_state_list" aria-required="true" type="search" value=""></span>
                                                                <span
                                                                class="ant-select-selection-placeholder">Select a state*</span>
                                                                    </span>
                                                            </div><span class="ant-select-arrow" unselectable="on" aria-hidden="true" style="user-select: none;"><span role="img" aria-label="down" class="anticon anticon-down ant-select-suffix"><svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ant-col ant-col-xl-8 css-i6rspj">
                                    <div class="ant-form-item css-i6rspj">
                                        <div class="ant-row ant-form-item-row css-i6rspj">
                                            <div class="ant-col ant-form-item-control css-i6rspj">
                                                <div class="ant-form-item-control-input">
                                                    <div class="ant-form-item-control-input-content">
                                                        <div class="ant-select ant-select-outlined ant-select-in-form-item css-i6rspj ant-select-single ant-select-show-arrow ant-select-show-search" required="" aria-required="true">
                                                            <div class="ant-select-selector"><span class="ant-select-selection-wrap"><span class="ant-select-selection-search"><input id="checkoutForm_city" autocomplete="off" class="ant-select-selection-search-input" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="checkoutForm_city_list" aria-autocomplete="list" aria-controls="checkoutForm_city_list" aria-required="true" type="search" value=""></span>
                                                                <span
                                                                class="ant-select-selection-placeholder">Select a city*</span>
                                                                    </span>
                                                            </div><span class="ant-select-arrow" unselectable="on" aria-hidden="true" style="user-select: none;"><span role="img" aria-label="down" class="anticon anticon-down ant-select-suffix"><svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ant-col ant-col-xl-8 css-i6rspj">
                                    <div class="ant-form-item css-i6rspj">
                                        <div class="ant-row ant-form-item-row css-i6rspj">
                                            <div class="ant-col ant-form-item-control css-i6rspj">
                                                <div class="ant-form-item-control-input">
                                                    <div class="ant-form-item-control-input-content">
                                                        <input placeholder="Zip Code*" id="checkoutForm_zip_code" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ant-col ant-col-xl-8 css-i6rspj">
                                    <div class="ant-form-item css-i6rspj">
                                        <div class="ant-row ant-form-item-row css-i6rspj">
                                            <div class="ant-col ant-form-item-control css-i6rspj">
                                                <div class="ant-form-item-control-input">
                                                    <div class="ant-form-item-control-input-content">
                                                        <input placeholder="Phone Number*" id="checkoutForm_phone_number" aria-required="true" class="ant-input css-i6rspj ant-input-outlined" type="text" value="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ant-col ant-col-xl-8 css-i6rspj">
                                    <div class="city_manually">
                                        <p class="manually_text">Town / City* (Add Manually)</p>
                                        <label class="ant-checkbox-wrapper css-i6rspj"><span class="ant-checkbox ant-wave-target css-i6rspj"><input class="ant-checkbox-input" type="checkbox"><span class="ant-checkbox-inner"></span></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="head_main two">
                        <h1>Billing Details</h1></div>
                    <div class="bill_to_diff">
                        <label class="ant-checkbox-wrapper css-i6rspj"><span class="ant-checkbox ant-wave-target css-i6rspj"><input class="ant-checkbox-input" type="checkbox"><span class="ant-checkbox-inner"></span></span>
                        </label>
                        <p class="bill_to_diff_para">Bill to a different address</p>
                    </div>
                    <div class="head_main two">
                        <h1>Shipping Method</h1></div>
                    <div class="bill_to_diff">
                        <p class="bill_to_diff_para">Choose Your Preferred Delivery Method</p>
                    </div>
                    <div class="ant-table-wrapper shipping_table css-i6rspj">
                        <div class="ant-spin-nested-loading css-i6rspj">
                            <div class="ant-spin-container">
                                <div class="ant-table ant-table-empty css-i6rspj">
                                    <div class="ant-table-container">
                                        <div class="ant-table-content">
                                            <table style="table-layout: auto;">
                                                <colgroup>
                                                    <col class="ant-table-selection-col">
                                                </colgroup>
                                                <thead class="ant-table-thead">
                                                    <tr>
                                                        <th class="ant-table-cell ant-table-selection-column"></th>
                                                        <th class="ant-table-cell" scope="col">Service Name</th>
                                                        <th class="ant-table-cell" scope="col">Cost</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="ant-table-tbody">
                                                    <tr class="ant-table-placeholder">
                                                        <td class="ant-table-cell" colspan="3">Add Zip Code for Shipping Details</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-10 ant-col-xl-8 css-i6rspj">
                    <div class="order_summary_main">
                        <h2>Order Summary</h2>
                        <div class="ant-collapse ant-collapse-icon-position-start custom_collapsed css-i6rspj">
                            <div class="ant-collapse-item">
                                <div class="ant-collapse-header" role="button" aria-expanded="false" aria-disabled="false" tabindex="0">
                                    <div class="ant-collapse-expand-icon"><span role="img" aria-label="collapsed" class="anticon anticon-right ant-collapse-arrow"><svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" style=""><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg></span></div>
                                    <span
                                    class="ant-collapse-header-text">2 Items</span>
                                </div>
                                <div class="ant-collapse-content ant-collapse-content-inactive ant-collapse-content-hidden" style="">
                                    <div class="ant-collapse-content-box">
                                        <div class="collapsed_item_main">
                                            <div class="left"><span>IE-4000-4TC4G-E<sup>x3</sup></span>
                                                <p> IE-4000-4TC4G-E Cisco Industri...</p>
                                            </div>
                                            <div class="right">
                                                <p>$4420.2300000000005</p>
                                            </div>
                                        </div>
                                        <div class="collapsed_item_main">
                                            <div class="left"><span>ISR4351/K9<sup>x1</sup></span>
                                                <p> ISR4351/K9 Cisco 4000 Series I...</p>
                                            </div>
                                            <div class="right">
                                                <p>$154</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sub_total_main">
                            <div class="sub_total"><span>Subtotal:</span>
                                <p>$4574.23</p>
                            </div>
                            <div class="sub_total"><span>Shipping:</span>
                                <p>$0</p>
                            </div>
                            <div class="sub_total"><span>Tax:</span>
                                <p> (0%) $0.00</p>
                            </div>
                        </div>
                        <div class="sub_total total"><span>Total:</span>
                            <p>$4574.23</p>
                        </div>
                        <div class="payment_method_main">
                            <div class="head_main">
                                <h3>Payment Method</h3><img loading="lazy" width="150" height="20" decoding="async" data-nimg="1" srcset="/assets/image/payment_icons.avif" src="/assets/image/payment_icons.avif" style="color: transparent;"></div>
                            <div
                            class="payment_method_radio">
                                <div class="ant-radio-group ant-radio-group-outline css-i6rspj">
                                    <label class="ant-radio-wrapper ant-radio-wrapper-checked css-i6rspj"><span class="ant-radio ant-wave-target ant-radio-checked"><input class="ant-radio-input" type="radio" value="boa" checked=""><span class="ant-radio-inner"></span></span><span>Credit Card</span></label>
                                </div>
                        </div>
                        <div class="payment_method_main_wrapper">
                            <div class="ant-row payment_method_row css-i6rspj">
                                <div class="container">
                                    <div id="errors-output" role="alert" style="color: red;"></div>
                                    <div class="form-group card_number_main">
                                        <label id="cardNumber-label" class="font-semibold">Card Number</label>
                                        <div id="number-container" class="form-control flex-microform">
                                            <!-- <iframe hspace="0" vspace="0" frameborder="0" scrolling="no" allowtransparency="true" marginwidth="0" marginheight="0" title="secure payment field" src="https://flex.cybersource.com/microform/bundle/v2.6.0/iframe.html?keyId=03m85mVXZZN2pxMELMz4gx2R858alalC#{&quot;microformType&quot;:&quot;card&quot;,&quot;microformId&quot;:&quot;7e42a549-0aaa-4811-8342-a0056cc18049&quot;,&quot;microformConfig&quot;:{&quot;styles&quot;:{&quot;input&quot;:{&quot;fontSize&quot;:&quot;14px&quot;,&quot;fontFamily&quot;:&quot;helvetica, tahoma, sans-serif&quot;,&quot;color&quot;:&quot;#555&quot;},&quot;:focus&quot;:{&quot;color&quot;:&quot;blue&quot;},&quot;:disabled&quot;:{&quot;cursor&quot;:&quot;not-allowed&quot;},&quot;valid&quot;:{&quot;color&quot;:&quot;#3c763d&quot;},&quot;invalid&quot;:{&quot;color&quot;:&quot;#a94442&quot;}}},&quot;fieldType&quot;:&quot;number&quot;,&quot;fieldId&quot;:&quot;991a07c3-848d-4ff5-9d96-49478c5a97f9&quot;,&quot;config&quot;:{&quot;placeholder&quot;:&quot;Enter card number&quot;},&quot;jwt&quot;:&quot;eyJraWQiOiJ3ZiIsImFsZyI6IlJTMjU2In0.eyJmbHgiOnsicGF0aCI6Ii9mbGV4L3YyL3Rva2VucyIsImRhdGEiOiJpZ0dKYmhReDBibkdQTVQ0aHRGMzR4QUFFR3BuSWJDbTB5dTEyeCtPSnF6Z0xIQUxNUW5yYTl2dmduM0RZNmlvNlQrcjg0YnFjV0RpZ01ObGVWY0ZEelFYSlgyZ1N0MDdPMnJ6MFFNeGd5VGU2MzYzOTVMSDEwbFhiTWQzWkxVSkxmUmkiLCJvcmlnaW4iOiJodHRwczovL2ZsZXguY3liZXJzb3VyY2UuY29tIiwiandrIjp7Imt0eSI6IlJTQSIsImUiOiJBUUFCIiwidXNlIjoiZW5jIiwibiI6IjAyUzdGeWlyaGw2X1JBa2lONmhLa3U4UlMxUGljNEdJM3FQcFJwSXR1X3NwTVJyaDlXTzRiMmJSNEVfVWNTTlpTLWhQRWUtLVlTaGlKclNwbURYNXVOVURhd2pheWRwNkkxaWxGY0x4NGRLd1VfSTlZX1pTZHM1dk8temdpa0Z3WXVodGlrRG9KcWg1ak53cmpxWTJjRFpDTjR5aGg1YWxnd0Vzc3cyTkxKSklVdmtZSVhoYnNvSUN5OEVXRXFVcXBXLWQ5VHd0b1V4X0dULTlSMEs2WG05c1FvUFRPSG1oSl9jeUlQMGUwYnNteS1mbkpqUU5GQkwzZDFRbHZjWnhRY05OS0xGRWtoU21aa3IwNThxQ2dtZjBJMTRxeTUwWm9SUG5NcWZJbHp1ZUZvMWtRMS1wS2l2MHBSWlRsZVNnSkswN1hjUzFUVnk4NHJVMXgtZ0VLdyIsImtpZCI6IjAzbTg1bVZYWlpOMnB4TUVMTXo0Z3gyUjg1OGFsYWxDIn19LCJjdHgiOlt7ImRhdGEiOnsiY2xpZW50TGlicmFyeUludGVncml0eSI6InNoYTI1Ni00VFVLQmQzVk1JR0dOczFaTHpmVTZiRzBZRzRrVVNjU090UHU1ZWM3WWdvXHUwMDNkIiwiY2xpZW50TGlicmFyeSI6Imh0dHBzOi8vZmxleC5jeWJlcnNvdXJjZS5jb20vbWljcm9mb3JtL2J1bmRsZS92Mi4wLjIvZmxleC1taWNyb2Zvcm0ubWluLmpzIiwiYWxsb3dlZENhcmROZXR3b3JrcyI6WyJBTUVYIiwiRElORVJTQ0xVQiIsIkRJU0NPVkVSIiwiSkNCIiwiTUFTVEVSQ0FSRCIsIlZJU0EiXSwidGFyZ2V0T3JpZ2lucyI6WyJodHRwczovL2V0ZWNoYnV5LmNvbSIsImh0dHBzOi8vd3d3LmV0ZWNoYnV5LmNvbSIsImh0dHBzOi8vc3RhZ2luZy5ldGVjaGJ1eS5jb20iLCJodHRwOi8vbG9jYWxob3N0OjMwMDAiXSwibWZPcmlnaW4iOiJodHRwczovL2ZsZXguY3liZXJzb3VyY2UuY29tIn0sInR5cGUiOiJtZi0yLjAuMCJ9XSwiaXNzIjoiRmxleCBBUEkiLCJleHAiOjE3NDYzNzQxNDksImlhdCI6MTc0NjM3MzI0OSwianRpIjoibWlrNXR6b3FLMVRoVFJ2VyJ9.P62ANb2KynOCoYMewg8s36lBU-Rty-43tb_F7_8LEbKvqzb6MCas4yMWAAN9cZsxoWmYx8lIzS3-z-V0pGFhbyRwyy3g7Bx0nBRNAPV4mb0goOxVHvpfWzvDMmwbk5SQDexNuSMaZqDEgDO8ej89CRjLcYF-24_B7ykmyRr5x3nLWjlT990J5bqNG2qM9u8P67dGb2kC0eSvRUk-odTjIBxj3An0o0ls9nfQnlMLostnH67kYT88FAtdu8bjMFJMctZb9RaLngvTJsqKhLzBFayN7otrTxvVsINW3mP4ag6uKVW5xUpSWixrtWCilHZlJoBdcyNdhXL0qNShFgjVcw&quot;}"
                                            style="overflow: hidden; position: relative; border: none; width: 100%; height: 100%;"></iframe> -->
                                        </div>
                                        <div id="number-errors" role="alert" style="color: red;"></div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-4 security_number_main">
                                            <label for="securityCode-container" class="font-semibold">Security Code</label>
                                            <div id="securityCode-container" class="form-control flex-microform">
                                                <!-- <iframe hspace="0" vspace="0" frameborder="0" scrolling="no" allowtransparency="true" marginwidth="0" marginheight="0" title="secure payment field" src="https://flex.cybersource.com/microform/bundle/v2.6.0/iframe.html?keyId=03m85mVXZZN2pxMELMz4gx2R858alalC#{&quot;microformType&quot;:&quot;card&quot;,&quot;microformId&quot;:&quot;7e42a549-0aaa-4811-8342-a0056cc18049&quot;,&quot;microformConfig&quot;:{&quot;styles&quot;:{&quot;input&quot;:{&quot;fontSize&quot;:&quot;14px&quot;,&quot;fontFamily&quot;:&quot;helvetica, tahoma, sans-serif&quot;,&quot;color&quot;:&quot;#555&quot;},&quot;:focus&quot;:{&quot;color&quot;:&quot;blue&quot;},&quot;:disabled&quot;:{&quot;cursor&quot;:&quot;not-allowed&quot;},&quot;valid&quot;:{&quot;color&quot;:&quot;#3c763d&quot;},&quot;invalid&quot;:{&quot;color&quot;:&quot;#a94442&quot;}}},&quot;fieldType&quot;:&quot;securityCode&quot;,&quot;fieldId&quot;:&quot;a563b703-495d-4b6b-8a91-888dc9859223&quot;,&quot;config&quot;:{&quot;placeholder&quot;:&quot;•••&quot;},&quot;jwt&quot;:&quot;eyJraWQiOiJ3ZiIsImFsZyI6IlJTMjU2In0.eyJmbHgiOnsicGF0aCI6Ii9mbGV4L3YyL3Rva2VucyIsImRhdGEiOiJpZ0dKYmhReDBibkdQTVQ0aHRGMzR4QUFFR3BuSWJDbTB5dTEyeCtPSnF6Z0xIQUxNUW5yYTl2dmduM0RZNmlvNlQrcjg0YnFjV0RpZ01ObGVWY0ZEelFYSlgyZ1N0MDdPMnJ6MFFNeGd5VGU2MzYzOTVMSDEwbFhiTWQzWkxVSkxmUmkiLCJvcmlnaW4iOiJodHRwczovL2ZsZXguY3liZXJzb3VyY2UuY29tIiwiandrIjp7Imt0eSI6IlJTQSIsImUiOiJBUUFCIiwidXNlIjoiZW5jIiwibiI6IjAyUzdGeWlyaGw2X1JBa2lONmhLa3U4UlMxUGljNEdJM3FQcFJwSXR1X3NwTVJyaDlXTzRiMmJSNEVfVWNTTlpTLWhQRWUtLVlTaGlKclNwbURYNXVOVURhd2pheWRwNkkxaWxGY0x4NGRLd1VfSTlZX1pTZHM1dk8temdpa0Z3WXVodGlrRG9KcWg1ak53cmpxWTJjRFpDTjR5aGg1YWxnd0Vzc3cyTkxKSklVdmtZSVhoYnNvSUN5OEVXRXFVcXBXLWQ5VHd0b1V4X0dULTlSMEs2WG05c1FvUFRPSG1oSl9jeUlQMGUwYnNteS1mbkpqUU5GQkwzZDFRbHZjWnhRY05OS0xGRWtoU21aa3IwNThxQ2dtZjBJMTRxeTUwWm9SUG5NcWZJbHp1ZUZvMWtRMS1wS2l2MHBSWlRsZVNnSkswN1hjUzFUVnk4NHJVMXgtZ0VLdyIsImtpZCI6IjAzbTg1bVZYWlpOMnB4TUVMTXo0Z3gyUjg1OGFsYWxDIn19LCJjdHgiOlt7ImRhdGEiOnsiY2xpZW50TGlicmFyeUludGVncml0eSI6InNoYTI1Ni00VFVLQmQzVk1JR0dOczFaTHpmVTZiRzBZRzRrVVNjU090UHU1ZWM3WWdvXHUwMDNkIiwiY2xpZW50TGlicmFyeSI6Imh0dHBzOi8vZmxleC5jeWJlcnNvdXJjZS5jb20vbWljcm9mb3JtL2J1bmRsZS92Mi4wLjIvZmxleC1taWNyb2Zvcm0ubWluLmpzIiwiYWxsb3dlZENhcmROZXR3b3JrcyI6WyJBTUVYIiwiRElORVJTQ0xVQiIsIkRJU0NPVkVSIiwiSkNCIiwiTUFTVEVSQ0FSRCIsIlZJU0EiXSwidGFyZ2V0T3JpZ2lucyI6WyJodHRwczovL2V0ZWNoYnV5LmNvbSIsImh0dHBzOi8vd3d3LmV0ZWNoYnV5LmNvbSIsImh0dHBzOi8vc3RhZ2luZy5ldGVjaGJ1eS5jb20iLCJodHRwOi8vbG9jYWxob3N0OjMwMDAiXSwibWZPcmlnaW4iOiJodHRwczovL2ZsZXguY3liZXJzb3VyY2UuY29tIn0sInR5cGUiOiJtZi0yLjAuMCJ9XSwiaXNzIjoiRmxleCBBUEkiLCJleHAiOjE3NDYzNzQxNDksImlhdCI6MTc0NjM3MzI0OSwianRpIjoibWlrNXR6b3FLMVRoVFJ2VyJ9.P62ANb2KynOCoYMewg8s36lBU-Rty-43tb_F7_8LEbKvqzb6MCas4yMWAAN9cZsxoWmYx8lIzS3-z-V0pGFhbyRwyy3g7Bx0nBRNAPV4mb0goOxVHvpfWzvDMmwbk5SQDexNuSMaZqDEgDO8ej89CRjLcYF-24_B7ykmyRr5x3nLWjlT990J5bqNG2qM9u8P67dGb2kC0eSvRUk-odTjIBxj3An0o0ls9nfQnlMLostnH67kYT88FAtdu8bjMFJMctZb9RaLngvTJsqKhLzBFayN7otrTxvVsINW3mP4ag6uKVW5xUpSWixrtWCilHZlJoBdcyNdhXL0qNShFgjVcw&quot;}"
                                                style="overflow: hidden; position: relative; border: none; width: 100%; height: 100%;"></iframe> -->
                                            </div>
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
                        </div>
                        <div style="display: flex; justify-content: center; margin-top: 20px;"></div>
                        <div style="display: flex; justify-content: center; margin-top: 20px;">
                            <button type="button" id="pay-button" class="w-full h-[50px] black-btn flex justify-center items-center bank_of_america_btn_main">Place Now</button>
                            <!-- <img id="loadingIcon" height="30px" width="30px" src="/loading.gif" style="margin-left: 10px; display: none;" alt="Loading"> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>