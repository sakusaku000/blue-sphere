<template>
    <div class="p-5 bg-white rounded-2xl shadow-sm" :id="id">
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
        id:String,
        botName:String,
        botIcon:String
    },
    mounted() {
        let timeout = 0;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("fadeScale");
                    }, timeout);
                }
            });
        });
        observer.observe(document.querySelector(`#${this.id}`));
    }
}
</script>