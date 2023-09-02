<script setup>
</script>

<script>
import store from '../store';
export default {
    data() {
        return {
            product: store.state.panels,
            eventpanels: {},
        }
    },
    mounted(){
        window.scrollTo(0,0);
        for(let i of this.product){
            if(this.$route.fullPath.split('/').pop()  == i.id){
                this.eventpanels = i
            }
        }
    }
}
</script>


<template>
    <div class="h-[760px] w-[100%]">
        <div class="h-[100%] w-[100%] m-auto flex">
            <div class="h-[100%] w-[50%] left_img">
                <img :src="this.eventpanels.img " alt="">
            </div>

            <div class="h-[100%] w-[50%] pl-[80px] pt-[80px] flex flex-col text-[#2A254B]">

                <div class="h-[148px] w-[640px] bg-[#012465]">
                    <h2 class="text-[36px] text-[#fff] font-[600] mt-[15px] ml-[15px]">{{ this.eventpanels.title }}</h2>
                    <p class="text-[24px] ml-[15px] text-[#fff] font-[500] mt-[13px]">{{this.eventpanels.price}}$</p>
                </div>

                <p class="mt-[25px] ">Description</p>
                <span class="descPayment mt-[16px] text-[#505977] w-[75%]">{{this.eventpanels.desc}}</span>
                <ul class="w-[150px] mt-[17px] text-[#505977]">
                    <li>{{ this.eventpanels.material }} </li>
                    
                </ul>
                <p class="mt-[40px] mb-[28px]">Dimensions</p>

                <div class="h-[50px] flex">
                    <div class="flex flex-col h-[50px] mr-[63px]">
                        <span class="text-[14px] ">Height</span>
                        <span class="text-[14px] text-[#505977] mt-[12px]">{{this.eventpanels.heightMat}}cm</span>
                    </div>
                    <div class="flex flex-col h-[50px] mr-[63px]">
                        <span class="text-[14px] ">Width</span>
                        <span class="text-[14px] text-[#505977] mt-[12px]">{{this.eventpanels.widthMat}}cm</span>
                    </div>
                    <div class="flex flex-col h-[50px] mr-[63px]">
                        <span class="text-[14px] ">Depth</span>
                        <span class="text-[14px] text-[#505977] mt-[12px]">{{this.eventpanels.depthMat}}cm</span>
                    </div>
                </div>

                <button class="mt-[40px] h-[56px] w-[150px] bg-[#4269E2] text-[#fff] font-[500]">
                    ORDER
                </button>

            </div>
        </div>
    </div>
</template>

<style>
.left_img img{
    height: 760px;
    width: 720px;
}

.ul {
    list-style-type: disc;
}
</style>