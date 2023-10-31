<template>
  <v-container class="mt-12">
    <v-row class="ma-0">
      <v-col cols="12" md="3">
        <v-card height="120" color="#E3F5FF" flat style="border-radius: 15px">
          <v-card-text>
            <p class="text-h6 text--primary text-color">New Users</p>
            <v-row>
              <v-col
                ><p class="text-h5 font-weight-bold text--primary">5</p></v-col
              >
              <v-col>
                <div class="mt-1 font-weight-bold percent-up text-right">
                  +9.15%
                </div>
              </v-col>
              <!-- <v-col>
										<v-img
											max-width="28"
											src="../assets/arrow-up.svg"
											class="mt-1"
										></v-img>
									</v-col> -->
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card height="120" color="#F2F4F8" flat style="border-radius: 15px">
          <v-card-text>
            <p class="text-h6 text--primary text-color">Active Users</p>
            <v-row>
              <v-col
                ><p class="text-h5 font-weight-bold text--primary">5</p></v-col
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
            <p class="text-h6 text--primary text-color">Activities</p>
            <v-row>
              <v-col
                ><p class="text-h5 font-weight-bold text--primary">5</p></v-col
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
            <p class="text-h6 text--primary text-color">Active Businesses</p>
            <v-row>
              <v-col
                ><p class="text-h5 font-weight-bold text--primary">
                  345
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
  </v-container>
</template>

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

.drawer-right {
  position: absolute;
}

.drawer-toggle {
  position: relative;
  float: right;
  top: 15px;
  left: 13px;
}
</style>
