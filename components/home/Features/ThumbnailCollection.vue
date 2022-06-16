<template>
    <div class="flex lg:flex-col items-center justify-center lg:justify-start lg:-mb-40 lg:-mt-40 gap-5 lg:gap-0 relative z-50" :class="(reverse) ? 'lg:left-24 xl:left-10 2xl:left-6 ' : 'lg:-left-24 xl:-left-10 2xl:-left-6'">
        <img :src="pic1" class="order-1 lg:order-none" :class="(reverse) ? `lg:ml-60` : `lg:-ml-60`" draggable="false" :id="`${id}-img-1`">
        <img :src="pic2" class="order-3 lg:order-none lg:-mt-24" draggable="false" :id="`${id}-img-2`">
        <img :src="pic3" class="order-2 lg:order-none lg:-mt-24" :class="(reverse) ? `lg:-ml-60` : `lg:ml-60`" draggable="false" :id="`${id}-img-3`">
    </div>
</template>

<script>
export default {
    props:{
        id:String,
        pic1:String,
        pic2:String,
        pic3:String,
        reverse:Boolean
    },
    mounted() {
        let timeout = 0;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("fadeDown");
                        // timeout += 400;
                    }, timeout);
                }
            });
        });
        observer.observe(document.querySelector(`#${this.id}-img-1`))
        observer.observe(document.querySelector(`#${this.id}-img-2`))
        observer.observe(document.querySelector(`#${this.id}-img-3`))
    }
}
</script>

<style scoped>
    img {
        @apply rounded-lg lg:rounded-2xl shadow w-52 lg:w-96 opacity-0;
    }
</style>