<template>
  <v-dialog :value="true" persistent max-width="350">
    <v-card>
      <v-card-title class="text-h5"> Unpublish activity?</v-card-title>
      <v-card-text
        >Are you sure you want to unpublish this activity?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')"> NO</v-btn>
        <v-btn color="red darken-1" text @click="unPublishActivity">
          YES
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["activity"],
  methods: {
    unPublishActivity() {
      this.$store.dispatch("activities/unPublishActivity", this.activity._id);
      this.closeDialoag();
    },
    closeDialoag() {
      this.$emit("close");
    },
  },
};
</script>
