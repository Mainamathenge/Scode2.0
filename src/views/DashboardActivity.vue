<template>
  <div>
    <v-container>
      <div class="mx-4 mt-6">
        <v-row>
          <v-col cols="4">
            <v-row>
              <v-col>
                <v-btn class="bordered-button" text>
                  <span>Activities</span>
                  <v-icon right dark> mdi-chevron-down</v-icon>
                </v-btn>
              </v-col>
              <v-col class="hidden-sm-and-down">
                <v-btn class="bordered-button" text>
                  <span>{{ totalActivities }} Total</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" class="hidden-md-and-up">
            <v-btn class="bordered-button" text>
              <span>{{ totalActivities }} Total</span>
            </v-btn>
          </v-col>
          <v-spacer v-if="!isSmallScreen"></v-spacer>
          <v-col cols="4" class="d-flex justify-end">
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn
                  style="background-color: #f2f4f8"
                  color="#C3D7FF"
                  outlined
                  class="bordered-button"
                  v-on="on"
                >
                  <span style="color: #6f6f6f">Filters</span>
                  <v-icon color="#01244A" right dark>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in dropdownItems"
                  :key="index"
                >
                  <v-menu offset-y right>
                    <template v-slot:activator="{ on }">
                      <v-list-item-title v-if="item.submenu" v-on="on">
                        {{ item.label }}
                        <v-icon color="primary" dark>mdi-chevron-right</v-icon>
                      </v-list-item-title>
                      <v-list-item-title
                        v-else
                        v-on="on"
                        @click="handleItemClick(item)"
                      >
                        {{ item.label }}
                      </v-list-item-title>
                    </template>
                    <v-list>
                      <v-list-item
                        v-for="(subItem, subIndex) in item.submenu"
                        :key="subIndex"
                        @click="handleSubmenuItemClick(subItem)"
                      >
                        <v-list-item-title>{{
                          subItem.label
                        }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </div>
      <v-row :class="{ 'mx-1 ': $vuetify.breakpoint.mdAndUp }" class="mt-8">
        <v-col>
          <ActivitiesTable
            :activities="receivedActivities"
            :activitiesObj="activitiesObj"
            @select-activity="setActivity"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="snackbar" :right="$vuetify.breakpoint.lgAndUp">
      You have selected {{ selectedActivity.title }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import ActivitiesTable from "../components/ActivitiesTable";

export default {
  components: {
    ActivitiesTable,
  },
  data() {
    return {
      selectedActivity: {
        title: "",
      },
      snackbar: false,
      dropdownItems: [
        {
          label: "Activity Status",
          submenu: [{ label: "Published" }, { label: "Unpublished" }],
        },
      ],
    };
  },
  created() {
    this.$store.dispatch("activities/fetchActivities", 1);
    this.$store.dispatch("searches/setSearchStore", {
      storeName: "activities",
      actionName: "searchActivity",
    });
    console.log("Component created");
  },
  computed: {
    receivedActivities() {
      return this.$store.getters["activities/activities"];
    },
    totalActivities() {
      return this.$store.getters["activities/totalActivities"];
    },
    activitiesObj() {
      return this.$store.getters["activities/activitiesObj"];
    },
    isSmallScreen() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  methods: {
    setActivity(event) {
      this.snackbar = true;
      this.selectedActivity.title = event.title;
    },
    handleSubmenuItemClick(subItem) {
      console.log("filter activity");
      if (subItem.label === "Published") {
        const payload = {
          pageNumber: 1,
          query: true,
          value: "isPublished",
        };
        this.$store.dispatch("activities/filterActivity", payload);
      }
      if (subItem.label === "Unpublished") {
        const payload = {
          pageNumber: 1,
          query: false,
          value: "isPublished",
        };
        this.$store.dispatch("activities/filterActivity", payload);
      }
    },
  },
};
</script>
