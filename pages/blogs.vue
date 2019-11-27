<template>
  <div class="porfolio">
    <h2 class="principal">Últimos Posts</h2>
    <Loader v-if="complete" />
    <div v-if="loading" class="project-container">
      <div v-for="post in posts" :key="post.id" class="portfolio-card">
        <img :src="post.attachment_image.mv_sm" alt="" />
        <span class="title" v-html="post.title.rendered" />
        <span class="subtitle">{{ post.date }}</span>
        <span class="description" v-html="post.excerpt.rendered" />
        <a :href="post.link">
          <div class="btn-read">Ver más</div>
        </a>
      </div>
    </div>
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
      posts: [],
      loading: true,
      complete: true
    }
  },
  mounted() {
    this.fetchSomething()
    /*eslint-disable */
  },
  methods: {
    fetchSomething() {
      var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};
      this.$axios.$get(
        'https://carlosgrowth.com/blog/wp-json/wp/v2/posts?categories_exclude=16',
       
      ).then(
         (rest)=>{this.posts=rest
         this.loading=true
         this.complete=false
         }
      ).catch(()=>{
        this.loading=true
        this.complete=false
      })
     
      
    }
  }
}
</script>
<style lang="css" scoped>
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
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.08);
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