<template>
    <div class=" px-10 md:px-20 lg:px-32">
        <section >
          <div class="flex  h-12 items-center border-b-1 w-full justify-between  ">
          <router-link :to= "{name: 'home'}" exact>
            <logo class="md:w-5/6 md:flex md:justify-center"/>
          </router-link>
          <div class="flex">
          <search class ="mr-4 cursor-pointer md:mr-8 lg:mr-12"/>
          <cart  @click.prevent = 'toggleModal' class='cursor-pointer'> </cart>

        <cart_modal v-if='showModal' title ='Name' @toggle-modal ='toggleModal'>
        </cart_modal>
          </div>
          </div>
      </section>

      <section>
      <div class="md:flex h-20 items-center justify-center hidden ">
        <div class="lg:w-1/2 md:w-full md:flex md:justify-evenly ">
            <router-link :to= "{name: 'home'}" exact>
                <p class="font-bold">Home</p>
            </router-link>
             <router-link :to= "{name: 'product'}" exact>
                <p class="font-bold">Products</p>
            </router-link>

            <router-link :to= "{name: 'checkout'}" exact>
              <p class="font-bold">Checkout</p>
            </router-link>
            <p class="font-bold">About Us</p>
        </div>
      </div>
      </section>
    </div>
</template>

<script>
import logo from "../svgs/logo.vue"
import search from "../svgs/search.vue"
import cart from "../svgs/cart.vue"
import cart_modal from "../cart/cart_modal.vue"

  export default{
    components:{
      logo,
      search,
      cart,
      cart_modal
    },
    methods:{
        toggleModal(){
            this.showModal=!this.showModal
        }
    },
    data(){
      return{
        showModal:false
      }
    }
  }
</script>