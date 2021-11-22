<template>
  <the-header></the-header>
  <router-view></router-view>
  <!-- <component :is="currentComponent" :existingForms="forms"></component> -->
</template> 

<script>
import TheHeader from "./components/blocks/TheHeader.vue"
// import AddFormGroup from "./components/AddFormGroup.vue";
// import FormgroupsList from "./components/FormgroupsList.vue";

export default {
  name: "App",
  components: {
    TheHeader
    // AddFormGroup,
    // FormgroupsList
  },
  data() {
    return {
      currentComponent: "add-form-group",
      forms: []
    };
  },
  methods: {
    changeComponent(component, payload) {
      this.currentComponent = component;

      if (payload) {
        this.forms.push(payload);
      }
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
