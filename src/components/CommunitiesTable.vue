<template>
  <v-card :outlined="true" :border-color="'grey'" :border-width="1">
    <v-data-table
      :headers="headers"
      :items="communities"
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
        <CommunitiesTableMenu :community="item" />
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
import CommunitiesTableMenu from "./CommunitiesTableMenu.vue";

export default {
  name: "CommunitiesTable",
  props: {
    communities: {
      type: Array,
      required: true,
    },
  },
  components: {
    CommunitiesTableMenu,
  },
  data: () => ({
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    headers: [
      { text: "Community", value: "name" },
      { text: "Created", value: "createdAt" },
      { text: "Members", value: "totalMembers" },
      { text: "Interests", value: "interests" },
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
      const name = {
        name: event.name,
      };
      this.$emit("select-user", name);
    },
    async updatePage(event) {
      this.$store.dispatch("communities/fetchCommunities", event);
    },
  },
};
</script>

<style lang="scss" scoped></style>
