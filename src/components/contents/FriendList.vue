<template>
    <base-section>
      <div class="ul_head">
        <h2>{{ info.name }}</h2>
        <base-button mode="transparent" @click="deleteItem(info.id)">Delete</base-button> 
      </div>
      <p>
        <i>-Phone Number: &nbsp; {{ info.number }}</i>
      </p>
      <p>{{ info.descreption }}</p>
      <a :href="info.link">view </a>
    </base-section>
</template>

<script>
export default {
    inject: ["freindInfos", "deleteItem"],
    props:['info'],

}
</script>

<style scoped>

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