<template>
  <router-link to="/add-form-group">Add group field</router-link>

  <div v-if="existingForms">
    <div v-for="form in existingForms" :key="form.title">
      <div @click="showInputs(form)" class="list-element">{{ form.title }} ({{ form.data.length }})</div>
      {{form}}
      <hr />
    </div>
  </div>

  <div v-else>You haven't add any group fields yet</div>
</template>

<script>
export default {
  props: ["existingForms"],
  methods: {
    showInputs(formData) {
      console.log(formData);
    },
  }
};
</script>

<style scoped>
.list-element {
  cursor: pointer;
}
.list-element:hover {
  color: rgb(42, 119, 192);
}
</style>