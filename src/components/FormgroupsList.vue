<template>
  <router-link to="/add-form-group">Add group field</router-link>

  <div v-if="existingForms && Object.keys(existingForms).length > 0">
    Существующие группы {{existingForms}}
    <div style="height: 50px;"></div>

    <div v-for="(form, index) in existingForms" :key="index">
      <router-link :to="`/fieldgroup-card/${index}`">{{form.title}} ({{ form.data.length }}) {{index}} </router-link>
      <button @click="deleteGroup(index)">Delete</button>
      {{ form }}
      <hr>
    </div>
  </div>

  <div v-else>You haven't add any group fields yet </div>
</template>

<script>
export default {
  props: ["existingForms"],
  methods: {
    deleteGroup(index) {
      this.$emit('init-deleting', index);
    }
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