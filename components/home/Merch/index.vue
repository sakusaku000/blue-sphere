<template>
    <div class="merch-bg-img text-white">
        <Container id="merch" class="filter drop-shadow-xl">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="title text-current">we have merch!</h1>
                    <p class="text-lg">
                    sport the 95 degrees logo on various items like shirts and stickers! 
                    </p>
                    <p class="text-lg">
                        our collection is available over on redbubble.
                    </p>
                </div>
                <div>
                    <a href="https://www.redbubble.com/people/ThisIsntNath/shop" target="_blank">
                        <MainButton>
                            <IconsShirt class="w-8 mr-4"/>
                            browse on redbubble
                        </MainButton>
                    </a>
                </div>
            </div>
        </Container>
    </div>
</template>

<style scoped>
    .merch-bg-img {
        background-image:url(~/assets/bg/merch-bg.png);
        background-size:cover;
        background-position:center;
        box-shadow:0px 0px 20px #00000090 inset;
    }
</style>