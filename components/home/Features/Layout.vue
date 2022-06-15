<template>
    <div>
        <div class="container mx-auto px-10 md:px-20 py-14">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-center lg:text-left">
                <slot/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    h1 {
        @apply text-3xl lg:text-5xl font-bold text-brand-dark font-title mb-4;
    }
    hr {
        @apply mb-4;
    }
    p {
        @apply text-justify text-base xl:text-lg
    }
</style>