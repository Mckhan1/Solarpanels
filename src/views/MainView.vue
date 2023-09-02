<script setup>

</script>

<script>
import SolarPanels from '../components/SolarPanels.vue';
import Brand from '../components/Brand.vue';
import NewPanels from '../components/NewPanels.vue';
import InfoAbout from '../components/InfoAbout.vue';
import ClientFeed from '../components/ClientFeed.vue';
import Join from '../components/Join.vue';
export default {
    components: {
        SolarPanels,
        Brand,
        NewPanels,
        InfoAbout,
        ClientFeed,
        Join
    },
    mounted(){
    window.scrollTo(0,0);

  },
}
</script>


<template>
    <div>
        <SolarPanels class="mt-[130px]"/>
        <Brand />
        <NewPanels />
        <InfoAbout />
        <ClientFeed />
        <Join />
    </div>
</template>


<style></style>