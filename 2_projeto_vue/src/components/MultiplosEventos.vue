<template>
  <div>
    <button @click="primeiro($event), segundo('Segundo evento!',$event), terceiro('Terceiro evento!', $event),quarto('',$event)">Ativar múltiplos eventos</button>
    <p>{{multiplos_eventos}}</p>
  </div>
</template>

<script>

export default {
  name:"MultiplosEventos",
  data(){
    return{
      multiplos_eventos: ""
    }
  },
  methods:{
    primeiro(e){
      // e.preventDefault()
      this.multiplos_eventos = "Primeiro evento ativado!"
    },
    segundo(txt,e){
      setTimeout(()=>{
        this.multiplos_eventos = txt
      }, 1000)
    },
    terceiro(txt, e){
      setTimeout(()=>{
        this.multiplos_eventos = txt
      }, 2000)
    },
    quarto(txt, e){
      setTimeout(()=>{
        this.multiplos_eventos = txt
      },3000)
    }
  }

}
</script>

<style scoped>
  div{
    margin: 100px;
  }
</style>