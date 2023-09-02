<script setup>
</script>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

import '../swiper.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
    
};
</script>


<template>
    <div class="h-[657px] w-[100%]">
        <div class="h-[100%] w-[90%] m-auto flex flex-col text-[#22343D]">
            <h2 class="text-[34px] font-[700]">Contents Strategies</h2>
            <p class="mt-[18px] font-[500]">We focus on ergonomics and meeting you where you work. It's only a keystroke
                away. </p>

            <div class="h-[385px] w-[100%] flex mt-[33px] justify-between">

                <swiper :slidesPerView="3"  :pagination="{
                    clickable: true,
                }" :modules="modules" class="mySwiper">

                    <swiper-slide>
                        <div class="h-[385px] w-[350px] flex flex-col">
                            <img src="../assets/image/imagedsfsfwe3232323.png" alt="">
                            <p class="mt-[17px]">By <span class="font-[700]">Wahid Ari</span> | 03 March 2019</p>
                            <span class="mt-[18px] text-[24px] font-[700] w-[90%]">Increasing Prosperity With Positive
                                Thinking</span>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="h-[385px] w-[350px] flex flex-col">
                            <img src="../assets/image/imagedsfsfwe3232323.png" alt="">
                            <p class="mt-[17px]">By <span class="font-[700]">Wahid Ari</span> | 03 March 2019</p>
                            <span class="mt-[18px] text-[24px] font-[700] w-[90%]">Increasing Prosperity With Positive
                                Thinking</span>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="h-[385px] w-[350px] flex flex-col">
                            <img src="../assets/image/imagedsfsfwe3232323.png" alt="">
                            <p class="mt-[17px]">By <span class="font-[700]">Wahid Ari</span> | 03 March 2019</p>
                            <span class="mt-[18px] text-[24px] font-[700] w-[90%]">Increasing Prosperity With Positive
                                Thinking</span>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="h-[385px] w-[350px] flex flex-col">
                            <img src="../assets/image/imagedsfsfwe3232323.png" alt="">
                            <p class="mt-[17px]">By <span class="font-[700]">Wahid Ari</span> | 03 March 2019</p>
                            <span class="mt-[18px] text-[24px] font-[700] w-[90%]">Increasing Prosperity With Positive
                                Thinking</span>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="h-[385px] w-[350px] flex flex-col">
                            <img src="../assets/image/imagedsfsfwe3232323.png" alt="">
                            <p class="mt-[17px]">By <span class="font-[700]">Wahid Ari</span> | 03 March 2019</p>
                            <span class="mt-[18px] text-[24px] font-[700] w-[90%]">Increasing Prosperity With Positive
                                Thinking</span>
                        </div>
                    </swiper-slide>
                    
                </swiper>








            </div>

            <!-- <div class="h-[20px] w-[100%] bg-[#979797] mt-[50px]"></div> -->

        </div>
    </div>
</template>

<style scoped></style>