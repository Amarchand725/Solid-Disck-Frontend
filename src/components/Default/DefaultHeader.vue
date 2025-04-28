<template>
    <!-- ========== HEADER ========== -->
    <header id="header" class="u-header u-header-left-aligned-nav">
            <div class="u-header__section">
               <!-- Topbar -->
               <TopBar /> 
               <!-- End Topbar -->

                <!-- Logo and Menu -->
                <div class="py-2 py-xl-4 bg-primary-down-lg">
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
                              <!-- Primary Menu -->
                              <PrimaryMenu />
                              <!-- End Primary Menu -->

                            <!-- Customer Care -->
                            <CustomerCare />
                            <!-- End Customer Care -->
                        </div>
                    </div>
                </div>
                <!-- End Logo and Menu -->

                <!-- Vertical-and-Search-Bar -->
                <div class="d-none d-xl-block bg-primary">
                    <div class="container">
                        <div class="row align-items-stretch min-height-50">
                            <!-- Vertical Menu -->
                            <DefaultVerticalMenu />
                            <!-- End Vertical Menu -->
                            <!-- Search bar -->
                            <DefaultSearchBar />
                            <!-- End Search bar -->
                            <!-- Header Icons -->
                            <DefaultHeaderIcon />
                            <!-- End Header Icons -->
                        </div>
                    </div>
                </div>
                <!-- End Vertical-and-secondary-menu -->
            </div>
        </header>
        <!-- ========== END HEADER ========== -->
</template>

<script setup>
   import TopBar from '@/components/General/TopBar.vue';
   import NavBar from '@/components/General/NavBar.vue';
   import HeaderSideBar from '@/components/General/HeaderSideBar.vue';
   import DefaultSearchBar from '@/components/Default/DefaultSearchBar.vue';
   import DefaultHeaderIcon from '@/components/Default/DefaultHeaderIcon.vue';
   import DefaultVerticalMenu from '@/components/Default/DefaultVerticalMenu.vue';
   import PrimaryMenu from '@/components/Default/PrimaryMenu.vue';
   import CustomerCare from '@/components/Default/CustomerCare.vue';
</script>

<style scoped>
/* Optional scoped styling */
</style>  