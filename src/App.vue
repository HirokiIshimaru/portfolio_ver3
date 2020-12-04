<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/works">Works</router-link> |
      <router-link to="contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body{
  background-color: #111;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
