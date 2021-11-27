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
        <input type="radio" value="yes" :name="`isRequired-${index}`" @change="updateInputObj($event, 'isRequired')">
        <input type="radio" value="null" :name="`isRequired-${index}`" @change="updateInputObj($event, 'isRequired')">
    </div>
    <div>
        <span>Default value</span>
        <input type="text" name="default" @change="updateInputObj">
    </div>
    <div v-if="inputs.type === 'image'">
        <span>Preview size </span>
        <select name="preview" @change="updateInputObj">
            <option disabled selected>Choose image size</option>
            <option value="small">Small(150x150)</option>
            <option value="medium">Medium(300x300)</option>
            <option value="large">Large(450x450)</option>
        </select>
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
        updateInputObj(e, inputName) {
            if (e.target.type !== 'image') {
                delete this.inputs.preview;
            }

            let name = inputName || e.target.name;
            this.inputs[name] = e.target.value;
            this.$emit('content-changed', this.inputs, this.index);
        }
    }
}
</script>