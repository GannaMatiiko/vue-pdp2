<template>
  <div class="groups-list">
    Choose form groups you want to use on this page
    <div v-for="(group, index) in existingForms" :key="index">
      <input type="checkbox" :id="index" @change="addToChosen($event, index)" />
      <label :for="index">{{ group.title }}</label>
      <hr />
    </div>

    Chosen Groups {{ chosenIds }}
    <div v-if="chosenGroups.length > 0">
      CHOSEN FORM GROUPS
      <div v-for="group in chosenGroups" :key="group">
        fwsfre{{ group }}
        <div v-for="(item, i) in group.data" :key="i">
          inner loop
          <br />
          <strong>{{item.type}}</strong>

          <div v-if="item.type === 'text'">
            <Text :inputsData="item"></Text>
          </div>
          <div v-if="item.type === 'textarea'">
            <Textarea :inputsData="item"></Textarea>
          </div>
          <div v-if="item.type === 'image'">
            <Image :inputsData="item"></Image>
          </div>
          <div v-if="item.type === 'wysiwyg'">
            <Wysiwyg :inputsData="item"></Wysiwyg>
          </div>

          <hr />
        </div>
      </div>
    </div>
    <div v-else>you haven't chose any form group</div>

    <br />
  </div>
</template>

<script>
import Text from './inputs/Text.vue';
import Textarea from './inputs/Textarea.vue';
import Image from './inputs/Image.vue';
import Wysiwyg from './inputs/Wysiwyg.vue';
export default {
  props: ["existingForms"],
  data() {
    return {
      chosenIds: []
    };
  },
  components: {
      Text,
      Textarea,
      Image,
      Wysiwyg
  },
  methods: {
    addToChosen(event, groupObject) {
      if (event.target.checked) {
        this.chosenIds.push(groupObject);
      } else {
        let index = this.chosenIds.indexOf(groupObject);
        this.chosenIds.splice(index, 1);
      }
    }
  },
  computed: {
    chosenGroups: function() {
      let arr = [];
      //   var self = this;

      this.chosenIds.forEach(val => {
        if (this.existingForms[val] !== "undefined") {
          arr.push(this.existingForms[val]);
        }
      });

      return arr;
    }
  }
};
</script>

<style scoped>
.groups-list {
  text-align: left;
  padding: 0 60px;
}
</style>