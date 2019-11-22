<template>
  <div>
    <Navbar />
    <v-touch @swiperight="right"
      ><v-touch @swipeleft="left"><nuxt /></v-touch
    ></v-touch>
  </div>
</template>
<script>
import Navbar from '../components/navbar.vue'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      routes: ['/', '/resumen', '/portafolio', 'blogs']
    }
  },
  methods: {
    left() {
      const current = this.$route.path
      const currentindex = this.routes.indexOf(current)
      /*eslint-disable */
      if (currentindex === 0) {
        this.$router.push(this.routes[currentindex + 1])
      } else if (currentindex === 1) {
         this.$router.push(this.routes[currentindex + 1])
      }else if (currentindex === 2) {
         this.$router.push(this.routes[currentindex + 1])
      }else{
        this.$router.push(this.routes[0])
      }
    },
    right() {
      const current = this.$route.path
      const currentindex = this.routes.indexOf(current)
      /*eslint-disable */
      if (currentindex === 3) {
        this.$router.push(this.routes[currentindex - 1])
      }
      else if (currentindex === 2) {
        this.$router.push(this.routes[currentindex - 1])
      } else if (currentindex === 1) {
         this.$router.push(this.routes[currentindex - 1])
      }
      else{
        this.$router.push(this.routes[3])
      }
    }
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
