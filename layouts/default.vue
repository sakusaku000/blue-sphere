<template>
    <div>
        <Nuxt/>

        <FooterSection/>
    </div>
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
        @apply bg-gray-900 text-white;
    }

    .title {
        @apply text-6xl text-brand-dark font-bold font-title mb-8
    }
</style>