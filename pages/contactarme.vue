<template>
  <div class="form-container">
    <h1 class="title">Comiénza tu estrategia de Growth.</h1>
    <form id="formID" action="submit" @submit.prevent="sendlead">
      <div v-if="showform" class="formgroup">
        <span class="form-text">Ingresa tu email:</span>
        <input v-model="email" type="email" required />
      </div>
      <div v-if="showform" class="formgroup">
        <span class="form-text">Ingresa tu nombre:</span>
        <input v-model="name" type="text" />
      </div>
      <button
        v-if="showform"
        class="send-btn-desktop"
        type="submit"
        form="formID"
      >
        Contáctame
      </button>
    </form>
    <div v-if="sending" class="succes">Te contactaré pronto</div>
    <Loader v-if="loader" />
    <button v-if="!sending" class="send-btn-mobile" type="submit" form="formID">
      Contáctame
    </button>
  </div>
</template>
<script>
import Loader from '../components/loader.vue'
export default {
  components: {
    Loader
  },
  data() {
    return {
      email: '',
      name: '',
      sending: false,
      loader: false,
      showform: true
    }
  },

  methods: {
    sendlead() {
      const url =
        'https://api.carlosgrowth.com/create/' + this.name + '/' + this.email
      this.loader = true
      this.showform = false
      this.$axios
        .$get(url)
        .then(() => {
          this.sending = true
          this.loader = false
        })
        .catch(() => {
          this.sending = true
          this.loader = false
        })
      const trelloUrl =
        'https://api.trello.com/1/cards?name=' +
        this.name +
        '&desc=' +
        this.email +
        '&idList=5ddedfe256df25175b99733d&keepFromSource&key=34ba1f109d32b1fd3f1aa298db40c88f&token=627f790da80c6e28060a509de0d2281f21d2cb500c8848f53e72ad386e42c5eb'

      this.$axios.$post(trelloUrl)
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
.succes {
  font-family: 'BigNoodleTitling', 'Staatliches', 'coursive';
  font-size: 20px;
  color: #821d25;
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
  font-family: Helvetica, sans-serif;
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
