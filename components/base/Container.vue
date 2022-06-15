<template>
    <div class="container mx-auto px-10 md:px-20" :class="(smaller) ? 'py-14 md:py-20' : 'py-20 md:py-40'">
        <slot/>
    </div>
</template>

<script>
export default {
    name:"PageContainer",
    props:{
        smaller:Boolean
    }
}
</script>