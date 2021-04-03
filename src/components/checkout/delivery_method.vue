<template>

                    <div class='border border-blue-800 h-14 rounded-sm p-2.5 flex justify-between items-start my-3'>
                        <div class= 'flex'>
                            <radio/>
                            <div class='ml-3'>
                                <h2 class='text-xs font-normal'>Title</h2>
                                <p class='text-xs font-normal'>Description</p>
                            </div>
                        </div>
                        <p>Price</p>
                    </div>

</template>

<script>
import radio from '../svgs/radio.vue'

    export default{
        components:{
            radio
        }
    }
</script>