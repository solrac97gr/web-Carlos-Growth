<template>
  <div class="porfolio">
    <h1 class="principal">Herramientas Growth</h1>

    <div class="project-container">
      <div v-for="tool in tools" :key="tool.id" class="portfolio-card">
        <img src="../../assets/images/buyer-generator.jpeg" alt="" />
        <span class="title" v-html="tool.title" />
        <span class="subtitle">{{ tool.date }}</span>
        <span class="description"
          >{{ tool.excerpt
          }}<span class="cta">{{ tool.calltoaction }}</span></span
        >
        <nuxt-link :to="tool.link">
          <div class="btn-read">Ir a la herramienta</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            'Las mejores herramientas de growth hacking para tu startup te las vas a perder entra y comienza a crecer ya!'
        }
      ]
    }
  },
  data() {
    return {
      title: 'Herramientas de Growth Hacking 🥇',
      tools: [
        {
          id: '1',
          title: 'Buyer Persona Generator',
          date: '30-09-2019',
          excerpt:
            'Es muy importante conocer al cliente por el cual trabajas, una de las mejores formas de hacerlo es personificarlo para tener presente para quien es que trabajamos.',
          calltoaction: 'Descubre tu comprador ideal',
          link: '/herramientas/buyer-generator',
          image: '../../assets/images/buyer-generator.jpeg'
        }
      ],

      complete: true
    }
  },
  mounted() {
    /*eslint-disable */
    setTimeout(()=>{ this.complete=false; },2000)
  },
  methods: {
    
  }
}
</script>
<style lang="css" scoped>
.cta{
    font-weight: bold;
    font-size: 15px
}
img {
  height: 150px;
  margin: -20px -20px 10px -20px;

  border-radius: 10px 10px 0 0;
}
.principal {
  font-family: 'BigNoodleTitling';
  margin-left: 20px;
  margin-top: 0px;
}
.porfolio {
  margin-top: 80px;
  padding: 0px 30px 30px 30px;
  width: 100%;
}
.project-container {
  width: calc(200px * 4+30+6.5);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.project-container > * {
  flex: 1 1 220px 220px; /*Valor minimo primero y luego valor maximo de los elementos */
}
.title {
  font-size: 18px;
  font-family: 'BigNoodleTitling';
  color: #001b32;
}
.subtitle {
  font-size: 13px;
  font-family: 'BigNoodleTitling';
  color: #821d25;
  padding: 0;
}
.description {
  font-size: 13px;
  color: #989898;
  font-weight: 400;
  font-family: Helvetica, sans-serif;
}
.portfolio-card {
  width: 300px;
 
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  margin-left: 6.5px;
  margin-right: 6.5px;
  margin-top: 13px;
  transition: box-shadow 0.3s ease-in-out;
}

.portfolio-card:hover {
  box-shadow: 0px 2px 12px 0px rgba(130, 29, 37, 0.7);
  border: 1px solid #821d25;
  opacity: 1;
}
.btn-read {
  font-size: 13px;
  padding: 5px;
  border-radius: 20px;
  background-color: #821d25;
  box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.08);
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  color: white;
  transition: background 0.5s ease-in-out;
}
.btn-read:hover {
  background-color: #bd1623;
  box-shadow: 0px 2px 3px 0px rgba(189, 22, 35, 0.7);
  transition-delay: 0s;
}
a {
  text-decoration: none;
}
@media (max-width: 600px) {
  .porfolio {
    padding: 10px;
    margin: auto;
    margin-top: 140px;
    text-align: center;
  }
  img {
    height: 165px;
  }
  .project-container {
    width: 100%;
  }
  .portfolio-card {
    margin-left: 0px;
    margin-right: 0px;
  }
  .principal {
    display: none;
  }
  .portfolio-card:hover {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.08);
    border: none;
    opacity: 1;
  }
}
</style>
