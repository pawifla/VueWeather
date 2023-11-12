<template>
  <div class="hello">
    <p>This is the weather.</p>
    <h3>Weather</h3>
    <input
      type="autocomplete"
      v-model="location"
      @input="setLocation"
      placeholder="Type your location:"
    />
    <ul v-if="filteredLocations.length > 0">
      <li v-for="l in filteredLocations" :key="l">
        <button 
        @click="$emit('shareLocation', l)">{{ l }}</button>
      </li>
    </ul>
    <p>{{ selectedLocation }}</p>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { apiKey } from '../assets/apikey';

//make api key seperate file
const apiKeyString =  apiKey;
let url = `http://dataservice.accuweather.com/locations/v1/autocomplete?apikey=${apiKeyString}&q=searchText`;
// const cityKey = 50;


export default {

    setup(){
        const location = ref('');
        const selectedLocation = ref('');
        // const locations = ['Nevada', 'California', 'Alaska'];
        const locations = ref([]);
        let localizedNameArray = [];

      const getLocations = async () => {
        if(location.value != null && location.value !== ''){
         try{
          let searchUrl =url.replace('searchText', location.value);
          const response = await axios.get(searchUrl);
          let data = response.data;
          localizedNameArray = data
                .filter((item) => item.Country.ID === "US")
                .map((item) => item.LocalizedName);
          locations.value = localizedNameArray;
          console.log(localizedNameArray);
         } catch (error){
          console.error('Error fetching data:', error);
         }
        }else{
          localizedNameArray = [];
          locations.value = [];
        }
      };

      onMounted(() =>{
        getLocations();
      });


        const setLocation = () => {
            selectedLocation.value = 'Location:' + location.value;
            getLocations();
        };

        const filteredLocations = computed(() => {
          const loweredLocations = location.value.toLowerCase();
          return locations.value.filter((l) => l.toLowerCase().includes(loweredLocations));

        });
        return {
            location,
            selectedLocation,
            setLocation,
            filteredLocations,
            getLocations
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
