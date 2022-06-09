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

        <!-- Mashup -->
        <HomeMashup/>

        <!-- Merch -->
        <HomeMerch/>
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
                if (scrollY >= top - window.innerHeight/2) {
                    this.$store.commit("nav/updateSection", id);
                }
            });
        }
    }
}
</script>