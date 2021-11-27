<template>
  <the-header></the-header>
  <router-view @update-groupfields-list="getFormData" :existingForms="forms" @init-deleting="deleteGroup" @trigger-edit="editGroup"></router-view>
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
      this.forms[id] = payload;
    },
    deleteGroup(index) {
      delete this.forms[index];
    },
    editGroup(index, title) {
      this.forms[index].title = title;
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
