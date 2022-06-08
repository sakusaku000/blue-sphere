<template>
    <div></div>
</template>

<script>
export default {
    name:"ErrorRedirect",
    mounted() {
        this.$router.replace("/");
    }
}
</script>