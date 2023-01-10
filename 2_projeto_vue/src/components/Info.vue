<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de novas oportunidades!</p>
    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
      <li>JavaScript</li>
      <li>Java</li>
      <li>Python</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>MySQL</li>
    </ul>
    <p v-show="mostrar_email">Mande uma mensagem para: {{email}}</p>
    <Picture />
  </div>
</template>

<script>

import Picture from "../components/Picture.vue"


export default{
  name: "Info",
  components: {
    Picture
  },
  data(){
    return{
      esta_trabalhando: true,
      mostrar_email: true,
      email: "frederico@mail.com"
    }
  }
}

</script>
