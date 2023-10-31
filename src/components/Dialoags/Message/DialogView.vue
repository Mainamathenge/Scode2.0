<template>
  <v-dialog :value="true" persistent max-width="600">
    <v-card>
      <v-card-text class="pt-4">
        <div>MESSAGE</div>
        <div>
          {{ message.message }}
        </div>
        <v-spacer></v-spacer>
        <p class="text--primary mt-3">From: {{ message.fullName }}</p>
        <p class="text--primary mt-3">Phone: {{ message.phone }}</p>
        <p class="text--primary mt-3">Email: {{ message.email }}</p>
        <p class="text--primary">Sent: {{ message.createdAt | niceDate }}</p>
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
  props: ["message"],
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
