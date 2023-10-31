<template>
  <v-dialog :value="true" persistent max-width="500">
    <v-card>
      <v-card-title class="text-h5"> Activate business?</v-card-title>
      <v-card-text
        >Are you sure you want to activate this business?</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')"> NO</v-btn>
        <v-btn color="#1AE58E" text @click="activateBusiness"> YES</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["business"],
  methods: {
    activateBusiness() {
      this.$store.dispatch("businesses/activateBusiness", this.business._id);
      this.closeDialoag();
    },
    closeDialoag() {
      this.$emit("close");
    },
  },
};
</script>
