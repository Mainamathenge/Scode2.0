<template>
  <v-dialog :value="true" persistent max-width="500">
    <v-card>
      <v-card-title class="text-h5 mb-3"> Edit user</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="fullName"
          outlined
          :rules="emptyStringRule"
          label="Full Name"
          dense
          color="#C3D7FF"
          style="border-radius: 10px"
        ></v-text-field>
        <v-text-field
          v-model="Device"
          outlined
          :rules="emptyStringRule"
          label="Device"
          dense
          color="#C3D7FF"
          style="border-radius: 10px"
        ></v-text-field>
        <v-text-field
          v-model="phone"
          outlined
          :rules="emptyStringRule"
          label="Phone"
          dense
          color="#C3D7FF"
          style="border-radius: 10px"
        ></v-text-field>
        <v-text-field
          v-model="Balance"
          outlined
          label="Balance"
          dense
          color="#C3D7FF"
          style="border-radius: 10px"
        ></v-text-field>
        <v-text-field
          v-model="location"
          outlined
          :rules="emptyStringRule"
          label="Location"
          dense
          color="#C3D7FF"
          style="border-radius: 10px"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="$emit('close')" text> CANCEL</v-btn>
        <v-btn @click="saveUser" color="#1AE58E" text> SAVE</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      fullName: null,
      Device: null,
      phone: null,
      Balance: null,
      location: null,
      emptyStringRule: [(value) => !!value || "Value can Not be empty."],
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
    saveUser() {
      let payload = {
        id: this.user._id,
        values: {
          fullName: this.fullName,
          phone: this.phone,
          location: this.location,
          device: this.Device,
          Balance: this.Balance,
        },
      };
      this.$store.dispatch("users/updateUser", payload);
      this.$emit("close");
    },
  },
  mounted() {
    this.Device = this.user.Device;
    this.fullName = this.user.fullName;
    this.phone = this.user.phone;
    this.Balance = this.user.loanamount;
    this.location = this.user.location;
  },
};
</script>
