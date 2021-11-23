<template>
  <the-header title="Soft Friends"></the-header>
  <main-content></main-content>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import MainContent from "./components/MainContent.vue"
// import ToggleSection from './components/layout/ToggleSection.vue'

export default {
  components: {
    TheHeader,
    MainContent
  },
  data() {
    return {};
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap');
html,
body {
  margin: 0;
}

body>*{
  font-family: 'Open Sans', sans-serif;
}
</style>