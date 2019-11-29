<template>
  <div class="container-wizzard">
    <span v-if="loader" class="loaderText">Generando Persona...</span>
    <Loader v-if="loader" />
    <div v-if="showform" class="auxiliar">
      <nuxt-link class="salir" to="/">X</nuxt-link>
      <form-wizard
        title="Crea tu persona"
        subtitle=""
        back-button-text="Atras"
        next-button-text="Siguiente"
        finish-button-text="Descargar"
        validate-on-back
        step-size="xs"
        color="#821d25"
        @on-complete="onComplete"
      >
        <tab-content title="Personífica">
          <div class="tab_content">
            <span class="directive">Crea el nombre para tu persona</span>
            <input
              v-model="persona.name"
              placeholder="Ejemplo:Carlos Marketing|Nombre Industria"
              type="text"
              required
            />
            <span class="directive">¿Cuántos años tiene?</span>

            <select v-model="persona.edad" name="Edad" required>
              <option value="" selected>Seleccionar</option>
              <option value="menos de 18">menos de 18</option>
              <option value="entre 18 y 24">entre 18 y 24</option>
              <option value="entre 25 y 34">entre 25 y 34</option>
              <option value="entre 35 y 44">entre 35 y 44</option>
              <option value="entre 45 y 54">entre 45 y 54</option>
              <option value="entre 55 y 64">entre 55 y 64</option>
              <option value="65 años o más">65 años o más</option>
            </select>
            <span class="directive">Ingresa el máximo grado de estudios</span>
            <select v-model="persona.estudios" name="estudios" required>
              <option value="" selected>Seleccionar</option>
              <option value="primaria incompleta">primaria incompleta</option>
              <option value="primaria">primaria</option>
              <option value="entre 25 y 34">secuandaria incompleta</option>
              <option value="entre 35 y 44">secuandaria</option>
              <option value="entre 45 y 54">universitaria incompleta</option>
              <option value="entre 55 y 64">universitarios</option>
              <option value="65 años o más">maestria</option>
              <option value="65 años o más">doctorado</option>
            </select>
            <span class="directive">Redes que usa:</span>
            <input
              v-model="persona.redes"
              placeholder="Ejemplo:Facebook,Instagram"
              type="text"
              required
            />
            <span class="directive">Se comunica usando:</span>
            <input
              v-model="persona.secomunica"
              placeholder="Ejemplo:Llamadas,Correos o Rede"
              type="text"
              required
            />
          </div>
        </tab-content>
        <tab-content title="Profesional">
          <div class="tab_content">
            <span class="directive">¿Cuál es su indrustria?</span>
            <input
              v-model="persona.industria"
              placeholder="Ejemplo:Marketing"
              type="text"
              required
            />
            <span class="directive">¿Con cuántas personas trabaja?</span>
            <input
              v-model="persona.nempleados"
              placeholder="Ejemplo:2"
              type="text"
              required
            />
            <span class="directive">¿Cuál es su puesto?</span>
            <input
              v-model="persona.puesto"
              placeholder="Ejemplo:CEO"
              type="text"
              required
            />
            <span class="directive">¿Cómo se miden sus resultados?</span>
            <input
              v-model="persona.metrica"
              placeholder="Ejemplo:ventas generados"
              type="text"
              required
            />
            <span class="directive">¿Quíen es su superior?</span>
            <input
              v-model="persona.jefe"
              placeholder="Ejemplo:Gerente general"
              type="text"
              required
            />
          </div>
        </tab-content>
        <tab-content title="Conócelo">
          <div class="tab_content">
            <span class="directive">¿Dónde se capacíta?</span>
            <input
              v-model="persona.aprendeen"
              placeholder="Ejemplo:En linea,Presencial,etc"
              type="text"
              required
            />
            <span class="directive">¿Cuáles son sus responsabilidades</span>
            <input
              v-model="persona.responsabilidades"
              placeholder="Ejemplo:Crear contenido,Desarrollar,etc"
              type="text"
              required
            />
            <span class="directive">¿Qué herramientas usa?</span>
            <input
              v-model="persona.herramientas"
              placeholder="Ejemplo:Office,Analytics,etc"
              type="text"
              required
            />
            <span class="directive">¿Cuáles son sus metas y objetivos?</span>
            <input
              v-model="persona.objetivos"
              placeholder="Ejemplo:Leads,Ingresos,etc"
              type="text"
              required
            />

            <span class="directive">¿Cuáles son sus mayores desafíos?</span>
            <input
              v-model="persona.debilidades"
              placeholder="Ejemplo:Recursos,Desarrollo profesional,etc"
              type="text"
              required
            />
          </div>
        </tab-content>
        <tab-content title="Descargarlo">
          <div class="tab_content">
            <span class="directive">Ingresa tu email:</span>
            <input v-model="email" type="email" required />
            <span class="directive">Ingresa tu nombre:</span>
            <input v-model="nombre" type="text" />
          </div>
        </tab-content>
      </form-wizard>
    </div>
  </div>
</template>
<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import Loader from '~/components/loader'
export default {
  layout: 'tools',
  components: {
    FormWizard,
    TabContent,
    Loader
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            'Crea al cliente ideal para tu negocio en solo 4 sencillos pasos'
        }
      ]
    }
  },
  data() {
    return {
      title: 'Generador Buyer Persona 🥇',
      leadUrl: '',
      personUrl: '',
      nombre: '',
      email: '',
      persona: {
        id: '',
        name: '',
        edad: '',
        estudios: '',
        redes: '',
        industria: '',
        nempleados: '',
        secomunica: '',
        responsabilidades: '',
        jefe: '',
        aprendeen: '',
        herramientas: '',
        metrica: '',
        objetivos: '',
        debilidades: ''
      },
      config: {
        headers: { 'Access-Control-Allow-Origin': '*' }
      },
      loader: false,
      showform: true
    }
  },
  methods: {
    onComplete() {
      this.loader = true
      this.showform = false

      this.generate().then(() => this.redirect())
    },
    async generatePerson() {
      this.persona.id = Math.floor(Math.random() * 16777215).toString(16)
      this.personUrl =
        'https://api.carlosgrowth.com/buyer/' +
        this.persona.id +
        '/' +
        this.persona.name +
        '/' +
        this.persona.edad +
        '/' +
        this.persona.estudios +
        '/' +
        this.persona.redes +
        '/' +
        this.persona.industria +
        '/' +
        this.persona.nempleados +
        '/' +
        this.persona.secomunica +
        '/' +
        this.persona.responsabilidades +
        '/' +
        this.persona.jefe +
        '/' +
        this.persona.aprendeen +
        '/' +
        this.persona.herramientas +
        '/' +
        this.persona.metrica +
        '/' +
        this.persona.objetivos +
        '/' +
        this.persona.debilidades
      await this.$axios.$get(this.personUrl)
    },
    async generateLead() {
      this.leadUrl =
        'https://api.carlosgrowth.com/create/' + this.nombre + '/' + this.email
      await this.$axios.$get(this.leadUrl)
      const trelloUrl =
        'https://api.trello.com/1/cards?name=' +
        this.nombre +
        '&desc=' +
        this.email +
        '&idList=5ddedfe256df25175b99733d&keepFromSource&key=34ba1f109d32b1fd3f1aa298db40c88f&token=627f790da80c6e28060a509de0d2281f21d2cb500c8848f53e72ad386e42c5eb'

      await this.$axios.$post(trelloUrl)
    },
    async generate() {
      await this.generatePerson()
      await this.generateLead()
    },
    redirect() {
      const ebookUrl =
        'https://api.carlosgrowth.com/static/buyer_' + this.persona.id + '.pdf'
      // window.location.replace(ebookUrl, '_blank')
      this.$router.push('/herramientas')

      const a = document.createElement('a')
      a.target = '_blank'
      a.href = ebookUrl
      a.click()
    }
  }
}
</script>
<style lang="css" scoped>
.container-wizzard {
  width: 100%;
  margin-top: 0px;
  text-align: right;
}
.tab_content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
}
.vue-form-wizard .wizard-tab-content {
  padding: 0px !important;
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
.directive {
  margin: 10px;
  font-size: 18px;
}
select {
  border: 2px solid #821d25;
  width: 100%;
  padding: 8px;
}
.salir {
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
}
.loaderText {
  font-family: 'BigNoodleTitling', 'Staatliches', 'coursive';
  font-size: 30px;
  color: #001b32;
  padding-left: 20%;
  padding-right: 20%;
}
@media (min-width: 600px) {
  .container-wizzard {
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .auxiliar {
    justify-content: center;
    width: 50%;
    border: 1px solid black;
    border-radius: 20px;
    margin: auto;
    margin-top: 5%;
  }
}
</style>
