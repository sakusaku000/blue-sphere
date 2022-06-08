<template>
    <Nuxt/>
</template>

<script>
export default {
    name:"DefaultLayout"
}
</script>

<style>
    html {
        scroll-behavior: smooth;
    }
    
    body {
        @apply bg-gray-100;
    }

    ::selection {
        @apply bg-gray-800 text-gray-50;
    }

    .title {
        @apply text-6xl text-brand-dark font-bold font-title mb-8
    }
</style>