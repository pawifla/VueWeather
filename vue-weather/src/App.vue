<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <WeatherCard></WeatherCard>
  <div style="display: none;">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import WeatherCard from './components/WeatherCard.vue'

export default {
  name: 'App',
  components: {
    WeatherCard,
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
