<template>
    FieldgroupCard
    {{ existingForms }}
    <div>Requested ID {{ requestedId }}</div>
    <h3>
        Title {{ title }}
        <!-- {{ getFormData }} -->
    </h3>
    <div v-for="input in data" :key="input">
      {{ input }}
      <!-- <div v-if="input.type === 'text'">
        <Text :inputsData="input"></Text>
      </div>
      <div v-if="input.type === 'textarea'">
        <Textarea :inputsData="input"></Textarea>
      </div>
      <div v-if="input.type === 'image'">
        <Image :inputsData="input"></Image>
      </div> -->
      <div>
        Field label
        <input type="text" :value="input.label">
      </div>

      <div>
        Field name
        <input type="text" :value="input.name">
      </div>

      <div>
        Field type
        <select name="type" :value="input.type">
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
        <input type="radio" value="yes" :checked="input.isRequired === 'yes'" @change="updateIsRequired($event)">
        <input type="radio" value="null" :checked="input.isRequired === 'null'" @change="updateIsRequired($event)">
      </div>

      <div>
        Default value
        <input type="text" :value="input.default">
      </div>

      <div v-if="input.preview">
        Preview size
          <select name="preview" :value="input.preview">
            <option disabled selected>Choose image size</option>
            <option value="small">Small(150x150)</option>
            <option value="medium">Small(300x300)</option>
            <option value="large">Small(450x450)</option>
        </select>
      </div>

      <button>Save</button>
    </div>
</template>

<script>
// import Text from './inputs/Text.vue';
// import Textarea from './inputs/Textarea.vue';
// import Image from './inputs/Image.vue';
export default {
  props: ["existingForms"],
  components: {
      // Text,
      // Textarea,
      // Image
  },
  data() {
    return {
      requestedId: this.$route.params.id,
      title: "",
      data: {},
      // inputType: "",
    };
  },
  created() {
    let form = this.existingForms[this.requestedId];
    this.title = form.title;
    this.data = form.data;
    // this.inputType = this.data[0].type;
  },
  methods: {
    updateIsRequired(e) {
      console.log(e.target.value);
    }
  }
};
</script>