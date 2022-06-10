<template>
    <div id="reg-list" class="flex items-center flex-wrap justify-center gap-4">
        <!-- ana -->
        <HomeMeetOurStaffCard class="col-span-3" 
            name="AnaArsonist"
            :icon="url + '465094881908621313.png'"
            :regular="true"
        />

        <!-- aeprl -->
        <HomeMeetOurStaffCard class="col-span-3" 
            name="aeprl"
            :icon="url + '162945458581274624.png'"
            :regular="true"
        />

        <!-- charlie -->
        <HomeMeetOurStaffCard class="col-span-3" 
            name="Miss Charlie"
            :icon="url + '348412090735788033.png'"
            :regular="true"
        />

        <!-- gabi -->
        <HomeMeetOurStaffCard class="col-span-3" 
            name="gabi.newsies"
            :icon="url + '318380248091590657.png'"
            :regular="true"
        />

        <!-- lasroth -->
        <HomeMeetOurStaffCard class="col-span-3" 
            name="Lasroth"
            :icon="url + '305514934597582849.png'"
            :regular="true"
        />

        <!-- lucy -->
        <HomeMeetOurStaffCard class="col-span-3" 
            name="Lucy"
            :icon="url + '205114957807747072.png'"
            :regular="true"
        />

        <!-- ohmightyqueen -->
        <HomeMeetOurStaffCard class="col-span-3" 
            name="ohmightyqueen"
            :icon="url + '305606797295878144.png'"
            :regular="true"
        />

        <!-- ducky -->
        <HomeMeetOurStaffCard class="col-span-3" 
            name="ducky"
            :icon="url + '195262865500930057.png'"
            :regular="true"
        />

        <!-- roy -->
        <HomeMeetOurStaffCard class="col-span-3" 
            name="Roy"
            :icon="url + '187355065592446976.png'"
            :regular="true"
        />

        <!-- Snowystorm -->
        <HomeMeetOurStaffCard class="col-span-3" 
            name="Snowystorm"
            :icon="url + '384046336271450113.png'"
            :regular="true"
        />

        <!-- Xeco -->
        <HomeMeetOurStaffCard class="col-span-3" 
            name="Xeco"
            :icon="url + '227174482731728897.png'"
            :regular="true"
        />

        <!-- Xycarla -->
        <HomeMeetOurStaffCard class="col-span-3" 
            name="Xycarla"
            :icon="url + '272333850657423362.png'"
            :regular="true"
        />

        <!-- cleanycloth -->
        <HomeMeetOurStaffCard class="col-span-3" 
            name="cleanycloth"
            :icon="url + '140595880330788864.png'"
            :regular="true"
        />
    </div>
</template>

<script>
export default {
    name:"RegList",
    data() {
        return {
            url:"https://api.saku.dev/spin-dash/avatar/"
        }
    }
}
</script>