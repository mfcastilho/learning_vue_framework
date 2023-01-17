<template>
  <div>
    <p>{{compEmail}}</p>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de novas oportunidades!</p>
    <p>Utilizo as seguintes tecnologias para back-end:</p>
    <ul>
      <li v-for="(technology, index) in backend_technologies" v-bind:key="index">{{technology}}</li>
    </ul>
    <p>Utilizo as seguintes tecnologias para Front-end:</p>
    <ul>
      <li v-for="(technology) in frontend_technologies" v-bind:key="technology.id">{{technology.language}}</li>
    </ul>
    <div>
      <button @click="showEmail">{{ button_text }}</button>
    </div>
    <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
    <p class="teste">
      Para acessar mewu portifólio ,
      <a v-bind:href="meu_link" target="_blank">basta acessar aqui</a>
    </p>
    <Picture />
  </div>
</template>

<script>
import Picture from "../components/Picture.vue";

export default {
  name: "Info",
  components: {
    Picture
  },
  props:{
    email: String,
    esta_trabalhando: Boolean
  },
  data() {
    return {
      mostrar_email: false,
      meu_link: "https://mfcastilho.github.io/challenge3-portifolio/",
      button_text: "Mostrar e-mail",
      backend_technologies: ["Nodejs", "PHP", "Java", "Python"],
      frontend_technologies: [
        {
          id: 1,
          language: "Javascript"
        },
        {
          id: 2,
          language: "HTML"
        },
        {
          id: 3,
          language: "CSS"
        }
      ]
    };
  },
  methods: {
    showEmail() {
      this.mostrar_email = !this.mostrar_email;
      if (!this.mostrar_email) {
        this.button_text = "Mostrar e-mail";
      } else {
        this.button_text = "Ocultar e-mail";
      }
    },
  },
};
</script>

<style>
  .paragrafo-pai{
    color: red;
  }
</style>
