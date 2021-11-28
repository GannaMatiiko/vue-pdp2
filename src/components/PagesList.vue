<template>
    Pages List
    <div v-for="(page, index) in createdPages" :key="page.index">
        <router-link :to="`/page/${index}`">{{ index}} </router-link>
    </div>


    <br>
    <input type="text" placeholder="Enter URL" v-model="url" required>
    <button @click="SaveUrl">Add url</button>
</template>

<script>
export default {
    data() {
        return {
            url: '',
            createdPages: {}
        }
    },
    methods: {
        SaveUrl() {
            // this.$router.push({ name: 'page', params: { url: this.url} });
            this.createdPages[this.url] = {};
            this.url = '';
            this.$emit('pass-pages', this.createdPages);
        }
    }
}
</script>