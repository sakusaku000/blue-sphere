<template>
    <div id="footer" class="text-gray-300 px-4 md:px-10 py-10 text-center">
        <!-- go to top -->
        <HomeFooterSectionGoToTop/>

        <!-- socials -->
        <div class="flex flex-col items-center max-w-md mx-auto mb-10">
            <a href="https://discord.gg/pGNTBA5Nkk" target="_blank">
                <MainButton><LogoDiscord class="w-8 mr-4"/>join us: discord.gg/95degrees</MainButton>
            </a>
        </div>

        <!-- ban appeal -->
        <HomeFooterSectionBanAppeal/>

        <!-- copyright - credit -->
        <p class="mt-5">© 2022 95 Degrees</p>
    </div>
</template>

<style scoped>
    #footer {
        background-color:#2A2A2A;
    }
</style>