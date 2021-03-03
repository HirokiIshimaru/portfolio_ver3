<template>
  <div>
    <Loading v-show="loading" id="loading"></Loading>
    <header id="app" v-show="!loading">
      <nav>
        <router-link v-scroll-to="'#home'" to="./">Home</router-link>
        <router-link v-scroll-to="'#about'" to="./">About</router-link>
        <router-link v-scroll-to="'#works'" to="./">Works</router-link>
        <router-link v-scroll-to="'#contact'" to="./">Contact</router-link>
      </nav>
      <vue-page-transition>
        <router-view/>
      </vue-page-transition>
    </header>
  </div>
</template>

<script>
import Loading from '@/views/loading'
export default {
  name: 'App',
  data(){
    return {
      loading: true
    }
  },
  components: {
    Loading,
  },
  methods:{
    createTitleDesc: function(routeInstance){
      if(routeInstance.meta.title){
        let setTitle = routeInstance.meta.title;
        document.title = setTitle;
      }
    },
  },
  mounted(){
    let routeInstance = this.$route;
    this.createTitleDesc(routeInstance);
    setTimeout(()=>{
      this.loading = false;
    }, 1500)
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;700&family=Noto+Serif+TC:wght@200;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap');
@import '@/sass/ress.scss';
$jpFont: 'Noto Sans JP', sans-serif;
$enFont: 'Noto Serif TC','Noto Serif JP', serif;

body{
  background-color: #111;
  font-weight: normal;
  font-family: $enFont;
}
nav {
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  margin-left: auto;
  margin-right: 50px;
  padding: 30px;
  display: flex;
  width: 70%;
  max-width: 500px;
  opacity: 0;
  transform: translateY(-100px);
  animation: showNav 1s forwards;
  animation-delay: 1s;
  @keyframes showNav{
    100%{
      opacity: 1;
      transform: translateY(0px);
    }
  }
  a {
    margin: 30px;
    display: block;
    font-weight: 200;
    color: #fff;
    text-decoration: none;
    position: relative;
    &:after{
      width: 0;
      content: '';
      border-bottom: solid 1.5px #fff;
      transition: ease 0.3s all;
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;
    }
    &:hover::after{
      width: 100%;
      left: 0;
      border-bottom: solid 1.5px #fff;
    }
  }
}
.loaded{
  overflow: hidden;
  position: relative;
  &::before{
    animation: loaded 2s cubic-bezier(.4, 0, .2, 1) forwards;
    background: #fff;
    bottom: 0;
    content: '';
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }
  @keyframes loaded {
    100%{
      transform: translateX(100%);
    }
  }
}
:root{
  --overlay-bg: #111 !important;
  --transition-duration: .3s !important;
}
.overlay-top, .overlay-left, .overlay-right, .overlay-bottom{
  z-index: 9000;
}
</style>
