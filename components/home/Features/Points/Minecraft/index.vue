<template>
    <HomeFeaturesLayout>
        <!-- LEFT -->
        <div class="row-start-2 lg:row-start-1">
            <HomeFeaturesThumbnailCollection 
            :pic1="require('~/assets/features/smp/placeholder.png')" 
            :pic2="require('~/assets/features/smp/placeholder.png')" 
            :pic3="require('~/assets/features/smp/placeholder.png')"/>
        </div>

        <!-- RIGHT -->
        <div>
            <HomeFeaturesIconContainer>
                <IconsCube/>
            </HomeFeaturesIconContainer>
            <h1>minecraft smp</h1>
            <hr>
            <p>
                we have our very own minecraft smp server! community members level 20+ can feel free to join in, build as they like and collaborate with other members. 
                we also host events within the server so keep an eye out!
            </p>
        </div>
    </HomeFeaturesLayout>
</template>