<template>
    <div >
  
        
        <div class='modal-overlay absolute z-100 top-0 right-0 left-0 bottom-0 overflow-hidden'>
        </div>

        
        <div class='p-10 flex flex-col fixed modal bg-white rounded-lg overflow-scroll'>
            <div class='flex justify-between border-b-2 py-4'>
                <p class='text-2xl font-bold mr-5'>Your cart</p>
                <cancel @click.prevent='close' />
            </div>
                <!-- 
            <form class='flex flex-col justify-center'>
                <input type ='text' class='border rounded-md py-3 my-5  bg-gray-100' placeholder='Add Promocode'/>
                <button class='px-32 py-3 bg-blue-700  rounded-md hover:shadow-lg text-white text-md hover:shadow'> Apply</button>
            </form>  --> 
            <div class='w-full relative my-6'>
                <p class='border-b-2 w-full  py-3  '>Name</p>
                <p class='absolute right-0 top-0 py-3'>Price</p>
            </div>

            <div class='w-full py-3 my-3 flex items-start justify-start border-b-2 ' v-for= 'item in get_cart' :key='item.product.id'>
                <p class='  mr-5  w-2/3'>{{item.product.title}}</p>
                <div class='w-1/3 flex items-center'>
                    <p class=' w-2/3 mr-3'>{{item.quantity}} * ${{item.product.price}}</p>
                    <div class=' w-1/3 font-black p-1 bg-red-800 text-black text-md w-3 h-8 text-center cursor-pointer' @click.prevent ='removeProductFromCart(item.product)'>X</div>
                </div>
            </div>

            <div class='w-full relative my-6 flex'>
                <p class='border-b-2 w-full  py-3  '>Total</p>
                <p class='font-bold text-blue-700  absolute right-0 top-0 py-3'>$ {{cartTotalPrice}}</p>
            </div>

             <div class='w-full relative my-6 flex justify-between'>
                <button class='bg-blue-700 px-2 py-3 rounded-md text-md  ' @click.prevent ='clearCartItems()'>Clear Cart</button>
                <div class='relative flex items-center'>
                <router-link :to= "{name: 'checkout'}" exact>
                        <button class='px-2 py-3 bg-blue-700  rounded-md hover:shadow-lg text-black text-md hover:shadow'>Checkout</button>
                    </router-link>
                </div>
            </div>

        </div>


    </div>

</template>

<script>
import cancel from '../svgs/cancel.vue'
import add_and_subtract from './add_and_subtract_cart.vue'

export default{
    computed:{
        cart(){
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
        },
        product:{
            
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

            },
            cartTotalPrice(){
                return this.$store.getters.cartTotalPrice;
            }
    },
    methods: {
        close(){
            this.$emit('toggle-modal');

        },
        removeProductFromCart(product){
            this.$store.dispatch('removeProductFromCart', product)
        },
        clearCartItems(){
            this.$store.dispatch('clearCartItems' )
        }

    },
    mounted(){
        this.$store.dispatch('getCartItems');
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