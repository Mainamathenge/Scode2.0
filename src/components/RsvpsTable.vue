<template>
  <v-card :outlined="true" :border-color="'grey'" :border-width="1">
    <v-data-table
      :headers="headers"
      :items="rsvps"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      @page-count="pageCount = $event"
    >
      <template v-slot:[`item.createdAt`]="{ item }">
        {{ item.createdAt | niceDate }}
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <RsvpsTableMenu :rsvp="item" />
      </template>
    </v-data-table>
    <v-row class="my-1">
      <v-col cols="12" md="6" class="pt-8 pl-8"
        >Page {{ rsvpsObj.currentPage }} of {{ rsvpsObj.totalPages }}
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-right pt-2">
          <v-pagination
            v-model="page"
            :length="rsvpsObj.totalPages"
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
import RsvpsTableMenu from "./RsvpsTableMenu.vue";
export default {
  name: "RsvpsTable",
  props: {
    rsvps: {
      type: Array,
      required: true,
    },
    rsvpsObj: null,
  },
  components: {
    RsvpsTableMenu,
  },
  data: () => ({
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    headers: [
      { text: "Name", value: "fullName" },
      { text: "Email", value: "email" },
      { text: "Phone", value: "phoneNumber" },
      { text: "Party Of", value: "partyOf" },
      { text: "Created", value: "createdAt" },
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
    async updatePage(event) {
      await this.$store.dispatch("rsvps/fetchRsvps", event);
    },
  },
};
</script>

<style lang="scss" scoped></style>
