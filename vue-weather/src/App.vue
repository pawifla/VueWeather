<template>
  <div>
  <h1>Vue Weather!</h1>
  <AutoComplete @shareLocation="setLocation"></AutoComplete>
  <WeatherCard></WeatherCard>
  </div>
</template>


<script>
import AutoComplete from './components/AutoComplete.vue'
import WeatherCard from './components/WeatherCard.vue'

export default {
  name: 'App',
  prpps:{
    weatherLocation: '' 
  },
  components: {
    AutoComplete,
    WeatherCard
  }, methods:{
    setLocation(location){
      console.log('location got', location);
      this.weatherLocation = location;
    }
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
