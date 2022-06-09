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
        overflow-x:hidden;
    }
    
    body {
        @apply bg-gray-100;
    }

    ::selection {
        @apply bg-gray-900 text-white;
    }

    .title {
        @apply text-4xl md:text-6xl text-brand-dark font-bold font-title mb-8
    }
    .title-smaller {
        @apply text-2xl md:text-4xl mb-4
    }

    .icon-container {
        @apply w-24 h-24 p-4 bg-gray-500 text-white rounded-xl shadow-xl transform -rotate-6 relative lg:-top-12 lg:-left-12 flex items-center justify-center;
    }
    .icon-container-right {
        @apply rotate-6 lg:-top-12 lg:left-12
    }
    .features-box-layout-left {
        @apply grid;
        grid-template-columns:100px 1fr;
    }
    .features-box-layout-right {
        @apply grid;
        grid-template-columns:1fr 100px;
    }
</style>