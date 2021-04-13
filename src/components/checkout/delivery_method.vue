<template>

                    <div id="" class='border border-blue-800 rounded-sm p-2.5 flex justify-between items-start my-3' v-for= 'item in get_cart' :key='item.product.id'>
                        <div class= 'flex w-4/5'>
                            <radio/>
                            <div class='ml-3 mr-5'>
                                <h2 class='text-xs  font-black mb-2 '>{{item.product.title}}</h2>
                                <p class='text-xs font-normal'>{{item.product.description}}</p>
                            </div>
                        </div>
                        <p class='w-1/5'>{{item.product.price}} * {{item.quantity}}</p>
                    </div>

</template>

<script>
import radio from '../svgs/radio.vue'

    export default{
        components:{
            radio
        },
        computed:{   
            get_cart(){
                return this.$store.state.cart;
            },
            products(){
                return this.$store.state.products;
            }
        },
        methods:{

        add_to_cart(product){

            this.$store.commit('ADD_TO_CART',{

                    product: product,

                    quantity: 1
            });           
         
        }
    }
}
</script>