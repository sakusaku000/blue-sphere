<template>
    <div id="landing" class="text-white h-auto sm:h-screen py-20 md:p-0 shadow-lg flex flex-col gap-7 2xl:gap-10 items-center justify-center select-none z-50">
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
        background-image:url(~/assets/bg/v2-grad1.png);
        background-size:cover;
    }
</style>