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
            <div
              color="#ffff"
              class="text-h6 text-md-h5 text-lg-h4 text-color font-weight-bold font-theme"
            >
              Create a new password
            </div>
          </v-row>
          <v-row class="pl-3 pb-8">
            <div class="display-6">
              Please make sure your new password is one you have not used
              before.
            </div>
          </v-row>
          <v-form @submit.prevent="resetPassword">
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
            <v-row class="pl-3 pb-4">
              <div>Confirm Password</div>
            </v-row>
            <v-text-field
              v-model="passwordConfirm"
              :rules="confromPasswordRules"
              outlined
              type="password"
              placeholder="********"
              dense
              append-icon="mdi-eye-off"
              color="#C3D7FF"
              style="border-radius: 10px"
            ></v-text-field>
            <v-btn
              block
              color="#27D5E2"
              size="large"
              depressed
              :loading="$store.state.loading.resetBtn.load"
              :disabled="$store.state.loading.resetBtn.disabled"
              type="submit"
              style="border-radius: 10px"
            >
              <div color="#ffff" class="white--text text--darken-2 font-theme">
                Reset Password
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
      password: "",
      passwordConfirm: "",
      passwordRules: [
        (value) => !!value || "Password is required.",
        (value) => value.length >= 8 || "Password must contain 8 character",
      ],
      confromPasswordRules: [
        (value) => !!value || "Password is required.",
        (value) => value.length >= 8 || "Password must contain 8 character",
        (value) => value === this.password || "Password are not the same!",
      ],
      error: "",
      progress: false,
    };
  },
  methods: {
    async resetPassword() {
      await this.$store.dispatch("resetPassword", {
        password: this.password,
        passwordConfirm: this.passwordConfirm,
        token: this.$route.params.token,
      });
      if (this.$store.state.user) {
        this.$router.push({ name: "dashboard" });
      }
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
