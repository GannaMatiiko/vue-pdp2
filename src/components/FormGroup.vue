<template>
    <div>
        <span>Field label* </span>
        <input type="text" name="label" @change="updateInputObj">
    </div>
    <div>
        <span>Field name* </span>
        <input type="text" name="name" @change="updateInputObj">
    </div>
    <div>
        <span>Field type* </span>
        <select name="type" @change="updateInputObj">
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
        <span>Required?</span>
        <input type="radio" value="yes" name="isRequired" @change="updateInputObj">
        <input type="radio" value="no" name="isRequired" @change="updateInputObj">
    </div>
    <div>
        <span>Default value</span>
        <input type="text" name="default" @change="updateInputObj">
    </div>
    <div v-if="inputs.type === 'image'">
        image preview options
    </div>

</template>

<script>
export default {
    emits: ['content-changed'],
    props: ['index'],
    data() {
        return {
            inputs: {}
        }
    },
    methods: {
        updateInputObj(e) {
            this.inputs[e.target.name] = e.target.value;
            this.$emit('content-changed', this.inputs, this.index);
        }
    }
}
</script>