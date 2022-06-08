<template>
    <div class="pointer-events-none">
        <div class="absolute top-0 left-0 right-0 bottom-0 grad-ov">
            <video autoplay muted loop playsinline src="~/assets/landing/gradient-sm.mp4" class="w-full h-full"></video>
        </div>
        <div class="absolute top-0 left-0 right-0 bottom-0 darken-ov"></div>
    </div>
</template>

<style scoped>
    .darken-ov {
        background-color:#00000015;
    }

    .grad-ov video {
        object-fit: cover;
        opacity:0.8;
    }
</style>