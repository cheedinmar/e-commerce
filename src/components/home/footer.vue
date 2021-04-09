<template>
    <div class="flex flex-wrap justify-between mt-20 px-10 md:px-20 lg:px-32 w-full bg-gray-100 py-16 "  >
        <div class="flex flex-col w-60 pb-6 lg:mb-0 items-start ">
            <a class= "leading-4 font-bold mb-2  text-md tracking-wider">Follow us</a>
            <a class="text-sm mb-2">+44 8003 5535NN</a>
            <div class= "flex">
                <facebook/>
                <whatsapp/>
                <instagram/>
            </div>
        </div>
        <div class="flex flex-col w-60 pb-6 lg:mb-0">
            <h3 class= "leading-4 font-bold mb-2  text-md tracking-wider">Help</h3>
            <a class="text-sm text-bg">Contact us</a>
            <a class="text-sm">Delivery information</a>
            <a class="text-sm">Payment information</a>
        </div>
        <div class="flex flex-col w-60 pb-6 lg:mb-0">
            <h3 class= "leading-4 font-bold mb-2  text-md tracking-wider">About us</h3>
            <a class="text-sm">Our stores</a>
            <a class="text-sm">Flower care</a>
            <a class="text-sm">Site map</a>
        </div>
        <div class="flex flex-col w-60 pb-6 lg:mb-0">
            <h3 class= "leading-4 font-bold mb-2  text-md tracking-wider">Legal</h3>
            <a class="text-sm">Privacy policy</a>
            <a class="text-sm">Terms and Conditions</a>
            <a class="text-sm">Cookie policy</a>
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