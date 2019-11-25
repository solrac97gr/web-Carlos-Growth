<template>
  <div class="form-container">
    <h2 class="title">Comiénza tu estrategia de Growth.</h2>
    <form id="formID" action="submit" @submit.prevent="sendlead">
      <div class="formgroup">
        <span class="form-text">Ingresa tu email:</span>
        <input v-model="email" type="email" required />
      </div>
      <div class="formgroup">
        <span class="form-text">Ingresa tu nombre:</span>
        <input v-model="name" type="text" />
      </div>
      <button class="send-btn-desktop" type="submit" form="formID">
        Contáctame
      </button>
    </form>
    <button class="send-btn-mobile" type="submit" form="formID">
      Contáctame
    </button>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      name: ''
    }
  },

  methods: {
    sendlead() {
      const url =
        'http://api.carlosgrowth.online/create/' + this.name + '/' + this.email

      this.$axios.$get(url)
    }
  }
}
</script>
<style lang="css" scoped>
.title {
  font-family: 'BigNoodleTitling', 'Staatliches', 'coursive';
  font-size: 30px;
  color: #001b32;
}
.form-container {
  margin-top: 130px;
  padding: 30px;
}
.formgroup {
  margin: 10px 0px 10px 0px;
}
input {
  border: 2px solid #821d25;
  border-radius: 20px;
  width: 100%;
  padding: 8px;
}
input:focus {
  outline: none;
  border: 3px solid #821d25;
  border-radius: 20px;
  box-shadow: 0px 1px 5px 0px rgba(130, 29, 37, 0.7);
}
.send-btn-mobile {
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
.form-text {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 21px;
  color: #989898;
}
.send-btn-desktop {
  display: none;
}
@media (min-width: 600px) {
  .form-container {
    width: 100%;
    text-align: center;

    justify-content: center;
  }
  .send-btn-mobile {
    display: none;
  }
  form {
    text-align: center;
    justify-content: center;
    width: 50%;
    border: 1px solid black;
    padding: 20px;
    border-radius: 20px;
    margin: auto;
  }
  .send-btn-desktop {
    display: block;
    background-color: #821d25;
    color: white;
    font-size: 28px;
    padding: 10px;
    font-weight: 400;
    border-radius: 20px;
    font-family: 'BigNoodleTitling', 'Staatliches', 'coursive';
    margin: auto;
  }
}
</style>
