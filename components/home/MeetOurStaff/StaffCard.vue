<template>
    <div class="transform hover:scale-105 duration-200 group">
        <img class="rounded-full shadow-sm w-32" :src="icon" :alt="`${name}'s avatar`">
        <div class="bgc rounded-lg text-center absolute bottom-0 left-0 right-0 -mx-4 -mb-8 opacity-0 group-hover:opacity-100 duration-200">
            <h1 class="font-bold">{{name}}</h1>
            <h2 class="text-xs">{{role}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name:"MeetStaffCard",
    props:{
        name:String,
        role:String,
        icon:String,
        smaller:Boolean
    }
}
</script>

<style scoped>
    .bgc {
        background-color:#374151de;
    }
</style>