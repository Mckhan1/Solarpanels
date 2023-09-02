<script setup>

</script>
<script>
import store from '../store';
export default {
    data() {
        return {
            env: store.state.lang,
            text: store.state.languages,
            ru: false,
            en: true,
            uz: false,
        }
    },
    methods:{
        // changeLanguage(){
        //     if(event.target.dataset.language == "uz"){
        //         store.state.lang = 1
        //         this.ru = false
        //         this.en = false
        //         this.uz = true
        //     }else if (event.target.dataset.language == "en"){
        //         store.state.lang = 2
        //         this.uz = false
        //         this.ru = false
        //         this.en = true
        //     }else if(event.target.dataset.language == "ru"){
        //         store.state.lang = 3
        //         this.ru = true
        //         this.en = false
        //         this.uz = false
        //     }
        //     console.log(store.state.lang);
        //     console.log(this.env);
        // }
    },
 
  
}
</script>


<template>
    <header class="header h-[130px] w-[100%] fixed top-[0] z-[999]">
        <div class="h-[100%] w-[90%] m-auto flex flex-col">
            <div class="flex h-[70px] w-[100%] items-center justify-between border-b-[1px] border-[solid] border-[#E6E6E6]">
                <div class="h-[50px] w-[50px]  text-center">
                    <img src="../assets/icons/Final-01 1.svg" alt="">
                </div>
                <router-link class="text-[24px]" to="/"> 
                    {{ this.text[this.env].header.header_title  }} 
                </router-link>
                <div>
                    <span @click="changeLanguage" :class="{languageActive: this.uz}" data-language="uz" class="text-[#AFAFAF] font-[600] cursor-pointer ml-[15px]">UZ</span>
                    <span @click="changeLanguage" :class="{languageActive: this.en}" data-language="en"
                        class=" text-[#AFAFAF] font-[600] cursor-pointer ml-[15px]">ENG</span>
                    <span @click="changeLanguage" :class="{languageActive: this.ru}" data-language="ru" class="text-[#AFAFAF] font-[600] cursor-pointer ml-[15px]">RU</span>
                </div>
            </div>
            <div class="flex h-[60px] w-[100%] items-center justify-center">

                <router-link class="ml-[65px] text-[#000]" to="/">Главная</router-link>
                <router-link class="ml-[65px] text-[#000]" to="/">О нас</router-link>
                <router-link class="ml-[65px] text-[#000]" to="/allproduct">Все товары</router-link>
                <router-link class="ml-[65px] text-[#000]" to="/education">Школа</router-link>
                <router-link class="ml-[65px] text-[#000]" to="/payment">Написать нам</router-link>
            </div>

        </div>
    </header>
</template>


<style scoped>
.languageActive {
    /* border-b-[1px] border-solid border-[#012465] */
    /* text-[#012465]  */
    border-bottom: 1px solid #012465;
    color: #012465;
}

.header {
    backdrop-filter: blur(50px);
    /* box-shadow: 0px 2px 5px #dbdbdb; */
}
</style>