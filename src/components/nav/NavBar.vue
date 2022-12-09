<template>
    <nav>
        <div class="fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-center bg-[#ffffffe1] backdrop-blur-md" v-if="showNav">
            <NavLogo/>
        </div>
        <div class="h-16"></div>
    </nav>
</template>

<script>
import NavLogo from './NavLogo.vue';

export default {
    name:"NavBar",
    props:{
        showNav:Boolean
    },
    components:{
        NavLogo
    }
}
</script>