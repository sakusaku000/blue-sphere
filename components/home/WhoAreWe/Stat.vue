<template>
    <div class="flex flex-col items-center justify-center gap-3">
        <h1 class="font-bold font-title text-4xl md:text-6xl -mb-2">{{stat}}</h1>
        <h2 class="text-sm md:text-base">{{statTitle}}</h2>
    </div>
</template>

<script>
export default {
    name:"WhoAreWeStat",
    props:{
        stat:String,
        statTitle:String
    }
}
</script>