<template>
  <div>
    <img v-bind:src="avatar" v-bind:alt="description" />
    <MudarImagem @mudar-imagem="trocarImagem" />
  </div>
</template>

<script>
import MudarImagem from "./MudarImagem.vue";

export default {
  name: "Picture",
  components: {
    MudarImagem,
  },
  data() {
    return {
      avatar: "/img/avatar.png",
      description: "Mario Frederico",
    };
  },
  methods: {
    trocarImagem() {
      this.avatar = "./img/avatar2.png";
    },
  },
};
</script>
