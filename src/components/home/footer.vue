<template>
    <div class="flex flex-wrap justify-between mb-10 mt-20 px-10 md:px-20 lg:px-32 w-full bg-gray-100 py-16"  >
        <div class="flex flex-col w-60 pb-6 lg:mb-0 items-start ">
            <p class= "leading-4 font-bold mb-2  text-md tracking-wider">Follow us</p>
            <p class="text-sm mb-2">+44 8003 5535NN</p>
            <div class= "flex">
                <facebook/>
                <whatsapp/>
                <instagram/>
            </div>
        </div>
        <div class="flex flex-col w-60 pb-6 lg:mb-0">
            <h3 class= "leading-4 font-bold mb-2  text-md tracking-wider">Help</h3>
            <p class="text-sm text-bg">Contact us</p>
            <p class="text-sm">Delivery information</p>
            <p class="text-sm">Payment information</p>
        </div>
        <div class="flex flex-col w-60 pb-6 lg:mb-0">
            <h3 class= "leading-4 font-bold mb-2  text-md tracking-wider">About us</h3>
            <p class="text-sm">Our stores</p>
            <p class="text-sm">Flower care</p>
            <p class="text-sm">Site map</p>
        </div>
        <div class="flex flex-col w-60 pb-6 lg:mb-0">
            <h3 class= "leading-4 font-bold mb-2  text-md tracking-wider">Legal</h3>
            <p class="text-sm">Privacy policy</p>
            <p class="text-sm">Terms and Conditions</p>
            <p class="text-sm">Cookie policy</p>
        </div>
    </div>
</template>
<script>
import facebook from "../svgs/facebook.vue"
import whatsapp from "../svgs/whatsapp.vue"
import instagram from "../svgs/instagram.vue"

export default{
    components:{
        facebook,
        whatsapp,
        instagram
    }
}
</script>