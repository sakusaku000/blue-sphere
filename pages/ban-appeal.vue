<template>
    <div id="ban-appeal">
        <router-link to="/"><BanAppealBackButton/></router-link>
        <BanAppealIntro/>
        <BanAppealForm/>
    </div>
</template>

<script>
export default {
    name:"BanAppealPage",
    layout:"secondary",
    head:{
        title:"Ban Appeal - 95 Degrees Cafe"
    }
}
</script>