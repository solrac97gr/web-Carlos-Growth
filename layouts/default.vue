<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>
<script>
import Navbar from '../components/navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
<style>
* {
  box-sizing: border-box;
}
@font-face {
  font-family: 'BigNoodleTitling';
  src: url('../static/fonts/custom/BigNoodleTitling.woff2') format('woff2'),
    url('../static/fonts/custom/BigNoodleTitling.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
</style>
