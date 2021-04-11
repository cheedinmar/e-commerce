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
            <div class="flex justify-between  items-evenly flex-wrap " >
                    <div class="flex flex-col" v-for ="product in products" :key='product.id' :product='product'>
                        <router-link :to="{name: 'product_details', params: {id: product.id}}">
                            <div class="md:w-48 md:w-60 w-30 ">
                                <img :src="product.image" class="item-contain"  >
                            </div>
                            <p class="font-semibold text-sm text-center">{{product.title}}</p>
                            <p class="font-semibold text-sm text-center mb-8">{{product.price}}</p>
                        </router-link>
                    </div>
            </div>
      </div>
      </section>

</template>

<script>


export default {
   computed:{
        products(){
            return this.$store.state.products;
        }
   },
    mounted(){
        this.$store.dispatch('getProducts')
    }
        
       
    }

</script>

<style>

</style>