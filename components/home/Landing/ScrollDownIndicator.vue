<template>
    <a href="#who-are-we" class="2xl:absolute 2xl:bottom-10 filter drop-shadow-sm">
        <IconsDownarrow class="w-6 2xl:w-8 z-50 bounce-anim"/>
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