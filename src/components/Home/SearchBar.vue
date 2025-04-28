<template>
    <div class="col d-none d-xl-block">
        <form class="js-focus-state">
            <label class="sr-only" for="searchproduct">Search</label>
            <div class="input-group">
                    <input type="email" class="form-control py-2 pl-5 font-size-15 border-right-0 height-40 border-width-2 rounded-left-pill border-primary" name="email" id="searchproduct-item" placeholder="Search for Products" aria-label="Search for Products" aria-describedby="searchProduct1" required>
                    <div class="input-group-append">
                    <!-- Select -->
                    <select class="js-select selectpicker dropdown-select custom-search-categories-select"
                        data-style="btn height-40 text-gray-60 font-weight-normal border-top border-bottom border-left-0 rounded-0 border-primary border-width-2 pl-0 pr-5 py-2">
                        <option value="one" selected>All Categories</option>
                        <option value="two">Two</option>
                        <option value="three">Three</option>
                        <option value="four">Four</option>
                    </select>
                    <!-- End Select -->
                    <button class="btn btn-primary height-40 py-2 px-3 rounded-right-pill" type="button" id="searchProduct1">
                        <span class="ec ec-search font-size-24"></span>
                    </button>
                    </div>
            </div>
        </form>
    </div>
</template>