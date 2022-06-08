<template>
    <Nuxt/>
</template>

<script>
export default {
    name:"DefaultLayout"
}
</script>

<style>
    body {
        @apply bg-gray-100
    }

    ::selection {
        @apply bg-brand-light text-gray-800;
    }

    .title {
        @apply text-6xl text-brand-dark font-bold font-title mb-8
    }
</style>