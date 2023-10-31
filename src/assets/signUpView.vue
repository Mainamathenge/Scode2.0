<template>
  <div>
    <v-row :style="{ height: '100vh' }" class="ma-0">
      <!-- Image Column -->
      <v-col
        style="
          background-image: url('scodeImge.jpg');
          width: 15;
          background-size: cover;
          background-position: center center;
          height: 100%;
          filter: blur(3px);
        "
        cols="5"
        md="6"
        class="bg-grey-lighten-4 hidden-sm-and-down"
      >
        <v-row :style="{ height: '100vh' }" class="ma-0">
          <v-col class="d-flex align-center">
            <v-img
              :src="require('../assets/scodeLogo1.png')"
              class="my-3 align-items-center"
              contain
              height="500"
            />
          </v-col>
        </v-row>
      </v-col>

      <!-- Form Column -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <v-card width="600" class="m-auto pa-4" flat>
          <v-row class="mb-16 hidden-md-and-up">
            <v-img
              :src="require('../assets/scodeLogo.png')"
              class="my-3 align-items-center"
              contain
              height="350"
            />
          </v-row>
          <v-row class="pl-3 pb-1">
            <div class="display-6">Welcome back</div>
          </v-row>
          <v-row class="pl-3 pb-9">
            <div
              color="#ffff"
              class="text-h6 text-md-h5 text-lg-h4 text-color font-weight-bold font-theme"
            >
              Scode Admin dashbaord
            </div>
          </v-row>
          <v-form @submit.prevent="login">
            <v-row class="pl-3 pb-4">
              <div>Email</div>
            </v-row>
            <v-text-field
              v-model="email"
              placeholder="admin@scode.com"
              :rules="emailRules"
              outlined
              dense
              class="mb-3"
              color="#C3D7FF"
              style="border-radius: 10px"
            ></v-text-field>
            <v-row class="pl-3 pb-4">
              <div>Password</div>
            </v-row>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              outlined
              type="password"
              placeholder="********"
              dense
              append-icon="mdi-eye-off"
              color="#C3D7FF"
              style="border-radius: 10px"
            ></v-text-field>
            <!-- <v-card-text class="display-6 text-right pr-0 row-pointer">
              <div @click="forgotPassword">Forgot password?</div>
            </v-card-text> -->
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-btn
              block
              color="#27D5E2"
              size="large"
              depressed
              :loading="$store.state.loading.loginBtn.load"
              :disabled="$store.state.loading.loginBtn.disabled"
              type="submit"
              style="border-radius: 10px"
            >
              <div color="#ffff" class="white--text text--darken-2 font-theme">
                Log In
              </div>
              <template v-slot:loader>
                <span class="font-theme">Loading...</span>
              </template>
            </v-btn>
            <v-btn @click="gotoMap">gotoMap</v-btn>
            <v-btn @click="goadmin">Admin</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import router from '@/router';
//import SignupLogin from "../components/SignupLogin.vue";
// import imageGallery from "../components/imageGallery.vue";

export default {
  methods: {
    gotoMap() {
      this.$router.push({ name: "map" });
    },
    goadmin() {
      this.$router.push({ name: "map2" });
    },
  },
};
</script>
