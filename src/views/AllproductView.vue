<script setup>


</script>

<script>
import ProductImg from '../components/ProductImg.vue'
import Products from '../components/Products.vue'
export default {
    components: {
        ProductImg,
        Products
    },
    mounted(){
    window.scrollTo(0,0);

  },
}
</script>


<template>
    <div class="">
        <ProductImg class="mt-[130px]"/>
        <Products />
    </div>
</template>


<style></style>