<script setup>
import Payment from '../components/Payment.vue';
import MayLike from '../components/MayLike.vue';
import Brand from '../components/Brand.vue';
import Join from '../components/Join.vue';

</script>

<script>
export default {
    components: {
        Payment,
        MayLike,
        Brand,
        Join,
    },
    mounted(){
    window.scrollTo(0,0);

  },
}
</script>


<template>
    <div>
        <Payment class="mt-[130px]"/>
        <MayLike />
        <Brand />
        <Join />
    </div>
</template>

<style>

</style>