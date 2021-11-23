<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      required: true
    }
  },
  data() {
    return {

    };
  },
}
</script>

<style scoped>

header {
  background-color: rgb(110, 26, 47);
  color: white;
  font-family: inherit;
  font-size: 3vh;
  margin: 0;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>