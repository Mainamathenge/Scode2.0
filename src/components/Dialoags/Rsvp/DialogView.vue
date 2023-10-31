<template>
  <v-dialog :value="true" persistent max-width="600">
    <v-card>
      <v-card-text class="pt-4">
        <div>RSVP</div>
        <v-spacer></v-spacer>
        <p class="text--primary mt-3">From: {{ rsvp.fullName }}</p>
        <p class="text--primary mt-3">Phone: {{ rsvp.phoneNumber }}</p>
        <p class="text--primary mt-3">Email: {{ rsvp.email }}</p>
        <p class="text--primary mt-3">PartyOf: {{ rsvp.partyOf }}</p>
        <p class="text--primary">Sent: {{ rsvp.createdAt | niceDate }}</p>
        <div>
          <p class="text--primary">Special Instructions:</p>
          {{ rsvp.specialInstructions }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="$emit('close')" color="#1AE58E" text> OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { format } from "date-fns";

export default {
  props: ["rsvp"],
  data() {
    return {};
  },
  filters: {
    niceDate(value) {
      return format(new Date(value), "PPP");
    },
  },
};
</script>
