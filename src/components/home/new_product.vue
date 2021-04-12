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
            <div class="flex justify-between  items-center flex-wrap " >
                    <div class="flex flex-col sm:mb-10" v-for ="product in products" :key='product.id' :product='product'>
                        <router-link :to="{name: 'product_details', params: {id: product.id}}">
                            <div class="md:w-56 lg:w-64 w-30 h-30 flex ">
                                <img :src="product.image" class="item-contain justify-center"  >
                            </div>
                            <p class="font-semibold text-sm text-center md:w-56 lg:w-64 w-30 h-30">{{product.title}}</p>
                            <p class="font-semibold text-sm text-center mb-8 md:w-56 lg:w-64 w-30 h-30">{{product.price}}</p>
                        </router-link>
                        <button class='px-24 py-3 bg-blue-700 mr-4 rounded-md hover:shadow-lg text-white text-xs hover:shadow' @click='addToCart()'>Add to cart</button>
                    </div>
            </div>
      </div>
      </section>

</template>

<script>


export default {
    data(){
        return{
            product:this.$store.state.product
        }
    },
   computed:{
        products(){
            return this.$store.state.products;
        }
   },
   methods:{
    addToCart(){
            this.$store.disptach('addProductToCart', {
                product: product,
                quantity: 1   
            })
   },
    mounted(){
        this.$store.dispatch('getProducts')
    }
        
   }    
    }

</script>

<style>

</style>