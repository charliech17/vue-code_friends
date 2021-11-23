<template>
  <toggle-section @show="showFriend" @add="addFriend" :selected="selectedTab"></toggle-section>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>

  <!-- <content-show></content-show> -->
</template>

<script>
import ToggleSection from "./layout/ToggleSection.vue";
import ShowFriend from "./contents/ShowFriend.vue";
import AddFriend from "./contents/AddFriend.vue";

export default {
  components: {
    ToggleSection,
    ShowFriend,
    AddFriend,
  },
  data() {
    return {
      selectedTab: "show-friend",
      infos: [
        {
          id: "Charlie",
          name: "charlie",
          number: "0910-xxx-xxx",
          descreption:
            "Write frontend just for five months, but I can now build my own vue project",
          link: "https://github.com/charliech17/",
        },
        {
          id: "Dan",
          name: "dan",
          number: "09xx-xxx-xxx",
          descreption:
            "The friend i met when serving in army, he is a great and experienced frontend engineer",
          link: "https:// /dandanXO/",
        },
      ],
    };
  },
  provide() {
    return {
      freindInfos: this.infos,
      addNewFriend: this.addFriends,
      deleteItem: this.deleteFriend
    };
  },
  methods: {
    showFriend() {
      this.selectedTab = "show-friend";
    },
    addFriend() {
      this.selectedTab = "add-friend";
    },
    addFriends(name, number, descreption, link) {
      const newFriend = {
        id: new Date().toISOString(),
        name,
        number,
        descreption,
        link,
      };

      this.infos.unshift(newFriend);
      this.selectedTab = "show-friend";
    },
    deleteFriend(deleteId) {
      const deleteIndex = this.infos.findIndex((info) => info.id === deleteId);
      this.infos.splice(deleteIndex, 1);
    },
  },
};
</script>