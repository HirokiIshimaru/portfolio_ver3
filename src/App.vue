<template>
  <div id="app">
    <header id="nav">
      <router-link v-scroll-to="'#home'" to="./">Home</router-link>
      <router-link v-scroll-to="'#about'" to="./">About</router-link>
      <router-link v-scroll-to="'#works'" to="./">Works</router-link>
      <router-link v-scroll-to="'#contact'" to="./">Contact</router-link>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods:{
    createTitleDesc: function(routeInstance){
      if(routeInstance.meta.title){
        let setTitle = routeInstance.meta.title;
        document.title = setTitle;
      }
    }
  },
  mounted: function(){
    let routeInstance = this.$route;
    this.createTitleDesc(routeInstance);
  }
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
#nav {
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
</style>
