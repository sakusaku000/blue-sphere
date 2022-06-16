<template>
    <HomeFeaturesLayout class="bg-gray-50">
        <!-- LEFT -->
        <div>
            <HomeFeaturesIconContainer>
                <IconsCalendar/>
            </HomeFeaturesIconContainer>
            <h1>regular events</h1>
            <hr>
            <p>
                we're always running exciting events that keep our community engaged
                such as game nights, questions of the week, team tournaments, <a href="/#mashup" class="underline">the 95 degrees mashup</a> and much more!
            </p>
        </div>

        <!-- RIGHT -->
        <div>
            <HomeFeaturesThumbnailCollection 
            id="regevents"
            :pic1="require('~/assets/features/events/amongus.png')" 
            :pic2="require('~/assets/features/events/gartic.png')" 
            :pic3="require('~/assets/features/events/teamtournament.png')"
            :reverse="true"
            />
        </div>
    </HomeFeaturesLayout>
</template>