<template>
    <div>
        <div style="display: flex; flex-direction: column;">
            <h4 href="#" class="headlingTag">Customer Account</h4>
            <router-link class="tags" title="Login" to="/login">Login</router-link>
            <router-link class="tags" title="Register" to="/register">Register</router-link>
            <a class="tags" title="My Account" href="#">My Account</a>
            <a class="tags" title="Shopping Cart" href="#">Shopping Cart</a>
            <a class="tags" title="Order Process" href="#">Order Process</a>
            <a class="tags" title="Our Services" href="#">Our Services</a>
            <a class="tags" title="About Us" href="#">About Us</a>
            <a class="tags" title="Contact Us" href="#">Contact Us</a>
            <router-link class="tags" title="Blogs" to="#">Blogs</router-link>
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