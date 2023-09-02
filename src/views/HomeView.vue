<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>
<script>
// import store from '../store';
export default {
  mounted() {
    // console.log(this.arr);
  },
  data() {
    return {
      // arr: store.getters.arr
    }
  },


}
</script>
<template>
  <main>
    <TheWelcome />
  </main>
</template>


<style>

</style>