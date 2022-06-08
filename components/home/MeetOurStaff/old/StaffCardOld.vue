<template>
    <div class="p-3 rounded-lg bg-white border border-gray-50 text-gray-900 flex items-center justify-center gap-4">
        <img class="rounded-full shadow-sm" :class="(smaller) ? 'w-16' : 'w-20'" :src="icon" :alt="`${name}'s avatar`">
        <div>
            <h1 class="font-bold" :class="(smaller) ? 'text-2xl' : 'text-4xl'">{{name}}</h1>
            <h2>{{role}}</h2>
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