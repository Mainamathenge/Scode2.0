<template>
  <v-dialog :value="true" persistent max-width="500">
    <v-card>
      <v-card-title class="text-h5"> Deactivate user?</v-card-title>
      <v-card-text>Are you sure you want to deactivate this user?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')"> NO</v-btn>
        <v-btn color="red darken-1" text @click="deactivateUser"> YES</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["user"],
  methods: {
    deactivateUser() {
      this.$store.dispatch("users/deactivateUser", this.user._id);
      this.closeDialoag();
    },
    closeDialoag() {
      this.$emit("close");
    },
  },
};
</script>
