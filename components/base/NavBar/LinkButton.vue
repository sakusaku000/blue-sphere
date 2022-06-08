<template>
    <a class="rounded-full p-2 px-3 hover:bg-brand-dark hover:text-white text-sm duration-100 cursor-pointer select-none" :class="(active) ? 'bg-brand-dark text-white' : ''">
        <slot/>
    </a>
</template>

<script>
export default {
    name:"NavbarLinkbutton",
    props:{
        active:Boolean
    }
}
</script>