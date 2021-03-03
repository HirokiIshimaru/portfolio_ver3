<template>
  <div v-show="loading">
    <div class="fullview">
      <div class="loading-spacer"></div>
      <vue-loading 
        type="barsCylon"
        color="#fff"
        :size="{ width: '100px', height: '100px' }"
        class="vue-loading"
        >
      </vue-loading>
    </div>
  </div>
</template>

<script>
import { VueLoading } from 'vue-loading-template'
  export default {
    name: "Home",
    data() {
      return {
        loading: true,
      }
    },
    components:{
      VueLoading
    },
  }
</script>

<style>
.fullview {
  width: 100%;
  height: 100%;
  background: #111;
  position: fixed;
}
.loading-spacer {
  height: 40vh;
}
.vue-loading{
  text-align: center;
  line-height: 100px;
}
</style>