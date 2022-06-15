<template>
    <div class="flex lg:flex-col items-center justify-center lg:justify-start lg:-mb-20 lg:-mt-20 gap-5 lg:gap-0">
        <img :src="pic1" draggable="false">
        <img :src="pic2" class="lg:-mt-32 lg:ml-32" draggable="false">
        <img :src="pic3" class="lg:-mt-32 lg:ml-64" draggable="false">
    </div>
</template>

<script>
export default {
    props:{
        pic1:String,
        pic2:String,
        pic3:String
    }
}
</script>

<style scoped>
    img {
        @apply rounded-lg lg:rounded-2xl shadow-xl w-52 lg:w-96;
    }
</style>