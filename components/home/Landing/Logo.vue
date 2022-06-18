<template>
    <div id="logo" class="flex flex-col items-center pointer-events-none z-50 filter drop-shadow-xl">
        <NinetyFive class="mb-0 md:mb-4 w-60 2xl:w-72 logoScaleInHold" id="ninetyfive-landing-logo"/>
        <h1 class="font-title text-4xl 2xl:text-5xl text-center hidden md:block max-w-lg xl:max-w-none subFadeIn">serving coffee and conversation 24/7</h1>
        <h1 class="font-title text-4xl 2xl:text-5xl text-center hidden md:block subFadeIn">since 2016</h1>
    </div>
</template>

<script>
export default {
    mounted() {
        document.querySelector("#ninetyfive-landing-logo").classList.add("logoScaleInAnim");
    }
}
</script>

<style scoped>
    /* logo scale in */
    .logoScaleInHold {
        transform:scale(100);
    }
    .logoScaleInAnim {
        animation:logoScaleInAnim 0.9s forwards cubic-bezier(0.22, 1, 0.36, 1);
    }
    @keyframes logoScaleInAnim {
        from {
            transform:scale(100);
        }
        to {
            transform:scale(1);
        }
    }

    /* subtitle fade in */
    .subFadeIn {
        opacity:0;
        animation:subFadeIn 0.7s 1s forwards cubic-bezier(0.22, 1, 0.36, 1);
    }
    @keyframes subFadeIn {
        from {
            opacity:0;
            transform:translateY(-24px);
        }
        to {
            opacity:1;
            transform:translateY(0px);
        }
    }
</style>