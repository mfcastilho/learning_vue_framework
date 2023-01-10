<template>
  <img v-bind:src="avatar" v-bind:alt="description" />
</template>

<script>
export default {
  name: "Picture",
  data() {
    return {
      avatar: "/img/avatar.png",
      description: "Mario Frederico",
    };
  },
};
</script>
