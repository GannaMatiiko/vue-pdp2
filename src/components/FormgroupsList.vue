<template>
    <button @click="addForm">Go to form</button>

  <div v-for="form in existingForms" :key="form.title">
    <div @click="showInputs(form)" class="list-element">
        {{ form.title }} ({{ form.data.length }})
    </div>
    {{form}}
    <hr>
  </div>
</template>

<script>
export default {
  props: ["existingForms"],
  methods: {
    showInputs(formData) {
      console.log(formData);
    },
    addForm() {
        this.$parent.changeComponent('add-form-group');
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