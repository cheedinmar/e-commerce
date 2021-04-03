<template>
  <div>
  <nav_bar/>
    <router-view/>
  <foot_er/>
  </div>
</template>

<script>
import nav_bar from "./components/home/nav_bar.vue"
import foot_er from "./components/home/footer.vue"

export default{
  components:{
    nav_bar,
    foot_er
  }
}

</script>
