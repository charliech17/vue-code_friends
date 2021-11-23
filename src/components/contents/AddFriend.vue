<template>
  <base-dialog title="Input Invalid" v-if="showDialog" @close="closeDialog">
    <template #default>
      <p>Unfortunately, at least one input value is invalid</p>
      <p>
        Please check all inputs and make sure you enter at least afew characters
        into each input field
      </p>
    </template>
  </base-dialog>
  <base-section>
    <form @submit.prevent="submitData">
      <div class="form_control">
        <label>Friend Name</label>
        <input type="text" ref="name" />
      </div>

      <div class="form_control">
        <label>Phone Number</label>
        <input type="tel" ref="phone" />
      </div>

      <div class="form_control">
        <label>Descreption</label>
        <textarea rows="5" ref="textArea" type="text"></textarea>
      </div>

      <div class="form_control">
        <label>Github link</label>
        <input type="url" ref="link" />
      </div>

      <div class="form_control">
        <base-button class="add_friend">Add Friend</base-button>
      </div>
    </form>
  </base-section>
</template>

<script>
export default {
  inject: ["addNewFriend"],
  data() {
    return {
      showDialog: false,
    };
  },
  methods: {
    submitData() {
      const friendName = this.$refs.name.value;
      const friendPhone = this.$refs.phone.value;
      const friendDesc = this.$refs.textArea.value;
      const friendGit = this.$refs.link.value;

      if (
        friendName.trim() === "" ||
        friendPhone.trim() === "" ||
        friendDesc.trim() === "" ||
        friendGit.trim() === ""
      ) {
        this.showDialog = true;
        return;
      }

      this.addNewFriend(friendName, friendPhone, friendDesc, friendGit);
       this.$refs.name.value = "";
      this.$refs.phone.value = "";
      this.$refs.textArea.value = "";
      this.$refs.link.value = "";
      // this.clearForm;
    },
    closeDialog() {
      this.showDialog = false;
    },
  },
  watch: {
    clearForm() {
      this.$refs.name.value = "";
      this.$refs.phone.value = "";
      this.$refs.textArea.value = "";
      this.$refs.link.value = "";
    },
  },
};
</script>

<style scoped>
.form_control {
  margin: 2.5vh 0;
}

label {
  font-size: 3vh;
  font-weight: 900;
  margin-bottom: 0.5vh;
  display: block;
}

input,
textarea {
  display: block;
  border: 1px solid #ccc;
  width: 100%;
  margin: auto;
  padding: 1vh;
  box-sizing: border-box;
}

button {
  margin: 0;
  padding: 0;
  max-width: 25vh;
  float: none;
}
</style>