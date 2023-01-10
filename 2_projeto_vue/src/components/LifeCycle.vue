<template>
  <h1>Meu nome é: {{name}} </h1>
</template>

<script>


export default{
  name: "LifeCycle",
  data(){
    return{
      name: "Ainda não sei"
    }
  },
  created(){

    setTimeout(()=>{
      this.name = "Mario"
    }, 2000)
    
  },
  mounted(){
    
    setTimeout(()=>{
      this.name = "Frederico"
    }, 4000)
    
  }
}
</script>
