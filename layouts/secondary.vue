<template>
    <div>
        <NavBar/>
        <div class="container mx-auto py-10 md:py-10 px-5 md:px-20">
            <Nuxt/>
        </div>
    </div>
</template>

<script>
export default {
    name:"SecondaryLayout",
    mounted() {
        this.$store.commit("nav/updateSection", "none");
    }
}
</script>
