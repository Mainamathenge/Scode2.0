<template>
  <v-dialog :value="true" persistent max-width="600">
    <v-card>
      <v-card-text class="pt-4">
        <div>COMMUNITY</div>
        <p class="text-h4 text--primary">{{ community.name }}</p>
        <div class="text--primary">
          {{ community.description }}
        </div>
        <v-row justify="center" class="mt-2 mb-2">
          <v-col cols="4">
            <v-img :src="community.links[0]" contain height="90" />
          </v-col>
          <v-col cols="4">
            <v-img :src="community.links[1]" contain height="90" />
          </v-col>
          <v-col cols="4">
            <v-img :src="community.links[2]" contain height="90" />
          </v-col>
        </v-row>
        <p class="text-h6 mt-2 text--primary">Interests:</p>
        <div
          class="text-center"
          v-for="item in community.interests"
          :key="item.index"
        >
          <v-chip class="ma-2" small> {{ item }}</v-chip>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="$emit('close')" color="#1AE58E" text> OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { format } from "date-fns";

export default {
  props: ["community"],
  data() {
    return {};
  },
  filters: {
    niceDate(value) {
      return format(new Date(value), "PPP");
    },
  },
};
</script>
