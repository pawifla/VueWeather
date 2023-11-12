<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <AutoComplete></AutoComplete>
  <div style="display: none;">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AutoComplete from './components/AutoComplete.vue'

export default {
  name: 'App',
  components: {
    AutoComplete,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
