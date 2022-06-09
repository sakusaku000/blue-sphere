<template>
    <section id="landing" class=" text-white h-screen shadow-lg p-4 md:p-0">
        <div class="h-full flex flex-col items-center justify-center md:justify-end select-none z-50">
            <HomeLandingBackground/>
            <HomeLandingLogo/>
            <HomeLandingJoinSocials/>
            <HomeLandingScrollDownIndicator/>
        </div>
    </section>
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