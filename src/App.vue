<template>
  <the-header></the-header>
  <router-view
    :existingForms="forms"
    :uploadedPages="savedPages"
    @update-groupfields-list="getFormData"
    @init-deleting="deleteGroup"
    @trigger-edit="editGroup"
    @save-pages="updatePagesObject"
  ></router-view>
</template> 

<script>
import TheHeader from "./components/blocks/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader
  },
  data() {
    return {
      forms: {},
      savedPages: {}
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
    },
    updatePagesObject(pages) {
      this.savedPages = pages;
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
