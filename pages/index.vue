<template>
  <div class="container">
    <Hero />
    <div>
      <nuxt-link to="/contactarme"
        ><div class="btn-contact-mobile">
          <span>Empezar a crecer</span>
        </div></nuxt-link
      >
    </div>
  </div>
</template>

<script>
import Hero from '../components/hero.vue'

export default {
  components: {
    Hero
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.btn-contact-mobile {
  background-color: #821d25;
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 28px;
  padding: 5px;
  font-weight: 400;
  font-family: 'BigNoodleTitling', 'Staatliches', 'coursive';
}
@media (min-width: 600px) {
  .btn-contact-mobile {
    display: none;
  }
}
</style>
