<template>
    <div class=" px-6 md:px-20 lg:px-32">
        <p class= 'font-bold text-3xl leading-7 py-12 tracking-wider'>Checkout</p>
        <div class= 'flex flex-col lg:flex-row  '>
            <div class='mr-24'>
                <div class='flex items-center justify-start mb-16 '>
                    <div class= 'flex items-center'>
                        <one/>
                        <p class='text-xs font-medium text-blue-500 ml-1'>Contacts</p>
                    </div>
                    <loading class='mx-2'/>
                    <div class= 'flex items-center'>
                        <two/>
                        <p class='text-xs font-normal ml-1'>Shiping</p>
                    </div>
                    <loading class='mx-2'/>
                    <div class= 'flex items-center'>
                        <three>
                        
                        </three>
                        <p class='text-xs font-extralight ml-1'>Shiping</p>
                    </div>
                </div>
                <div>
                    <p class='text-sm'>Delivery method</p>
                    <delivery_method/>
                    <delivery_method/>
                </div>
                <div>
                    <delivery_address/>
                </div>
                <div>
                    <delivery_date/>
                </div>
                <div class='flex  border-t-2 py-5 w-full my-10 items-center justify-between'>
                    <div class='flex items-center'>
                        <img src='../../../images/left.png' class="w-4 h-6 mr-2">
                        <p>Back step</p>
                    </div>
                    <div class='relative flex items-center'>
                        <button class='px-10 py-3 bg-blue-700 mr-4 rounded-md hover:shadow-lg text-black text-md hover:shadow'>Payment</button>
                        <img src="../../../images/right.png" class="w-6 h-6 absolute right-7">
                    </div>

                </div>

            </div>
            <div >
                <add_and_subtract_cart></add_and_subtract_cart>
            </div>
        </div>
    </div>
</template>

<script>
import one from '../svgs/one.vue'
import loading from '../svgs/loading.vue'
import two from '../svgs/two.vue'
import three from '../svgs/three.vue'
import delivery_method from './delivery_method.vue'
import delivery_address from './delivery_address.vue'
import delivery_date from './delivery_date_and_time.vue'
import add_and_subtract_cart from '../cart/add_and_subtract_cart.vue'
export default{
    components:{
        one,
        loading,
        two,
        three,
        delivery_method,
        delivery_address,
        delivery_date,
        add_and_subtract_cart
    }
}

</script>