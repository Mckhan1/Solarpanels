<script setup>
</script>

<script>
import store from '../store';
export default {
    mounted() {
        // console.log(this.panels);
    },
    data() {
        return {
            panels: store.state.panels,
            fallback: [],
            eventPanet: {}
        }
    },
    methods: {
        eventFunc(i) {
            this.$router.push(`/product/${i.id}`)
            // this.fallback == this.panels
            // this.$store.dispatch('EVENT_FUNC', i.id)
            // console.log(event.currentTarget.id);

        }
    },
}
</script>

<template>
    <div class="min-h-[761px] w-[100%] mb-[80px]">
        <div class="h-[100%] w-[90%] m-auto flex flex-col ">
            <h2 class="text-[32px] pt-[80px]">New Solar Panels</h2>
            <div class="flex justify-between flex-wrap h-[max-content] w-[100%] mt-[40px]">

                <div :id="i.id" @click="eventFunc(i)" v-for="i of this.panels" :key="i.id"
                    class="h-[462px] mb-[20px] w-[305px] flex flex-col ">
                    <img class="imgPanels h-[376px] w-[305px]" :src="i.img" alt="">
                    <div class="mt-[24px] flex justify-between text-center h-[30px] items-center">
                        <span class="text-[20px]">{{ i.title }}</span>
                        <span class="text-[14px]">{{ i.wat }}W</span>
                    </div>
                    <p class="text-[18px] mt-[8px]">${{ i.price }}</p>
                </div>


            </div>
            <div class="flex items-center justify-center">
                <router-link to="/allproduct">
                    <button class="h-[56px] w-[200px] text-center bg-[#4269E2] mt-[53px] text-[#fff]">view
                        collection</button>

                </router-link>

            </div>
        </div>
    </div>
</template>


<style></style>