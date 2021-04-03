<template>
  
      <section>
      <div class="flex flex-col mt-8">
            <div class="flex justify-between">
                    <p class="font-semibold mb-4 text-md">Relevant</p>
                    <div class="flex">
                        <img src="../../../images/left.png" class="w-5 h-6 mr-2">
                        <img src="../../../images/right.png" class="w-6 h-6">
                    </div>

            </div>
            <div class="flex  justify-between  items-evenly flex-wrap" >
                    <div class="flex flex-col" v-for ="product in products" :key='product.id'>
                        <router-link :to="{name: 'product_details', params: {id: product.id}}">
                            <div class="md:w-48 md:w-60 w-30 ">
                                <img :src="product.images" class="item-contain"  >
                            </div>
                             <p class="font-semibold text-sm text-center">{{product.name}}</p>
                            <p class="font-semibold text-sm text-center mb-8">{{product.price}}</p>
                        </router-link>
                    </div>
            </div>
      </div>
      </section>


  
</template>

<script>

import flower1 from '../../../images/flowers.jpg'
import flower2 from '../../../images/flowers2.jpg'
import flower3 from '../../../images/flower3.jpg'
import flower4 from '../../../images/flowers4.jpg'

export default {
    data(){
        return{
            products:[
            {
                images: flower1,
                name: 'Lily',
                price: 200,
                id:1
            },
                        {
                images: flower2,
                name: 'Tulip',
                price: 300,
                id:2
            },
                        {
                images: flower3,
                name: 'Orchid',
                price: 400,
                id:3
            },
                        {
                images: flower4,
                name: 'Hyacinth',
                price: 500,
                id:4
            }
        ]
      
        }
    }
        
       
    }

</script>

<style>

</style>