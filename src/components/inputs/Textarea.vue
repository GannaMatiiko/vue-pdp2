<template>
    <label for="">{{ label }}</label>
    <textarea :name="name" :required="isRequired !== 'null'" v-model="defaultValue"></textarea>
    <span v-if="isRequired !== 'null'">Field is required! *</span>
</template>

<script>
export default {
    props: ['inputsData'],
    data() {
        return {
            label: this.inputsData.label,
            name: this.inputsData.name,
            isRequired: this.inputsData.isRequired,
            defaultValue: this.inputsData.default,
        }
    },
    mounted() {
        console.log(this.inputsData, 'данные, кот пришли в текст комп-т')
    }
}
</script>