<template>
  <div class="back">
    <div class="content">
      <span class="title">Growth Hacker & Data Scientist.</span>
      <span class="subtitle">Carlos García</span>
      <h1 class="seotitle">
        Growth Hacking para Startups en Perú.
      </h1>
    </div>
    <div>
      <nuxt-link class="call" to="/contactarme"
        ><div class="btn-contact">
          <span>Empezar a crecer</span>
        </div></nuxt-link
      >
    </div>

    <Particles />
  </div>
</template>
<script>
import Particles from '../components/particles'
export default {
  components: {
    Particles
  }
}
</script>
<style scoped>
#videobanner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}
.back {
  width: 100%;
}

.title {
  color: white;
  font-family: 'BigNoodleTitling', 'Staatliches', 'coursive';
  font-weight: 400;
}
.subtitle {
  color: #821d25;
  font-family: 'BigNoodleTitling', 'Staatliches', 'coursive';
}
.seotitle {
  color: white;
  font-size: 1.5em;
  font-family: 'BigNoodleTitling', Helvetica, sans-serif;
}
.content {
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-content: center;
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
}
.btn-contact {
  width: 20%;
  display: block;
  background-color: #821d25;
  color: white;
  font-size: 28px;
  padding: 10px;
  font-weight: 400;
  text-decoration: none;

  font-family: 'BigNoodleTitling', 'Staatliches', 'coursive';
  margin: auto;
  position: relative;
}
.btn-contact:hover {
  background-color: #bd1623;
  box-shadow: 0px 2px 3px 0px rgba(189, 22, 35, 0.7);
  transition-delay: 0s;
}
.call {
  text-decoration: none;
}

@media (max-width: 600px) {
  .title {
    margin-top: 100px;
    margin-bottom: 10px;
    font-size: 40px;
  }
  .subtitle {
    font-size: 30px;
  }
  .seotitle {
    font-size: 22px;
  }
  .btn-contact {
    display: none;
  }
}
</style>
