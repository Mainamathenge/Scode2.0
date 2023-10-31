<template>
  <v-card :outlined="true" :border-color="'grey'" :border-width="1">
    <v-data-table
      :headers="headers"
      :items="activities"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      @click:row="selectRow"
      @page-count="pageCount = $event"
    >
      <template v-slot:[`item.title`]="{ item }">
        <p>{{ item.title.substring(0, 50) }}...</p>
      </template>
      <template v-slot:[`item.isPublished`]="{ item }">
        <v-chip
          class="ma-2"
          :color="getColor(item.isPublished)[1]"
          label
          outlined
        >
          {{ getColor(item.isPublished)[0] }}
        </v-chip>
      </template>
      <template v-slot:[`item.createdAt`]="{ item }">
        {{ item.createdAt | niceDate }}
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <ActivitiesTableMenu :activity="item" />
      </template>
    </v-data-table>
    <v-row class="my-1">
      <v-col cols="12" md="6" class="pt-8 pl-8"
        >Page {{ activitiesObj.currentPage }} of {{ activitiesObj.totalPages }}
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-right pt-2">
          <v-pagination
            v-model="page"
            :length="activitiesObj.totalPages"
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
import ActivitiesTableMenu from "./ActivitiesTableMenu.vue";

export default {
  name: "ActivitiesTable",
  props: {
    activities: {
      type: Array,
      required: true,
    },
    activitiesObj: null,
  },
  components: {
    ActivitiesTableMenu,
  },
  data: () => ({
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    headers: [
      { text: "Title", value: "title" },
      { text: "Location", value: "location" },
      { text: "Type", value: "type" },
      { text: "Published", value: "isPublished" },
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
    async updatePage(event) {
      this.$store.dispatch("activities/fetchActivities", event);
    },
    selectRow(event) {
      const activity = {
        title: event.title,
      };
      this.$emit("select-activity", activity);
    },
    getColor(isPublished) {
      if (isPublished === true) return ["Published", "#1AE58E"];
      else if (isPublished === false) return ["Unpublished", "#EC4A4A"];
      else return "green";
    },
  },
};
</script>

<style lang="scss" scoped></style>
