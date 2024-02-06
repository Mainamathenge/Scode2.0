<template>
  <v-card :outlined="true" :border-color="'grey'" :border-width="1">
    <v-data-table
      :headers="headers"
      :items="messages"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      @click:row="selectRow"
      @page-count="pageCount = $event"
    >
      <template v-slot:[`item.createdAt`]="{ item }">
        {{ item.createdAt | niceDate }}
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <MessagesTableMenu :message="item" />
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
            @input="updatePage"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import { format } from "date-fns";
import MessagesTableMenu from "./MessagesTableMenu.vue";

export default {
  name: "MessagesTable",
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
  components: {
    MessagesTableMenu,
  },
  data: () => ({
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    headers: [
      { text: "TransId", value: "TransID" },
      { text: "Phone", value: "MSISDN" },
      { text: "Amount", value: "TransAmount" },
      { text: "Name", value: "FirstName" },
      { text: "Device", value: "BillRefNumber" },
      { text: "Actions", value: "actions" },
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
      const fullName = {
        fullName: event.fullName,
      };
      this.$emit("select-user", fullName);
    },
    async updatePage(event) {
      this.$store.dispatch("messages/fetchMessages", event);
    },
  },
};
</script>

<style lang="scss" scoped></style>
