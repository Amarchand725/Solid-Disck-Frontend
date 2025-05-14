<template>
    <div>
        <div style="display: flex; flex-direction: column;">
            <h4 class="headlingTag">Customer Account</h4>
            <router-link class="tags" title="Login" to="/login">Login</router-link>
            <router-link class="tags" title="Register" to="/register">Register</router-link>
            <router-link class="tags" title="My Account" to="/my-account">My Account</router-link>
            <router-link class="tags" title="Shopping Cart" to="/cart">Shopping Cart</router-link>
            <router-link class="tags" title="Order Process" to="/policies/order-process">Order Process</router-link>
            <router-link class="tags" title="Our Services" to="/policies/services">Our Services</router-link>
            <router-link class="tags" title="About Us" to="/policies/about-us">About Us</router-link>
            <router-link class="tags" title="Contact Us" to="/contact-us">Contact Us</router-link>
            <router-link class="tags" title="Blogs" to="/blogs">Blogs</router-link>
            <a class="tags" title="Sitemap" href="#">Sitemap</a>
        </div>
        <div class="seals">
            <img 
                alt="SSL Secure Seal" 
                title="SSL Secure Seal" 
                loading="lazy" width="50" height="50" decoding="async" data-nimg="1" 
                srcset="/assets/image/SSL_Seal.webp"
                src="/assets/image/SSL_Seal.webp" 
                style="color: transparent;"
            >
            <img 
                alt="PCI Secure Seal" 
                title="PCI Secure Seal" 
                loading="lazy" width="50" height="50" decoding="async" data-nimg="1" 
                srcset="/assets/image/PCI_Seal.webp"
                src="/assets/image/PCI_Seal.webp" 
                style="color: transparent;"
            >
            <img 
                alt="DUNS Seal" 
                title="DUNS Seal" 
                loading="lazy" width="50" height="50" decoding="async" data-nimg="1" 
                srcset="/assets/image/duns-seal-removebg-preview.avif"
                src="/assets/image/duns-seal-removebg-preview.avif" 
                style="color: transparent;"
            >
            <img 
                alt="Norton Seal" 
                title="Norton Seal" 
                loading="lazy" width="50" height="50" decoding="async" data-nimg="1" 
                srcset="/assets/image/Nortons-eal-removebg-preview.webp"
                src="/assets/image/Nortons-eal-removebg-preview.webp" 
                style="color: transparent;"
            >
        </div>
    </div>
</template>