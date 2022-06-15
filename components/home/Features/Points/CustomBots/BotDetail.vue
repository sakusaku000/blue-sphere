<template>
    <div class="p-5 bg-white rounded-2xl shadow-sm transform hover:scale-105 duration-100">
        <div class="flex items-center gap-3 mb-2">
            <img class="rounded-full w-10 shadow" :src="botIcon">
            <h1 class="font-title text-xl text-brand-dark">{{botName}}</h1>
        </div>
        <p class="text-justify text-sm">
            <slot/>
        </p>
    </div>
</template>

<script>
export default {
    props:{
        botName:String,
        botIcon:String
    }
}
</script>