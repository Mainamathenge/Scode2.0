<template>
  <div>
    <v-row :style="{ height: '100vh' }" class="ma-0">
      <!-- Image Column -->
      <v-col
        style="
          background-image: url('scodeImge.jpg');
          width: 10;
          background-size: cover;
          background-position: center center;
          height: 100vh;
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
              :src="require('../assets/bigLogo.png')"
              contain
              height="48"
            />
          </v-row>
          <v-row class="pl-3 pb-1">
            <div class="display-6">Welcome to scode admin dashboard</div>
          </v-row>
          <v-row class="pl-3 pb-9">
            <div
              color="#ffff"
              class="text-h6 text-md-h5 text-lg-h4 text-color font-weight-bold font-theme"
            >
              Log into your admin account
            </div>
          </v-row>
          <v-form @submit.prevent="login">
            <v-row class="pl-3 pb-4">
              <div>Email</div>
            </v-row>
            <v-text-field
              v-model="email"
              placeholder="john.doe@scode.com"
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
            <v-card-text class="display-6 text-right pr-0 row-pointer">
              <div @click="forgotPassword">Go to dashboard?</div>
            </v-card-text>
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
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      emailRules: [
        (value) => !!value || "Email is required.",
        (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Provide a valid email!";
        },
        (value) =>
          value.indexOf(".") <= value.length - 3 ||
          "Email should contain a valid domain extension.",
      ],
      passwordRules: [
        (value) => !!value || "Password is required.",
        (value) => value.length >= 8 || "Password must contain 8 character",
      ],
      progress: false,
    };
  },
  methods: {
    async login() {
      this.progress = true;
      await this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      if (this.$store.state.user) {
        this.$router.push({ name: "dashboard" });
      }
    },
    forgotPassword() {
      this.$router.push({ name: "dashboard" });
    },
  },
};
</script>

<style scoped>
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
