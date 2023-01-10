<template>
  <div>
    <h2>Meu formulário: </h2>
    <form action="">
    <div>
      <InputText />
    </div>
    

    <div>
      <InputText />
    </div>
    

    <div>
      <InputSubmit />
    </div>
    
  </form>
  </div>
  
</template>

<script>
  import InputText from "./form/InputText.vue";
  import InputSubmit from "./form/InputSubmit.vue";


  export default{
    name: "Form",
    components: {
      InputText,
      InputSubmit
    }
  }
</script>
