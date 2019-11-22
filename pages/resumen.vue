<template>
  <div class="resumen-container">
    <div class="card-profile">
      <span class="name">Carlos García Rosales</span>
      <span class="profression">Growth Hacker</span>
      <img
        class="profile-foto"
        src="../assets/images/resumefoto.jpg"
        alt="Carlos Growth"
      />
      <ul class="profile-information">
        <li></li>
        <li>
          <p><span>Nombre:</span> Carlos García</p>
        </li>
        <li>
          <p><span>Nacimiento:</span> 13/04/1997</p>
        </li>
        <li>
          <p><span>Trabajo:</span> Head of Growth</p>
        </li>
        <li>
          <p><span>Email:</span> carlosgperu97@gmail.com</p>
        </li>
        <li>
          <p><span>Instagram:</span> carlosgrowth.online</p>
        </li>
      </ul>
      <a
        target="_blank"
        href="https://firebasestorage.googleapis.com/v0/b/portafolio-nuxt.appspot.com/o/Carlos%20Garci%CC%81a.pdf?alt=media&token=e24d603a-ef66-496e-a2d3-bdcd40bd536a"
        ><div class="btn-download">
          Descargar CV
        </div></a
      >
    </div>
    <div class="resumen">
      <div class="experience timeline">
        <div class="exp-title">
          <span>Experiencia</span>
        </div>
        <ul>
          <li class="expitem">
            <span class="exptitle">MANZANA VERDE,Head of Data</span>
            <span class="exptime">NOVIEMBRE DEL 2019-ACTUALIDAD, LIMA</span>
            <span class="expdesciption"
              >Actualización de algoritmos para mejora de procesos
              operacionales, chatbot cognitivo usando plataforma IBM Watson,
              implementación de algoritmos de Auto AI usando IBM Watson
              Studio.</span
            >
          </li>
          <li class="expitem">
            <span class="exptitle">MANZANA VERDE,Head of Growth</span>
            <span class="exptime">ABRIL DEL 2019-ACTUALIDAD, LIMA</span>
            <span class="expdesciption"
              >Presentar métricas e identificar datos relevantes para iterar de
              manera conveniente y ágil en nuestras reuniones de Scrum. Mostrar
              la data usando distintos sistemas de reportes AWS,Google Data
              Studio y Excel. Obtención de datos de distintas fuentes de
              información como Google Analytics, Base de datos MySql, AWS.
              Dirigir a todo el departamento de Marketing de la empresa.</span
            >
          </li>
          <li class="expitem">
            <span class="exptitle">MANZANA VERDE, Growth Hacker</span>
            <span class="exptime">DICIEMBRE DEL 2018-ACTUALIDAD,LIMA</span>
            <span class="expdesciption"
              >Tratamiento y limpieza de datos de base de datos MYSQL,Análisis
              usando Python, conexión con servicios de visualización de reportes
              AWS Quicksight y Google Data Studio.</span
            >
          </li>
          <li class="expitem">
            <span class="exptitle">SERVIC SRL, Help Desk Support</span>
            <span class="exptime">ENERO DEL 2016-MAYO DEL 2016,TALARA</span>
            <span class="expdesciption"
              >Me desempeñe dando soporte a las otras áreas de la empresa en
              temas tecnológicos, digitalización de data almacena de forma
              física, hacia una plataforma donde se manejan ahora esos
              informes.</span
            >
          </li>
        </ul>
      </div>
      <div class="education timeline">
        <div class="edu-title">
          <span>Educación </span>
        </div>
        <ul>
          <li class="eduitem university">
            <span class="edutitle">
              <b>UCV</b>
              , Ingeniero de Sistemas
            </span>
            <span class="edutime">ABRIL DEL 2017-ACTUALIDAD</span>
          </li>
          <li class="eduitem">
            <span class="edutitle">
              <b>IBM</b>
              , Introduction to Data Science
            </span>
          </li>
          <li class="eduitem">
            <span class="edutitle">
              <b>IBM</b>
              ,Python for Data Science
            </span>
          </li>
          <li class="eduitem">
            <span class="edutitle">
              <b>IBM</b>
              ,Data Analysis with Python
            </span>
          </li>
          <li class="eduitem">
            <span class="edutitle">
              <b>IBM</b>
              ,Data Visualization with Python
            </span>
          </li>
          <li class="eduitem">
            <span class="edutitle">
              <b>IBM</b>
              ,Data Science Methodology
            </span>
          </li>
          <li class="eduitem">
            <span class="edutitle">
              <b>IBM</b>
              ,Data Science Hands-On With Open Source Tools
            </span>
          </li>
          <li class="eduitem">
            <span class="edutitle">
              <b>IBM</b>
              ,SQL and Relational Databases
            </span>
          </li>
          <li class="eduitem">
            <span class="edutitle">
              <b>PLATZI</b>
              , Growth Marketing
            </span>
          </li>
          <li class="eduitem">
            <span class="edutitle">
              <b>PLATZI</b>
              ,Flutter
            </span>
          </li>
          <li class="eduitem">
            <span class="edutitle">
              <b>PLATZI</b>
              ,Git y Github profesional
            </span>
          </li>
          <li class="eduitem">
            <span class="edutitle">
              <b>PLATZI</b>
              ,Curso básico de python
            </span>
          </li>
          <li class="eduitem">
            <span class="edutitle">
              <b>PLATZI</b>
              ,Curso práctico de python
            </span>
          </li>
          <li class="eduitem">
            <span class="edutitle">
              <b>PLATZI</b>
              ,Fundamentos de IBM Cloud
            </span>
          </li>
          <li class="eduitem">
            <span class="edutitle">
              <b>GOOGLE ACTIVATE</b>
              ,Marketing Digital
            </span>
          </li>
          <li class="eduitem">
            <span class="edutitle">
              <b>HUBSPOT</b>
              ,Inbound Marketing
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
ul {
  margin: 0px !important;
}

.profile-foto {
  margin-left: -20px;
  margin-right: -20px;
  width: calc(100% + 40px);
  -webkit-clip-path: polygon(0 9%, 100% 0, 100% 94%, 0% 100%);
  clip-path: polygon(0 9%, 100% 0, 100% 94%, 0% 100%);
  z-index: -1;
}
.name {
  font-family: 'BigNoodleTitling', 'Staatliches', 'coursive';
  font-size: 25px;
  color: #001b32;
}
.profression {
  color: #821d25;
  font-size: 20px;
  font-family: 'BigNoodleTitling', 'Staatliches', 'coursive';
}
.resumen-container {
  margin-top: 150px;
  padding: 10px;
}
.card-profile {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.08);
  padding: 20px;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
}
.profile-information {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  line-height: 1.42857143;
  color: #333;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  background: transparent;
  list-style: none;
  margin: 0 auto 30px;
  display: table;
  justify-content: center;
  padding-top: 13px;
}
.profile-information li {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  line-height: 1.42857143;
  font-family: 'Roboto', sans-serif;
  list-style: none;
  box-sizing: border-box;
  margin: 0;
  border: 0;
  outline: 0;
  background: transparent;
  border-left: solid 2px #821d25;
  padding: 0 0 0px 20px;
  font-size: 14px;
  color: #787878;
}

.btn-download {
  color: white;
  background-image: linear-gradient(
    to left,
    #821d25,
    #6c153c,
    #491c47,
    #231f43,
    #001b32
  );
  bottom: 0;
  width: inherit;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
.expitem {
  display: flex;
  list-style: none;
  flex-direction: column;
  justify-content: flex-start;
  border-left: 3px solid #821d25;
  padding-bottom: 10.5px;
  padding-top: 10.5px;
  padding-left: 13px;
  padding-right: 13px;
}
.eduitem {
  list-style: none;
  padding-left: 13px;
  padding-right: 13px;
  padding-bottom: 6.5px;
  padding-top: 6.5px;
  border-left: 3px solid #821d25;
}
.resumen {
  border-radius: 10px;
  box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.08);
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
}
.edutime {
  font-size: 12px;
}
.exp-title {
  font-family: 'BigNoodleTitling', 'Staatliches', 'coursive';
  font-size: 25px;
  color: #001b32;
  display: flex;
  flex-direction: row;
  vertical-align: middle !important;
}
.expdesciption {
  color: #989898;
  font-weight: 400;
  line-height: 25px;
}
.exptitle {
  color: #001b32;
  font-weight: 700;
  font-family: 'BigNoodleTitling', 'Staatliches', 'coursive';
  font-size: 20px;
}
.edu-title {
  font-family: 'BigNoodleTitling', 'Staatliches', 'coursive';
  font-size: 25px;
  color: #001b32;
}
ul.profile-information li span {
  color: #000;
}
.exptime {
  font-size: 12px;
}
.university {
  display: flex;
  flex-direction: column;
}
.resumen ul {
  padding: 0px;
}
a {
  text-decoration: none;
}

@media (min-width: 600px) {
  .card-profile {
    width: 25%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.07);
    padding: 20px;
    align-items: flex-start;
    justify-content: center;
    align-items: center;
  }
  .resumen-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    margin-top: 70px;
  }

  .resumen {
    width: 70%;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.07);
    padding: 20px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .timeline {
    width: 50%;
  }
}
</style>
