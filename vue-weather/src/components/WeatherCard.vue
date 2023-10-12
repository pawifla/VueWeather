<template>
  <div class="hello">
    <p>
        This is the weather.
    </p>
    <h3>Weather</h3>
    <input type="autocomplete" v-model="location" @change="setLocation" placeholder="Type your location:"/>
    <ul v-if="filteredLocations.length > 0">
      <li v-for="l in filteredLocations" :key="l">{{ l }}</li>
    </ul>
    <p>{{ selectedLocation }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {

    setup(){
        const location = ref('');
        const selectedLocation = ref('');
        const locations = ['Nevada', 'California', 'Alaska'];

        const setLocation = () => {
            selectedLocation.value = 'Location:' + location.value;
        };

        const filteredLocations = computed(() => {
          const loweredLocations = location.value.toLowerCase();
          return locations.filter((l) => l.toLowerCase().includes(loweredLocations));

        });
        return {
            location,
            selectedLocation,
            setLocation,
            filteredLocations
        };
    },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
