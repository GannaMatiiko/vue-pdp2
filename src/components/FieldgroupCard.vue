<template>
    FieldgroupCard
    {{ existingForms }}
    <div>Requested ID {{ requestedId }}</div>

    <h3>
        Title {{ title }}
        <input type="text" v-model="title">
    </h3>

    <div v-for="(input, i) in data" :key="i">
      {{ input }}
      <div>
        Field label
        <input type="text" name="label" :value="input.label" @change="editInputs($event, i)">
      </div>

      <div>
        Field name
        <input type="text" name="name" :value="input.name" @change="editInputs($event, i)">
      </div>

      <div>
        Field type
        <select name="type" :value="input.type" @change="editInputs($event, i)">
            <option disabled selected>Choose type</option>
            <option value="text">Text</option>
            <option value="textarea">Textarea</option>
            <option value="image">Image</option>
            <option value="wysiwyg">WYSIWYG</option>
            <option value="group">Group</option>
            <option value="repeater">Repeater</option>
        </select>
      </div>

      <div>
        Required?
        <input type="radio" value="yes" name="isRequired" :checked="input.isRequired === 'yes'" @change="editInputs($event, i)">
        <input type="radio" value="null" name="isRequired" :checked="input.isRequired === 'null'" @change="editInputs($event, i)">
      </div>

      <div>
        Default value
        <input type="text" name="default" :value="input.default" @change="editInputs($event, i)">
      </div>

      <div v-if="data[i].type === 'image'">
        Preview size
       <b> {{input.preview ? input.preview : ''}} </b>
          <select name="preview" :value="input.preview" @change="editInputs($event, i)">
            <option disabled selected>Choose image size</option>
            <option value="small">Small(150x150)</option>
            <option value="medium">Medium(300x300)</option>
            <option value="large">Large(450x450)</option>
        </select>
      </div>
      <hr>
    </div>
    <!-- <button @click="emitEdit">Save</button> -->
    <router-link to="/forms-list" @click="emitEdit">Save and return to list</router-link>
</template>

<script>
export default {
  props: ["existingForms"],
  data() {
    return {
      requestedId: this.$route.params.id,
      title: "",
      data: {},
    };
  },
  created() {
    let form = this.existingForms[this.requestedId];
    this.title = form.title;
    this.data = form.data;
  },

  methods: {
    updateIsRequired(e) {
      console.log(e.target.value);
    },
    editInputs(e, position) {
      console.log(e.target.name, e.target.value, position);
      this.data[position][e.target.name] = e.target.value;
      console.log(this.data);
    },
    emitEdit() {
      this.$emit('trigger-edit', this.requestedId, this.title, this.data);
      console.log('edit emitted');
    }
  }
};
</script>