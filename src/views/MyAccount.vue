<template>
    <div>
        <main>
            <div class="profile_page_main_wrapper">
                <div class="profile-container">
                    <div class="profile-header" v-if="isLoggedIn">
                        <h1>Welcome to your Profile {{ customer?.first_name }} {{ customer?.last_name }}</h1>
                    </div>
                    <div class="profile-content">
                        <div class="profile-sidebar">
                            <ul>
                                <li>
                                    <span @click="logout">Logout</span>
                                </li>
                            </ul>
                        </div>
                        <div class="profile-main">
                            <div class="ant-tabs ant-tabs-top ant-tabs-centered css-i6rspj">
                                <div role="tablist" class="ant-tabs-nav">
                                    <div class="ant-tabs-nav-wrap">
                                        <div class="ant-tabs-nav-list" style="transform: translate(0px, 0px);">
                                            <div data-node-key="1" class="ant-tabs-tab ">
                                                <div role="tab" aria-selected="true" class="ant-tabs-tab-btn" tabindex="0" id="rc-tabs-2-tab-1" aria-controls="rc-tabs-2-panel-1">Dashboard</div>
                                            </div>
                                            <div data-node-key="2" class="ant-tabs-tab">
                                                <div role="tab" aria-selected="false" class="ant-tabs-tab-btn" tabindex="0" id="rc-tabs-2-tab-2" aria-controls="rc-tabs-2-panel-2">Personal Information</div>
                                            </div>
                                            <div data-node-key="3" class="ant-tabs-tab">
                                                <div role="tab" aria-selected="false" class="ant-tabs-tab-btn" tabindex="0" id="rc-tabs-2-tab-3" aria-controls="rc-tabs-2-panel-3">Order</div>
                                            </div>
                                            <div data-node-key="4" class="ant-tabs-tab">
                                                <div role="tab" aria-selected="false" class="ant-tabs-tab-btn" tabindex="0" id="rc-tabs-2-tab-4" aria-controls="rc-tabs-2-panel-4">Cancel Orders</div>
                                            </div>
                                            <div data-node-key="5" class="ant-tabs-tab">
                                                <div role="tab" aria-selected="false" class="ant-tabs-tab-btn" tabindex="0" id="rc-tabs-2-tab-5" aria-controls="rc-tabs-2-panel-5">Pending Orders</div>
                                            </div>
                                            <div data-node-key="6" class="ant-tabs-tab">
                                                <div role="tab" aria-selected="false" class="ant-tabs-tab-btn" tabindex="0" id="rc-tabs-2-tab-6" aria-controls="rc-tabs-2-panel-6">Return Orders</div>
                                            </div>
                                            <div data-node-key="7" class="ant-tabs-tab">
                                                <div role="tab" aria-selected="false" class="ant-tabs-tab-btn" tabindex="0" id="rc-tabs-2-tab-7" aria-controls="rc-tabs-2-panel-7">My Reviews</div>
                                            </div>
                                            <div data-node-key="9" class="ant-tabs-tab">
                                                <div role="tab" aria-selected="false" class="ant-tabs-tab-btn" tabindex="0" id="rc-tabs-2-tab-9" aria-controls="rc-tabs-2-panel-9">Quote</div>
                                            </div>
                                            <div data-node-key="10" class="ant-tabs-tab">
                                                <div role="tab" aria-selected="false" class="ant-tabs-tab-btn" tabindex="0" id="rc-tabs-2-tab-10" aria-controls="rc-tabs-2-panel-10">Change Password</div>
                                            </div>
                                            <div class="ant-tabs-ink-bar ant-tabs-ink-bar-animated" style="width: 78.8281px; left: 39.4141px; transform: translateX(-50%);"></div>
                                        </div>
                                    </div>
                                    <div class="ant-tabs-nav-operations ant-tabs-nav-operations-hidden">
                                        <button type="button" class="ant-tabs-nav-more" tabindex="-1" aria-hidden="true" aria-haspopup="listbox" aria-controls="rc-tabs-2-more-popup" id="rc-tabs-2-more" aria-expanded="false" style="visibility: hidden; order: 1;"><span role="img" aria-label="ellipsis" class="anticon anticon-ellipsis"><svg viewBox="64 64 896 896" focusable="false" data-icon="ellipsis" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"></path></svg></span></button>
                                    </div>
                                </div>
                                <div class="ant-tabs-content-holder">
                                    <div class="ant-tabs-content ant-tabs-content-top">
                                        <div role="tabpanel" tabindex="0" aria-hidden="false" class="ant-tabs-tabpane ant-tabs-tabpane-active" id="rc-tabs-2-panel-1" aria-labelledby="rc-tabs-2-tab-1">
                                            <div class="dashboard_wrapper">
                                                <div>
                                                    <h1>Personal Information</h1>
                                                </div>
                                                <div class="ant-row top_wrapper css-i6rspj">
                                                    <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>First Name:</td>
                                                                    <td class="bold">{{ customer?.first_name }}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Email:</td>
                                                                    <td class="bold">{{ customer?.email }}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>City:</td>
                                                                    <td class="bold">N/A</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Zip:</td>
                                                                    <td class="bold">N/A</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Last Name:</td>
                                                                    <td class="bold">{{ customer?.last_name }}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>State:</td>
                                                                    <td class="bold">N/A</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Phone:</td>
                                                                    <td class="bold">{{ customer?.phone }}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Country:</td>
                                                                    <td class="bold">{{ customer?.country }}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="rc-tabs-2-panel-2" role="tabpanel" tabindex="-1" aria-labelledby="rc-tabs-2-tab-2" aria-hidden="true" class="ant-tabs-tabpane ant-tabs-tabpane-hidden">
                                            <form >
                                                <div class="profile_info_wrapper">
                                                    <div class="ant-row css-i6rspj">
                                                        <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                            <div class="first_comman">
                                                                <label for="customer_firstname">First Name*</label>
                                                                <input v-model="form.first_name" id="customer_firstname" placeholder="First Name" value="Hamza" name="customer_firstname">
                                                            </div>
                                                            <span></span>
                                                        </div>
                                                        <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                            <div class="first_comman">
                                                                <label for="customer_lastname">Last Name*</label>
                                                                <input v-model="form.last_name" id="customer_lastname" placeholder="Last Name" value="Shiwani" name="customer_lastname">
                                                            </div>
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                    <div class="ant-row css-i6rspj">
                                                        <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                            <div class="first_comman">
                                                                <label for="customer_mobile">Phone Number*</label>
                                                                <input v-model="form.phone" id="customer_mobile" placeholder="+1270 00000" type="text" value="03338248375" name="customer_mobile">
                                                            </div>
                                                            <span></span>
                                                        </div>
                                                        <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                            <div class="first_comman">
                                                                <label for="customer_email">Email Address*</label>
                                                                <input v-model="form.email" id="customer_email" disabled="" placeholder="example@gmail.com" type="email" value="hamza@madmindscreative.com" name="customer_email">
                                                            </div>
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                    <div class="ant-row css-i6rspj">
                                                        <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                            <div class="first_comman">
                                                                <label for="Country">Country</label>
                                                                <select id="customer_shipping_country" name="customer_shipping_country" style="font-weight: bold; color: rgb(0, 0, 0);">
                                                                    <option value="" disabled="">Select a country</option>
                                                                    <option data-dropdownname="Afghanistan" value="AF">Afghanistan</option>
                                                                    <option data-dropdownname="Aland Islands" value="AX">Aland Islands</option>
                                                                    <option data-dropdownname="Albania" value="AL">Albania</option>
                                                                    <option data-dropdownname="Algeria" value="DZ">Algeria</option>
                                                                    <option data-dropdownname="American Samoa" value="AS">American Samoa</option>
                                                                    <option data-dropdownname="Andorra" value="AD">Andorra</option>
                                                                    <option data-dropdownname="Angola" value="AO">Angola</option>
                                                                    <option data-dropdownname="Anguilla" value="AI">Anguilla</option>
                                                                    <option data-dropdownname="Antarctica" value="AQ">Antarctica</option>
                                                                    <option data-dropdownname="Antigua And Barbuda" value="AG">Antigua And Barbuda</option>
                                                                    <option data-dropdownname="Argentina" value="AR">Argentina</option>
                                                                    <option data-dropdownname="Armenia" value="AM">Armenia</option>
                                                                    <option data-dropdownname="Aruba" value="AW">Aruba</option>
                                                                    <option data-dropdownname="Australia" value="AU">Australia</option>
                                                                    <option data-dropdownname="Austria" value="AT">Austria</option>
                                                                    <option data-dropdownname="Azerbaijan" value="AZ">Azerbaijan</option>
                                                                    <option data-dropdownname="Bahrain" value="BH">Bahrain</option>
                                                                    <option data-dropdownname="Bangladesh" value="BD">Bangladesh</option>
                                                                    <option data-dropdownname="Barbados" value="BB">Barbados</option>
                                                                    <option data-dropdownname="Belarus" value="BY">Belarus</option>
                                                                    <option data-dropdownname="Belgium" value="BE">Belgium</option>
                                                                    <option data-dropdownname="Belize" value="BZ">Belize</option>
                                                                    <option data-dropdownname="Benin" value="BJ">Benin</option>
                                                                    <option data-dropdownname="Bermuda" value="BM">Bermuda</option>
                                                                    <option data-dropdownname="Bhutan" value="BT">Bhutan</option>
                                                                    <option data-dropdownname="Bolivia" value="BO">Bolivia</option>
                                                                    <option data-dropdownname="Bonaire, Sint Eustatius and Saba" value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                                                    <option data-dropdownname="Bosnia and Herzegovina" value="BA">Bosnia and Herzegovina</option>
                                                                    <option data-dropdownname="Botswana" value="BW">Botswana</option>
                                                                    <option data-dropdownname="Bouvet Island" value="BV">Bouvet Island</option>
                                                                    <option data-dropdownname="Brazil" value="BR">Brazil</option>
                                                                    <option data-dropdownname="British Indian Ocean Territory" value="IO">British Indian Ocean Territory</option>
                                                                    <option data-dropdownname="Brunei" value="BN">Brunei</option>
                                                                    <option data-dropdownname="Bulgaria" value="BG">Bulgaria</option>
                                                                    <option data-dropdownname="Burkina Faso" value="BF">Burkina Faso</option>
                                                                    <option data-dropdownname="Burundi" value="BI">Burundi</option>
                                                                    <option data-dropdownname="Cambodia" value="KH">Cambodia</option>
                                                                    <option data-dropdownname="Cameroon" value="CM">Cameroon</option>
                                                                    <option data-dropdownname="Canada" value="CA">Canada</option>
                                                                    <option data-dropdownname="Cape Verde" value="CV">Cape Verde</option>
                                                                    <option data-dropdownname="Cayman Islands" value="KY">Cayman Islands</option>
                                                                    <option data-dropdownname="Central African Republic" value="CF">Central African Republic</option>
                                                                    <option data-dropdownname="Chad" value="TD">Chad</option>
                                                                    <option data-dropdownname="Chile" value="CL">Chile</option>
                                                                    <option data-dropdownname="China" value="CN">China</option>
                                                                    <option data-dropdownname="Christmas Island" value="CX">Christmas Island</option>
                                                                    <option data-dropdownname="Cocos (Keeling) Islands" value="CC">Cocos (Keeling) Islands</option>
                                                                    <option data-dropdownname="Colombia" value="CO">Colombia</option>
                                                                    <option data-dropdownname="Comoros" value="KM">Comoros</option>
                                                                    <option data-dropdownname="Congo" value="CG">Congo</option>
                                                                    <option data-dropdownname="Cook Islands" value="CK">Cook Islands</option>
                                                                    <option data-dropdownname="Costa Rica" value="CR">Costa Rica</option>
                                                                    <option data-dropdownname="Cote D'Ivoire (Ivory Coast)" value="CI">Cote D'Ivoire (Ivory Coast)</option>
                                                                    <option data-dropdownname="Croatia" value="HR">Croatia</option>
                                                                    <option data-dropdownname="Cuba" value="CU">Cuba</option>
                                                                    <option data-dropdownname="Curaçao" value="CW">Curaçao</option>
                                                                    <option data-dropdownname="Cyprus" value="CY">Cyprus</option>
                                                                    <option data-dropdownname="Czech Republic" value="CZ">Czech Republic</option>
                                                                    <option data-dropdownname="Democratic Republic of the Congo" value="CD">Democratic Republic of the Congo</option>
                                                                    <option data-dropdownname="Denmark" value="DK">Denmark</option>
                                                                    <option data-dropdownname="Djibouti" value="DJ">Djibouti</option>
                                                                    <option data-dropdownname="Dominica" value="DM">Dominica</option>
                                                                    <option data-dropdownname="Dominican Republic" value="DO">Dominican Republic</option>
                                                                    <option data-dropdownname="East Timor" value="TL">East Timor</option>
                                                                    <option data-dropdownname="Ecuador" value="EC">Ecuador</option>
                                                                    <option data-dropdownname="Egypt" value="EG">Egypt</option>
                                                                    <option data-dropdownname="El Salvador" value="SV">El Salvador</option>
                                                                    <option data-dropdownname="Equatorial Guinea" value="GQ">Equatorial Guinea</option>
                                                                    <option data-dropdownname="Eritrea" value="ER">Eritrea</option>
                                                                    <option data-dropdownname="Estonia" value="EE">Estonia</option>
                                                                    <option data-dropdownname="Ethiopia" value="ET">Ethiopia</option>
                                                                    <option data-dropdownname="Falkland Islands" value="FK">Falkland Islands</option>
                                                                    <option data-dropdownname="Faroe Islands" value="FO">Faroe Islands</option>
                                                                    <option data-dropdownname="Fiji Islands" value="FJ">Fiji Islands</option>
                                                                    <option data-dropdownname="Finland" value="FI">Finland</option>
                                                                    <option data-dropdownname="France" value="FR">France</option>
                                                                    <option data-dropdownname="French Guiana" value="GF">French Guiana</option>
                                                                    <option data-dropdownname="French Polynesia" value="PF">French Polynesia</option>
                                                                    <option data-dropdownname="French Southern Territories" value="TF">French Southern Territories</option>
                                                                    <option data-dropdownname="Gabon" value="GA">Gabon</option>
                                                                    <option data-dropdownname="Gambia The" value="GM">Gambia The</option>
                                                                    <option data-dropdownname="Georgia" value="GE">Georgia</option>
                                                                    <option data-dropdownname="Germany" value="DE">Germany</option>
                                                                    <option data-dropdownname="Ghana" value="GH">Ghana</option>
                                                                    <option data-dropdownname="Gibraltar" value="GI">Gibraltar</option>
                                                                    <option data-dropdownname="Greece" value="GR">Greece</option>
                                                                    <option data-dropdownname="Greenland" value="GL">Greenland</option>
                                                                    <option data-dropdownname="Grenada" value="GD">Grenada</option>
                                                                    <option data-dropdownname="Guadeloupe" value="GP">Guadeloupe</option>
                                                                    <option data-dropdownname="Guam" value="GU">Guam</option>
                                                                    <option data-dropdownname="Guatemala" value="GT">Guatemala</option>
                                                                    <option data-dropdownname="Guernsey and Alderney" value="GG">Guernsey and Alderney</option>
                                                                    <option data-dropdownname="Guinea" value="GN">Guinea</option>
                                                                    <option data-dropdownname="Guinea-Bissau" value="GW">Guinea-Bissau</option>
                                                                    <option data-dropdownname="Guyana" value="GY">Guyana</option>
                                                                    <option data-dropdownname="Haiti" value="HT">Haiti</option>
                                                                    <option data-dropdownname="Heard Island and McDonald Islands" value="HM">Heard Island and McDonald Islands</option>
                                                                    <option data-dropdownname="Honduras" value="HN">Honduras</option>
                                                                    <option data-dropdownname="Hong Kong S.A.R." value="HK">Hong Kong S.A.R.</option>
                                                                    <option data-dropdownname="Hungary" value="HU">Hungary</option>
                                                                    <option data-dropdownname="Iceland" value="IS">Iceland</option>
                                                                    <option data-dropdownname="India" value="IN">India</option>
                                                                    <option data-dropdownname="Indonesia" value="ID">Indonesia</option>
                                                                    <option data-dropdownname="Iran" value="IR">Iran</option>
                                                                    <option data-dropdownname="Iraq" value="IQ">Iraq</option>
                                                                    <option data-dropdownname="Ireland" value="IE">Ireland</option>
                                                                    <option data-dropdownname="Israel" value="IL">Israel</option>
                                                                    <option data-dropdownname="Italy" value="IT">Italy</option>
                                                                    <option data-dropdownname="Jamaica" value="JM">Jamaica</option>
                                                                    <option data-dropdownname="Japan" value="JP">Japan</option>
                                                                    <option data-dropdownname="Jersey" value="JE">Jersey</option>
                                                                    <option data-dropdownname="Jordan" value="JO">Jordan</option>
                                                                    <option data-dropdownname="Kazakhstan" value="KZ">Kazakhstan</option>
                                                                    <option data-dropdownname="Kenya" value="KE">Kenya</option>
                                                                    <option data-dropdownname="Kiribati" value="KI">Kiribati</option>
                                                                    <option data-dropdownname="Kosovo" value="XK">Kosovo</option>
                                                                    <option data-dropdownname="Kuwait" value="KW">Kuwait</option>
                                                                    <option data-dropdownname="Kyrgyzstan" value="KG">Kyrgyzstan</option>
                                                                    <option data-dropdownname="Laos" value="LA">Laos</option>
                                                                    <option data-dropdownname="Latvia" value="LV">Latvia</option>
                                                                    <option data-dropdownname="Lebanon" value="LB">Lebanon</option>
                                                                    <option data-dropdownname="Lesotho" value="LS">Lesotho</option>
                                                                    <option data-dropdownname="Liberia" value="LR">Liberia</option>
                                                                    <option data-dropdownname="Libya" value="LY">Libya</option>
                                                                    <option data-dropdownname="Liechtenstein" value="LI">Liechtenstein</option>
                                                                    <option data-dropdownname="Lithuania" value="LT">Lithuania</option>
                                                                    <option data-dropdownname="Luxembourg" value="LU">Luxembourg</option>
                                                                    <option data-dropdownname="Macau S.A.R." value="MO">Macau S.A.R.</option>
                                                                    <option data-dropdownname="Madagascar" value="MG">Madagascar</option>
                                                                    <option data-dropdownname="Malawi" value="MW">Malawi</option>
                                                                    <option data-dropdownname="Malaysia" value="MY">Malaysia</option>
                                                                    <option data-dropdownname="Maldives" value="MV">Maldives</option>
                                                                    <option data-dropdownname="Mali" value="ML">Mali</option>
                                                                    <option data-dropdownname="Malta" value="MT">Malta</option>
                                                                    <option data-dropdownname="Man (Isle of)" value="IM">Man (Isle of)</option>
                                                                    <option data-dropdownname="Marshall Islands" value="MH">Marshall Islands</option>
                                                                    <option data-dropdownname="Martinique" value="MQ">Martinique</option>
                                                                    <option data-dropdownname="Mauritania" value="MR">Mauritania</option>
                                                                    <option data-dropdownname="Mauritius" value="MU">Mauritius</option>
                                                                    <option data-dropdownname="Mayotte" value="YT">Mayotte</option>
                                                                    <option data-dropdownname="Mexico" value="MX">Mexico</option>
                                                                    <option data-dropdownname="Micronesia" value="FM">Micronesia</option>
                                                                    <option data-dropdownname="Moldova" value="MD">Moldova</option>
                                                                    <option data-dropdownname="Monaco" value="MC">Monaco</option>
                                                                    <option data-dropdownname="Mongolia" value="MN">Mongolia</option>
                                                                    <option data-dropdownname="Montenegro" value="ME">Montenegro</option>
                                                                    <option data-dropdownname="Montserrat" value="MS">Montserrat</option>
                                                                    <option data-dropdownname="Morocco" value="MA">Morocco</option>
                                                                    <option data-dropdownname="Mozambique" value="MZ">Mozambique</option>
                                                                    <option data-dropdownname="Myanmar" value="MM">Myanmar</option>
                                                                    <option data-dropdownname="Namibia" value="NA">Namibia</option>
                                                                    <option data-dropdownname="Nauru" value="NR">Nauru</option>
                                                                    <option data-dropdownname="Nepal" value="NP">Nepal</option>
                                                                    <option data-dropdownname="Netherlands" value="NL">Netherlands</option>
                                                                    <option data-dropdownname="New Caledonia" value="NC">New Caledonia</option>
                                                                    <option data-dropdownname="New Zealand" value="NZ">New Zealand</option>
                                                                    <option data-dropdownname="Nicaragua" value="NI">Nicaragua</option>
                                                                    <option data-dropdownname="Niger" value="NE">Niger</option>
                                                                    <option data-dropdownname="Nigeria" value="NG">Nigeria</option>
                                                                    <option data-dropdownname="Niue" value="NU">Niue</option>
                                                                    <option data-dropdownname="Norfolk Island" value="NF">Norfolk Island</option>
                                                                    <option data-dropdownname="North Korea" value="KP">North Korea</option>
                                                                    <option data-dropdownname="North Macedonia" value="MK">North Macedonia</option>
                                                                    <option data-dropdownname="Northern Mariana Islands" value="MP">Northern Mariana Islands</option>
                                                                    <option data-dropdownname="Norway" value="NO">Norway</option>
                                                                    <option data-dropdownname="Oman" value="OM">Oman</option>
                                                                    <option data-dropdownname="Pakistan" value="PK">Pakistan</option>
                                                                    <option data-dropdownname="Palau" value="PW">Palau</option>
                                                                    <option data-dropdownname="Palestinian Territory Occupied" value="PS">Palestinian Territory Occupied</option>
                                                                    <option data-dropdownname="Panama" value="PA">Panama</option>
                                                                    <option data-dropdownname="Papua new Guinea" value="PG">Papua new Guinea</option>
                                                                    <option data-dropdownname="Paraguay" value="PY">Paraguay</option>
                                                                    <option data-dropdownname="Peru" value="PE">Peru</option>
                                                                    <option data-dropdownname="Philippines" value="PH">Philippines</option>
                                                                    <option data-dropdownname="Pitcairn Island" value="PN">Pitcairn Island</option>
                                                                    <option data-dropdownname="Poland" value="PL">Poland</option>
                                                                    <option data-dropdownname="Portugal" value="PT">Portugal</option>
                                                                    <option data-dropdownname="Puerto Rico" value="PR">Puerto Rico</option>
                                                                    <option data-dropdownname="Qatar" value="QA">Qatar</option>
                                                                    <option data-dropdownname="Reunion" value="RE">Reunion</option>
                                                                    <option data-dropdownname="Romania" value="RO">Romania</option>
                                                                    <option data-dropdownname="Russia" value="RU">Russia</option>
                                                                    <option data-dropdownname="Rwanda" value="RW">Rwanda</option>
                                                                    <option data-dropdownname="Saint Helena" value="SH">Saint Helena</option>
                                                                    <option data-dropdownname="Saint Kitts And Nevis" value="KN">Saint Kitts And Nevis</option>
                                                                    <option data-dropdownname="Saint Lucia" value="LC">Saint Lucia</option>
                                                                    <option data-dropdownname="Saint Pierre and Miquelon" value="PM">Saint Pierre and Miquelon</option>
                                                                    <option data-dropdownname="Saint Vincent And The Grenadines" value="VC">Saint Vincent And The Grenadines</option>
                                                                    <option data-dropdownname="Saint-Barthelemy" value="BL">Saint-Barthelemy</option>
                                                                    <option data-dropdownname="Saint-Martin (French part)" value="MF">Saint-Martin (French part)</option>
                                                                    <option data-dropdownname="Samoa" value="WS">Samoa</option>
                                                                    <option data-dropdownname="San Marino" value="SM">San Marino</option>
                                                                    <option data-dropdownname="Sao Tome and Principe" value="ST">Sao Tome and Principe</option>
                                                                    <option data-dropdownname="Saudi Arabia" value="SA">Saudi Arabia</option>
                                                                    <option data-dropdownname="Senegal" value="SN">Senegal</option>
                                                                    <option data-dropdownname="Serbia" value="RS">Serbia</option>
                                                                    <option data-dropdownname="Seychelles" value="SC">Seychelles</option>
                                                                    <option data-dropdownname="Sierra Leone" value="SL">Sierra Leone</option>
                                                                    <option data-dropdownname="Singapore" value="SG">Singapore</option>
                                                                    <option data-dropdownname="Sint Maarten (Dutch part)" value="SX">Sint Maarten (Dutch part)</option>
                                                                    <option data-dropdownname="Slovakia" value="SK">Slovakia</option>
                                                                    <option data-dropdownname="Slovenia" value="SI">Slovenia</option>
                                                                    <option data-dropdownname="Solomon Islands" value="SB">Solomon Islands</option>
                                                                    <option data-dropdownname="Somalia" value="SO">Somalia</option>
                                                                    <option data-dropdownname="South Africa" value="ZA">South Africa</option>
                                                                    <option data-dropdownname="South Georgia" value="GS">South Georgia</option>
                                                                    <option data-dropdownname="South Korea" value="KR">South Korea</option>
                                                                    <option data-dropdownname="South Sudan" value="SS">South Sudan</option>
                                                                    <option data-dropdownname="Spain" value="ES">Spain</option>
                                                                    <option data-dropdownname="Sri Lanka" value="LK">Sri Lanka</option>
                                                                    <option data-dropdownname="Sudan" value="SD">Sudan</option>
                                                                    <option data-dropdownname="Suriname" value="SR">Suriname</option>
                                                                    <option data-dropdownname="Svalbard And Jan Mayen Islands" value="SJ">Svalbard And Jan Mayen Islands</option>
                                                                    <option data-dropdownname="Swaziland" value="SZ">Swaziland</option>
                                                                    <option data-dropdownname="Sweden" value="SE">Sweden</option>
                                                                    <option data-dropdownname="Switzerland" value="CH">Switzerland</option>
                                                                    <option data-dropdownname="Syria" value="SY">Syria</option>
                                                                    <option data-dropdownname="Taiwan" value="TW">Taiwan</option>
                                                                    <option data-dropdownname="Tajikistan" value="TJ">Tajikistan</option>
                                                                    <option data-dropdownname="Tanzania" value="TZ">Tanzania</option>
                                                                    <option data-dropdownname="Thailand" value="TH">Thailand</option>
                                                                    <option data-dropdownname="The Bahamas" value="BS">The Bahamas</option>
                                                                    <option data-dropdownname="Togo" value="TG">Togo</option>
                                                                    <option data-dropdownname="Tokelau" value="TK">Tokelau</option>
                                                                    <option data-dropdownname="Tonga" value="TO">Tonga</option>
                                                                    <option data-dropdownname="Trinidad And Tobago" value="TT">Trinidad And Tobago</option>
                                                                    <option data-dropdownname="Tunisia" value="TN">Tunisia</option>
                                                                    <option data-dropdownname="Turkey" value="TR">Turkey</option>
                                                                    <option data-dropdownname="Turkmenistan" value="TM">Turkmenistan</option>
                                                                    <option data-dropdownname="Turks And Caicos Islands" value="TC">Turks And Caicos Islands</option>
                                                                    <option data-dropdownname="Tuvalu" value="TV">Tuvalu</option>
                                                                    <option data-dropdownname="Uganda" value="UG">Uganda</option>
                                                                    <option data-dropdownname="Ukraine" value="UA">Ukraine</option>
                                                                    <option data-dropdownname="United Arab Emirates" value="AE">United Arab Emirates</option>
                                                                    <option data-dropdownname="United Kingdom" value="GB">United Kingdom</option>
                                                                    <option data-dropdownname="United States" value="US">United States</option>
                                                                    <option data-dropdownname="United States Minor Outlying Islands" value="UM">United States Minor Outlying Islands</option>
                                                                    <option data-dropdownname="Uruguay" value="UY">Uruguay</option>
                                                                    <option data-dropdownname="Uzbekistan" value="UZ">Uzbekistan</option>
                                                                    <option data-dropdownname="Vanuatu" value="VU">Vanuatu</option>
                                                                    <option data-dropdownname="Vatican City State (Holy See)" value="VA">Vatican City State (Holy See)</option>
                                                                    <option data-dropdownname="Venezuela" value="VE">Venezuela</option>
                                                                    <option data-dropdownname="Vietnam" value="VN">Vietnam</option>
                                                                    <option data-dropdownname="Virgin Islands (British)" value="VG">Virgin Islands (British)</option>
                                                                    <option data-dropdownname="Virgin Islands (US)" value="VI">Virgin Islands (US)</option>
                                                                    <option data-dropdownname="Wallis And Futuna Islands" value="WF">Wallis And Futuna Islands</option>
                                                                    <option data-dropdownname="Western Sahara" value="EH">Western Sahara</option>
                                                                    <option data-dropdownname="Yemen" value="YE">Yemen</option>
                                                                    <option data-dropdownname="Zambia" value="ZM">Zambia</option>
                                                                    <option data-dropdownname="Zimbabwe" value="ZW">Zimbabwe</option>
                                                                </select>
                                                            </div><span></span></div>
                                                        <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                            <div class="first_comman">
                                                                <label for="shipping_state">State</label>
                                                                <select id="customer_shipping_state" name="customer_shipping_state" style="font-weight: bold; color: rgb(0, 0, 0);">
                                                                    <option value="">Select a state</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ant-row css-i6rspj">
                                                        <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                            <div class="first_comman">
                                                                <label for="shipping_city">City</label>
                                                                <select id="customer_shipping_city" name="customer_shipping_city" style="font-weight: bold; color: rgb(0, 0, 0);">
                                                                    <option value="">Select a city</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                            <div class="first_comman">
                                                                <label for="customer_shipping_postcode">Post Code</label>
                                                                <input id="customer_shipping_postcode" type="text" name="customer_shipping_postcode">
                                                            </div>
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                    <button type="button" class="update_btn">Update Profile</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div id="rc-tabs-2-panel-3" role="tabpanel" tabindex="-1" aria-labelledby="rc-tabs-2-tab-3" aria-hidden="true" class="ant-tabs-tabpane ant-tabs-tabpane-hidden">
                                            <div class="order_wrapper">
                                                <div class="modal" style="display: none;">
                                                    <div class="modal-content"><span class="close">×</span>
                                                        <h1>Products</h1>
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col" class="modal_title">Title</th>
                                                                    <th scope="col" class="modal_title">View</th>
                                                                    <th scope="col" class="modal_title">Review</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody></tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="order_card">
                                                        <div><span><svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.4473 8.03086C32.482 8.37876 32.5 8.73144 32.5 9.08829C32.5 14.919 27.7564 19.6625 21.9258 19.6625C16.0951 19.6625 11.3516 14.919 11.3516 9.08829C11.3516 8.73144 11.3695 8.37876 11.4042 8.03086H8.98055L8.05537 0.628906H0.777344V2.74375H6.18839L8.56759 21.7774H34.1868L35.8039 8.03086H32.4473Z" fill="#FFBB38"></path><path d="M9.09669 26.0074H6.06485C4.31566 26.0074 2.89258 27.4305 2.89258 29.1797C2.89258 30.9289 4.31566 32.352 6.06485 32.352H6.24672C6.12935 32.6829 6.06485 33.0386 6.06485 33.4094C6.06485 35.1586 7.48793 36.5816 9.23711 36.5816C11.4247 36.5816 12.9571 34.4091 12.2274 32.352H22.1081C21.377 34.413 22.9157 36.5816 25.0985 36.5816C26.8476 36.5816 28.2707 35.1586 28.2707 33.4094C28.2707 33.0386 28.2061 32.6829 28.0888 32.352H30.3856V30.2371H6.06485C5.48178 30.2371 5.00742 29.7628 5.00742 29.1797C5.00742 28.5966 5.48178 28.1223 6.06485 28.1223H33.4407L33.9384 23.8926H8.83233L9.09669 26.0074Z" fill="#FFBB38"></path><path d="M21.9262 17.5477C26.5907 17.5477 30.3856 13.7528 30.3856 9.08829C30.3856 4.42378 26.5907 0.628906 21.9262 0.628906C17.2616 0.628906 13.4668 4.42378 13.4668 9.08829C13.4668 13.7528 17.2617 17.5477 21.9262 17.5477ZM20.8688 5.91602H22.9836V8.6503L24.7886 10.4554L23.2932 11.9508L20.8687 9.5262V5.91602H20.8688Z" fill="#FFBB38"></path></svg></span></div>
                                                        <div class="order_total">
                                                            <p>Your Orders</p><span>{{ orders.length }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <table>
                                                        <tbody>
                                                             <tr>
                                                                <td>Orders</td>
                                                                <td>Date</td>
                                                                <td>Tracking</td>
                                                                <td>Status</td>
                                                                <td>Amount</td>
                                                                <td>Action</td>
                                                            </tr>
                                                           <tr v-if="!orders">
                                                                <td colspan="6">No orders found.</td>
                                                                </tr>
                                                                <tr v-else v-for="order in orders" :key="order.id">
                                                                <td>#{{ order.order_number }}</td>
                                                                <td>{{ new Date(order.created_at).toLocaleDateString() }}</td>
                                                                <td>{{ order.tracking_number || 'N/A' }}</td>
                                                                <td>{{ order.order_status }}</td>
                                                                <td>${{ order.total }}</td>
                                                                <td>
                                                                    <button>View</button>
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="rc-tabs-2-panel-4" role="tabpanel" tabindex="-1" aria-labelledby="rc-tabs-2-tab-4" aria-hidden="true" class="ant-tabs-tabpane ant-tabs-tabpane-hidden">
                                            <div class="order_wrapper">
                                                <div class="modal" style="display: none;">
                                                    <div class="modal-content"><span class="close">×</span>
                                                        <h1>Products</h1>
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col" class="modal_title">Title</th>
                                                                    <th scope="col" class="modal_title">View</th>
                                                                    <th scope="col" class="modal_title">Review</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody></tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="order_card">
                                                        <div><span><svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.4473 8.03086C32.482 8.37876 32.5 8.73144 32.5 9.08829C32.5 14.919 27.7564 19.6625 21.9258 19.6625C16.0951 19.6625 11.3516 14.919 11.3516 9.08829C11.3516 8.73144 11.3695 8.37876 11.4042 8.03086H8.98055L8.05537 0.628906H0.777344V2.74375H6.18839L8.56759 21.7774H34.1868L35.8039 8.03086H32.4473Z" fill="#FFBB38"></path><path d="M9.09669 26.0074H6.06485C4.31566 26.0074 2.89258 27.4305 2.89258 29.1797C2.89258 30.9289 4.31566 32.352 6.06485 32.352H6.24672C6.12935 32.6829 6.06485 33.0386 6.06485 33.4094C6.06485 35.1586 7.48793 36.5816 9.23711 36.5816C11.4247 36.5816 12.9571 34.4091 12.2274 32.352H22.1081C21.377 34.413 22.9157 36.5816 25.0985 36.5816C26.8476 36.5816 28.2707 35.1586 28.2707 33.4094C28.2707 33.0386 28.2061 32.6829 28.0888 32.352H30.3856V30.2371H6.06485C5.48178 30.2371 5.00742 29.7628 5.00742 29.1797C5.00742 28.5966 5.48178 28.1223 6.06485 28.1223H33.4407L33.9384 23.8926H8.83233L9.09669 26.0074Z" fill="#FFBB38"></path><path d="M21.9262 17.5477C26.5907 17.5477 30.3856 13.7528 30.3856 9.08829C30.3856 4.42378 26.5907 0.628906 21.9262 0.628906C17.2616 0.628906 13.4668 4.42378 13.4668 9.08829C13.4668 13.7528 17.2617 17.5477 21.9262 17.5477ZM20.8688 5.91602H22.9836V8.6503L24.7886 10.4554L23.2932 11.9508L20.8687 9.5262V5.91602H20.8688Z" fill="#FFBB38"></path></svg></span></div>
                                                        <div class="order_total">
                                                            <p>Cancel Orders</p><span>{{ cancel_orders.length }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>Orders</td>
                                                                <td>Date</td>
                                                                <td>Tracking</td>
                                                                <td>Status</td>
                                                                <td>Amount</td>
                                                                <td>Action</td>
                                                            </tr>
                                                            <tr v-if="!cancel_orders">
                                                                <td colspan="6">No orders found.</td>
                                                                </tr>
                                                                <tr v-else v-for="cancel_order in cancel_orders" :key="cancel_order.id">
                                                                <td>#{{ cancel_order.order_number }}</td>
                                                                <td>{{ new Date(cancel_order.created_at).toLocaleDateString() }}</td>
                                                                <td>{{ cancel_order.tracking_number || 'N/A' }}</td>
                                                                <td>{{ cancel_order.order_status }}</td>
                                                                <td>${{ cancel_order.total }}</td>
                                                                <td>
                                                                    <button>View</button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="rc-tabs-2-panel-5" role="tabpanel" tabindex="-1" aria-labelledby="rc-tabs-2-tab-5" aria-hidden="true" class="ant-tabs-tabpane ant-tabs-tabpane-hidden">
                                            <div class="order_wrapper">
                                                <div class="modal" style="display: none;">
                                                    <div class="modal-content"><span class="close">×</span>
                                                        <h1>Products</h1>
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col" class="modal_title">Title</th>
                                                                    <th scope="col" class="modal_title">View</th>
                                                                    <th scope="col" class="modal_title">Review</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody></tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="order_card">
                                                        <div><span><svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.4473 8.03086C32.482 8.37876 32.5 8.73144 32.5 9.08829C32.5 14.919 27.7564 19.6625 21.9258 19.6625C16.0951 19.6625 11.3516 14.919 11.3516 9.08829C11.3516 8.73144 11.3695 8.37876 11.4042 8.03086H8.98055L8.05537 0.628906H0.777344V2.74375H6.18839L8.56759 21.7774H34.1868L35.8039 8.03086H32.4473Z" fill="#FFBB38"></path><path d="M9.09669 26.0074H6.06485C4.31566 26.0074 2.89258 27.4305 2.89258 29.1797C2.89258 30.9289 4.31566 32.352 6.06485 32.352H6.24672C6.12935 32.6829 6.06485 33.0386 6.06485 33.4094C6.06485 35.1586 7.48793 36.5816 9.23711 36.5816C11.4247 36.5816 12.9571 34.4091 12.2274 32.352H22.1081C21.377 34.413 22.9157 36.5816 25.0985 36.5816C26.8476 36.5816 28.2707 35.1586 28.2707 33.4094C28.2707 33.0386 28.2061 32.6829 28.0888 32.352H30.3856V30.2371H6.06485C5.48178 30.2371 5.00742 29.7628 5.00742 29.1797C5.00742 28.5966 5.48178 28.1223 6.06485 28.1223H33.4407L33.9384 23.8926H8.83233L9.09669 26.0074Z" fill="#FFBB38"></path><path d="M21.9262 17.5477C26.5907 17.5477 30.3856 13.7528 30.3856 9.08829C30.3856 4.42378 26.5907 0.628906 21.9262 0.628906C17.2616 0.628906 13.4668 4.42378 13.4668 9.08829C13.4668 13.7528 17.2617 17.5477 21.9262 17.5477ZM20.8688 5.91602H22.9836V8.6503L24.7886 10.4554L23.2932 11.9508L20.8687 9.5262V5.91602H20.8688Z" fill="#FFBB38"></path></svg></span></div>
                                                        <div class="order_total">
                                                            <p>Pending Orders</p><span>{{ pending_orders.length }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>Orders</td>
                                                                <td>Date</td>
                                                                <td>Tracking</td>
                                                                <td>Status</td>
                                                                <td>Amount</td>
                                                                <td>Action</td>
                                                            </tr>
                                                            <tr v-if="!pending_orders">
                                                                <td colspan="6">No orders found.</td>
                                                                </tr>
                                                                <tr v-else v-for="pending_order in pending_orders" :key="pending_order.id">
                                                                <td>#{{ pending_order.order_number }}</td>
                                                                <td>{{ new Date(pending_order.created_at).toLocaleDateString() }}</td>
                                                                <td>{{ pending_order.tracking_number || 'N/A' }}</td>
                                                                <td>{{ pending_order.order_status }}</td>
                                                                <td>${{ pending_order.total }}</td>
                                                                <td>
                                                                    <button>View</button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="rc-tabs-2-panel-6" role="tabpanel" tabindex="-1" aria-labelledby="rc-tabs-2-tab-6" aria-hidden="true" class="ant-tabs-tabpane ant-tabs-tabpane-hidden">
                                            <div class="order_wrapper">
                                                <div class="modal" style="display: none;">
                                                    <div class="modal-content"><span class="close">×</span>
                                                        <h1>Products</h1>
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col" class="modal_title">Title</th>
                                                                    <th scope="col" class="modal_title">View</th>
                                                                    <th scope="col" class="modal_title">Review</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody></tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="order_card">
                                                        <div><span><svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.4473 8.03086C32.482 8.37876 32.5 8.73144 32.5 9.08829C32.5 14.919 27.7564 19.6625 21.9258 19.6625C16.0951 19.6625 11.3516 14.919 11.3516 9.08829C11.3516 8.73144 11.3695 8.37876 11.4042 8.03086H8.98055L8.05537 0.628906H0.777344V2.74375H6.18839L8.56759 21.7774H34.1868L35.8039 8.03086H32.4473Z" fill="#FFBB38"></path><path d="M9.09669 26.0074H6.06485C4.31566 26.0074 2.89258 27.4305 2.89258 29.1797C2.89258 30.9289 4.31566 32.352 6.06485 32.352H6.24672C6.12935 32.6829 6.06485 33.0386 6.06485 33.4094C6.06485 35.1586 7.48793 36.5816 9.23711 36.5816C11.4247 36.5816 12.9571 34.4091 12.2274 32.352H22.1081C21.377 34.413 22.9157 36.5816 25.0985 36.5816C26.8476 36.5816 28.2707 35.1586 28.2707 33.4094C28.2707 33.0386 28.2061 32.6829 28.0888 32.352H30.3856V30.2371H6.06485C5.48178 30.2371 5.00742 29.7628 5.00742 29.1797C5.00742 28.5966 5.48178 28.1223 6.06485 28.1223H33.4407L33.9384 23.8926H8.83233L9.09669 26.0074Z" fill="#FFBB38"></path><path d="M21.9262 17.5477C26.5907 17.5477 30.3856 13.7528 30.3856 9.08829C30.3856 4.42378 26.5907 0.628906 21.9262 0.628906C17.2616 0.628906 13.4668 4.42378 13.4668 9.08829C13.4668 13.7528 17.2617 17.5477 21.9262 17.5477ZM20.8688 5.91602H22.9836V8.6503L24.7886 10.4554L23.2932 11.9508L20.8687 9.5262V5.91602H20.8688Z" fill="#FFBB38"></path></svg></span></div>
                                                        <div class="order_total">
                                                            <p>Return Orders</p><span>{{ return_orders.length }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>Orders</td>
                                                                <td>Date</td>
                                                                <td>Tracking</td>
                                                                <td>Status</td>
                                                                <td>Amount</td>
                                                                <td>Action</td>
                                                            </tr>
                                                            <tr v-if="!return_orders">
                                                                <td colspan="6">No orders found.</td>
                                                                </tr>
                                                                <tr v-else v-for="return_order in return_orders" :key="return_order.id">
                                                                <td>#{{ return_order.order_number }}</td>
                                                                <td>{{ new Date(return_order.created_at).toLocaleDateString() }}</td>
                                                                <td>{{ return_order.tracking_number || 'N/A' }}</td>
                                                                <td>{{ return_order.order_status }}</td>
                                                                <td>${{ return_order.total }}</td>
                                                                <td>
                                                                    <button>View</button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="rc-tabs-2-panel-7" role="tabpanel" tabindex="-1" aria-labelledby="rc-tabs-2-tab-7" aria-hidden="true" class="ant-tabs-tabpane ant-tabs-tabpane-hidden">
                                            <div class="reviewTab">
                                                <div class="reviews">
                                                    <h2>My Reviews</h2></div>
                                            </div>
                                        </div>
                                        <div id="rc-tabs-2-panel-9" role="tabpanel" tabindex="-1" aria-labelledby="rc-tabs-2-tab-9" aria-hidden="true" class="ant-tabs-tabpane ant-tabs-tabpane-hidden">
                                            <div class="profile_info_wrapper quote">
                                                <div style="background: url(&quot;/RFQ-Page.jpg&quot;) 0% 0% / cover no-repeat; padding: 50px; border-radius: 10px;">
                                                    <form>
                                                        <div class="ant-row css-i6rspj">
                                                            <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                                <div class="first_comman ">
                                                                    <label for="name">Name</label>
                                                                    <input id="name" placeholder="Name" type="text" value="" name="name">
                                                                </div><span></span></div>
                                                            <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                                <div class="first_comman ">
                                                                    <label for="company">Company</label>
                                                                    <input id="company" placeholder="Company" type="text" value="" name="company">
                                                                </div>
                                                            </div>
                                                            <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                                <div class="first_comman ">
                                                                    <label for="mpn">Mpn</label>
                                                                    <input id="mpn" placeholder="Mpn" type="text" value="" name="mpn">
                                                                </div><span></span></div>
                                                            <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                                <div class="first_comman ">
                                                                    <label for="email">Email</label>
                                                                    <input id="email" placeholder="Email" type="email" value="" name="email">
                                                                </div><span></span></div>
                                                            <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                                <div class="first_comman ">
                                                                    <label for="mobile">Phone</label>
                                                                    <input id="mobile" placeholder="Mobile" type="tel" value="" name="mobile">
                                                                </div><span></span></div>
                                                            <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                                <div class="first_comman ">
                                                                    <label for="quantity">Quantity</label>
                                                                    <input id="quantity" placeholder="Quantity" type="tel" value="" name="quantity">
                                                                </div>
                                                            </div>
                                                            <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                                <div class="first_comman ">
                                                                    <label for="urgency">How soon do you need it?</label>
                                                                    <select id="urgency" name="urgency">
                                                                        <option value="">Select an option</option>
                                                                        <option value="today">Today</option>
                                                                        <option value="thisWeek">This Week</option>
                                                                        <option value="30DaysPlus">30 Days+</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                                <div class="first_comman ">
                                                                    <label for="message">Message</label>
                                                                    <textarea id="message" placeholder="Message" name="message"></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button type="submit" class="update_btn">Send Quote</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="rc-tabs-2-panel-10" role="tabpanel" tabindex="-1" aria-labelledby="rc-tabs-2-tab-10" aria-hidden="true" class="ant-tabs-tabpane ant-tabs-tabpane-hidden">
                                            <form @submit.prevent="handleChangePassword">
                                            <div class="profile_info_wrapper changePasswordTab">
                                                <div class="ant-row css-i6rspj">
                                                    <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                        <div class="first_comman ">
                                                            <label for="old_password">Old Password*</label>
                                                            <div class="toggler_icons">
                                                                <input id="old_password" placeholder="*******" type="password" v-model="currentPassword">
                                                                <div>
                                                                    <svg viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                                                        <path d="M20.5483 16.3524C20.156 15.9557 19.7696 15.5605 19.3802 15.1683C18.7802 14.5653 18.1787 13.9638 17.5728 13.3667C17.4972 13.2911 17.4871 13.2388 17.5379 13.1415C19.3482 9.66037 17.2125 5.46008 13.3332 4.87747C12.1143 4.69441 10.9534 4.89636 9.85791 5.46299C9.78672 5.49931 9.73587 5.53563 9.65596 5.45572C8.88157 4.67262 8.10136 3.89678 7.32261 3.11803C7.30082 3.09624 7.28338 3.07154 7.24561 3.0265C7.5667 2.90591 7.8689 2.78387 8.17837 2.67926C10.0758 2.03563 12.0242 1.83513 14.0132 2.05161C18.879 2.58337 23.1752 5.85381 24.9768 10.3926C25 10.4522 25.0073 10.5379 24.9826 10.596C24.0484 12.8916 22.5955 14.792 20.6282 16.2986C20.6137 16.3117 20.5963 16.3219 20.5483 16.3524Z"
                                                                        fill="#797979"></path>
                                                                        <path d="M4.44163 4.65918C4.91528 5.13573 5.3773 5.6021 5.84222 6.06703C6.36962 6.59442 6.89703 7.12327 7.42733 7.64776C7.49853 7.7175 7.51015 7.7669 7.4622 7.85989C5.81462 11.0228 7.40118 14.873 10.801 15.9336C12.2829 16.3956 13.7271 16.2576 15.1161 15.5573C15.1626 15.534 15.2076 15.5093 15.2468 15.489C16.0735 16.3186 16.893 17.1424 17.724 17.9778C17.6862 17.9952 17.6383 18.0199 17.5874 18.0403C15.5069 18.8844 13.3493 19.1909 11.1162 18.9657C6.18511 18.4674 1.87 15.2275 0.02773 10.6364C0.000124928 10.5666 -0.0114982 10.4693 0.0146539 10.4039C0.941602 8.12286 2.38433 6.23411 4.33557 4.73328C4.36317 4.71003 4.39514 4.69114 4.44163 4.65918Z"
                                                                        fill="#797979"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div><span></span></div>
                                                </div>
                                                <div class="ant-row css-i6rspj">
                                                    <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                        <div class="first_comman ">
                                                            <label for="new_password">New Password*</label>
                                                            <div class="toggler_icons">
                                                                <input id="new_password" placeholder="*******" type="password" v-model="newPassword">
                                                                <div>
                                                                    <svg viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                                                        <path d="M20.5483 16.3524C20.156 15.9557 19.7696 15.5605 19.3802 15.1683C18.7802 14.5653 18.1787 13.9638 17.5728 13.3667C17.4972 13.2911 17.4871 13.2388 17.5379 13.1415C19.3482 9.66037 17.2125 5.46008 13.3332 4.87747C12.1143 4.69441 10.9534 4.89636 9.85791 5.46299C9.78672 5.49931 9.73587 5.53563 9.65596 5.45572C8.88157 4.67262 8.10136 3.89678 7.32261 3.11803C7.30082 3.09624 7.28338 3.07154 7.24561 3.0265C7.5667 2.90591 7.8689 2.78387 8.17837 2.67926C10.0758 2.03563 12.0242 1.83513 14.0132 2.05161C18.879 2.58337 23.1752 5.85381 24.9768 10.3926C25 10.4522 25.0073 10.5379 24.9826 10.596C24.0484 12.8916 22.5955 14.792 20.6282 16.2986C20.6137 16.3117 20.5963 16.3219 20.5483 16.3524Z"
                                                                        fill="#797979"></path>
                                                                        <path d="M4.44163 4.65918C4.91528 5.13573 5.3773 5.6021 5.84222 6.06703C6.36962 6.59442 6.89703 7.12327 7.42733 7.64776C7.49853 7.7175 7.51015 7.7669 7.4622 7.85989C5.81462 11.0228 7.40118 14.873 10.801 15.9336C12.2829 16.3956 13.7271 16.2576 15.1161 15.5573C15.1626 15.534 15.2076 15.5093 15.2468 15.489C16.0735 16.3186 16.893 17.1424 17.724 17.9778C17.6862 17.9952 17.6383 18.0199 17.5874 18.0403C15.5069 18.8844 13.3493 19.1909 11.1162 18.9657C6.18511 18.4674 1.87 15.2275 0.02773 10.6364C0.000124928 10.5666 -0.0114982 10.4693 0.0146539 10.4039C0.941602 8.12286 2.38433 6.23411 4.33557 4.73328C4.36317 4.71003 4.39514 4.69114 4.44163 4.65918Z"
                                                                        fill="#797979"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div><span></span></div>
                                                </div>
                                                <div class="ant-row css-i6rspj">
                                                    <div class="ant-col ant-col-md-24 ant-col-xl-12 css-i6rspj">
                                                        <div class="first_comman ">
                                                            <label for="confirm_password">Confirm Password*</label>
                                                            <div class="toggler_icons">
                                                                <input id="confirm_password" placeholder="*******" type="password"  v-model="confirmPassword">
                                                                <div>
                                                                    <svg width="20" height="20" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M20.5483 16.3524C20.156 15.9557 19.7696 15.5605 19.3802 15.1683C18.7802 14.5653 18.1787 13.9638 17.5728 13.3667C17.4972 13.2911 17.4871 13.2388 17.5379 13.1415C19.3482 9.66037 17.2125 5.46008 13.3332 4.87747C12.1143 4.69441 10.9534 4.89636 9.85791 5.46299C9.78672 5.49931 9.73587 5.53563 9.65596 5.45572C8.88157 4.67262 8.10136 3.89678 7.32261 3.11803C7.30082 3.09624 7.28338 3.07154 7.24561 3.0265C7.5667 2.90591 7.8689 2.78387 8.17837 2.67926C10.0758 2.03563 12.0242 1.83513 14.0132 2.05161C18.879 2.58337 23.1752 5.85381 24.9768 10.3926C25 10.4522 25.0073 10.5379 24.9826 10.596C24.0484 12.8916 22.5955 14.792 20.6282 16.2986C20.6137 16.3117 20.5963 16.3219 20.5483 16.3524Z"
                                                                        fill="#797979"></path>
                                                                        <path d="M4.44163 4.65918C4.91528 5.13573 5.3773 5.6021 5.84222 6.06703C6.36962 6.59442 6.89703 7.12327 7.42733 7.64776C7.49853 7.7175 7.51015 7.7669 7.4622 7.85989C5.81462 11.0228 7.40118 14.873 10.801 15.9336C12.2829 16.3956 13.7271 16.2576 15.1161 15.5573C15.1626 15.534 15.2076 15.5093 15.2468 15.489C16.0735 16.3186 16.893 17.1424 17.724 17.9778C17.6862 17.9952 17.6383 18.0199 17.5874 18.0403C15.5069 18.8844 13.3493 19.1909 11.1162 18.9657C6.18511 18.4674 1.87 15.2275 0.02773 10.6364C0.000124928 10.5666 -0.0114982 10.4693 0.0146539 10.4039C0.941602 8.12286 2.38433 6.23411 4.33557 4.73328C4.36317 4.71003 4.39514 4.69114 4.44163 4.65918Z"
                                                                        fill="#797979"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div><span></span></div>
                                                </div>
                                                <button class="update_btn">Submit</button>
                                            </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script setup>
    import { useCustomer } from '@/composables/useCustomer';
    import { ref, computed, watch , onMounted } from 'vue';
    import { useStore } from 'vuex';
    import axios from '@/plugins/axios';
    import { useToast } from 'vue-toastification'
    import { useRouter } from 'vue-router';

     const toast = useToast();

    const {
        orders,
        loading: loadingOrders,
        errors: errorsOrders,
        fetchOrders
        } = useCustomer();

        const {
        cancel_orders,
        loading: loadingCancel,
        errors: errorsCancel,
        fetchCancelOrders
        } = useCustomer();

        const {
        return_orders,
        loading: loadingReturn,
        errors: errorsReturn,
        fetchReturnOrders
        } = useCustomer();

        const {
        pending_orders,
        loading: loadingPending,
        errors: errorsPending,
        fetchPendingOrders
        } = useCustomer();
    onMounted(() => {
    fetchOrders()
    fetchCancelOrders()
    fetchReturnOrders()
    fetchPendingOrders()
        console.log('orders:', cancel_orders.value) // this should show your full nested category structure
    })

    const store = useStore();
    const router = useRouter();

    const form = ref({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
    });

    const isLoggedIn = computed(() => store.getters.isLoggedIn);
    const customer = computed(() => store.getters.customer);

    // ✅ Watch the computed customer and update form when available
    watch(customer, (newCustomer) => {
    if (newCustomer) {
        form.value.first_name = newCustomer.first_name || ''
        form.value.last_name = newCustomer.last_name || ''
        form.value.email = newCustomer.email || ''
        form.value.phone = newCustomer.phone || ''
    }
    }, { immediate: true }); // runs immediately if data is already there


    const logout = () => {
        store.dispatch('logout');
        router.push('/login');
    };

    const currentPassword = ref('')
    const newPassword = ref('')
    const confirmPassword = ref('')
    const message = ref('')
    const error = ref('')

    const handleChangePassword = async () => {
    message.value = ''
    error.value = ''

    if (newPassword.value !== confirmPassword.value) {
        error.value = 'New passwords do not match.'
        return
    }

    try {
        const token = localStorage.getItem('auth_token');
        const response = await axios.post('/customer/change-password', {
            current_password: currentPassword.value,
            new_password: newPassword.value,
        }, {headers: { Authorization: `Bearer ${token}` }})

        message.value = 'Password changed successfully.'
        currentPassword.value = newPassword.value = confirmPassword.value = ''
        if (message.value) {
            toast.success(message.value, {
                timeout: 5000,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    } catch (err) {
        console.log(err.response);
        error.value = err.response?.data?.message || 'Failed to change password.'
        toast.error('Failed to change password', {
            timeout: 5000,
            closeOnClick: true,
            pauseOnHover: true,
        });
    }
    }
</script>