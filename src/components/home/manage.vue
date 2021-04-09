<template>
    <div class=" px-10 md:px-20 lg:px-32">
 

     
        <div class="flex flex-col md:flex-row mb-40 ">
            <div class="h-56 mb-4  md:w-1/2 md:mr-10 lg:mr-20 relative" style="z-index:-100;">
                <img src="../../../images/flowers.jpg" class="object-contain  ">
                <div class="absolute flex flex-col top-1/4 right-1/4">
                    <h3 class= "leading-4 font-black mb-4  text-2xl tracking-wider">Title</h3>
                    <p class="font-semibold mb-10 text-md">Description</p>
                    <button class= "font-light text-sm cursor-pointer hover:underline">See more</button>
                </div>
            </div>
            <div class="h-56 md:w-1/2 relative" style="z-index:-100;">
                <img src="../../../images/flowers2.jpg" class="object-contain " >
                <div class="absolute flex flex-col top-1/4 right-1/4">
                    <h3 class= "leading-4 font-black mb-4  text-2xl tracking-wider">Title</h3>
                    <p class="font-semibold mb-10 text-md">Description</p>
                    <button class= "font-light text-sm cursor-pointer hover:underline">See more</button>
                </div>
            </div>
        </div>
 

        <new_products/>
        <relevant_product/>

    </div>

</template>

<script>
import new_products from './new_product.vue';
import relevant_product from './relevant_product.vue'

export default{
    components:{
        new_products,
        relevant_product
    }
}
</script>