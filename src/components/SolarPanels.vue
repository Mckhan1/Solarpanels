<script setup>
</script>

<script>
export default {

}
</script>


<template>
    <div class="h-[704px] z-[100] w-[100%]  ">
        <div class="block"></div>
        <div class="h-[100%] z-[100] w-[90%] m-auto flex justify-between items-center">
            <div class="h-[584px] w-[760px] z-[100] bg-[#012465] flex flex-col justify-between">
                <div>
                    <h1 class="text-[32px] mt-[60px] ml-[60px] text-[#fff] w-[70%] font-[500]">Solar panels are
                        not only eco friendly but also cost efficient.</h1>
                    <button class="h-[56px] cursor-pointer w-[200px] bg-[#FED700] mt-[46px] ml-[60px] text-center font-[600]">view
                        collection</button>
                </div>
                <span class="text-[#C4CCDB] mb-[80px] ml-[60px] w-[70%]">A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</span>

            </div>
            <div class="image h-[584px] w-[520px] bg-[#f9f9f9] z-[100] "></div>
        </div>
    </div>
</template>

<style scoped>
.block {
    height: 704px;
    width: 100%;
    background: #FED700;
    position: absolute;
    z-index: -1;
    clip-path: polygon(0 75%, 100% 0, 100% 100%, 0% 100%);
}

.image {
    background-image: url('../assets/image/Right Image.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}</style>