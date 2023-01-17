<template>
  <div>
    <h2>Esta é a descrição da pessoa: {{ name }}</h2>
    <Info v-bind:email="email" v-bind:esta_trabalhando=false />
    <Form />
    <Reutilizacao/>
  </div>
</template>

<script>
import Info from "./Info.vue";
import Form from "./Form.vue";
import Reutilizacao from "./Reutilizacao.vue"

export default {
  name: "Pessoa",
  components: {
    Info,
    Form,
    Reutilizacao
  },
  data() {
    return {
      name: "Amanda",
      email: "amanda@mail.com"
    };
  },
};
</script>
