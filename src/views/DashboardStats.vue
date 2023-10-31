<template>
  <v-container class="mt-12">
    <v-row class="ma-0">
      <v-col cols="12" md="3">
        <v-card height="120" color="#E3F5FF" flat style="border-radius: 15px">
          <v-card-text>
            <p class="text-h6 text--primary text-color">Total Cookers</p>
            <v-row>
              <v-col
                ><p class="text-h5 font-weight-bold text--primary">
                  {{ receivedStats.totalUsers }}
                </p></v-col
              >
              <v-col>
                <div class="mt-1 font-weight-bold percent-up text-right">
                  +9.15%
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card height="120" color="#F2F4F8" flat style="border-radius: 15px">
          <v-card-text>
            <p class="text-h6 text--primary text-color">Active Cookers</p>
            <v-row>
              <v-col
                ><p class="text-h5 font-weight-bold text--primary">
                  {{ receivedStats.totalBusinesses }}
                </p></v-col
              >
              <v-col>
                <div class="mt-1 font-weight-bold percent-up text-right">
                  +11.01%
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card height="120" color="#E3F5FF" flat style="border-radius: 15px">
          <v-card-text>
            <p class="text-h6 text--primary text-color">Inactive Cookers</p>
            <v-row>
              <v-col
                ><p class="text-h5 font-weight-bold text--primary">
                  {{ receivedStats.totalActivities }}
                </p></v-col
              >
              <v-col>
                <div class="mt-1 font-weight-bold percent-down text-right">
                  -0.56%
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card height="120" color="#F2F4F8" flat style="border-radius: 15px">
          <v-card-text>
            <p class="text-h6 text--primary text-color">Cookers in Stock</p>
            <v-row>
              <v-col
                ><p class="text-h5 font-weight-bold text--primary">
                  {{ receivedStats.totalCommunities }}
                </p></v-col
              >
              <v-col>
                <div class="mt-1 font-weight-bold percent-down text-right">
                  -1.48%
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <div ref="mapDiv" style="width: 100%; height: 80vh" />
  </v-container>
</template>

<script>
import { computed, ref, onMounted, onUnmounted } from "vue";
import { Loader } from "@googlemaps/js-api-loader";
const GOOGLE_MAPS_API_KEY = "AIzaSyByD_YHhs80uQdIYRIwvUmVqXPPlenT0jE";

export default {
  data: () => ({
    dialogs: {
      view: false,
      edit: false,
      activate: false,
      deactivate: false,
    },
    items: [
      {
        title: "View",
        icon: "mdi-eye",
        color: "#142D3F",
        click() {
          this.dialogs.view = true;
        },
      },
      {
        title: "Edit",
        icon: "mdi-pencil",
        color: "#142D3F",
        click() {
          this.dialogs.edit = true;
        },
      },
    ],
  }),
  async created() {
    if (this.employee && this.employee.status) {
      this.items.push({
        title: "Deactivate",
        icon: "mdi-close-box-multiple",
        color: "#EC4A4A",
        click() {
          this.dialogs.deactivate = true;
        },
      });
    }
    if (this.employee && !this.employee.status) {
      this.items.push({
        title: "Activate",
        icon: "mdi-checkbox-multiple-marked",
        color: "#1AE58E",
        click() {
          this.dialogs.activate = true;
        },
      });
    }
  },
  computed: {
    receivedStats() {
      return this.$store.getters["stats/stats"];
    },
  },
  methods: {
    handleClick(index) {
      this.items[index].click.call(this);
    },
  },
  setup() {
    // const { coords } = useGeolocation();
    let markers = [];
    const markerCoordinates = [
      { lat: -1.286389, lng: 36.817223, title: "Nairobi" },
      { lat: -4.043478, lng: 39.668206, title: "Mombasa" },
      { lat: -0.091702, lng: 34.767956, title: "Kisumu" },
      { lat: 0.519999, lng: 34.767956, title: "Eldoret" },
      { lat: -0.303098, lng: 36.080026, title: "Nakuru" },
      { lat: -0.24062, lng: 36.11754, title: "Scode Ltd" },
      // Add more coordinates as needed
    ];
    const currPos = computed(() => ({
      lat: -0.24062,
      lng: 36.11754,
    }));
    console.log(currPos);
    const otherPos = ref(null);

    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
    const mapDiv = ref(null);
    let map = ref(null);
    let clickListener = null;
    onMounted(async () => {
      await loader.load();
      // eslint-disable-next-line no-undef
      map.value = new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 7,
        title: "Scode Africa",
      });
      markerCoordinates.forEach((coord) => {
        // eslint-disable-next-line no-undef
        const marker = new google.maps.Marker({
          position: coord,
          map: map.value,
          title: coord.title,
        });
        markers.push(marker);
      });
      clickListener = map.value.addListener(
        "click",
        ({ latLng: { lat, lng } }) =>
          (otherPos.value = { lat: lat(), lng: lng() })
      );
    });
    onUnmounted(async () => {
      if (clickListener) clickListener.remove();
    });
    return { currPos, otherPos, mapDiv };
  },
};
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid #ccc;
}

.text-color {
  color: #01244a;
  font-family: "Amaranth", sans-serif !important;
}

.percent-up {
  color: #0ee08f;
}

.percent-down {
  color: #ec4a4a;
}

.my-container v-img {
  float: right;
  margin-left: 10px;
}
</style>
