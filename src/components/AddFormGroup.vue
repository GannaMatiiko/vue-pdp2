<template>
  <div>
    <input type="text" placeholder="Enter title for form group" v-model="title" />
  </div>
  <div>{{title}}</div>

  <button @click="addFormGroup">Add Form Group</button>

  <div v-for="(form, i) in formGroups" :key="i">
    <form-group @content-changed="updateFormgroupContent" :index="i"></form-group>
    <hr />
  </div>

  <router-link to="/forms-list" v-if="formGroups.length" @click="saveFormData">Save and go to list</router-link>
</template>

<script>
import FormGroup from "./FormGroup";
export default {
  components: {
    FormGroup
  },
  data() {
    return {
      title: "",
      formGroups: [],
    };
  },
  methods: {
    addFormGroup() {
      this.formGroups.push({});
    },
    updateFormgroupContent(inputsData, index) {
      this.formGroups[index] = inputsData;
    },
    saveFormData() {
      let randomId = Math.floor(Date.now() * Math.random());
      const formData = {
        title: this.title,
        data: this.formGroups
      }
      this.$emit('update-groupfields-list', formData, randomId);
    },
  }
};
</script>