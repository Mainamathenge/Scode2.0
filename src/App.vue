<template>
  <v-app>
    <div>
      <div class="progress-container">
        <progress-linear />
      </div>
      <router-view />
      <v-container>
        <snack-bar />
      </v-container>
    </div>
  </v-app>
</template>

<script>
import SnackBar from "./components/Shared/SnackBar.vue";
import ProgressLinear from "./components/Shared/ProgressLinear.vue";

export default {
  computed: {},
  name: "App",
  components: {
    ProgressLinear,
    SnackBar,
  },

  data: () => ({
    //
  }),
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
<style>
@import "./assets/css/global.css";

.progress-container {
  /* height: 3px;  */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
}
</style>
