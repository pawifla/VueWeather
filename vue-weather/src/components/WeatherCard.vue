<template>
  <div class="hello">
    <p>
        This is the weather.
    </p>
    <h3>Weather</h3>
    <input type="text" v-model="location" @change="setLocation" placeholder="Type your location:"/>
    <p>{{ selectedLocation }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {

    setup(){
        const location = ref('');
        const selectedLocation = ref('');

        const setLocation = () => {
            selectedLocation.value = 'Location:' + location.value;
        };
        return {
            location,
            selectedLocation,
            setLocation
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
