<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" lg="6">
          <v-text-field
            label="Customer Name"
            v-model="name"
            :rules="inputRules"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6" sm="6" md="3">
          <v-text-field
            label="CustomerId"
            v-model="id"
            :rules="(inputRules, NumberRulesnumber)"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6" sm="6" md="3">
          <v-text-field
            label="Phone Number"
            v-model="phone"
            :rules="inputRules"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6" sm="6" md="3">
          <v-text-field
            label="DeviceId"
            v-model="device"
            :rules="inputRules"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6" sm="6" md="3">
          <v-text-field
            :rules="inputRules"
            label="Customer Residence"
            v-model="residence"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6" sm="6" md="3">
          <v-text-field
            label="Item-Price"
            v-model="deposit"
            :rules="inputRules"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6" sm="6" md="3">
          <v-select
            label="Payment-plan"
            :items="loanOptions"
            :rules="inputRules"
            v-model="loanOptions"
            @change="loanCalculator"
          ></v-select>
        </v-col>
        <v-col cols="12" lg="6" sm="6" md="3">
          <v-text-field
            label="Balance"
            v-model="loan"
            :rules="inputRules"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-col cols="12" lg="6" sm="6" md="3">
        <v-btn
          color="accent"
          elevation="2"
          outlined
          raised
          x-large
          @click="createCustomer"
        >
          <div color="red">Create Customer</div></v-btn
        >
      </v-col>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      name: null,
      id: null,
      phone: null,
      deposit: null,
      loan: null,
      device: null,
      residence: null,
      inputRules: [(value) => !!value || "Input can not be empty."],
      NumberRulesnumber: [
        (value) => /^\d+$/.test(value) || "Input must contain only numbers.",
      ],
      loanOptions: ["Cash", "3-Months", "6-Mothts"],
    };
  },
  methods: {
    createCustomer() {
      let payload = {
        fullName: this.name,
        phone: this.phone,
        deposit: this.deposit,
        loanamount: this.loan,
        Device: this.device,
        location: this.residence,
        idnumber: this.id,
      };
      this.$store.dispatch("businesses/createCustomer", payload);
      this.$emit("close");
    },
    loanCalculator() {
      // calculate the loan amount
      if (this.loanOptions === "3-Months") {
        const loan = this.deposit - this.deposit * 0.7;
        const newBalance = loan + loan * 1.1;
        this.loan = newBalance;
      } else if (this.loanOptions === "6-Months") {
        const loan = this.deposit - this.deposit * 0.7;
        const newBalance = loan + loan * 1.1;
        this.loan = newBalance;
      } else {
        this.loan = 0;
      }
    },
  },
};
</script>

<style scoped>
.wholefile {
  background-color: red;
  height: 100%;
  width: 100%;
}
</style>
