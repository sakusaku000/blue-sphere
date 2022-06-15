<template>
    <Container :smaller="true">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 z-50">
            <div class="row-start-2 lg:row-start-1">
                <div class="yt-container">
                    <iframe class="rounded-xl shadow-xl" src="https://www.youtube.com/embed/ZkFEFrVl8hE?start=1978" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <span class="text-xs text-gray-400 lg:">(this is the 2021 mashup for now until 2022 is finished)</span>
            </div>
            <div>
                <img class="mb-6 md:w-5/6 mx-auto lg:mx-0" src="~/assets/logo/mashup2022.png" alt="95 Degrees Mashup 2022" draggable="false">
                <hr class="mb-4">
                <h2 class="text-xl font-bold font-title text-center lg:text-left">our most ambitious show ever!</h2>
                <p class="text-justify">
                    the 95 degrees mashup is a yearly celebration of our community, with awards, community highlights, announcements, 
                    giveaways and so much more in one live, interactive stream! this year we celebrated six years of our community, 
                    and if you haven't seen mashup 2022 yet, you can <span class="inline md:hidden">watch it below!</span> <span class="hidden md:inline">watch it on the left!</span>
                </p>
            </div>
        </div>
    </Container>
</template>

<style scoped>
    .yt-container {
        position: relative;
        width: 100%;
        padding-bottom: 56.25%;
    }
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
</style>