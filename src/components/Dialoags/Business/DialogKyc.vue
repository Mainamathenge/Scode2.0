<template>
  <v-dialog :value="true" persistent max-width="500">
    <v-card>
      <v-card-title class="text-h5">KYC DETAILS</v-card-title>
      <v-card-text>Customer Name: {{ business.businessName }}</v-card-text>
      <v-card-text>Device Name: {{ business.fullName }}</v-card-text>
      <v-card-text>Device Status: {{ business.kycStatus }}</v-card-text>
      <div class="ml-5">
        <v-chip
          class="ma-2"
          color="#27D5E2"
          label
          text-color="#01244A"
          @click="openLink(business.kra)"
        >
          <v-icon left> mdi-id-card </v-icon>
          Contract
        </v-chip>

        <v-chip
          class="ma-2"
          color="#1AE58E"
          label
          text-color="white"
          @click="openLink(business.passport)"
        >
          <v-icon left> mdi-passport </v-icon>
          Passport/ID
        </v-chip>
        <v-radio-group
          class="ml-2"
          v-model="selectedOption"
          @change="updateBusinessKyc"
          row
        >
          <!-- <v-radio label="Pending" color="warning" value="pending"></v-radio>
          <v-radio label="Cancel" color="red" value="cancelled"></v-radio>
          <v-radio label="Approve" color="success" value="approved"></v-radio> -->
        </v-radio-group>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')">CLOSE</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["business"],
  data() {
    return {
      selectedOption: this.business.kycStatus,
    };
  },
  methods: {
    openLink(url) {
      window.open(url, "_blank");
    },
    updateBusinessKyc() {
      // Your logic here when a radio button is checked
      console.log("Radio button checked:", this.selectedOption);
      let payload = {
        id: this.business._id,
        values: {
          kycStatus: this.selectedOption,
        },
      };
      this.$store.dispatch("businesses/updateBusiness", payload);
    },
    closeDialoag() {
      this.$emit("close");
    },
  },
};
</script>
