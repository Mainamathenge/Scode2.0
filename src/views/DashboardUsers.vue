<template>
  <div>
    <v-container>
      <div class="mx-4 mt-6">
        <v-row>
          <v-col cols="4">
            <v-row>
              <v-col>
                <v-btn class="bordered-button" text>
                  <span>Users</span>
                  <v-icon right dark> mdi-chevron-down</v-icon>
                </v-btn>
              </v-col>
              <v-col class="hidden-sm-and-down">
                <v-btn class="bordered-button" text>
                  <span>{{ totalUsers }} Total</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" class="hidden-md-and-up">
            <v-btn class="bordered-button" text>
              <span>{{ totalUsers }} Total</span>
            </v-btn>
          </v-col>
          <v-spacer v-if="!isSmallScreen"></v-spacer>
          <v-col cols="4" class="d-flex justify-end">
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn
                  style="background-color: #f2f4f8"
                  color="#C3D7FF"
                  outlined
                  class="bordered-button"
                  v-on="on"
                >
                  <span style="color: #6f6f6f">Filters</span>
                  <v-icon color="#01244A" right dark>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in dropdownItems"
                  :key="index"
                >
                  <v-menu offset-y right>
                    <template v-slot:activator="{ on }">
                      <v-list-item-title v-if="item.submenu" v-on="on">
                        {{ item.label }}
                        <v-icon color="primary" dark>mdi-chevron-right</v-icon>
                      </v-list-item-title>
                      <v-list-item-title
                        v-else
                        v-on="on"
                        @click="handleItemClick(item)"
                      >
                        {{ item.label }}
                      </v-list-item-title>
                    </template>
                    <v-list>
                      <v-list-item
                        v-for="(subItem, subIndex) in item.submenu"
                        :key="subIndex"
                        @click="handleSubmenuItemClick(subItem)"
                      >
                        <v-list-item-title>{{
                          subItem.label
                        }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </div>
      <v-row :class="{ 'mx-1 ': $vuetify.breakpoint.mdAndUp }" class="mt-8">
        <v-col>
          <UsersTable
            :users="receivedUsers"
            :usersobj="usersobj"
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
import UsersTable from "../components/UsersTable";

export default {
  components: {
    UsersTable,
  },
  data() {
    return {
      selectedUser: {
        name: "",
      },
      snackbar: false,
      dropdownItems: [
        {
          label: "Explorer Status",
          submenu: [{ label: "Active" }, { label: "Inactive" }],
        },
      ],
    };
  },
  created() {
    this.$store.dispatch("users/fetchUsers");
    this.$store.dispatch("searches/setSearchStore", {
      storeName: "users",
      actionName: "searchExplorer",
    });
  },
  computed: {
    receivedUsers() {
      return this.$store.getters["users/users"];
    },
    totalUsers() {
      return this.$store.getters["users/totalUsers"];
    },
    usersobj() {
      return this.$store.getters["users/usersobj"];
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
    handleSubmenuItemClick(subItem) {
      if (subItem.label === "Active") {
        const payload = {
          pageNumber: 1,
          query: true,
          value: "active",
        };
        this.$store.dispatch("users/filterExplorer", payload);
      }
      if (subItem.label === "Inactive") {
        const payload = {
          pageNumber: 1,
          query: false,
          value: "active",
        };
        console.log();
        this.$store.dispatch("users/filterExplorer", payload);
      }
    },
  },
};
</script>

<style>
.v-btn {
  text-transform: none;
}
</style>
