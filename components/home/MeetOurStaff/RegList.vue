<template>
    <div id="reg-list" class="flex items-center flex-wrap xl:flex-nowrap justify-center gap-4">
        <!-- ana -->
        <HomeMeetOurStaffCard class="col-span-3" 
            name="AnaArsonist"
            :icon="url + '465094881908621313.png'"
            :regular="true"
        />

        <!-- charlie -->
        <HomeMeetOurStaffCard class="col-span-3" 
            name="MamaCharlie"
            :icon="url + '590921620810366978.png'"
            :regular="true"
        />

        <!-- gabi -->
        <HomeMeetOurStaffCard class="col-span-3" 
            name="gabi.newsies"
            :icon="url + '318380248091590657.png'"
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

        <!-- koli -->
        <HomeMeetOurStaffCard class="col-span-3" 
            name=".kolipop"
            :icon="url + '235834280138375173.png'"
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