<template>
    <div class="pointer-events-none">
        <div class="absolute top-0 left-0 right-0 bottom-0 grad-ov hidden md:block">
            <video autoplay muted loop playsinline src="~/assets/landing/gradient-sm.mp4" class="w-full h-full filter brightness-90"></video>
        </div>
    </div>
</template>

<style scoped>
    .grad-ov video {
        object-fit: cover;
        opacity:0.8;
    }
</style>