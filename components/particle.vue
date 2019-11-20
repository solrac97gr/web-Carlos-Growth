<template>
  <div>
    <div id="particle-canvas" class="particle"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    const canvasDiv = document.getElementById('particle-canvas')
    const options = {
      particleColor: '#821d25',
      interactive: true,
      background: '#001b32',
      speed: 'medium',
      density: 2500
    }
    /*eslint-disable*/
    //suppress all warnings between comments
    var particleCanvas = new ParticleNetwork(canvasDiv, options)
    /* eslint-enable */
  }
}
</script>
<style>
.particle {
  background-color: #001b32;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
