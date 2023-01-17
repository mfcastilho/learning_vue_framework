<template>
  <div>
    <img v-bind:src="avatar" v-bind:alt="description" />
    <Reutilizacao />
  </div>
</template>

<script>

import Reutilizacao from "./Reutilizacao"


export default {
  name: "Picture",
  components:{
    Reutilizacao
  },
  data() {
    return {
      avatar: "/img/avatar.png",
      description: "Mario Frederico",
    };
  },
};
</script>
