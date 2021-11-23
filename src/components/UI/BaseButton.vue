<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["mode"],
  setup() {},
};
</script>

<style scoped>
button {
  font-size: 3vh;
  font-family: inherit;
  cursor: pointer;
  border: 1px solid#3a0061;
  color: black;
  padding: 0.75rem 1.5rem;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
  color: white;
}

.transparent {
  background-color: transparent;
  color: #3a0061;
  border: none;
  font-weight: 800;
}

.add_friend {
  background-color: #270041;
  color: white;
}

.flat {
  background-color: #16013d;
  color: white;
  border: none;
}

.normal{
  border: 1px solid rgba(0, 0, 0, 0.007);
}

.normal:hover,
.normal:active{
  background-color: #edd2ff;
  border: 1px solid rgba(0, 0, 0, 0.007);
  color: inherit;
}
/* .light{
        background-color: blueviolet;
        color: white;
        box-shadow: 0 0 .3rem .2rem rgba(0,0,0,0.2)  ;
        padding: .5rem;
    }

    .dark{
        background-color: rgb(226, 223, 223);
        color: black;
    } */
</style>