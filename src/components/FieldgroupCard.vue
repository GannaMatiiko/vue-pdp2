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
      <div v-if="input.type === 'text'">
        <Text :inputsData="input"></Text>
      </div>
      <div v-if="input.type === 'textarea'">
        <Textarea :inputsData="input"></Textarea>
      </div>
      <div v-if="input.type === 'image'">
        <Image :inputsData="input"></Image>
      </div>
    </div>
    <!-- <div v-if="inputType === 'text'">
      <Text :inputsData="data"></Text>
    </div>
    <div v-if="inputType === 'textarea'">
        <Textarea></Textarea>
    </div> -->
</template>

<script>
import Text from './inputs/Text.vue';
import Textarea from './inputs/Textarea.vue';
import Image from './inputs/Image.vue';
export default {
  props: ["existingForms"],
  components: {
      Text,
      Textarea,
      Image
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
};
</script>