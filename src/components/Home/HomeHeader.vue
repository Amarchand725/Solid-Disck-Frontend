<template>
    <!-- ========== HEADER ========== -->
    <header id="header" class="u-header u-header-left-aligned-nav">
         <div class="u-header__section">
            <!-- Topbar -->
            <TopBar />
            <!-- End Topbar -->

            <!-- Logo-Search-header-icons -->
            <div class="py-2 py-xl-5 bg-primary-down-lg">
               <div class="container my-0dot5 my-xl-0">
                  <div class="row align-items-center">
                     <!-- Logo-offcanvas-menu -->
                     <div class="col-auto">
                        <!-- Nav -->
                        <NavBar />
                        <!-- End Nav -->

                        <!-- ========== HEADER SIDEBAR ========== -->
                        <HeaderSideBar />
                        <!-- ========== END HEADER SIDEBAR ========== -->
                     </div>
                     <!-- End Logo-offcanvas-menu -->
                     <!-- Search Bar -->
                     <SearchBar />  
                     <!-- End Search Bar -->
                     <!-- Header Icons -->
                     <HeaderIcon />
                     <!-- End Header Icons -->
                  </div>
               </div>
            </div>
            <!-- End Logo-Search-header-icons -->

            <!-- Vertical-and-secondary-menu -->
            <VerticalAndSecondaryMenu />
            <!-- End Vertical-and-secondary-menu -->
         </div>
      </header>
      <!-- ========== END HEADER ========== -->
</template>

<script setup>
   import TopBar from '@/components/General/TopBar.vue';
   import NavBar from '@/components/General/NavBar.vue';
   import HeaderSideBar from '@/components/General/HeaderSideBar.vue';
   import SearchBar from '@/components/Home/SearchBar.vue';
   import HeaderIcon from '@/components/Home/HeaderIcon.vue';
   import VerticalAndSecondaryMenu from '@/components/Home/VerticalAndSecondaryMenu.vue';

   import { useSettings } from '@/composables/useSettings.js'
   const { settings } = useSettings()

   const onImageError = (event) => {
      event.target.src = '/images/logo.png'
   }
</script>

<style scoped>
/* Optional scoped styling */
</style>  