<template>
<h1>hello</h1>
    FieldgroupCard
    {{ existingForms}}
    {{requestedId}}
    <h3>Title {{ title }}
        <!-- {{ getFormData }} -->
    </h3>
</template>

<script>
export default {
    props: ['existingForms'],
    data() {
        return {
            requestedId: this.$route.params.id,
            title: '',
            data: {},
        }
    },
    mounted() {
        let form = this.existingForms[this.requestedId];

        this.title = form.title;
        this.data = form.data
    }
}
</script>