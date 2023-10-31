<template>
  <div>
    <v-row :style="{ height: '100vh' }" class="ma-0">
      <!-- Image Column -->
      <v-col
        cols="12"
        md="4"
        class="aside bg-grey-lighten-4 hidden-sm-and-down"
      >
        <v-row :style="{ height: '100vh' }" class="ma-0">
          <v-col class="d-flex align-center">
            <v-img
              :src="require('../assets/logo_asili.svg')"
              class="my-3 align-items-center"
              contain
              height="48"
            />
          </v-col>
        </v-row>
      </v-col>

      <!-- Form Column -->
      <v-col cols="12" md="8" class="d-flex align-center justify-center">
        <v-card width="600" class="m-auto pa-4" flat>
          <v-row class="mb-16 hidden-md-and-up">
            <v-img
              :src="require('../assets/asili_logo.png')"
              contain
              height="48"
            />
          </v-row>
          <v-row class="pl-3 pb-1">
            <v-text
              color="#ffff"
              class="text-h6 text-md-h5 text-lg-h4 text-color font-weight-bold font-theme"
              >Check your email
            </v-text>
          </v-row>
          <v-row class="pl-3 pb-5">
            <v-text class="display-6"
              >Please go to your email inbox and click on the received link to
              reset your password.
            </v-text>
          </v-row>
          <v-card-text class="display-6 text-left mt-0 pl-0">
            <v-text @click="login" class="row-pointer">Return to Login</v-text>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    login() {
      this.$router.push({ name: "signin" });
    },
  },
};
</script>

<style scoped>
.aside {
  background-image: url("../assets/background-02.jpg");
  width: 10;
  background-size: cover;
  background-position: center center;
  height: 100vh;
}

.text-color {
  color: #01244a;
  font-family: "Amaranth", sans-serif !important;
}

.row-pointer {
  cursor: pointer;
  color: #2c5282;
}

.v-btn {
  text-transform: none;
}
</style>
