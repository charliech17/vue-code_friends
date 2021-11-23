<template>
  <base-section class="base_sec">
    <base-button @click="showButtonPress" :mode="showButtonMode" ref="show"
      >Show</base-button
    >
    <base-button @click="addButtonPress" :mode="addButtonMode" ref="add"
      >Add</base-button
    >
  </base-section>
</template>

<script>
export default {
  props:['selected']
  ,emits: ["show", "add"],
  data() {
    return {
      showButtonActive: true,
      addButtonActive: false,
    };
  },
  computed:{
    showButtonMode(){
      return this.showButtonActive === true ? 'flat': 'normal';
    },
    addButtonMode(){
      return this.addButtonActive === true ? 'flat': 'normal';
    }
  }
  ,
    watch:{
      selected:function(){
        if(this.selected==='show-friend'){
          this.showButtonActive= true;
          this.addButtonActive= false;
        }else{
          this.showButtonActive= false;
          this.addButtonActive= true;
        }
        
      }
    }
  ,methods: {
    showButtonPress() {
      this.showButtonActive = true;
      this.addButtonActive = false;
      this.$emit("show");
    },

    addButtonPress() {
      this.showButtonActive = false;
      this.addButtonActive = true;
      this.$emit("add");
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
}

.base_sec {
  padding-bottom: 0.8rem;
  padding-top: 0.8rem;
  margin-top: 2vh;
}
</style>