<script setup>
</script>

<script>
export default {

}
</script>

<template>
    <div class="min-h-[840px] w-[100%]">
        <div class="h-[100%] w-[90%] m-auto flex flex-col items-center justify-center  text-[#22343D]">
            <h2 class="text-[34px] font-[700]">Price Table</h2>
            <p class="font-[500] mt-[8px]">We offer competitive price</p>

            <div class="course flex justify-between flex-wrap min-h-[607px] w-[100%]  mt-[50px]">

                <div class="blockCourses courses h-[607px] mb-[30px] w-[388px] bg-[#fff] rounded-[8px] flex flex-col items-center justify-center">
                    <h3 class="text-[24px] font-[700] text-[#22343D]">Standard</h3>
                    <p class="mt-[8px] text-[#22343D]">Brief price description</p>
                    <div class="flex items-center mt-[16px]">
                        <h2 class="text-[80px] text-center text-[#22343D] font-[700]">0</h2>
                        <span class="text-[60px] text-center text-[#22343D] font-[700] ml-[8px]">$</span>

                    </div>
                    <p class="text-[#E0E0E0]">Per / month</p>
                    <span class="mt-[28px] font-[500] text-[#22343D]">Only 2 Operators</span>
                    <span class="mt-[16px] font-[500] text-[#22343D]">Notifications</span>
                    <span class="mt-[16px] font-[500] text-[#22343D]">Landing Pages</span>

                    <button class="bg-[#22343D] text-[#fff] h-[56px] w-[200px] font-[700] text-[18px] mt-[38px] cursor-pointer">Order Now</button>

                </div>

                <div class="blockCourses coursesActive h-[607px] mb-[30px] w-[388px] bg-[#012465] rounded-[8px] flex flex-col items-center justify-center">
                    <h3 class="text-[24px] font-[700] text-[#fff]">Standard</h3>
                    <p class="mt-[8px] text-[#fff]">Brief price description</p>
                    <div class="flex items-center mt-[16px]">
                        <h2 class="text-[80px] text-center text-[#fff] font-[700]">5</h2>
                        <span class="text-[60px] text-center text-[#fff] font-[700] ml-[8px]">$</span>

                    </div>
                    <p class="text-[#E0E0E0]">Per / month</p>
                    <span class="mt-[28px] font-[500] text-[#fff]">5+ Operators</span>
                    <span class="mt-[16px] font-[500] text-[#fff]">Notifications</span>
                    <span class="mt-[16px] font-[500] text-[#fff]">Landing Pages</span>

                    <button class="bg-[#FED700] text-[#000] h-[56px] w-[200px] font-[700] text-[18px] mt-[38px] cursor-pointer">Order Now</button>

                </div>

                <div class="blockCourses courses h-[607px] mb-[30px] w-[388px] bg-[#fff] rounded-[8px] flex flex-col items-center justify-center">
                    <h3 class="text-[24px] font-[700] text-[#22343D]">Standard</h3>
                    <p class="mt-[8px] text-[#22343D]">Brief price description</p>
                    <div class="flex items-center mt-[16px]">
                        <h2 class="text-[80px] text-center text-[#22343D] font-[700]">10</h2>
                        <span class="text-[60px] text-center text-[#22343D] font-[700] ml-[8px]">$</span>

                    </div>
                    <p class="text-[#E0E0E0]">Per / month</p>
                    <span class="mt-[28px] font-[500] text-[#22343D]">10+ Operators</span>
                    <span class="mt-[16px] font-[500] text-[#22343D]">Notifications</span>
                    <span class="mt-[16px] font-[500] text-[#22343D]">Landing Pages</span>

                    <button class="bg-[#22343D] text-[#fff] h-[56px] w-[200px] font-[700] text-[18px] mt-[38px] cursor-pointer">Order Now</button>

                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>

.courses{
    box-shadow: 0px 1px 6px 2px #e0e0e0;
}
.coursesActive{
    box-shadow: 0px 1px 6px 0px #b5b5b5;
}
</style>