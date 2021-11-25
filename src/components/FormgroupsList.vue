<template>
  <router-link to="/add-form-group">Add group field</router-link>

  <div v-if="existingForms">
    Существующие группы {{existingForms}}
    <div v-for="(form, index) in existingForms" :key="index">
      <!-- <div @click="showInputs(form)" class="list-element">{{ form.title }} ({{ form.data.length }})</div>
      {{form}}
      <hr /> -->
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
      console.log(index);
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