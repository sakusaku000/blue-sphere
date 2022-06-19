<template>
    <div class="grid-bg text-white" id="who-are-we">
        <Container class="flex flex-col items-center filter drop-shadow">
            <h1 class="title text-current">who are we?</h1>
            <p class="md:text-xl max-w-5xl text-justify md:text-center">
                we are an open and welcoming discord server that brings people together from all around the world and puts the community first,
                offering a safe and engaging space with many unique & exclusive features.
            </p>

            <HomeWhoAreWeStatsList/>
        </Container>
    </div>
</template>

<style scoped>
    .grid-bg {
        position:relative;
        overflow:hidden;
    }
    .grid-bg::before {
        content: "";
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-image:url("https://api.saku.dev/bannerista/banner/grid");
        background-position:center;
        filter: brightness(40%) blur(4px);
        transform:scale(1.04);
        box-shadow:0px 0px 20px 10px inset #000000;

        @apply bg-cover md:bg-contain;
    }
</style>