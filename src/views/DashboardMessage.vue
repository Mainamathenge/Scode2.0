<template>
  <div>
    <v-container>
      <div class="mx-4 mt-6">
        <v-row>
          <v-col cols="4">
            <v-row>
              <v-col>
                <v-btn class="bordered-button" text>
                  <span>Messages</span>
                  <v-icon right dark> mdi-chevron-down</v-icon>
                </v-btn>
              </v-col>
              <v-col class="hidden-sm-and-down">
                <v-btn class="bordered-button" text>
                  <span>{{ totalBusinesses }} Total</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" class="hidden-md-and-up">
            <v-btn class="bordered-button" text>
              <span>{{ totalBusinesses }} Total</span>
            </v-btn>
          </v-col>
          <v-spacer v-if="!isSmallScreen"></v-spacer>
          <v-col cols="4" class="d-flex justify-end">
            <!-- <v-btn
              style="background-color: #f2f4f8"
              color="#C3D7FF"
              outlined
              class="bordered-button"
            >
              <span style="color: #6f6f6f">Filters</span>
              <v-icon color="#01244A" right dark> mdi-chevron-down</v-icon>
            </v-btn> -->
          </v-col>
        </v-row>
      </div>
      <v-row :class="{ 'mx-1 ': $vuetify.breakpoint.mdAndUp }" class="mt-8">
        <v-col>
          <MessagesTable
            :messages="receivedBusinesses"
            :receivedBusinessesobj="receivedBusinessesobj"
            @select-user="setUser"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="snackbar" :right="$vuetify.breakpoint.lgAndUp">
      You have selected {{ selectedUser.fullName }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import MessagesTable from "../components/MessagesTable";

export default {
  components: {
    MessagesTable,
  },
  data() {
    return {
      selectedUser: {
        name: "",
      },
      snackbar: false,
    };
  },
  created() {
    this.$store.dispatch("messages/fetchMessages");
    this.$store.dispatch("searches/setSearchStore", {
      storeName: "messages",
      actionName: "searchMessage",
    });
  },
  computed: {
    receivedBusinesses() {
      return this.$store.getters["messages/messages"];
    },
    totalBusinesses() {
      return this.$store.getters["messages/totalMessages"];
    },
    receivedBusinessesobj() {
      return this.$store.getters["messages/messagesobj"];
    },
    isSmallScreen() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  methods: {
    setUser(event) {
      this.snackbar = true;
      this.selectedUser.fullName = event.fullName;
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
