<template>
<div>
  <h1>Hello Vue!</h1>
  <p>Meu nome é {{ name }}, e trabalho como {{ profession }}</p>
  <MultiplosEventos />
</div>
  
</template>

<script>
  import MultiplosEventos from "./MultiplesEvents.vue"


  export default {
    name: 'PrimeiroComponente',
    components: {
      MultiplosEventos
    },
    data(){
      return {
        name: "Frederico",
        profession: "Programador"
      }
    }
  }
</script>
