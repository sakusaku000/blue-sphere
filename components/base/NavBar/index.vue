<template>
    <div id="navbar" class="p-2 sticky top-0 backdrop-filter backdrop-blur bg-color shadow-sm">
        <div class="container mx-auto px-20 flex items-center">
            <!-- logo -->
            <NavBarLogo/>

            <!-- links -->
            <NavBarLinks/>
        </div>
    </div>
</template>

<style scoped>
    #navbar {
        z-index:99999;
    }

    .bg-color {
        background-color:rgba(249, 250, 251, 0.7);
    }
</style>