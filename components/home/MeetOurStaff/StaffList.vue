<template>
    <div id="staff-list" class="flex items-center flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-10 -mx-4">
        <!-- nath -->
        <HomeMeetOurStaffCard class="col-span-3" 
            name="Nath" 
            role="Manager"
            :icon="url + '117369638320340998.png'"
            socialLink="https://thisisntnath.carrd.co/"
        />

        <!-- jae -->
        <HomeMeetOurStaffCard class="col-span-3" 
            name="jaetpa" 
            role="Assistant"            
            :icon="url + '146608140899581952.png'"
        />

        <!-- tag -->
        <HomeMeetOurStaffCard class="col-span-2 col-start-2"
            name="TagmanBeesley" 
            role="Barista"
            :icon="url + '147801925230788608.png'"
            socialLink="https://twitter.com/tagmanbeesley"
        />

        <!-- swati -->
        <HomeMeetOurStaffCard class="col-span-2"
            name="uqlysoftie" 
            role="Barista"
            :icon="url + '415080865236779010.png'"
        />

        <!-- nia -->
        <HomeMeetOurStaffCard class="col-span-2"
            name="yknowlikenia" 
            role="Barista"
            :icon="url + '395248783396569088.png'"
            socialLink="https://yknowlikenia.neocities.org/"
        />

        <!-- saku -->
        <HomeMeetOurStaffCard class="col-span-2"
            name="saku" 
            role="Barista / Developer"
            :icon="url + '255673616342056961.png'"
            socialLink="https://saku.dev"
        />

        <!-- void -->
        <HomeMeetOurStaffCard class="col-span-2"
            name="VoidInVoid" 
            role="Developer"
            :icon="url + '121387133821911040.png'"
        />
    </div>
</template>

<script>
export default {
    name:"StaffList",
    data() {
        return {
            url:"https://api.saku.dev/spin-dash/avatar/"
        }
    }
}
</script>