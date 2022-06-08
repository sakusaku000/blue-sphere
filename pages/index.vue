<template>
    <div id="main">
        <!-- landing -->
        <HomeLanding/>

        <!-- Navbar (sticky after landing) -->
        <NavBar/>
        
        <!-- who are we? -->
        <HomeWhoAreWe/>
        <!-- server features -->
        <HomeFeatures/>

        <!-- Meet our staff -->
        <HomeMeetOurStaff/>
    </div>
</template>

<script>
export default {
    name:"IndexPage",
    mounted() {
        window.onscroll = () => {
            const sections = document.querySelectorAll("section");
            sections.forEach(s => {
                const top = s.offsetTop;
                const id = s.getAttribute("id");
                if (scrollY >= top - 64) {
                    this.$store.commit("nav/updateSection", id);
                }
            });
        }
    }
}
</script>