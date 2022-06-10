<template>
    <div id="footer" class="text-gray-300 px-4 md:px-10 py-10 text-center">
        <!-- go to top -->
        <HomeFooterSectionGoToTop/>

        <!-- socials -->
        <div class="flex flex-col items-center max-w-md mx-auto">
            <HomeLandingJoinSocials class="-mt-2 mb-2"/>
        </div>

        <!-- ban appeal -->
        <HomeFooterSectionBanAppeal/>

        <!-- copyright - credit -->
        <p class="mt-5">© 2022 95 Degrees</p>
        <p class="text-xs">site created by <a href="https://saku.dev" target="_blank" class="underline">saku</a> 🤍</p>
    </div>
</template>

<style scoped>
    #footer {
        background-color:#2A2A2A;
    }
</style>