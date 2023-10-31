<template>
  <v-dialog :value="true" persistent max-width="350">
    <v-card>
      <v-card-title class="text-h5"> Publish activity?</v-card-title>
      <v-card-text>Are you sure you want to publish this activity?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')"> NO</v-btn>
        <v-btn color="#1AE58E" text @click="publishActivity"> YES</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["activity"],
  methods: {
    publishActivity() {
      this.$store.dispatch("activities/publishActivity", this.activity._id);
      this.closeDialoag();
    },
    closeDialoag() {
      this.$emit("close");
    },
  },
};
</script>
