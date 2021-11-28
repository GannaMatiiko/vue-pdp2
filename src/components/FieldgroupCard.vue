<template>
  FieldgroupCard
  {{ existingForms }}
  <div>Requested ID {{ requestedId }}</div>

  <h3>
    Title {{ title }}
    <input type="text" v-model="title" />
  </h3>

  <div v-for="(input, i) in data" :key="i">
    {{ input }}
    <div>
      Field label
      <input
        type="text"
        name="label"
        :value="input.label"
        @change="editInputs($event, i)"
      />
    </div>

    <div>
      Field name
      <input type="text" name="name" :value="input.name" @change="editInputs($event, i)" />
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
      <input
        type="radio"
        value="yes"
        :name="`isRequired-${i}`"
        :checked="input.isRequired === 'yes'"
        @change="editInputs($event, i, 'isRequired')"
      />
      <input
        type="radio"
        value="null"
        :name="`isRequired-${i}`"
        :checked="input.isRequired === 'null'"
        @change="editInputs($event, i, 'isRequired')"
      />
    </div>

    <div>
      Default value
      <input
        type="text"
        name="default"
        :value="input.default"
        @change="editInputs($event, i)"
      />
    </div>

    <div v-if="data[i].type === 'image'">
      Preview size
      <b>{{input.preview ? input.preview : ''}}</b>
      <select name="preview" :value="input.preview" @change="editInputs($event, i)">
        <option disabled selected>Choose image size</option>
        <option value="small">Small(150x150)</option>
        <option value="medium">Medium(300x300)</option>
        <option value="large">Large(450x450)</option>
      </select>
    </div>
    <hr />
  </div>
  <router-link to="/forms-list" @click="emitEdit">Save and return to list</router-link>

  <div>
    <h5>Show conditions -- select page(s) where you want to display this form group</h5>
  </div>
  <div v-for="(page, index) in createdPages" :key="page.index">{{index}}</div>
  <Multiselect
    v-model="chosenPages"
    mode="tags"
    placeholder="Choose one or more pages"
    :closeOnSelect="false"
    :createTag="true"
    :options="options"
  />
</template>

<script>
import Multiselect from "@vueform/multiselect";
export default {
  components: {
    Multiselect
  },
  props: ["existingForms", "createdPages"],
  data() {
    return {
      requestedId: this.$route.params.id,
      title: "",
      data: {},
      chosenPages: [],
      options: [
        { value: "batman", label: "111" },
        { value: "robin", label: "222" },
        { value: "joker", label: "333" }
      ]
    };
  },
  created() {
    let form = this.existingForms[this.requestedId];
    this.title = form.title;
    this.data = form.data;
  },

  methods: {
    editInputs(e, position, inputName) {
      if (e.target.type !== "image") {
        delete this.data[position].preview;
      }
      let name = inputName || e.target.name;
      this.data[position][name] = e.target.value;
    },
    emitEdit() {
      this.$emit("trigger-edit", this.requestedId, this.title);
      console.log("edit emitted");
    }
  }
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>