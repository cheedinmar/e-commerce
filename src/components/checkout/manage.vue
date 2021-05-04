<template>
    <div class=" px-6 md:px-20 lg:px-32">
        <p class= 'font-bold text-3xl leading-7 py-12 tracking-wider'>Checkout</p>
        <div class= 'flex flex-col '>
            <div class='lg:mr-24 mr-0'>
                
                <div>
                        <div class='flex items-center justify-between'>
                            <p class='text-sm'>Delivery method</p>
                            <a href='#shipping' class="px-12 py-3 bg-blue-700  rounded-md hover:shadow-lg text-white text-xs hover:shadow">Next</a>
                        </div>
                        <div id="" class='border border-blue-800 rounded-sm p-2.5 flex justify-between items-start my-3' v-for= 'item in cart' :key='item.product.id'>
                        <div class= 'flex w-4/5'>
                            <radio/>
                            <div class='ml-3 mr-5'>
                                <h2 class='text-xs  font-black mb-2 '>{{item.quantity}} * {{item.product.title}}</h2>
                                <p class='text-xs font-normal'>{{item.product.description}}</p>
                            </div>
                        </div>
                        <p class='w-1/5'>$ {{item.product.price * item.quantity}}</p>
                    </div>
                    <div>
                   <h2>Total:</h2>
                   <p class='font-black'>$  {{cartTotalPrice}} </p>
                   </div>

                </div>
                <div class='pt-16' >
                    <p class='text-sm mb-5 delivery_address pt-12' id='shipping'>Delivery Address</p>
                    <form>
                        <select id="LGA" name="LGA" class=' bg-gray-100 rounded-md text-xs p-2 w-32 mr-5 mb-3  '>
                            <option value="Ikeja">Ikeja</option>
                            <option value="Agege">Agege</option>
                            <option value="Ajah">Ajah</option>
                            <option value="Lekki">Lekki</option>
                        </select>
                        <input type= 'text' placeholder='address' class=' bg-gray-100 rounded-md text-xs p-2 w-60'/>
                    </form>
                </div>
                <div class='delivery_date'>
                    <div>
                    <p class='text-sm my-5'>Date & Time</p>
                        <form>
                            <input type= 'date' placeholder='Date' class=' bg-gray-100 rounded-md text-xs p-2 w-full'/>
                        </form>
                    </div>
                </div>
                <div class='flex  border-t-2 py-5 w-full my-10 items-center justify-between'>
                    <div class='flex items-center'>
                        <img src='../../../images/left.png' class="w-4 h-6 mr-2">
                        <p>Back step</p>
                    </div>
                    <div class='relative flex items-center payment'>
                        <a class='px-10 py-3 bg-blue-700 mr-4 rounded-md hover:shadow-lg text-black text-md hover:shadow' href='#order_total'>Payment</a>
                        <img src="../../../images/right.png" class="w-6 h-6 absolute right-7">
                    </div>

                </div>

            </div>
            <div >
                <add_and_subtract_cart id='order_total' class='mt-4'></add_and_subtract_cart>
            </div>
        </div>
    </div>
</template>

<script>

import radio from '../svgs/radio.vue'
import one from '../svgs/one.vue'
import loading from '../svgs/loading.vue'
import two from '../svgs/two.vue'
import three from '../svgs/three.vue'
import delivery_method from './delivery_method.vue'
import delivery_address from './delivery_address.vue'
import delivery_date from './delivery_date_and_time.vue'
import add_and_subtract_cart from '../cart/add_and_subtract_cart.vue'
import {mapActions, mapState, mapGetters} from 'vuex'
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
    },

    data(){
        return {

            contact_address: false,
        }
    },

    methods:{

        contact(){

            this.contact_address = true;
        },
        
         add_to_cart(product){

            this.$store.commit('ADD_TO_CART',{

                    product: product,

                    quantity: 1
            });           
         
        }
    },

    computed:{
            ...mapState({
                cart: state => state.product.cart,
                products:state=> state.product.products
            }),
            ...mapGetters(['cartTotalPrice'])
    },
    mounted(){

        this.contact_address = true;
    }
}

</script>