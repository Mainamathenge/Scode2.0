<template>
  <v-app>
    <v-navigation-drawer v-model="leftDrawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-img
            class="mb-5 mt-4 ml-12"
            max-width="100"
            src="../assets/bigLogo.png"
          ></v-img>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-list flat>
          <v-list-item-group>
            <v-list-item @click="logout">
              <v-list-item-icon>
                <v-icon>mdi-logout-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Log Out</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-app-bar app class="border-bottom" flat>
      <v-app-bar-nav-icon
        @click="leftDrawer = !leftDrawer"
      ></v-app-bar-nav-icon>
      <v-container>
        <v-row justify="space-between" align="center">
          <v-col cols="auto" class="hidden-sm-and-down">
            <span class="font-weight-medium">Dashboards</span>
          </v-col>
          <v-col cols="12" md="6" lg="8">
            <SearchBar
              :store="receivedSearchess.storeName"
              :action="receivedSearchess.actionName"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- <v-navigation-drawer v-model="rightDrawer" app right>
      <BusinessNotification />
      <ActivityNotification />
      <ExplorerNotification />
    </v-navigation-drawer> -->

    <v-main>
      <v-container @click="rightDrawer = !rightDrawer" class="drawer-right">
        <v-img
          max-width="32"
          :src="require(`@/assets/menu-left.svg`)"
          :class="{ 'mr-1': $vuetify.breakpoint.smAndDown }"
          class="drawer-toggle"
        ></v-img>
      </v-container>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SearchBar from "../components/Shared/SearchBar.vue";
export default {
  components: {
    SearchBar,
  },
  data() {
    return {
      leftDrawer: null,
      rightDrawer: null,
      leftDrawerWidth: 250,
      rightDrawerWidth: 250,
      drawer: null,
      items: [
        {
          title: "map",
          icon: "mdi-map",
          to: "/dashboard",
        },
        {
          title: "Add Customer",
          icon: "mdi-briefcase",
          to: "/dashboard/businesses",
        },
        {
          title: "Cookers",
          icon: "mdi-account-outline",
          to: "/dashboard/users",
        },
        {
          title: "wallet",
          icon: "mdi-wallet",
          to: "/dashboard/messages",
        },
      ],
      selectedEmployee: {
        name: "",
      },
      snackbar: false,
      route: this.$route,
    };
  },
  computed: {
    receivedSearchess() {
      return this.$store.getters["searches/searches"];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid #ccc;
}

.text-color {
  color: #01244a;
  font-family: "Amaranth", sans-serif !important;
}

.percent-up {
  color: #0ee08f;
}

.percent-down {
  color: #ec4a4a;
}

.my-container v-img {
  float: right;
  margin-left: 10px;
}

.drawer-right {
  position: absolute;
}

.drawer-toggle {
  position: relative;
  float: right;
  top: 15px;
  left: 13px;
}
</style>
