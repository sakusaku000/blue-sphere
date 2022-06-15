<template>
    <div class="flex lg:flex-col items-center justify-center lg:justify-start lg:-mb-20 lg:-mt-20 gap-5 lg:gap-0 relative z-50" :class="(reverse) ? 'lg:left-24 xl:left-10 2xl:left-6 ' : 'lg:-left-24 xl:-left-10 2xl:-left-6'">
        <img :src="pic1" class="order-1 lg:order-none" :class="(reverse) ? `lg:ml-60` : `lg:-ml-60`" draggable="false">
        <img :src="pic2" class="order-3 lg:order-none lg:-mt-32" draggable="false">
        <img :src="pic3" class="order-2 lg:order-none lg:-mt-32" :class="(reverse) ? `lg:-ml-60` : `lg:ml-60`" draggable="false">
    </div>
</template>

<script>
export default {
    props:{
        pic1:String,
        pic2:String,
        pic3:String,
        reverse:Boolean
    }
}
</script>

<style scoped>
    img {
        @apply rounded-lg lg:rounded-2xl shadow w-52 lg:w-96 transform hover:-translate-y-3 duration-100;
    }
</style>