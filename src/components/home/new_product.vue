<template>

      <section>
      <div class="flex flex-col mt-40">
            <div class="flex justify-between">
                    <p class="font-semibold mb-4 text-md">New</p>
                    <div class="flex">
                        <img src="../../../images/left.png" class="w-5 h-6 mr-2">
                        <img src="../../../images/right.png" class="w-6 h-6">
                    </div>

            </div>
            <div class="flex justify-between   items-center flex-wrap mb-16 " >
                    <div class="flex flex-col w-full mb-16 md:mb-16  md:w-72   items-center justify-center " v-for ="product in products" :key='product.id' :product='product'>
                        <router-link :to="{name: 'product_details', params: {id: product.id}}" class='md:w-64 mb-2 flex items-center flex-col  '>
                            <div class=" flex justify-center items-center  ">
                                <img :src="product.image" class=" object-contain md:w-48 md:h-48 w-full "  >
                            </div>
                            <p class="font-semibold text-sm text-center md:w-56 md:w-32 w-full md:h-20 h-12  ">{{product.title}}</p>
                            <p class="font-semibold text-sm text-center mb-3 md:w-56 lg:w-64 w-32 ">${{product.price}}</p>
                        </router-link>

                        <button type="button" class="px-12 py-3 bg-blue-700  rounded-md hover:shadow-lg text-white text-xs hover:shadow" @click="add_to_cart(product)"> Add to Cart </button>
                    </div>

            </div>
      </div>
      </section>

</template>

<script>
import {mapState} from 'vuex'


export default {

   computed:{
        ...mapState({
            products:state=>state.product.products
            //product is the name of the module
        })
   },

   methods:{

        add_to_cart(product){

            this.$store.commit('ADD_TO_CART',{

                    product: product,

                    quantity: 1
            });           
         
        }
   },
    mounted(){

        this.$store.dispatch('getProducts')
    }

        
   }    
    

</script>

<style>

</style>