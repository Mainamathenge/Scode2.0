<template>
  <div>
    <v-list-item class="mt-1">
      <v-list-item-content>
        <v-list-item-title
          class="text-h6 text-md-h6 text-lg-h6 font-weight-bold"
          >Explorer
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list dense>
      <v-list-item v-for="explorer in receivedExplorers" :key="explorer._id">
        <v-list-item-avatar size="32">
          <img :src="explorer.photo" alt="Avatar" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ explorer.fullName }}</v-list-item-title>
          <v-list-item-subtitle
            >{{ getRelativeTime(explorer.createdAt) }} ago</v-list-item-subtitle
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
    this.$store.dispatch("stats/getLastExplorerRecords");
  },
  computed: {
    receivedExplorers() {
      return this.$store.getters["stats/latestExplorers"];
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
