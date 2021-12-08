<template>
  <ul>
    <draggable
      v-model="myArray"
      group="people"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
      @dragend="updateList(myArray)"
    >
      <template #item="{ element }">
        <div>
          <friend-list :info="element"></friend-list>
        </div>
      </template>
    </draggable>

    <!-- <base-section v-for="info in freindInfos" :key="info.id">
      <div class="ul_head">
        <h2>{{ info.name }}</h2>
        <base-button mode="transparent" @click="deleteItem(info.id)">Delete</base-button> 
      </div>
      <p>
        <i>-Phone Number: &nbsp; {{ info.number }}</i>
      </p>
      <p>{{ info.descreption }}</p>
      <a :href="info.link">view </a>
    </base-section> -->
  </ul>
</template>

<script>
import draggable from "vuedraggable";
import FriendList from "./FriendList.vue";

export default {
  inject: ["freindInfos", "deleteItem"],
  emits: ["updateArrayList"],
  components: {
    draggable,
    FriendList,
  },
  data() {
    return {
      drag: false,
      myArray: this.freindInfos,
    };
  },
  methods: {
    updateList(updateArray) {
      this.$emit("updateArrayList", updateArray);
    },
  },
  // emits:['delete']
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* h2 {
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
} */
</style>