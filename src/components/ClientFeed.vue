<script setup>
</script>

<script>
export default {

}
</script>

<template>
    <div class="h-[613px] w-[100%] z-[100] relative">
        <div class="back"></div>
        <h2 class="textFeed text-[32px] font-[600] ml-[80px]">OUR CLIENTS FEEDBACK</h2>
        <div class="h-[100%] w-[100%] flex z-[100]">
            <div class="h-[80%] z-[100] w-[55%] flex items-center justify-between">
                <svg width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.8125 40.625L17.1875 25L32.8125 9.375" stroke="black" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <img class="imgFeed h-[393px] w-[630px]" src="@/assets/image/Large.png" alt="">
            </div>
            <div class="h-[80%] z-[100] w-[45%]  flex flex-col ">
                <div class="ml-[48px] mt-[45px]">
                    <h2 class="text-[39px] text-[#fff] font-[700] ">Tesla</h2>
                    <p class="pFeed text-[#BFC8D8] text-[19px] w-[70%] mt-[40px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                        expedita obcaecati et id illum at qui ratione dicta quaerat maiores asperiores, accusamus quos
                        mollitia ipsam vitae, praesentium deleniti, ipsum quo.</p>
                        <img class="mt-[48px]" src="@/assets/icons/Group 2.png" alt="">
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.back {
    background: #012465;
    height: 613px;
    width: 856px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
}
</style>