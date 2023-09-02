<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import './style.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import "./media.css"
</script>
<script>
export default {
  components:{
    Header,
    Footer
  },
  
  beforeCreate(){
  }
}
</script>

<template>

  <h1>  </h1>

  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Holtwood+One+SC&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
*{
  caret-color: transparent !important;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
</style>



<!-- 
router  -
i18n    
slider
scrolls -
header  
massive -
logo    -
-->