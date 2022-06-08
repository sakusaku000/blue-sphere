<template>
    <div class="ml-auto flex items-center gap-2">
        <NavBarLinkButton href="#who-are-we" :active="($store.state.nav.currentSection === 'who-are-we') ? true : false">who are we?</NavBarLinkButton>
        <NavBarLinkButton href="#what-we-offer" :active="($store.state.nav.currentSection === 'what-we-offer') ? true : false">what do we offer?</NavBarLinkButton>
        <NavBarLinkButton href="#meet-our-staff" :active="($store.state.nav.currentSection === 'meet-our-staff') ? true : false">meet our staff</NavBarLinkButton>
    </div>
</template>