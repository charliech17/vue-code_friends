<template>
  <ul>
    <base-section v-for="info in freindInfos" :key="info.id">
      <div class="ul_head">
        <h2>{{ info.name }}</h2>
        <base-button mode="transparent" @click="deleteItem(info.id)">Delete</base-button> 
        <!-- $emit('delete',info.id) -->
      </div>
      <p>
        <i>-Phone Number: &nbsp; {{ info.number }}</i>
      </p>
      <p>{{ info.descreption }}</p>
      <a :href="info.link">view </a>
    </base-section>
  </ul>
</template>

<script>
export default {
  inject:['freindInfos','deleteItem'],
  // emits:['delete']
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

h2 {
  font-family: inherit;
  font-weight: 700;
  font-size: 4vh;
  margin: 0;
  margin-bottom: 0.5vh;
}

p {
  margin: 0;
  margin-bottom: 0.8vh;
}

.ul_head {
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
  color: #f7a01e;
  font-size: 2.5vh;
  font-weight: 700;
}
</style>