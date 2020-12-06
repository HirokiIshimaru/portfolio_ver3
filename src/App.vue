<template>
  <div id="app">
    <header id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/works">Works</router-link> |
      <router-link to="contact">Contact</router-link>
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;700&family=Noto+Serif+TC:wght@200;400;700&display=swap');
body{
  background-color: #111;
  font-weight: normal;
  font-family: 'Noto Serif TC','Noto Serif JP', serif;
}
#nav {
  position: absolute;
  z-index: 100;
  top: 0;
  right: 0;
  margin-left: auto;
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
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
