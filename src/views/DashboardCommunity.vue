<template>
  <div>
    <v-container>
      <div class="mx-4 mt-6">
        <v-row>
          <v-col cols="4">
            <v-row>
              <v-col>
                <v-btn class="bordered-button" text>
                  <span>Communities</span>
                  <v-icon right dark> mdi-chevron-down</v-icon>
                </v-btn>
              </v-col>
              <v-col class="hidden-sm-and-down">
                <v-btn class="bordered-button" text>
                  <span>{{ totalreceivedCommunities }} Total</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" class="hidden-md-and-up">
            <v-btn class="bordered-button" text>
              <span>{{ totalreceivedCommunities }} Total</span>
            </v-btn>
          </v-col>
          <v-spacer v-if="!isSmallScreen"></v-spacer>
        </v-row>
      </div>
      <v-row :class="{ 'mx-1 ': $vuetify.breakpoint.mdAndUp }" class="mt-8">
        <v-col>
          <CommunitiesTable
            :communities="receivedCommunities"
            :communitiesObj="communitiesObj"
            @select-user="setUser"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="snackbar" :right="$vuetify.breakpoint.lgAndUp">
      You have selected {{ selectedUser.name }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import CommunitiesTable from "../components/CommunitiesTable";

export default {
  components: {
    CommunitiesTable,
  },
  data() {
    return {
      selectedUser: {
        name: "",
      },
      snackbar: false,
      dropdownItems: [
        { label: "Option 1" },
        { label: "Option 2" },
        { label: "Option 3" },
        // Add more options as needed
      ],
    };
  },
  created() {
    this.$store.dispatch("communities/fetchCommunities");
    this.$store.dispatch("searches/setSearchStore", {
      storeName: "communities",
      actionName: "searchCommunity",
    });
  },
  computed: {
    receivedCommunities() {
      return this.$store.getters["communities/communities"];
    },
    totalreceivedCommunities() {
      return this.$store.getters["communities/totalCommunities"];
    },
    communitiesObj() {
      return this.$store.getters["communities/totalCommunities"];
    },
    isSmallScreen() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  methods: {
    setUser(event) {
      this.snackbar = true;
      this.selectedUser.name = event.name;
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style>
.v-btn {
  text-transform: none;
}
</style>
