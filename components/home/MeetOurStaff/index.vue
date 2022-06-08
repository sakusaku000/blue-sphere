<template>
    <div class="bg-brand-light text-white">
        <Container class="filter drop-shadow-xl">
            <h1 class="title text-current text-center">meet our staff</h1>

            <div class="grid grid-cols-6 gap-6">
                <!-- nath -->
                <HomeMeetOurStaffCard class="col-span-3" 
                    name="Nath#0095" 
                    role="Owner"
                    icon="https://cdn.discordapp.com/avatars/117369638320340998/43ab183fe6a65b8fcd489c719341d5f4.png?size=256"
                />

                <!-- jae -->
                <HomeMeetOurStaffCard class="col-span-3" 
                    name="jaetpa#0960" 
                    role="Assistant"
                    icon="https://cdn.discordapp.com/avatars/146608140899581952/7f60810fd1f093dd7e55000f48dbdf3b.png?size=256"
                />

                <!-- saku -->
                <HomeMeetOurStaffCard class="col-span-2"
                    name="saku#0524" 
                    role="Barista / dev"
                    icon="https://cdn.discordapp.com/avatars/255673616342056961/03de51ff5d028628ef0290a46048016a.png?size=256"
                    :smaller="true"
                />

                <!-- swati -->
                <HomeMeetOurStaffCard class="col-span-2"
                    name="uqlysoftie#2824" 
                    role="Barista"
                    icon="https://cdn.discordapp.com/avatars/415080865236779010/c4596aabe463487c48eef0cb0cf98030.png?size=256"
                    :smaller="true"
                />

                <!-- koli -->
                <HomeMeetOurStaffCard class="col-span-2"
                    name=".kolipop#7024" 
                    role="Barista"
                    icon="https://cdn.discordapp.com/avatars/235834280138375173/9c8828e9b1d8fbec67a2ecf12100c816.png?size=256"
                    :smaller="true"
                />

                <!-- void -->
                <HomeMeetOurStaffCard class="col-span-2 col-start-2"
                    name="TagmanBeesley#2211" 
                    role="Barista"
                    icon="https://cdn.discordapp.com/avatars/147801925230788608/6efdff3a65d41f684e454b87b40eb828.png?size=256"
                    :smaller="true"
                />

                <!-- void -->
                <HomeMeetOurStaffCard class="col-span-2"
                    name="VoidInVoid#7126" 
                    role="Bot developer"
                    icon="https://cdn.discordapp.com/avatars/121387133821911040/dc97dbb6bebdd319bb47ec7c288a4f6c.png?size=256"
                    :smaller="true"
                />
            </div>
        </Container>
    </div>
</template>