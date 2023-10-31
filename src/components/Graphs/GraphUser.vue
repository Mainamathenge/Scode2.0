<template>
  <v-card class="mx-4 mt-5" color="#F2F4F8" style="border-radius: 10px" flat>
    <v-card-text>
      <p class="text-h6 text--primary text-color font-theme ml-3">
        New Explorers
      </p>
      <canvas id="users" height="150" />
    </v-card-text>
  </v-card>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "LineChart",
  computed: {
    userGraph() {
      return this.$store.getters["stats/userGraph"];
    },
  },
  async mounted() {
    await this.$store.dispatch("stats/getUserGraphs");
    const usersElement = document.querySelector("#users");
    this.newChart(
      {
        0: this.userGraph.countArrayThisWeekexp,
        1: this.userGraph.countArrayLastWeekexp,
      },
      usersElement
    );
  },
  methods: {
    newChart(chartData, ctx) {
      return new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
          datasets: [
            {
              label: "This Week",
              data: chartData[0],
              fill: false,
              borderColor: "rgb(221, 160, 221)",
            },
            {
              label: "Last Week",
              data: chartData[1],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
            },
          ],
        },
      });
    },
  },
};
</script>

<style>
.text-color {
  color: #01244a;
  font-family: "Amaranth", sans-serif !important;
}
</style>
