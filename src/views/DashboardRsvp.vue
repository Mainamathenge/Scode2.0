<template>
  <div>
    <v-container>
      <div class="mx-4 mt-6">
        <v-row>
          <v-col cols="4">
            <v-row>
              <v-col>
                <v-btn class="bordered-button" text>
                  <span>Rsvp</span>
                  <v-icon right dark> mdi-chevron-down</v-icon>
                </v-btn>
              </v-col>
              <v-col class="hidden-sm-and-down">
                <v-btn class="bordered-button" text>
                  <span>{{ totalRsvps }} Total</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" class="hidden-md-and-up">
            <v-btn class="bordered-button" text>
              <span>{{ totalRsvps }} Total</span>
            </v-btn>
          </v-col>
          <v-spacer v-if="!isSmallScreen"></v-spacer>
        </v-row>
      </div>
      <v-row :class="{ 'mx-1 ': $vuetify.breakpoint.mdAndUp }" class="mt-8">
        <v-col>
          <RsvpsTable
            :rsvps="receivedRsvps"
            :rsvpsObj="rsvpsObj"
            @select-user="setActivity"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="snackbar" :right="$vuetify.breakpoint.lgAndUp">
      You have selected {{ selectedActivity.title }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import RsvpsTable from "../components/RsvpsTable";

export default {
  components: {
    RsvpsTable,
  },
  data() {
    return {
      selectedActivity: {
        title: "",
      },
      snackbar: false,
    };
  },
  async created() {
    await this.$store.dispatch("rsvps/fetchRsvps", 1);
    await this.$store.dispatch("searches/setSearchStore", {
      storeName: "rsvps",
      actionName: "searchRsvp",
    });
  },
  computed: {
    receivedRsvps() {
      return this.$store.getters["rsvps/rsvps"];
    },
    totalRsvps() {
      return this.$store.getters["rsvps/totalRsvps"];
    },
    rsvpsObj() {
      return this.$store.getters["rsvps/rsvpsObj"];
    },
    isSmallScreen() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  methods: {
    setActivity(event) {
      this.snackbar = true;
      this.selectedActivity.title = event.title;
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
