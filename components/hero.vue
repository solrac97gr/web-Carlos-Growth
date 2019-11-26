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
      <nuxt-link to="/contactarme"
        ><div class="btn-contact">
          <span>Empezar a crecer</span>
        </div></nuxt-link
      >
    </div>
    <video
      id="videobanner"
      autoplay
      muted
      playsinline
      loop
      src="~/assets/video/video.mp4"
    ></video>
  </div>
</template>
<script>
export default {}
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
  font-size: 1.2em;
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
  border-radius: 20px;
  font-family: 'BigNoodleTitling', 'Staatliches', 'coursive';
  margin: auto;
  position: relative;
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
    font-size: 20px;
  }
  .btn-contact {
    display: none;
  }
}
</style>
