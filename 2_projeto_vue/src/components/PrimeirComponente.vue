<template>
<div>
  <h1>Hello Vue!</h1>
  <p>Meu nome é {{ name }}, e trabalho como {{ profession }}</p>
</div>
  
</template>

<script>
  export default {
    name: 'PrimeiroComponente',
    data(){
      return {
        name: "Frederico",
        profession: "Programador"
      }
    }
  }
</script>
