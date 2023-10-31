<template>
  <div>
    <v-list-item class="mt-1">
      <v-list-item-content>
        <v-list-item-title
          class="text-h6 text-md-h6 text-lg-h6 font-weight-bold"
          >Activity
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list dense>
      <v-list-item
        v-for="activity in receivedActivities"
        :key="activity._id"
        :exact-active-class="'grey'"
      >
        <v-list-item-avatar size="40" tile rounded>
          <img :src="activity.links[0].value" alt="Activity icon" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ activity.title }}</v-list-item-title>

          <v-list-item-subtitle
            >{{ getRelativeTime(activity.createdAt) }} ago</v-list-item-subtitle
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
    return {
      folders: [
        {
          icon: "mdi-briefcase",
          subtitle: "Just now",
          title: "New business registered",
          id: 1,
        },
        {
          icon: "mdi-briefcase",
          subtitle: "Just now",
          title: "New business registered",
          id: 2,
        },
        {
          icon: "mdi-account",
          subtitle: "59 minutes ago",
          title: "New user registered",
          id: 3,
        },
        {
          icon: "mdi-account",
          subtitle: "4 hours ago",
          title: "New user registered",
          id: 4,
        },
      ],
    };
  },
  created() {
    this.$store.dispatch("stats/getLastActivityRecords");
  },
  computed: {
    receivedActivities() {
      return this.$store.getters["stats/latestActivities"];
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
