<template>
        <div class='flex flex-col  border rounded-md hover:shadow-lg p-6'>
            <div class='flex justify-between items-center mb-10'>
                <p class='font-black text-base'>Order total (N) </p>
                <p class='text-sm font-light'>edit</p>
            </div>
            <div class='items-start pt-2 flex justify-between'>
                <div class='lg:w-44 lg:h-44 md:w-60 md:h-60 w-36 h-36 mr-6'>
                    <img src="../../../images/flowers.jpg" class='item-contain'>
                </div>
                <div class="flex flex-col mr-10">
                    <p>Name</p>
                    <div class='flex'>
                        <add class='mr-2'/>
                        <p class='text-base font-bold mr-2'> N </p>
                        <subtract/>
                    </div>
                </div>
                <p class='text-md font-normal'>price</p>
            </div>
            <div class='w-full relative my-6'>
                <p class='border-b-2 w-full  py-3  '>Text</p>
                <p class='absolute right-0 top-0 py-3'>Price</p>
            </div>
            <div class='w-full relative my-6'>
                <p class='border-b-2 w-full  py-3  '>Text</p>
                <p class='absolute right-0 top-0 py-3'>Price</p>
            </div>
        </div>
</template>

<script>
import add from '../svgs/add.vue'
import subtract from '../svgs/subtract.vue'

export default{
    components:{
        add,
        subtract
    }
}
</script>