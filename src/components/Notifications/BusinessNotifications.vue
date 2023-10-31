<template>
  <div>
    <v-list-item class="mt-2">
      <v-list-item-content>
        <v-list-item-title
          class="text-h6 text-md-h6 text-lg-h6 font-weight-bold"
          >Business
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list dense>
      <v-list-item v-for="business in receivedBusinesses" :key="business._id">
        <v-list-item-avatar size="32" rounded>
          <v-icon class="green accent-3" dark>mdi-briefcase</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ business.businessName }}</v-list-item-title>

          <v-list-item-subtitle>
            {{ getRelativeTime(business.createdAt) }} ago</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { formatDistanceToNow } from "date-fns";
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("stats/getLastBusinessRecords");
  },
  computed: {
    receivedBusinesses() {
      return this.$store.getters["stats/latestBusinesses"];
    },
  },
  methods: {
    getRelativeTime(timestamp) {
      const date = new Date(timestamp);
      return formatDistanceToNow(date);
    },
  },
};
</script>
