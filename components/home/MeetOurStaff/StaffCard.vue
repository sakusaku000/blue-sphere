<template>
    <a :href="socialLink" target="_blank">
        <div class="transform hover:scale-105 duration-200 group select-none mb-20 xl:mb-0">
            <img class="rounded-full shadow-sm" :class="(regular) ? 'w-20' : 'w-32'" :src="icon" :alt="`${name}'s avatar`" draggable="false">
            <div class="p-1 rounded-lg text-center absolute bottom-0 left-0 right-0 md:opacity-0 group-hover:opacity-100 duration-200 filter drop-shadow-sm" :class="(regular) ? '-mx-8 -mb-8' : '-mx-4 -mb-14'">
                <h1 class="font-bold" :class="(regular) ? 'text-sm' : ''">{{name}}</h1>
                <h2 class="text-xs" v-if="role">{{role}}</h2>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name:"MeetStaffCard",
    props:{
        name:String,
        role:String,
        icon:String,
        regular:Boolean,
        socialLink:String
    }
}
</script>

<style scoped>
    .bgc {
        background-color:#374151de;
    }
</style>