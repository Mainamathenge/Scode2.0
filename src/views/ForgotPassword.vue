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
              >Forgot your password?
            </v-text>
          </v-row>
          <v-row class="pl-3 pb-9">
            <v-text class="display-6"
              >Enter the email address associated with your account and we will
              send you a link to reset your password.
            </v-text>
          </v-row>
          <v-form @submit.prevent="forgetPassword">
            <v-row class="pl-3 pb-4">
              <v-text>Email</v-text>
            </v-row>
            <v-text-field
              v-model="email"
              placeholder="mwai.kimaki@gmail.com"
              :rules="emailRules"
              outlined
              dense
              class="mb-3"
              color="#C3D7FF"
              style="border-radius: 10px"
            ></v-text-field>
            <v-btn
              block
              color="#27D5E2"
              size="large"
              depressed
              :loading="$store.state.loading.forgotBtn.load"
              :disabled="$store.state.loading.forgotBtn.disabled"
              type="submit"
              style="border-radius: 10px"
            >
              <v-text
                color="#ffff"
                class="white--text text--darken-2 font-theme"
                >Submit
              </v-text>
              <template v-slot:loader>
                <span class="font-theme">Loading...</span>
              </template>
            </v-btn>
            <v-card-text class="display-6 text-center pr-0 row-pointer">
              <v-text @click="login">Return to Login</v-text>
            </v-card-text>
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
    };
  },
  methods: {
    async forgetPassword() {
      await this.$store.dispatch("forgotPassword", {
        email: this.email,
      });
      if (this.$store.state.loading.forgotBtn.proceed) {
        this.$router.push({ name: "forgotEmail" });
      }
    },
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
