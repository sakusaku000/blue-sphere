<template>
    <div id="landing" class="text-white h-auto sm:h-screen py-32 md:p-0 flex flex-col gap-7 2xl:gap-10 items-center justify-center select-none">
        <HomeLandingBackground/>
        <HomeLandingLogo/>
        <HomeLandingJoinSocials/>
        <HomeLandingScrollDownIndicator/>
    </div>
</template>

<script>
export default {
    name:"HomeLanding"
}
</script>

<style scoped>
    #landing {
        background-image:url(~/assets/mashup/mashup_bg_loop_static_dark.png);
        @apply bg-cover bg-center
    }
</style>