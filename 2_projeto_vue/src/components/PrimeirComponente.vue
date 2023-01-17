<template>
<div>
  <h1>Hello Vue!</h1>
  <p>Meu nome é {{ name }}, e trabalho como {{ profession }}</p>
  <MultiplosEventos />
  <Reutilizacao />
</div>
  
</template>

<script>
  import MultiplosEventos from "./MultiplesEvents.vue";
  import Reutilizacao from "./Reutilizacao.vue";


  export default {
    name: 'PrimeiroComponente',
    components: {
      MultiplosEventos,
      Reutilizacao
    },
    data(){
      return {
        name: "Frederico",
        profession: "Programador"
      }
    }
  }
</script>
