<template>
  <div class="hello">
    {{ location }}
  </div>
</template>

<script>
export default {
  name: 'WeatherCard',
  props: {
    location: String
  }
}
</script>