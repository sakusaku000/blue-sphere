<template>
    <a href="#who-are-we" class="2xl:absolute 2xl:bottom-10 filter drop-shadow-sm scrFadeHold" id="landing-scroll-indicator">
        <IconsDownarrow class="w-6 2xl:w-8 z-50 bounce-anim"/>
    </a>
</template>

<script>
export default {
    mounted() {
        document.querySelector("#landing-scroll-indicator").classList.add("scrFadeIn");
    }
}
</script>

<style scoped>
    .scrFadeHold {
        opacity:0;
    }
    .scrFadeIn {
        animation:scrFadeIn 1s 2.5s forwards ease;
    }
    @keyframes scrFadeIn {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }

    .bounce-anim {
        animation:bounce-anim 1s ease-in-out forwards infinite;
    }
    @keyframes bounce-anim {
        0% {
            transform:translateY(0px);
        }
        50% {
            transform:translateY(8px);
        }
        100% {
            transform:translateY(0px);
        }
    }
</style>