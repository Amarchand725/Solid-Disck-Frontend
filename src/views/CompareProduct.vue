<template>
    <div>
        <main>
            <div class="compare_page_main_wrapper">
                <div class="title_main">
                    <nav class="ant-breadcrumb custom_breadcrumb_comp css-i6rspj">
                        <ol>
                            <li>
                                <span class="ant-breadcrumb-link">
                                    <router-link to="/">Home</router-link>
                                </span>
                            </li>
                            <li class="ant-breadcrumb-separator" aria-hidden="true">&gt;</li>
                            <li>
                                <span class="ant-breadcrumb-link">
                                    <router-link to="/products/compare">Compare</router-link>
                                </span>
                            </li>
                        </ol>
                    </nav>
                    <h1>Compare Products</h1>
                </div>
                <div class="page-content">
                    <div class="container-fluid">
                        <div class="top_header_quote">
                            <span>*Once a product is selected only similar category product can be compared, click reset to compared products</span>
                            <button @click="resetComparison">Reset</button>
                        </div>
                        <table class="table-bordered compare_product_table" style="table-layout: fixed; width: 100%;">
                            <thead class="table-light">
                                <tr>
                                    <th></th>
                                    <th scope="col">
                                        <div class="compare_product_search css-b62m3t-container" id="productID-field-0"><span id="react-select-2-live-region" class="css-7pg0cj-a11yText"></span><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" role="log" class="css-7pg0cj-a11yText"></span>
                                            <div class="css-13cymwt-control">
                                                <div class="css-hlgwow">
                                                    <div class="css-1dimb5e-singleValue">
                                                        PEX2S5521P StarTech 2pt Ser / 1pt Par Dual Prfile Pcie Ser Card
                                                    </div>
                                                    <div class="css-19bb58m" data-value="">
                                                        <input class="" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-2-input" spellcheck="false" tabindex="0" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox"
                                                        aria-activedescendant="" type="text" value="" style="color: inherit; background: 0px center; opacity: 0; width: 100%; grid-area: 1 / 2; font: inherit; min-width: 2px; border: 0px; margin: 0px; outline: 0px; padding: 0px;">
                                                    </div>
                                                </div>
                                                <div class="css-1wy0on6">
                                                    <span class="css-1u9des2-indicatorSeparator"></span>
                                                    <div class="css-1xc3v61-indicatorContainer" aria-hidden="true">
                                                        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg">
                                                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="comapre_product_image" style="background-image: url(&quot;https://alpha-project-new.s3.us-east-2.amazonaws.com/production/uploads/874461/WITHOUT-PORT-SWITCH-MODULE-GEN.webp&quot;);"></div>
                                    </th>
                                    <th scope="col">
                                        <div class="compare_product_search css-b62m3t-container" id="productID-field-1"><span id="react-select-3-live-region" class="css-7pg0cj-a11yText"></span><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" role="log" class="css-7pg0cj-a11yText"></span>
                                            <div class="css-13cymwt-control">
                                                <div class="css-hlgwow">
                                                    <div class="css-1dimb5e-singleValue">NT0H01UB Nortel Wm8cy0jdab Optera 5200 Ocld Ser 6</div>
                                                    <div class="css-19bb58m" data-value="">
                                                        <input class="" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-3-input" spellcheck="false" tabindex="0" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox"
                                                        aria-activedescendant="" type="text" value="" style="color: inherit; background: 0px center; opacity: 0; width: 100%; grid-area: 1 / 2; font: inherit; min-width: 2px; border: 0px; margin: 0px; outline: 0px; padding: 0px;">
                                                    </div>
                                                </div>
                                                <div class="css-1wy0on6"><span class="css-1u9des2-indicatorSeparator"></span>
                                                    <div class="css-1xc3v61-indicatorContainer" aria-hidden="true">
                                                        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg">
                                                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="comapre_product_image" style="background-image: url(&quot;https://alpha-project-new.s3.us-east-2.amazonaws.com/production/uploads/896270/WITHOUT-PORT-SWITCH-MODULE-GEN.webp&quot;);"></div>
                                    </th>
                                    <th scope="col">
                                        <div class="compare_product_search css-b62m3t-container" id="productID-field-2"><span id="react-select-4-live-region" class="css-7pg0cj-a11yText"></span><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" role="log" class="css-7pg0cj-a11yText"></span>
                                            <div class="css-13cymwt-control">
                                                <div class="css-hlgwow">
                                                    <div class="css-1dimb5e-singleValue">S26361-F2571-E10 Fujitsu Ser Port Opt Interface Card Adapter</div>
                                                    <div class="css-19bb58m" data-value="">
                                                        <input class="" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-4-input" spellcheck="false" tabindex="0" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox"
                                                        aria-activedescendant="" type="text" value="" style="color: inherit; background: 0px center; opacity: 0; width: 100%; grid-area: 1 / 2; font: inherit; min-width: 2px; border: 0px; margin: 0px; outline: 0px; padding: 0px;">
                                                    </div>
                                                </div>
                                                <div class="css-1wy0on6"><span class="css-1u9des2-indicatorSeparator"></span>
                                                    <div class="css-1xc3v61-indicatorContainer" aria-hidden="true">
                                                        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg">
                                                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="comapre_product_image" style="background-image: url(&quot;https://alpha-project-new.s3.us-east-2.amazonaws.com/production/uploads/902929/WITHOUT-PORT-SWITCH-MODULE-GEN.webp&quot;);"></div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="AttributeHeaderTR">
                                    <td colspan="4">Product Header Information</td>
                                </tr>
                                <tr>
                                    <td>MPN</td>
                                    <td><a href="/search/PEX2S5521P" rel="noopener noreferrer">PEX2S5521P</a></td>
                                    <td><a href="/search/NT0H01UB" rel="noopener noreferrer">NT0H01UB</a></td>
                                    <td><a href="/search/S26361-F2571-E10" rel="noopener noreferrer">S26361-F2571-E10</a></td>
                                </tr>
                                <tr>
                                    <td>UPC</td>
                                    <td>65030830423</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>EAN</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>MPN Tag</td>
                                    <td>Actual Part</td>
                                    <td>Actual Part</td>
                                    <td>Actual Part</td>
                                </tr>
                                <tr>
                                    <td>Manufacturer</td>
                                    <td>StarTech</td>
                                    <td>Nortel</td>
                                    <td>Fujitsu</td>
                                </tr>
                                <tr>
                                    <td>Category</td>
                                    <td>Switch Module</td>
                                    <td>Switch Module</td>
                                    <td>Switch Module</td>
                                </tr>
                                <tr>
                                    <td>Attribute Group</td>
                                    <td>Switch Module</td>
                                    <td>Switch Module</td>
                                    <td>Switch Module</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>5.00</td>
                                    <td>5.00</td>
                                    <td>5.00</td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td>New</td>
                                    <td>New</td>
                                    <td>New</td>
                                </tr>
                                <tr class="AttributeHeaderTR">
                                    <td colspan="4">General Information</td>
                                </tr>
                                <tr>
                                    <td>Model</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Product Line</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Product Type</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Package Quantity</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Package Type</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                </tr>
                                <tr class="AttributeHeaderTR">
                                    <td colspan="4">Technical Information</td>
                                </tr>
                                <tr>
                                    <td>Media Standard</td>
                                    <td>
                                        <ul class="mb-0"></ul>
                                    </td>
                                    <td>
                                        <ul class="mb-0"></ul>
                                    </td>
                                    <td>
                                        <ul class="mb-0"></ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Network Technology</td>
                                    <td>
                                        <ul class="mb-0"></ul>
                                    </td>
                                    <td>
                                        <ul class="mb-0"></ul>
                                    </td>
                                    <td>
                                        <ul class="mb-0"></ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Interfaces/Ports Details</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script setup>
import useCompareProducts from '@/composables/useCompareProducts.js';

const {
    selectedProducts,
    addProduct,
    removeProduct,
    resetComparison,
    canAddProduct
} = useCompareProducts();
</script>