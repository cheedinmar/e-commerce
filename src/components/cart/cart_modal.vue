<template>
    <div >
  
        
        <div class='modal-overlay absolute z-100 top-0 right-0 left-0 bottom-0 '>
        </div>

        
        <div class='p-10 flex flex-col fixed modal bg-white rounded-lg '>
            <div class='flex justify-between border-b-2 py-4'>
                <p class='text-2xl font-bold mr-5'>Your cart</p>
                <cancel @click.prevent='close' />
            </div>
<!-- 
            <form class='flex flex-col justify-center'>
                <input type ='text' class='border rounded-md py-3 my-5  bg-gray-100' placeholder='Add Promocode'/>
                <button class='px-32 py-3 bg-blue-700  rounded-md hover:shadow-lg text-white text-md hover:shadow'> Apply</button>
            </form>  --> 

            <div class='w-full relative my-6' v-for= 'item in get_cart' :key='item.product.id'>
                <p class='border-b-2 w-full  py-3'>{{item.product.title}}</p>
                <p class='absolute right-0 top-0 py-3'>{{item.quantity}} * ${{item.product.price}}</p>
            </div>

            <div class='w-full relative my-6'>
                <p class='border-b-2 w-full  py-3  '>Name</p>
                <p class='absolute right-0 top-0 py-3'>Price</p>
            </div>

            <div class='relative flex items-center'>
               <router-link :to= "{name: 'checkout'}" exact>
                    <button class='px-24 py-3 bg-blue-700 mr-4 rounded-md hover:shadow-lg text-black text-md hover:shadow'>Checkout</button>
                </router-link>
                <img src="../../../images/right.png" class="w-6 h-6 absolute  " style='right:120px;'>
            </div>

        </div>


    </div>

</template>

<script>
import cancel from '../svgs/cancel.vue'
import add_and_subtract from './add_and_subtract_cart.vue'

export default{
    computed:{
        addProductToCart(){
            return this.$store.state.cart;
        }
    },
    components:{
        cancel,
        add_and_subtract
    },
    props:{
        title:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            showModal:false
        }
    },
    computed:{

          get_cart: function () {
            
              return this.$store.state.cart;

            }
    },
    methods: {
        close(){
            this.$emit('toggle-modal');

        }
    }
}
</script>

<style>

.modal{
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width:100%;
    z-index:0;
    max-width:400px;
     
}
.modal-overlay{
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100px;
}
</style>