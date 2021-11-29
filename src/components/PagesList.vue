<template>
  Pages List
  <div v-if="uploadedPages && Object.keys(uploadedPages).length !== 0">
      изменения пришли с родителя
      <div v-for="(page, index) in uploadedPages" :key="page.index">
      <router-link :to="`/page/${index}`">{{ index }} </router-link>
    </div>
  </div>
  <br />

  <input type="text" placeholder="Enter URL" v-model="url" />
  <button @click="saveUrl">Add url</button>
</template>

<script>
export default {
  props: ["existingForms", "uploadedPages"],
  data() {
    return {
      url: "",
    };
  },
  methods: {
    saveUrl() {
      this.$emit("save-pages", this.url);
      this.url = "";
    },
  },
};
</script>