<template>
  <teleport to="body"></teleport>
  <div @click="$emit('close')"></div>
  <dialog open>
    <header>
      <slot name="header">
        <h2>{{ title }}</h2>
      </slot>
    </header>
    <section>
      <slot></slot>
    </section>
    <menu>
      <slot name="action">
        <base-button @click="$emit('close')">close</base-button>
      </slot>
    </menu>
  </dialog>
</template>

<script>
export default {
  props: ["title"],
  emits:['close'],
  data() {
    return {};
  },
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 20vh;
  width: 60%;
  left: 20%;
  padding: 0;
  margin: 0;
  z-index: 100;
}

header {
  background-color: rgb(35, 25, 88);
  color: white;
  padding: 1.5vh;
}

section {
  padding: 1.5vh;
}

menu {
  margin: 0;
  padding: 1vh;
  display: flex;
  justify-content: flex-end;
}
</style>