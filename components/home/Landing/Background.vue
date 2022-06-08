<template>
    <div class="pointer-events-none">
        <div class="absolute top-0 left-0 right-0 bottom-0 grid-bg"></div>
        <div class="absolute top-0 left-0 right-0 bottom-0 grad-ov">
            <video autoplay muted loop src="~/assets/landing/gradient-sm.mp4" class="w-full h-full"></video>
        </div>
    </div>
</template>

<style scoped>
    .grid-bg {
        background-image:url("https://api.saku.dev/bannerista/banner/grid");
        background-size:cover;
        background-position:center;
        filter:brightness(60%);
    }

    .grad-ov video {
        object-fit: cover;
        opacity:0.6;
    }
</style>