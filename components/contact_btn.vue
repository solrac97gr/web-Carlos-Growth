<template>
  <div>
    <nuxt-link to="/contactarme"
      ><div class="btn-contact">
        <span>Empezar a crecer</span>
      </div></nuxt-link
    >
  </div>
</template>
<style scoped>
.btn-contact {
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
  .btn-contact {
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
}
</style>
