<template>
    <HomeFeaturesLayout class="bg-gray-50">
        <!-- LEFT -->
        <div>
            <HomeFeaturesIconContainer>
                <IconsRobot/>
            </HomeFeaturesIconContainer>
            <h1>custom bots</h1>
            <hr>
            <p>
                a selection of custom-coded bots developed by our staff run in our server and offer the community a variety of unique and convenient features.
            </p>
        </div>

        <!-- RIGHT -->
        <div>            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                <!-- guardian -->
                <HomeFeaturesPointsCustomBotsBotDetail id="guardian" botName="guardian" class="col-span-2 xl:col-span-1" :botIcon="require('~/assets/features/bots/guardian.png')">
                    our main bot that offers many different features, including member quotes, community events, an xp + levelling system, and a customisable profile.
                </HomeFeaturesPointsCustomBotsBotDetail>
                <!-- radio -->
                <HomeFeaturesPointsCustomBotsBotDetail id="ninetyfive-radio" botName="95 degrees radio" class="col-span-2 xl:col-span-1" :botIcon="require('~/assets/features/bots/radio.png')">
                    95 degrees' very own exclusive radio station! always playing songs of many different genres + user requests 24/7 whenever you wanna listen! 
                </HomeFeaturesPointsCustomBotsBotDetail>
                <!-- bannerista -->
                <HomeFeaturesPointsCustomBotsBotDetail id="bannerista" botName="bannerista" :botIcon="require('~/assets/features/bots/bannerista.png')" class="col-span-2">
                    a bot that tracks activity in the server by our members and generates a daily server banner with the most active to least active members for that day.
                </HomeFeaturesPointsCustomBotsBotDetail>
            </div>
        </div>
    </HomeFeaturesLayout>
</template>