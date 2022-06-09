<template>
    <section id="landing" class="bg-brand-light text-white h-screen shadow-lg p-4 md:p-0">
        <div class="h-full flex flex-col items-center justify-center select-none z-50">
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