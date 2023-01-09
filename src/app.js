const MyNameApp = {
  data(){
    return{
      name:"",
      lastName:"Battist",
      age: 39,
      input_name: ""
    }
  },

  methods: {
    submitForm(event){
      event.preventDefault();

      console.log(this.input_name);

      this.name = this.input_name;
    }
  }
}

Vue.createApp(MyNameApp).mount("#app");