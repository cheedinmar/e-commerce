<template>
    <div class='px-10 md:px-20 lg:px-32' v-if="product" >
        <div class="flex w-100 flex-col md:flex-row  " >
        <div class ='md:w-1/2 w-36 md:mr-20 '>
                <img :src ='product.image' class='item-contain'>
        </div>
        <div class ='md:w-1/2 w-full flex flex-col '>
        <p class='text-sm font-semibold'>{{product.title}}</p>
        <div class='flex py-4 items-center'>
            <h2 class='text-base font-bold mr-5' >{{product.price}}</h2>
            <s class='font-lighter text-xs'>Oldprice</s>
        </div>
        <div class='py-4'>
        <p class='font-lighter text-xs'> </p>
        <div class='flex'>
            <add class='mr-2 cursor-pointer' @click='increaseProductQuantity()'/>
            <p class='text-base font-bold mr-2'>$Price</p>
            <subtract class='cursor-pointer' @click = ''/>
        </div>
        </div>
         <div class='py-4'>
        <p class='font-lighter text-xs'> Color:</p>

        
        <div class='flex'>
            <color class='mr-2'/>
            <color class='mr-2'/>
            <color/>
        </div>
        </div>
        <div class='flex items-center py-4'>
        <button class='px-24 py-3 bg-blue-700 mr-4 rounded-md hover:shadow-lg text-white text-xs hover:shadow' @click='add_to_cart(product)'>Add to cart</button>
        <cart  @click.prevent = 'toggleModal'> </cart>
        <div>{{cartItemCount}}</div>

        <cart_modal v-if='showModal' title ='Name' @toggle-modal ='toggleModal'>
        </cart_modal> 
        </div>


        <div class='flex justify-between py-2 border-b-2'>
            <input type='text' placeholder='Write Something' class='w-full px-3 mr-6'>
            <add/>
        </div>
        </div>   
        </div>

        <relevant_product/>
    
    </div>
</template>

<script>
    import relevant_product from '../home/relevant_product.vue'
    import add from '../svgs/add.vue'
    import subtract from '../svgs/subtract.vue'
    import color from '../svgs/color.vue'
    import cart from '../svgs/cart.vue'
    import cart_modal from '../cart/cart_modal.vue'
    import cancel from '../svgs/cancel.vue'
    import {mapGetters, mapState, mapActions} from 'vuex';

    export default {
    data(){
        return{
            id: this.$route.params.id,
            showModal:false,  
        }
        
    },

    methods:{

         add_to_cart(product){

            this.$store.commit('ADD_TO_CART',{

                    product: product,

                    quantity: 1
            });           
         
        },
        toggleModal(){
            this.showModal=!this.showModal
        },
        
    },
    
    computed:{ 
        ...mapState({
            product: state => state.product.product,
            cart: state => state.product.cart

            //product is the name of the module
        }),
        ...mapGetters(['cartItemCount'])
       
    },
    created(){
        this.$store.dispatch('getProduct', this.$route.params.id)

    },
    components:{
        relevant_product,
        add,
        subtract,
        color,
        cart,
        cart_modal,
        cancel
    },
 
}
</script>