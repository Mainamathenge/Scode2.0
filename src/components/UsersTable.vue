<template>
  <v-card :outlined="true" :border-color="'grey'" :border-width="1">
    <v-data-table
      :headers="headers"
      :items="users"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      @click:row="selectRow"
      @page-count="pageCount = $event"
    >
      <template v-slot:[`item.photo`]="{ item }">
        <v-avatar size="36">
          <img :src="item.photo" :alt="item.photo" />
        </v-avatar>
      </template>
      <template v-slot:[`item.active`]="{ item }">
        <v-chip class="ma-2" :color="getColor(item.active)[1]" label outlined>
          {{ getColor(item.active)[0] }}
        </v-chip>
      </template>
      <template v-slot:[`item.createdAt`]="{ item }">
        {{ item.createdAt | niceDate }}
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <UsersTableMenu :user="item" />
      </template>
    </v-data-table>
    <v-row class="my-1">
      <v-col cols="12" md="6" class="pt-8 pl-8"
        >Page {{ page }} of {{ pageCount }}
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-right pt-2">
          <v-pagination
            v-model="page"
            :length="pageCount"
            :total-visible="5"
            color="#1AE58E"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import { format } from "date-fns";
import UsersTableMenu from "./UsersTableMenu.vue";

export default {
  name: "UsersTable",
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  components: {
    UsersTableMenu,
  },
  data: () => ({
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    headers: [
      { text: "Avatar", value: "photo" },
      { text: "", value: "userName" },
      { text: "Email", value: "email" },
      { text: "Created", value: "createdAt" },
      { text: "Location", value: "location" },
      { text: "Status", value: "active" },
      { text: "", value: "actions" },
    ],
    options: {
      itemsPerPage: 10,
      page: 1,
    },
  }),
  filters: {
    niceDate(value) {
      return format(new Date(value), "MMM d");
    },
  },
  methods: {
    selectRow(event) {
      const user = {
        name: event.fullName,
      };
      this.$emit("select-user", user);
    },
    getColor(active) {
      if (active === true) return ["Active", "#1AE58E"];
      else if (active === false) return ["Inactive", "#EC4A4A"];
      else return "green";
    },
  },
};
</script>

<style lang="scss" scoped></style>
