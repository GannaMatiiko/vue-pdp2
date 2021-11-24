<template>
  <the-header></the-header>
  <router-view @update-groupfields-list="getFormData" :existingForms="forms"></router-view>
</template> 

<script>
import TheHeader from "./components/blocks/TheHeader.vue"

export default {
  name: "App",
  components: {
    TheHeader
  },
  data() {
    return {
      forms: {}
    };
  },
  methods: {
    getFormData(payload, id) {
      console.log('we get data in app comp', payload);
      // this.forms.push(payload);
      this.forms[id] = payload;
      console.log(this.forms, 'HHHHHHHHHHHH')
    }
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
