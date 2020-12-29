<template>
  <div id="app">
    <!-- <router-link to="/"></router-link> -->

    <router-view></router-view>
    <!-- <Json></Json> -->
  <!-- <HelloWorld></HelloWorld> -->
  </div>
</template>


<script>
// import HelloWorld from './components/HelloWorld'
// import Json from './components/Json.vue'
 
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Json
  },
  mounted (){
     window.location.href='http://localhost:8080/#/'
  }
}
</script>

<style>
#app {
  
  color: #767a7e;
  margin-top: 10px;
}
</style>
