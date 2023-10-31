<template>
  <v-dialog :value="true" persistent max-width="500">
    <v-card>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">BUSINESS DETAILS</div>
          <v-list-item-title class="text-h5 mb-1">
            {{ business.businessName }}
          </v-list-item-title>
          <v-list-item-subtitle
            ><span class="font-weight-bold">Device Status: </span
            >{{ business.email }}</v-list-item-subtitle
          >
          <v-list-item-subtitle
            ><span class="font-weight-bold">Location: </span>
            {{ business.location }}</v-list-item-subtitle
          >
        </v-list-item-content>

        <v-list-item-avatar tile size="150" color="grey"
          ><v-img :src="business.photo"></v-img
        ></v-list-item-avatar>
      </v-list-item>

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
  props: ["business"],
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

<style></style>
