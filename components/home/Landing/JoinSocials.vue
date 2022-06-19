<template>
    <div class="z-50 text-center filter drop-shadow-sm appearHold" id="landing-joinsocials">
        <div class="mb-4">
            <a href="https://discord.gg/pGNTBA5Nkk" target="_blank">
                <MainButton><LogoDiscord class="w-8 mr-4"/>join us: discord.gg/95degrees</MainButton>
            </a>
        </div>
        <div>
            <span class="text-gray-100">& find us on</span>
            <div class="flex items-center justify-center gap-6 mt-2">
                <a href="https://twitter.com/95DegreesCafe" target="_blank" title="Twitter">
                    <LogoTwitter class="w-8 social-link"/>
                </a>
                <a href="https://www.youtube.com/channel/UCHurQPVUpKgkdW1cmf3SvPg" target="_blank" title="YouTube">
                    <LogoYoutube class="w-8 social-link"/>
                </a>
                <a href="https://www.instagram.com/95degreesdiscord/" target="_blank" title="Instagram">
                    <LogoInstagram class="w-7 social-link"/>
                </a>
                <a href="https://medium.com/95-degrees-updates" target="_blank" title="Medium Blog">
                    <LogoMedium class="w-8 social-link"/>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        playAnim:Boolean
    },
    mounted() {
        document.querySelector("#landing-joinsocials").classList.add("appearAnim")
    }
}
</script>

<style scoped>
    .social-link {
        @apply text-gray-200 hover:text-gray-50 duration-100 cursor-pointer
    }

    .appearHold {
        opacity:0;
    }
    .appearAnim {
        opacity:0;
        max-height:0px;
        animation:appearAnim 0.7s 1.7s forwards cubic-bezier(0.22, 1, 0.36, 1);
    }
    @keyframes appearAnim {
        from {
            opacity:0;
            max-height:0px;
        }
        to {
            opacity:1;
            max-height:140px;
        }
    }
</style>