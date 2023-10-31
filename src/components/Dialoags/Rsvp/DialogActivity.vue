<template>
  <v-dialog :value="true" persistent max-width="600">
    <v-card>
      <v-card-text class="pt-4">
        <div>ACTIVITY</div>
        <p class="text-h4 text--primary">{{ activity.title }}</p>
        <p>{{ activity.location }}</p>
        <p class="text--primary">Business: {{ activity.user.businessName }}</p>
        <p class="text--primary">
          From {{ activity.from | niceDate }} to {{ activity.to | niceDate }}
        </p>
        <p>hashTag {{ activity.hashTag }}</p>
        <p class="text-h6 text--primary">
          {{ activity.currency }} {{ activity.amount }}
        </p>
        <div class="text--primary">
          {{ activity.description }}
        </div>
        <v-row justify="center" class="mt-2 mb-2">
          <v-col cols="4">
            <v-img :src="activity.links[0].doc1" contain height="90" />
          </v-col>
          <v-col cols="4">
            <v-img :src="activity.links[0].doc2" contain height="90" />
          </v-col>
          <v-col cols="4">
            <v-img :src="activity.links[0].doc3" contain height="90" />
          </v-col>
        </v-row>
        <p class="text-h6 mt-2 text--primary">Offerings:</p>
        <div
          class="text-center"
          v-for="item in activity.offerings"
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
  props: ["activity"],
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
