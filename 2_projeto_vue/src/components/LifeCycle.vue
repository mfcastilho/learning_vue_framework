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
    this.lifeCycleMethod()
    
  },
  mounted(){
    
    setTimeout(()=>{
      this.name = "Frederico"
    }, 4000)

    this.lifeCycleMethod()
  
  },
  methods:{
    lifeCycleMethod(){
      console.log("Executou")
    }
  }
}
</script>
