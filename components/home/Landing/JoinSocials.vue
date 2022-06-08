<template>
    <div class="z-50 mt-16 text-center filter drop-shadow-xl">
        <div class="mb-4">
            <a href="https://discord.gg/95degrees" target="_blank">
                <MainButton><LogoDiscord class="w-8 mr-4"/>join us: discord.gg/95degrees</MainButton>
            </a>
        </div>
        <div>
            <span class="text-gray-100">or find us on</span>
            <div class="flex items-center justify-center gap-6 mt-2">
                <a href="https://twitter.com/95DegreesCafe" target="_blank" title="Twitter">
                    <LogoTwitter class="w-8 social-link"/>
                </a>
                <a href="https://www.youtube.com/channel/UCHurQPVUpKgkdW1cmf3SvPg" target="_blank" title="YouTube">
                    <LogoYoutube class="w-8 social-link"/>
                </a>
                <a href="https://medium.com/95-degrees-updates" target="_blank" title="Medium Blog">
                    <LogoMedium class="w-8 social-link"/>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .social-link {
        @apply text-gray-200 hover:text-gray-50 duration-100 cursor-pointer
    }
</style>