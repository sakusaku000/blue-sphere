<template>
    <a href="#who-are-we">
        <IconsDownarrow class="w-8 z-50 mt-20 -mb-32 bounce-anim filter drop-shadow"/>
    </a>
</template>

<style scoped>
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