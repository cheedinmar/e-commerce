<template>
    <div>
    <p class='text-sm my-5'>Date & Time</p>
        <form>
            <input type= 'date' placeholder='Date' class=' bg-gray-100 rounded-md text-xs p-2 w-full'/>
        </form>
    </div>
</template>

<script>

export default {
    computed:{
        onClickButton (event) {
      this.$emit('clicked', 'someValue')
    }
    }
}
</script>