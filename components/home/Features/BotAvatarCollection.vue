<template>
    <div class="flex items-center justify-evenly gap-5">
        <img :src="avatar1" draggable="false">
        <img :src="avatar2" draggable="false">
        <img :src="avatar3" draggable="false">
    </div>
</template>

<script>
export default {
    props:{
        avatar1:String,
        avatar2:String,
        avatar3:String
    }
}
</script>

<style scoped>
    img {
        @apply w-24 lg:w-28 xl:w-36 rounded-full shadow-lg transform hover:scale-110 duration-200; 
    }
</style>