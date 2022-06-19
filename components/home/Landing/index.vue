<template>
    <div id="landing" class="text-white h-screen md:p-0 flex flex-col gap-7 2xl:gap-10 items-center justify-center select-none overflow-hidden">
        <HomeLandingBackground/>
        <HomeLandingLogo/>
        <HomeLandingJoinSocials :playAnim="true"/>
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
        background-image:url(~/assets/mashup/mashup_bg_loop_static_n.png);
        @apply bg-cover bg-center
    }
</style>