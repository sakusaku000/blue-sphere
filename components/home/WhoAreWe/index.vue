<template>
    <div class="grid-bg text-white">
        <Container id="who-are-we" class="text-center flex flex-col items-center filter drop-shadow-xl">
            <h1 class="title text-current">who are we?</h1>
            <p class="md:text-xl max-w-5xl">
                <!-- we're a closely bonded community that brings people together from around the world,<br>offering a safe and engaging space with many unique & exclusive features -->
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
    }
    .grid-bg::before {
        content: "";
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-image:url("https://api.saku.dev/bannerista/banner/grid");
        background-size:contain;
        background-position:center;
        filter: brightness(50%);
        box-shadow:0px 0px 20px inset #000000;
    }
</style>