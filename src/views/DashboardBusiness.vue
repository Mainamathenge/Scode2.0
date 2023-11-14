<template>
  <div>
    <v-container>
      <v-row :class="{ 'mx-1 ': $vuetify.breakpoint.mdAndUp }" class="mt-8">
        <v-col>
          <BusinessesTable />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import BusinessesTable from "../components/BusinessesTable";

export default {
  components: {
    BusinessesTable,
  },
  data() {
    return {
      selectedBusiness: {
        name: "",
      },
      dropdownItems: [
        {
          label: "Kyc Status",
          submenu: [
            { label: "Approved" },
            { label: "Cancelled" },
            { label: "PendingApproval" },
          ],
        },
        {
          label: "Business Status",
          submenu: [{ label: "Active" }, { label: "Inactive" }],
        },
      ],

      snackbar: false,
    };
  },
  methods: {
    setBusiness(event) {
      this.snackbar = true;
      this.selectedBusiness.name = event.name;
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style>
.v-btn {
  text-transform: none;
}
</style>
