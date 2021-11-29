<template>
    New page
        Существующие группы
    <!-- <div v-for="group in test" :key="group">
        {{ group}}
    </div> -->
    {{existingForms}}
    <br>
</template>

<script>
export default {
    props: ['existingForms'],
    // data() {
    //     return {
    //         test: {},
    //     }
    // },
    // mounted() {
    //     this.test = this.existingForms;
    // }
}
</script>