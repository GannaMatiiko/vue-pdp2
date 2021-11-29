<template>
  Pages List
  <div v-if="createdPages && Object.keys(createdPages).length !== 0">
      изменения внутри пейдж листа
    <div v-for="(page, index) in createdPages" :key="page.index">
      <router-link :to="`/page/${index}`">{{ index }} </router-link>
    </div>
  </div>
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
      createdPages: {},
    };
  },
  methods: {
    saveUrl() {
      this.createdPages[this.url] = {};
      this.url = "";
      this.$emit("save-pages", this.createdPages);
    },
  },
};
</script>